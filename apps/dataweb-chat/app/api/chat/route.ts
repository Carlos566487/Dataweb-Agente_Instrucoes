import { NextRequest, NextResponse } from "next/server";
import { AgentsClient } from "@azure/ai-agents";
import type { MessageTextContent } from "@azure/ai-agents";
import { DefaultAzureCredential } from "@azure/identity";
import { z } from "zod";

// ──────────────────────────────────────────────────────────────────────────────
// Configuração — variáveis lidas APENAS no servidor.
// NUNCA usar NEXT_PUBLIC_* para segredos (skill seguranca-api).
// ──────────────────────────────────────────────────────────────────────────────
const ENDPOINT = process.env.AZURE_AI_PROJECT_ENDPOINT;
const AGENT_ID = process.env.AZURE_AI_AGENT_ID;

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
// Credencial — Agents Service EXIGE autenticação Entra ID (RBAC).
// Chaves de API não têm permissão para acessar 'workspaces/agents/action'.
// ──────────────────────────────────────────────────────────────────────────────
/** Cria um AgentsClient instanciado com DefaultAzureCredential. */
function buildClient(endpoint: string): AgentsClient {
  return new AgentsClient(endpoint, new DefaultAzureCredential());
}

// ──────────────────────────────────────────────────────────────────────────────
// Schema Zod — rejeita campos extras (seguranca-api: whitelist)
// ──────────────────────────────────────────────────────────────────────────────
const ChatRequestSchema = z
  .object({
    message: z.string().min(1, "Mensagem não pode ser vazia.").max(4000),
    threadId: z.string().nullable().optional(),
  })
  .strict(); // Rejeita campos não declarados

// ──────────────────────────────────────────────────────────────────────────────
// Extrai o texto da resposta mais recente do agente.
// messages.list() retorna do mais recente para o mais antigo —
// o primeiro item com role="assistant" é a última resposta do agente.
// (gotcha documentado na skill azure-ai-foundry-agent §7)
// ──────────────────────────────────────────────────────────────────────────────
async function extractReply(
  client: AgentsClient,
  threadId: string
): Promise<string> {
  for await (const msg of client.messages.list(threadId)) {
    if (msg.role === "assistant") {
      for (const part of msg.content) {
        if (part.type === "text") {
          // Cast seguro: type === "text" garante MessageTextContent
          return (part as MessageTextContent).text.value;
        }
      }
    }
  }
  return "Não foi possível obter uma resposta do agente.";
}

// ──────────────────────────────────────────────────────────────────────────────
// Mapeamento de erros do SDK → resposta HTTP sem vazar detalhes internos
// ──────────────────────────────────────────────────────────────────────────────
function handleSdkError(error: unknown): NextResponse {
  const msg = error instanceof Error ? error.message : String(error);
  console.error("[/api/chat] Erro Azure SDK:", msg);

  if (msg.includes("429")) {
    return NextResponse.json(
      {
        error:
          "Muitas requisições simultâneas. Aguarde alguns segundos e tente novamente.",
      },
      { status: 429 }
    );
  }
  if (msg.includes("404")) {
    // Thread expirou: cliente deve descartar o threadId salvo
    return NextResponse.json(
      {
        error:
          "Sessão expirada. Recarregue a página para iniciar uma nova conversa.",
        code: "THREAD_NOT_FOUND",
      },
      { status: 404 }
    );
  }
  if (msg.includes("401") || msg.includes("403")) {
    return NextResponse.json(
      {
        error:
          "Erro de autenticação com o serviço de IA. Contate o administrador.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json(
    { error: "Erro ao processar sua mensagem. Tente novamente." },
    { status: 500 }
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// POST /api/chat
// Body:     { message: string; threadId?: string | null }
// Response: { reply: string; threadId: string }
// ──────────────────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
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
      {
        error:
          "Serviço de IA não configurado. Verifique as variáveis de ambiente.",
      },
      { status: 503 }
    );
  }

  const client = buildClient(env.endpoint);

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
    //    Assinatura real: messages.create(threadId, role, content)
    await client.messages.create(activeThreadId, "user", message);

    // 5. Iniciar run e aguardar conclusão via polling interno do SDK
    //    runs.createAndPoll retorna PollerLike → aguardar com pollUntilDone()
    const poller = client.runs.createAndPoll(activeThreadId, env.agentId);
    const run = await poller.pollUntilDone();

    // 6. Verificar status final do run
    if (run.status === "failed") {
      console.error("[/api/chat] Run falhou:", run.lastError);
      return NextResponse.json(
        {
          error:
            "O agente encontrou um erro ao processar sua mensagem. Tente novamente.",
        },
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

    return NextResponse.json({ reply, threadId: activeThreadId });
  } catch (error: unknown) {
    return handleSdkError(error);
  }
}
