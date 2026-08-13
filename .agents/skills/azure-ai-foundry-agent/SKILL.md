---
name: azure-ai-foundry-agent
description: >
  Autenticação, ciclo de vida de threads/runs e tratamento de erros do Azure AI
  Foundry Agent Service usando o SDK @azure/ai-projects (JS/TS). Use ao criar
  integrações com agentes hospedados no Azure AI Foundry, rotas de API Next.js
  que consomem agentes, ou scripts de automação com o Agent Service.
  Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Azure AI Foundry — Agent Service (JS/TS)

## 1. Pacotes necessários

```bash
npm install @azure/ai-projects @azure/ai-agents @azure/identity
```

- `@azure/ai-projects` — client unificado para o Azure AI Foundry; expõe `client.agents` como `AgentsClient`.
- `@azure/ai-agents` — client standalone para o Agent Service; **use diretamente** se só precisar de agentes.
- `@azure/identity` — provê `DefaultAzureCredential` (RBAC Entra ID).

> **Versões verificadas**: `@azure/ai-projects@1.0.0`, `@azure/ai-agents@1.0.0`

---

## 2. Variáveis de ambiente (`.env.local`)

```
AZURE_AI_PROJECT_ENDPOINT=https://<hub>.services.ai.azure.com/api/projects/<projeto>
AZURE_AI_AGENT_ID=<nome-ou-id-do-agente>
```

**NUNCA** use `NEXT_PUBLIC_*` para segredos — isso exporia a chave ao browser.  
**SEMPRE** adicione `.env*` ao `.gitignore`.

---

## 3. Autenticação — EXIGE Entra ID (RBAC)

> **Gotcha crítico**: O Azure AI Foundry Agent Service **não suporta** chaves de API.
> Se você tentar forçar uma API Key empacotando-a num `TokenCredential`, a requisição vai falhar com `Identity(object id: ) does not have permissions for Microsoft.MachineLearningServices/workspaces/agents/action`.

Para acessar agentes, o usuário ou o Service Principal da aplicação **PRECISA** da *Role* `Azure AI Developer` associada ao Hub/Project no Azure. Use SEMPRE o pacote `@azure/identity`.

```ts
import { DefaultAzureCredential } from "@azure/identity";

// Em desenvolvimento local, o DefaultAzureCredential pegará o login do `az login`.
// Em produção, pegará o Managed Identity do App Service/Container Apps.
const credential = new DefaultAzureCredential();
```

---

## 4. Ciclo de vida completo e correto (API v1.0.0 verificada)

```ts
import { AgentsClient } from "@azure/ai-agents";
import { DefaultAzureCredential } from "@azure/identity";
import type { MessageTextContent } from "@azure/ai-agents";

const client = new AgentsClient(endpoint, new DefaultAzureCredential());

// 1. Criar thread (ou reutilizar o ID salvo)
const thread = await client.threads.create();
const threadId = thread.id;

// 2. Postar mensagem do usuário
//    Assinatura: create(threadId, role, content)  ← args separados, não objeto!
await client.messages.create(threadId, "user", "Sua pergunta aqui");

// 3. Criar run e aguardar — retorna PollerLike, chamar pollUntilDone()
const poller = client.runs.createAndPoll(threadId, agentId);
const run = await poller.pollUntilDone();

// 4. Verificar status
if (run.status === "failed") {
  console.error("Run falhou:", run.lastError); // logar internamente
  throw new Error("Run falhou");
}

// 5. Extrair resposta — messages.list() retorna do mais recente ao mais antigo
for await (const msg of client.messages.list(threadId)) {
  if (msg.role === "assistant") {
    for (const part of msg.content) {
      if (part.type === "text") {
        const text = (part as MessageTextContent).text.value;
        console.log("Resposta:", text);
        break;
      }
    }
    break; // primeiro assistant = mais recente
  }
}
```

### Estrutura real do `AgentsClient` (sub-namespaces)

```
client.threads.create()           → Promise<AgentThread>
client.threads.get(id)            → Promise<AgentThread>
client.threads.delete(id)         → Promise<ThreadDeletionStatus>

client.messages.create(id, role, content)  → Promise<ThreadMessage>
client.messages.list(id)                   → PagedAsyncIterableIterator<ThreadMessage>
client.messages.get(id, msgId)             → Promise<ThreadMessage>

client.runs.createAndPoll(id, agentId)  → PollerLike<OperationState<ThreadRun>, ThreadRun>
client.runs.create(id, agentId)         → AgentRunResponse (streaming)
client.runs.list(id)                    → PagedAsyncIterableIterator<ThreadRun>
client.runs.get(id, runId)              → Promise<ThreadRun>
```

> **Não existem** `createThread()`, `createMessage()`, `createAndPollRun()`, `listMessages()`
> diretamente no `AgentsClient` — esses métodos estão nos sub-namespaces acima.

---

## 5. Reutilização de thread (histórico de sessão)

- Guarde o `thread.id` retornado e envie nas chamadas seguintes.
- Em Next.js: o browser envia `threadId` no body; a API Route reutiliza se presente.
- Trate erro **404** ao reenviar o `threadId`: o thread expirou — limpe e crie novo.

```ts
const activeThreadId = threadId ?? (await client.threads.create()).id;
```

---

## 6. Tratamento de erros e rate-limit

| Cenário | HTTP | Ação recomendada |
|---|---|---|
| Env não configurado | — | Checar `.env.local`; retornar 503 genérico |
| Rate-limit | 429 | Mensagem "Aguarde e tente novamente" |
| Thread expirado | 404 | Limpar `threadId`; criar novo thread |
| Auth inválida | 401/403 | Mensagem genérica "Contate o admin" |
| Run `status: "failed"` | — | Logar `run.lastError`; mensagem genérica ao usuário |
| Run `status: "cancelled"\|"expired"` | — | Idem |

---

## 7. Gotchas críticos (NÃO repetir)

- **O serviço Agents não suporta API Keys**: Tentar usá-las resulta no erro `Identity(object id: ) does not have permissions...`. Sempre use `DefaultAzureCredential` e garanta atribuição de papéis (RBAC).
- **SDK somente no servidor**: importar `@azure/ai-agents` em componentes React vaza a chave e quebra o build — use apenas em API Routes ou Server Actions.
- **Métodos estão em sub-namespaces**: `client.threads.*`, `client.messages.*`, `client.runs.*` — não há métodos diretos no client.
- **`runs.createAndPoll()` retorna `PollerLike`**, não o `ThreadRun` diretamente — chamar `.pollUntilDone()`.
- **`messages.list()` retorna mais recente primeiro** — itere até o primeiro `assistant` para a última resposta.
- **Thread ID é estado de sessão, não de banco**: threads expiram por inatividade — tratar 404 ao reenviar ID antigo.
