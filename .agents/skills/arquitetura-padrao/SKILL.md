---
name: arquitetura-padrao
description: Stack obrigatório e estrutura de pastas padrão Diniz (monorepo apps/api NestJS + apps/web Next.js 14, Prisma 7 + SQL Server, Tailwind + shadcn/ui). Use ao criar módulos/páginas novos, organizar arquivos, decidir tecnologia, ou padronizar um projeto existente. Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Arquitetura padrão — Portal BI / Óticas Diniz

Padrões provados em produção no Portal BI. **Normativa**: copie e adapte nomes de negócio, mas
mantenha estrutura, nomes de arquivos e fluxo. Idioma pt-BR em código de negócio, UI, mensagens
e comentários; tabelas/campos do banco em UPPER_SNAKE_CASE.

## 1. Stack obrigatório

| Camada | Tecnologia | Observação |
|---|---|---|
| Monorepo | `apps/api` + `apps/web` | um repositório, dois apps |
| API | **NestJS** (módulos) + **Prisma 7** (driver adapter) | SQL Server por padrão |
| Banco | **SQL Server** | schema local para auth/config; DW separado quando houver dados de negócio |
| Auth | **JWT** (access + refresh) + **bcrypt** | Passport (`passport-jwt`) — ver skill `autenticacao` |
| Web | **Next.js 14 App Router** + **React** | `'use client'` onde necessário |
| Dados (web) | **React Query** (`@tanstack/react-query`) | todo fetch autenticado via hook — ver `frontend-padrao` |
| UI | **Tailwind CSS** + **shadcn/ui** (Radix) | tokens HSL + dark mode preparado — ver `design-diniz` |
| Gráficos | **Recharts** | quando houver dashboards |
| Cookies | `js-cookie` (web) + `cookie-parser` (api) | tokens em cookie |

## 2. Estrutura de pastas (OBRIGATÓRIA)

```
apps/
├─ api/
│  ├─ src/
│  │  ├─ main.ts                      # bootstrap: pipes, CORS, compression, cookie-parser, swagger (ver seguranca-api)
│  │  ├─ app.module.ts
│  │  ├─ prisma/
│  │  │  ├─ prisma.service.ts         # PrismaClient + driver adapter
│  │  │  └─ prisma.module.ts          # exporta PrismaService (Global)
│  │  ├─ common/
│  │  │  ├─ decorators/roles.decorator.ts
│  │  │  ├─ guards/jwt-auth.guard.ts
│  │  │  ├─ guards/roles.guard.ts
│  │  │  ├─ strategies/jwt.strategy.ts
│  │  │  ├─ services/                 # serviços compartilhados (cache, DW, etc.)
│  │  │  └─ utils/
│  │  │     ├─ request-meta.ts        # IP + user-agent parseado (auditoria)
│  │  │     └─ allowed-origins.ts     # allowlist de CORS / reset de senha
│  │  └─ modules/
│  │     ├─ auth/                     # login, refresh, forgot/reset/change password
│  │     ├─ users/                    # CRUD de usuários, perfis, escopo
│  │     ├─ logs/                     # leitura da auditoria de acessos
│  │     ├─ mail/                     # envio de e-mail (reset de senha, etc.)
│  │     └─ <dominio>/                # módulos de negócio
│  └─ .env
└─ web/
   └─ src/
      ├─ app/
      │  ├─ layout.tsx                # providers chain (ver design-diniz)
      │  ├─ globals.css               # tokens HSL (light/dark)
      │  ├─ login/
      │  └─ (authenticated)/          # grupo protegido
      │     ├─ layout.tsx
      │     └─ <pagina>/
      ├─ contexts/AuthContext.tsx     # useAuth()
      ├─ components/ProtectedRoute.tsx
      ├─ providers/query-provider.tsx
      ├─ hooks/                       # hooks React Query
      ├─ utils/api.ts                 # fetchWithAuth + buildApiUrl
      └─ types/
```

Cada módulo NestJS tem **sempre** `*.module.ts`, `*.service.ts`, `*.controller.ts` e `dto/`
quando recebe entrada.

## 3. Convenções gerais

- Código conciso, sem abstração prematura nem over-engineering.
- Comentários explicam **por quê** (decisão/gotcha), não o óbvio.
- Ao evoluir projeto existente: detectar o estado atual do repo e propor um plano curto cobrindo
  **só o delta** entre o estado atual e este padrão.

## Gotchas já vividos (NÃO repetir)

- Alinhar `@typescript-eslint` em v8 com `overrides` exatos e clean install ao auditar dependências.
