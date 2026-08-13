---
name: modelo-dados
description: Modelo de dados base padrão Diniz (Prisma 7 + SQL Server) - tabelas mínimas de auth/permissão/auditoria (USUARIO, PERFIL, USUARIO_PERFIL, ACESSO, LOG_ACESSO, PASSWORD_RESET, USUARIO_LOJA), driver adapter mssql, gotchas de migração (NUNCA prisma db push em banco existente). Use ao modelar tabelas, alterar schema, configurar Prisma ou importar dados. Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Modelo de dados base (Prisma / SQL Server) — padrão Diniz

## Tabelas mínimas de auth/permissão/auditoria (nomes em UPPER_SNAKE_CASE)

| Tabela | Função |
|---|---|
| `USUARIO` | `user_id`, `nome`, `email` (único), `senha` (bcrypt), `status` |
| `PERFIL` | `perfil_id`, `codigo` (MASTER, RH, TI, FINANCEIRO, ...) — ver skill `permissionamento` |
| `USUARIO_PERFIL` | N:N usuário↔perfil |
| `ACESSO` | tipo de acesso por usuário (`GLOBAL` ⇒ MASTER), `ativo` |
| `LOG_ACESSO` | auditoria: `email`, `sucesso`, `motivo`, `ip`, `user_agent`, `navegador`, `so`, `dispositivo`, `criado_em`, `user_id?` |
| `PASSWORD_RESET` | `reset_id`, `user_id`, `token_hash`, `expires_at`, `used_at?`, `criado_em` |
| `USUARIO_LOJA` (ou equivalente) | escopo de dados atribuído pelo admin (perfis externos) |
| `NOTIFICACAO` / `NOTIFICACAO_LEITURA` | (opcional) notificações in-app |

## Prisma 7 + driver adapter

- `prisma.service.ts` cria o `PrismaClient` com **driver adapter mssql** (Prisma 7, CommonJS),
  lendo `DATABASE_URL` no construtor. `PrismaModule` é **Global** e exporta `PrismaService`.
- Cliente **não auto-carrega `.env`** → carregar `dotenv` no topo do `main.ts` ANTES dos imports
  de módulos.
- Schema local para auth/config; **DW separado** quando houver dados de negócio.

## Migrações em banco existente

**NUNCA** rodar `prisma db push` em banco já existente — pode dessincronizar o schema.
Aplicar mudanças via **SQL direto** + `prisma generate`. (Lição aprendida em produção.)

## Gotchas já vividos (NÃO repetir)

- Excel corrompe CNPJ ao importar (notação científica / zero à esquerda) → tratar como **string**
  na importação.
