---
name: bootstrap-projeto
description: Checklist para criar um projeto novo do zero no padrão Diniz (monorepo NestJS + Next.js 14 com auth, permissionamento, auditoria e design system prontos). Use quando o pedido for criar um sistema/portal/projeto novo, ou quando o repositório derivado do template ainda não tiver apps/. Orquestra as demais skills de padrão na ordem correta.
---

# Bootstrap de projeto novo — padrão Diniz

Cria o esqueleto completo de um projeto no padrão. Antes de codar, detecte o estado atual do repo
(já existe `apps/api`/`apps/web`? Prisma configurado?) e cubra **só o delta**.

> Projeto novo também passa pelo fluxo de aprovação: o bootstrap inteiro é tratado como uma SPEC
> (skill `criar-spec`) descrevendo o objetivo do sistema, e o esqueleto sobe num PR `[FEAT]`.

## Checklist (ordem obrigatória)

1. [ ] Criar monorepo `apps/api` (NestJS) + `apps/web` (Next 14 App Router) — ver `arquitetura-padrao`.
2. [ ] Configurar Prisma 7 + driver adapter mssql; modelar tabelas base; `prisma generate` — ver `modelo-dados`.
3. [ ] `main.ts`: dotenv-first, ValidationPipe, CORS allowlist, compression, cookie-parser,
   trust proxy, Swagger, prefixo `api` — ver `seguranca-api`.
4. [ ] `common/`: `roles.decorator`, `jwt-auth.guard`, `roles.guard`, `jwt.strategy` (multi-fonte),
   `request-meta`, `allowed-origins` — ver `permissionamento` e `autenticacao`.
5. [ ] Módulo `auth`: login (+auditoria), refresh, forgot/reset/change password (token por hash) — ver `autenticacao`.
6. [ ] Módulo `logs`: listagem paginada + últimos acessos (restrito a MASTER/ADMINISTRADOR) — ver `logs-auditoria`.
7. [ ] Módulo `mail`: envio do e-mail de reset.
8. [ ] Módulo `users`: CRUD + atribuição de perfis e de escopo — ver `permissionamento`.
9. [ ] Web: `globals.css` (tokens HSL + Diniz), `tailwind.config` (cores/fontes), providers chain — ver `design-diniz`.
10. [ ] Web: `AuthContext` + `fetchWithAuth`/`buildApiUrl` + `ProtectedRoute`; grupo `(authenticated)/` — ver `frontend-padrao`.
11. [ ] Web: páginas `login`, dashboard inicial, `usuarios`, `logs`.
12. [ ] Definir `.env` (`DATABASE_URL`, `JWT_SECRET`, `FRONTEND_URL`, allowlist de origens, SMTP) —
    criar `.env.example` versionado; o `.env` real NUNCA vai para o git.
13. [ ] Smoke test: login → token → rota protegida por role → logout → reset de senha → log auditado.

## Entrega

- Branch `feat/bootstrap` → PR `[FEAT] Bootstrap do projeto` com o checklist acima preenchido no
  corpo e instruções de como rodar localmente (`.env`, comandos, portas).
