# Base de Conhecimento RAG — Manual: ADMINISTRADOR - CADASTRAR CAMPANHAS

---

## 1. RESUMO ESTRUTURAL DO MANUAL (sumário reconstituído)

```
Gestão de Campanhas Promocionais no sistema DATAWEB (texto introdutório/conceitual)
└── MÓDULO <ADMINISTRADOR> DA DATAWEB
    ├── Tela de Cadastro – Campanhas (acesso ao menu)
    ├── Cadastro de Campanhas – Novo Item
    ├── Cadastro de Campanhas – Preenchimento dos Campos
    └── Cadastro de Campanhas – Validação do Cadastro
└── (referência cruzada) MÓDULO <CAIXA> DA DATAWEB
    └── Cadastro de Campanhas – Validação do Cadastro na Tela de Caixa
```

**Observação estrutural:** o manual descreve um único procedimento operacional contínuo — "cadastrar uma campanha promocional" — numerado do passo 1 ao 9, distribuído em quatro subseções dentro do módulo Administrador. Há ainda uma seção final, sem numeração de passos, que ocorre no módulo Caixa e mostra o resultado do cadastro sendo consumido em uma venda. O manual não possui avisos, exceções de perfil de usuário ou pré-requisitos declarados explicitamente além do caminho de navegação inicial.

---

## 2. LISTA DE CHUNKS

### dataweb-campanhas_administrador_conceito_01

**Metadados:**
```json
{
  "id": "dataweb-campanhas_administrador_conceito_01",
  "manual_origem": "ADMINISTRADOR - CADASTRAR CAMPANHAS",
  "modulo": "Administrador",
  "assunto": "Campanhas Promocionais",
  "subassunto": "Conceito / Visão Geral",
  "tipo_conteudo": "conceito",
  "titulo": "O que é a Gestão de Campanhas Promocionais no Dataweb",
  "palavras_chave": ["campanhas promocionais", "gestão de campanhas", "ERP Dataweb", "descontos", "marketing", "vendas"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": false,
  "pagina_origem": "1",
  "revisar": false
}
```

**Conteúdo:**

**Módulo: Administrador | Assunto: Campanhas Promocionais**

A gestão de campanhas promocionais é um elemento essencial para impulsionar as vendas e fidelizar clientes em um mercado competitivo. No ERP Dataweb, essa funcionalidade funciona como uma ferramenta de automação e controle estratégico, dando aos gestores de marketing e vendas controle integral sobre as ações promocionais, desde a criação até a execução e a análise de resultados.

Por meio da gestão de campanhas promocionais no Dataweb é possível criar e monitorar campanhas com precisão, segmentando públicos-alvo, definindo regras específicas de descontos e aplicando promoções a produtos e serviços de forma automatizada. O sistema permite campanhas complexas, envolvendo múltiplos níveis de desconto, prazos determinados e condições específicas (como volume de compra ou fidelidade do cliente).

O módulo também oferece uma interface para planejamento e execução de campanhas, permitindo definir metas, acompanhar o desempenho em tempo real e ajustar estratégias. A integração com outros módulos do sistema — como vendas, estoque e CRM — mantém as informações sincronizadas.

O Dataweb também disponibiliza análise do impacto das ações promocionais por meio de relatórios detalhados, com métricas como aumento nas vendas, retorno sobre o investimento (ROI) e engajamento do cliente.

**Perguntas frequentes relacionadas:**
- Para que serve o módulo de campanhas promocionais no Dataweb?
- O sistema Dataweb permite acompanhar o desempenho das campanhas em tempo real?
- É possível medir o ROI de uma campanha promocional no Dataweb?

**Imagens associadas:** nenhuma

---

### dataweb-campanhas_administrador_cadastro_completo_02

**Metadados:**
```json
{
  "id": "dataweb-campanhas_administrador_cadastro_completo_02",
  "manual_origem": "ADMINISTRADOR - CADASTRAR CAMPANHAS",
  "modulo": "Administrador",
  "assunto": "Campanhas Promocionais",
  "subassunto": "Cadastro de Campanhas",
  "tipo_conteudo": "procedimento",
  "titulo": "Como cadastrar uma nova campanha promocional no Dataweb",
  "palavras_chave": ["cadastrar campanha", "nova campanha", "tela de cadastro", "botão Novo", "Gravar", "Ativo", "menu Cadastro", "Outros"],
  "perfil_usuario": "administrador",
  "possui_imagem_referenciada": true,
  "pagina_origem": "2-3",
  "revisar": false
}
```

**Conteúdo:**

**Módulo: Administrador | Assunto: Campanhas Promocionais | Subassunto: Cadastro de Campanhas**

Procedimento para cadastrar uma nova campanha promocional no sistema Dataweb, a partir do módulo Administrador.

**Etapa 1 – Acessando a tela de Cadastro de Campanhas**

1. Escolha a guia **<Cadastro>**.
2. Escolha a opção **<Outros>**.
3. Escolha a opção **<Campanhas>**.

Após a execução destes itens, o sistema disponibiliza a tela **<Cadastro de Campanhas>**.

**Etapa 2 – Criando um novo registro**

4. Clique no botão **<Novo>** para cadastrar uma nova campanha.

**Etapa 3 – Preenchendo os campos da campanha**

5. No campo **<Descrição>**, digite o nome da campanha.
6. No campo **<Data>**, digite a data de início da campanha.
7. Na parte inferior esquerda da tela **"Cadastro de Campanhas"**, marque a flag **(Ativo=T)**.
8. Após a execução dos itens anteriores, clique em **<Gravar>** para efetivar o cadastro.

**Etapa 4 – Validando o cadastro na lista**

9. Após a execução dos itens anteriores, role a barra de rolagem até que a campanha recém-cadastrada apareça na lista, confirmando que o registro foi salvo com sucesso.

**Observações:**
- O acesso descrito parte do módulo **Administrador**.
- O manual não especifica outros campos obrigatórios além de Descrição, Data e a flag Ativo=T.

**Perguntas frequentes relacionadas:**
- Como cadastrar uma nova campanha promocional no Dataweb?
- Onde fica a opção para criar campanhas no módulo Administrador?
- Quais campos preencher para ativar uma campanha no Dataweb?
- Como confirmar que uma campanha foi salva corretamente no sistema?

**Imagens associadas:**
- **Imagem 1** (referente aos passos 1-3): captura de tela do sistema Dataweb mostrando a navegação pelo menu, com destaque para a sequência guia **Cadastro** > opção **Outros** > opção **Campanhas**.
- **Imagem 2** (referente ao passo 4): captura de tela da tela **Cadastro de Campanhas**, com destaque no botão **Novo** (atalho de teclado indicado pela letra "N" sublinhada).
- **Imagem 3** (referente aos passos 5-8): captura de tela do formulário de cadastro de campanha preenchido, mostrando os campos **Descrição** e **Data** preenchidos, a flag **Ativo** marcada na parte inferior esquerda da tela, e o botão **Gravar** (atalho indicado pela letra "G" sublinhada).
- **Imagem 4** (referente ao passo 9): captura de tela da lista de campanhas cadastradas na tela **Cadastro de Campanhas**, exibindo a barra de rolagem utilizada para localizar o registro recém-criado.

---

### dataweb-campanhas_caixa_validacao_venda_03

**Metadados:**
```json
{
  "id": "dataweb-campanhas_caixa_validacao_venda_03",
  "manual_origem": "ADMINISTRADOR - CADASTRAR CAMPANHAS",
  "modulo": "Caixa",
  "assunto": "Campanhas Promocionais",
  "subassunto": "Validação do Cadastro na Tela de Caixa",
  "tipo_conteudo": "procedimento",
  "titulo": "Como verificar se uma campanha cadastrada aparece disponível no Caixa durante uma venda",
  "palavras_chave": ["Caixa", "Ordem de Serviço", "venda", "campanhas disponíveis", "validação"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

**Módulo: Caixa | Assunto: Campanhas Promocionais | Subassunto: Validação do Cadastro na Tela de Caixa**

Após uma campanha promocional ser cadastrada e gravada no módulo Administrador (com a flag Ativo=T marcada), ela passa a ficar disponível para uso durante o processo de venda no módulo Caixa.

**Passo a passo:**
1. No módulo **<CAIXA>**, inicie o processo de venda de uma **"Ordem de Serviço"**.
2. O sistema disponibiliza automaticamente as campanhas cadastradas e disponíveis para aplicação naquela venda.

**Pré-requisito:** a campanha deve ter sido previamente cadastrada e gravada com sucesso no módulo Administrador (ver procedimento "Como cadastrar uma nova campanha promocional no Dataweb").

**Perguntas frequentes relacionadas:**
- Onde as campanhas cadastradas aparecem para o operador de caixa?
- Como aplicar uma campanha promocional durante a venda de uma Ordem de Serviço?
- Por que uma campanha cadastrada não aparece na tela de Caixa? [REVISAR: o manual não detalha causas de uma campanha não aparecer na tela de Caixa, como flag Ativo desmarcada ou data de início futura — não há base textual explícita para responder a essa variação da pergunta.]

**Imagens associadas:**
- **Imagem 5**: captura de tela do módulo Caixa durante o processo de venda de uma Ordem de Serviço, exibindo as campanhas promocionais cadastradas e disponíveis para aplicação na venda.

---

## 3. GLOSSÁRIO DE TERMOS ESPECÍFICOS DO DATAWEB

| Termo | Definição (conforme uso no manual) |
|---|---|
| **Dataweb / ERP Dataweb** | Sistema ERP no qual o módulo de campanhas promocionais está inserido. |
| **Módulo Administrador** | Módulo do Dataweb onde se realiza o cadastro de campanhas promocionais (guia Cadastro > Outros > Campanhas). |
| **Módulo Caixa** | Módulo do Dataweb onde as campanhas cadastradas ficam disponíveis para aplicação durante a venda de uma Ordem de Serviço. |
| **Cadastro de Campanhas** | Tela do módulo Administrador onde se criam, preenchem e gravam campanhas promocionais. |
| **Campanha promocional** | Ação promocional cadastrada no sistema, com descrição, data de início e status ativo, que pode ser aplicada a produtos/serviços em vendas. |
| **Flag Ativo (Ativo=T)** | Indicador marcado no cadastro da campanha para que ela fique ativa/disponível no sistema. |
| **Ordem de Serviço** | Tipo de venda processada no módulo Caixa, durante a qual as campanhas ativas ficam disponíveis para aplicação. |
| **ROI** | Retorno sobre o investimento — métrica citada como parte da análise de resultados de campanhas. [REVISAR: o manual apenas cita a sigla ROI ao mencionar métricas de análise, sem detalhar como esse indicador é calculado ou exibido no Dataweb.] |

---

## 4. PONTOS SINALIZADOS PARA REVISÃO

1. **[REVISAR]** — O manual não especifica o que acontece (mensagens de erro, validações) caso os campos **Descrição** ou **Data** sejam deixados em branco, ou caso a flag **Ativo** não seja marcada antes de clicar em **Gravar**.
2. **[REVISAR]** — Não há informação sobre como editar, excluir ou desativar uma campanha já cadastrada; o manual cobre apenas a criação (Novo Item) e a validação visual na lista.
3. **[REVISAR]** — Não é informado se existem outros campos na tela de Cadastro de Campanhas além de Descrição, Data e a flag Ativo (por exemplo, campos de percentual de desconto, produtos elegíveis, ou datas de término), já que a imagem referenciada no manual não detalha textualmente esses campos.
4. **[REVISAR]** — Não há indicação de restrição por perfil de usuário (ex.: se apenas o perfil Administrador pode cadastrar campanhas, ou se outros perfis também têm acesso à tela).

---

*Fim do processamento do manual "ADMINISTRADOR - CADASTRAR CAMPANHAS". Todos os 5 chunks de conteúdo mapeados diretamente às imagens 1 a 5 do documento original.*
