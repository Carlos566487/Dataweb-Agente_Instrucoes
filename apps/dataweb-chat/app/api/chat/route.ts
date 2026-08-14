import { NextRequest, NextResponse } from "next/server";
import { AgentsClient } from "@azure/ai-agents";
import type { MessageTextContent } from "@azure/ai-agents";
import { DefaultAzureCredential, ClientSecretCredential } from "@azure/identity";
import { z } from "zod";

// ──────────────────────────────────────────────────────────────────────────────
// Configuração — variáveis lidas APENAS no servidor.
// NUNCA usar NEXT_PUBLIC_* para segredos.
// ──────────────────────────────────────────────────────────────────────────────
const ENDPOINT      = process.env.AZURE_AI_PROJECT_ENDPOINT;
const AGENT_ID      = process.env.AZURE_AI_AGENT_ID;
const TENANT_ID     = process.env.AZURE_TENANT_ID;
const CLIENT_ID     = process.env.AZURE_CLIENT_ID;
const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;

/** Valida que as variáveis obrigatórias estão presentes. */
function assertEnv(): { endpoint: string; agentId: string } {
  if (!ENDPOINT || !AGENT_ID) {
    throw new Error(
      "Variáveis de ambiente ausentes: AZURE_AI_PROJECT_ENDPOINT, AZURE_AI_AGENT_ID"
    );
  }
  return { endpoint: ENDPOINT, agentId: AGENT_ID };
}

// ──────────────────────────────────────────────────────────────────────────────
// Instanciação do AgentsClient autenticado via Entra ID (RBAC).
// Suporta Service Principal (TENANT_ID, CLIENT_ID, CLIENT_SECRET) ou DefaultAzureCredential.
// ──────────────────────────────────────────────────────────────────────────────
function buildClient(endpoint: string): AgentsClient {
  if (TENANT_ID && CLIENT_ID && CLIENT_SECRET) {
    const credential = new ClientSecretCredential(TENANT_ID, CLIENT_ID, CLIENT_SECRET);
    return new AgentsClient(endpoint, credential);
  }
  return new AgentsClient(endpoint, new DefaultAzureCredential());
}

// ──────────────────────────────────────────────────────────────────────────────
// Schema Zod — rejeita campos extras (whitelist)
// ──────────────────────────────────────────────────────────────────────────────
const ChatRequestSchema = z
  .object({
    message: z.string().min(1, "Mensagem não pode ser vazia.").max(4000),
    threadId: z.string().nullable().optional(),
  })
  .strict();

// ──────────────────────────────────────────────────────────────────────────────
// Extrai o texto da resposta mais recente do agente.
// client.messages.list() retorna do mais recente para o mais antigo.
// ──────────────────────────────────────────────────────────────────────────────
async function extractReply(
  client: AgentsClient,
  threadId: string
): Promise<string> {
  for await (const msg of client.messages.list(threadId)) {
    if (msg.role === "assistant") {
      for (const part of msg.content) {
        if (part.type === "text") {
          return (part as MessageTextContent).text.value;
        }
      }
    }
  }
  return "Não foi possível obter uma resposta do agente.";
}

// ──────────────────────────────────────────────────────────────────────────────
// Mapeamento de erros do SDK → resposta HTTP
// ──────────────────────────────────────────────────────────────────────────────
function handleSdkError(error: unknown): NextResponse {
  const msg = error instanceof Error ? error.message : String(error);
  console.error("[/api/chat] Erro Azure SDK:", error);

  if (msg.includes("ChainedTokenCredential") || msg.includes("CredentialUnavailableError")) {
    return NextResponse.json(
      {
        error:
          "Configuração de autenticação pendente no Netlify: Por favor, adicione as variáveis AZURE_TENANT_ID, AZURE_CLIENT_ID e AZURE_CLIENT_SECRET nas configurações do Netlify.",
      },
      { status: 503 }
    );
  }
  if (msg.includes("429")) {
    return NextResponse.json(
      { error: "Muitas requisições simultâneas. Aguarde alguns segundos e tente novamente." },
      { status: 429 }
    );
  }
  if (msg.includes("404")) {
    return NextResponse.json(
      { error: "Sessão expirada. Recarregue a página para iniciar uma nova conversa.", code: "THREAD_NOT_FOUND" },
      { status: 404 }
    );
  }
  if (msg.includes("401") || msg.includes("403") || msg.includes("does not have permissions")) {
    return NextResponse.json(
      {
        error:
          "Erro de permissão no Azure: Verifique se o Service Principal possui a role 'Azure AI Developer' atribuída ao recurso.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json(
    { error: `Erro ao processar sua mensagem: ${msg}` },
    { status: 500 }
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Rate limiting — em memória para MVP; usar Redis em produção (skill seguranca-api)
// ──────────────────────────────────────────────────────────────────────────────
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const RATE_LIMIT_MAX = 20; // máx requisições por janela
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

// ──────────────────────────────────────────────────────────────────────────────
// POST /api/chat
// Body:     { message: string; threadId?: string | null }
// Response: { reply: string; threadId: string }
// ──────────────────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  // 0. Rate limiting
  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      { error: "Muitas requisições. Aguarde um momento antes de tentar novamente." },
      { status: 429 }
    );
  }

  // 1. Parsear e validar body
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Body JSON inválido." }, { status: 400 });
  }

  const parsed = ChatRequestSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dados inválidos." },
      { status: 400 }
    );
  }

  const { message, threadId } = parsed.data;

  // 2. Verificar configuração de ambiente
  let env: ReturnType<typeof assertEnv>;
  try {
    env = assertEnv();
  } catch (e) {
    console.error("[/api/chat] Ambiente não configurado:", e);
    return NextResponse.json(
      { error: "Serviço de IA não configurado. Verifique as variáveis de ambiente." },
      { status: 503 }
    );
  }

  const client = buildClient(env.endpoint);
  console.log("[/api/chat] Usando Endpoint:", env.endpoint);

  try {
    // 3. Criar ou reutilizar thread (mantém contexto da conversa)
    let activeThreadId: string;
    if (threadId) {
      activeThreadId = threadId;
    } else {
      const thread = await client.threads.create();
      activeThreadId = thread.id;
    }

    // 4. Postar mensagem do usuário no thread
    await client.messages.create(activeThreadId, "user", message);

    // 5. Iniciar run e aguardar conclusão via polling interno do SDK
    const poller = client.runs.createAndPoll(activeThreadId, env.agentId);
    const run = await poller.pollUntilDone();

    // 6. Verificar status final do run
    if (run.status === "failed") {
      console.error("[/api/chat] Run falhou:", run.lastError);
      return NextResponse.json(
        { error: `O agente encontrou um erro ao processar sua mensagem: ${run.lastError?.message ?? 'Falha na execução'}` },
        { status: 500 }
      );
    }

    if (run.status === "cancelled" || run.status === "expired") {
      return NextResponse.json(
        { error: "Processamento interrompido. Tente novamente." },
        { status: 500 }
      );
    }

    // 7. Extrair e retornar resposta do agente
    const reply = await extractReply(client, activeThreadId);

    const latency = Date.now() - startTime;
    console.log(`[/api/chat] Resposta gerada em ${latency}ms`);

    return NextResponse.json({ reply, threadId: activeThreadId });
  } catch (error: unknown) {
    return handleSdkError(error);
  }
}
