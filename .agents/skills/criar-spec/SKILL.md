---
name: criar-spec
description: Fluxo obrigatório quando o usuário pede uma funcionalidade, melhoria ou mudança de comportamento no sistema. Entrevista o solicitante (leigo) em linguagem simples, redige a SPEC a partir de specs/_TEMPLATE.md e abre um PR [SPEC] para aprovação do revisor — SEM implementar código. Use para qualquer pedido do tipo "quero uma tela...", "preciso que o sistema...", "dá pra adicionar...".
---

# Criar SPEC de funcionalidade

Transforma o pedido de um usuário leigo em uma SPEC clara, que vai para aprovação do revisor
técnico via PR. **Nesta fase NUNCA se escreve código de funcionalidade.**

## Etapa 1 — Entrevista (linguagem simples, uma pergunta por vez)

Descubra, na conversa, o suficiente para preencher a SPEC:

1. **Problema:** que dor ou necessidade motivou o pedido? O que acontece hoje?
2. **Resultado esperado:** como o solicitante saberá que está pronto e funcionando?
3. **Quem usa:** quais pessoas/perfis vão usar? Alguém NÃO pode ver/usar isso?
4. **Onde:** é uma tela nova, um botão numa tela existente, um e-mail, um relatório?
5. **Dados:** de onde vêm as informações? (se o usuário não souber, anote como pergunta em aberto)
6. **Exceções:** o que deve acontecer quando der errado / não houver dados / etc.?

Regras da entrevista:
- Adapte: se o pedido já veio claro, confirme o entendimento em vez de re-perguntar.
- Perguntas que o solicitante não souber responder viram **Perguntas em aberto** na SPEC — NUNCA
  invente a resposta nem trave a entrevista por causa delas.
- Pedido grande demais (várias telas/fluxos independentes)? Proponha quebrar em SPECs menores e
  faça uma por vez.

## Etapa 2 — Investigação técnica (somente leitura)

Explore o código do projeto para:
- Avaliar viabilidade e identificar módulos/telas afetados.
- Detectar conflitos com padrões das skills (`arquitetura-padrao`, `permissionamento`, etc.).
- Preencher **Riscos e pontos de atenção** com olhar técnico (segurança, escopo de dados,
  performance) — esta seção é para o revisor, pode ser técnica.

## Etapa 3 — Redigir a SPEC

- Copie `specs/_TEMPLATE.md` para `specs/<AAAA-MM>-<slug>.md` (slug kebab-case, pt-BR, curto).
- Critérios de aceite no formato verificável: "Quando <ação>, então <resultado observável>".
- Status inicial: `Aguardando implementação` (ao ser mergeada, ela já estará aprovada).
- Linguagem: corpo em pt-BR simples (o solicitante precisa entender a própria SPEC); só a seção
  de riscos pode ser técnica.

## Etapa 4 — Validar com o solicitante

Apresente um resumo em 3–6 linhas no chat (não o arquivo inteiro) e pergunte se é isso.
Ajuste até o solicitante confirmar.

## Etapa 5 — Abrir o PR de aprovação

1. Branch `spec/<slug>` a partir da `main` atualizada.
2. Commit apenas do arquivo da SPEC.
3. PR com título `[SPEC] <título da funcionalidade>` seguindo o template de PR. **Nenhum código junto.**

## Etapa 6 — Encerrar explicando o próximo passo

Diga ao solicitante, em linguagem simples: a especificação foi enviada para aprovação do time
técnico; nada será programado antes disso; quando aprovada, basta pedir *"implementa a spec
<nome>"*. Se o revisor comentar pedindo ajustes, atualize a SPEC **no mesmo branch/PR**.
