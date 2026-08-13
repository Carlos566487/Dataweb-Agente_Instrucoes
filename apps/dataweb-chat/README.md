# Dataweb Chat — Frontend IA

Interface de chat para o agente **Dataweb-Instrucoes** hospedado no **Azure AI Foundry Agent Service**.

Construído com Next.js 14 (App Router) · TypeScript · Tailwind CSS · Azure AI Projects SDK.

---

## Pré-requisitos

| Ferramenta | Versão mínima |
|---|---|
| Node.js | 18.17+ |
| npm | 9+ |
| Acesso ao Azure AI Foundry | Chave de API do projeto |

---

## Setup

### 1. Instalar dependências

```bash
cd apps/dataweb-chat
npm install
```

### 2. Configurar variáveis de ambiente

```bash
# Copie o template
cp .env.local.example .env.local
```

Abra `.env.local` e preencha:

```env
# Endpoint do projeto Azure AI Foundry
AZURE_AI_PROJECT_ENDPOINT=https://2605-foundry-infra-2.services.ai.azure.com/api/projects/2605-foundry-infra-2

# Nome exato do agente (case-sensitive)
AZURE_AI_AGENT_ID=Dataweb-Instrucoes

# API Key — obtenha em: Azure AI Foundry > Seu Projeto > Settings > Keys
AZURE_AI_API_KEY=<sua-chave-aqui>
```

> ⚠️ **Nunca commite o `.env.local`**. O `.gitignore` já o exclui por padrão.

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Arquitetura

```
apps/dataweb-chat/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # API Route (server) — único lugar que usa o Azure SDK
│   ├── globals.css             # Tokens HSL design-diniz
│   ├── layout.tsx              # Providers: QueryProvider
│   └── page.tsx                # Home — renderiza ChatWindow
├── components/
│   └── chat/
│       ├── ChatWindow.tsx      # Container principal
│       ├── MessageBubble.tsx   # Bolhas user/assistant/error
│       └── InputBox.tsx        # Textarea + botão Enviar
├── hooks/
│   └── useChat.ts              # Estado do chat + comunicação com /api/chat
├── lib/
│   ├── providers.tsx           # QueryProvider (TanStack React Query)
│   └── utils.ts                # cn(), formatTime()
├── .env.local.example          # Template de variáveis de ambiente
├── .gitignore                  # Exclui .env*, node_modules/, .next/
└── tailwind.config.ts          # Design system Diniz
```

### Fluxo de dados

```
Browser (useChat)
  │  POST /api/chat { message, threadId? }
  ▼
Next.js API Route (route.ts) — SOMENTE SERVER
  │  AIProjectClient.agents.createThread()        (se threadId ausente)
  │  client.agents.createMessage(threadId, ...)
  │  client.agents.createAndPollRun(threadId, ...) ← polling automático do SDK
  │  client.agents.listMessages(threadId)
  ▼
Browser ← { reply: string, threadId: string }
```

---

## Segurança

- `AZURE_AI_API_KEY` **nunca** exposta ao client — o SDK Azure é importado apenas em `app/api/chat/route.ts`.
- Body da API Route validado com **Zod** (campos extras rejeitados).
- Mensagens de erro retornadas ao client são **genéricas** (não vazam detalhes do Azure).
- `.env*` excluído do Git.

---

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (HMR) |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript sem emitir arquivos |

---

## Troubleshooting

| Problema | Solução |
|---|---|
| `Serviço de IA não configurado` | Verifique se `.env.local` existe e tem as 3 variáveis preenchidas |
| `Erro de autenticação` | Confirme que `AZURE_AI_API_KEY` é válida e não expirou |
| `Sessão expirada` | Recarregue a página (threads Azure expiram por inatividade) |
| `Muitas requisições` | Aguarde alguns segundos — o Azure aplica rate limiting |
| Porta 3000 ocupada | `npm run dev -- -p 3001` |

---

## Skill gerada

Este projeto gerou a skill reutilizável:  
`.agents/skills/azure-ai-foundry-agent/SKILL.md`  

Consulte-a para integrar outros agentes Azure AI Foundry em projetos futuros.
