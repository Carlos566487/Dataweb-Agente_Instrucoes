---
name: implementar-spec
description: Implementa uma SPEC já aprovada (mergeada na main em specs/), seguindo as skills de padrão do projeto, e abre um PR [FEAT] para revisão. Use quando o usuário pedir "implementa a spec X", "a spec foi aprovada, pode fazer", ou quando houver SPEC com status Aguardando implementação. NUNCA use para funcionalidade sem SPEC aprovada — nesse caso, use criar-spec.
---

# Implementar SPEC aprovada

Transforma uma SPEC aprovada em código resiliente, dentro dos padrões, entregue via PR `[FEAT]`.

## Etapa 0 — Pré-condição (bloqueante)

Localize a SPEC em `specs/` **na branch `main`**.
- SPEC não está na `main` → **não está aprovada**. Pare e explique ao usuário que a aprovação
  ainda está pendente (ou rode `criar-spec` se a SPEC nem existe). NUNCA implemente mesmo "só
  para adiantar".
- Há **Perguntas em aberto** que bloqueiam decisões de implementação → liste-as e peça
  posicionamento do revisor antes de codar (comente no contexto disponível ou pare e informe).

## Etapa 1 — Plano

1. Releia a SPEC inteira; os **critérios de aceite** são o contrato da entrega.
2. Liste as skills de padrão pertinentes e **consulte-as antes de codar**:
   - estrutura/módulos → `arquitetura-padrao`
   - login/tokens → `autenticacao` · perfis/escopo → `permissionamento`
   - registro de ações → `logs-auditoria` · endpoints/validação → `seguranca-api`
   - telas/UI → `design-diniz` + `frontend-padrao` · banco/Prisma → `modelo-dados`
3. Monte um plano curto cobrindo só o delta entre o estado atual do repo e a SPEC.

## Etapa 2 — Implementação

- Branch `feat/<slug>` (mesmo slug da SPEC) a partir da `main` atualizada.
- Siga os snippets canônicos das skills — copie e adapte nomes de negócio, mantendo estrutura,
  nomes de arquivos e fluxos.
- Toda rota nova de API: guards de autenticação/roles conforme a SPEC ("Quem pode usar").
  Rota sem perfil definido na SPEC = no mínimo `JwtAuthGuard`.
- Commits pequenos e descritivos em pt-BR.
- Fora de escopo da SPEC = fora do PR. Descobriu algo necessário não previsto? Registre na seção
  de observações do PR; se mudar o comportamento combinado, volte ao revisor antes.

## Etapa 3 — Qualidade (OBRIGATÓRIO antes do PR)

1. Lint e build dos apps afetados passam.
2. Testes existentes passam; crie testes para regras de negócio novas quando o projeto já tiver
   estrutura de testes.
3. Percorra os **critérios de aceite um a um** e verifique cada um (rodando o app quando possível).
   Critério não atendido = não abre PR.
4. Releia o diff procurando: segredo exposto, rota sem guard, campo sem validação, hex hardcoded
   no lugar de token de design.

## Etapa 4 — PR de entrega

1. Atualize na SPEC: `Status: Implementada` + referência ao PR.
2. PR com título `[FEAT] <título da SPEC>` seguindo o template: link da SPEC, checklist dos
   critérios de aceite (marcando os verificados), instruções de "como testar" para o revisor.
3. NUNCA faça merge — quem mergeia é o revisor.

## Etapa 5 — Encerrar explicando

Diga ao solicitante em linguagem simples: a funcionalidade foi programada e está em revisão
técnica; entra no sistema após aprovação. Se o revisor pedir mudanças, aplique **no mesmo
branch/PR**.
