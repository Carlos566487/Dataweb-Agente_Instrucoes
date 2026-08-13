# Base de Conhecimento RAG — Dataweb

## 1. Manual: Verificação de Operações de Fornecedor

**Manual de origem:** `ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx`  
**Código:** OPR_DF_04  
**Versão:** 1.0  
**Módulo:** Administrativo  
**Data:** 08/07/2024

O manual apresenta o procedimento para consultar o **Histórico de Vendas do Fornecedor** no Módulo Administrativo do DATAWEB. O sumário contém nove etapas, desde o acesso ao módulo até a visualização de notas fiscais, produtos, custos e resumo financeiro.

### 1.1 Resumo estrutural

```text
Módulo Administrativo DATAWEB
└── Verificando o Histórico de Vendas do Fornecedor
    ├── Acesso ao Módulo Administrativo
    ├── Acesso à guia Histórico
    ├── Seleção de Histórico do Fornecedor
    ├── Pesquisa do fornecedor
    │   ├── Digitação do fornecedor
    │   └── Outra forma de pesquisa
    ├── Seleção do período
    ├── Consulta das Notas Fiscais
    │   └── Natureza de Operação / CFOP 1.102
    └── Visualização do relatório
        ├── Produtos comprados
        ├── Custos
        ├── Acompanhamento mensal de compras
        └── Resumo Financeiro
```

---

### Chunk 1 — Acessar o Histórico de Vendas do Fornecedor

#### `historico-fornecedor_administrativo_acesso_01`

**Metadados:**

```json
{
  "id": "historico-fornecedor_administrativo_acesso_01",
  "manual_origem": "ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx",
  "modulo": "Administrativo",
  "assunto": "Histórico de Vendas do Fornecedor",
  "subassunto": "Acesso e pesquisa",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar o Histórico de Vendas do Fornecedor no DATAWEB",
  "palavras_chave": [
    "DATAWEB",
    "Módulo Administrativo",
    "Histórico",
    "Histórico do Fornecedor",
    "fornecedor"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "2-3",
  "revisar": false
}
```

**Conteúdo:**

Para verificar o histórico de vendas de um fornecedor no DATAWEB:

1. Entre pelo **Módulo Administrativo DATAWEB**.
2. Clique na guia **Histórico**.
3. Escolha a aba **Histórico do Fornecedor**.
4. Digite o fornecedor que deseja pesquisar.

O manual também apresenta uma segunda forma de pesquisar o fornecedor.

**Perguntas frequentes relacionadas:**
- Como acesso o Histórico de Vendas do Fornecedor?
- Onde fica o Histórico do Fornecedor no DATAWEB?
- Em qual módulo consulto o histórico de um fornecedor?

**Imagens associadas:**  
As imagens mostram a interface do DATAWEB com destaque visual para o acesso ao módulo e para a guia **Histórico**. A imagem seguinte apresenta a opção **Histórico do Fornecedor**.

---

### Chunk 2 — Pesquisar o fornecedor

#### `historico-fornecedor_administrativo_pesquisa_02`

**Metadados:**

```json
{
  "id": "historico-fornecedor_administrativo_pesquisa_02",
  "manual_origem": "ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx",
  "modulo": "Administrativo",
  "assunto": "Histórico de Vendas do Fornecedor",
  "subassunto": "Pesquisa de fornecedor",
  "tipo_conteudo": "procedimento",
  "titulo": "Como pesquisar um fornecedor no Histórico de Vendas",
  "palavras_chave": [
    "fornecedor",
    "pesquisa",
    "Pesquisar",
    "F3",
    "transações"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

Após acessar **Histórico do Fornecedor**, o manual apresenta outra forma de pesquisar o fornecedor.

1. Utilize a forma de pesquisa apresentada na tela.
2. No exemplo do manual, foi escolhido o fornecedor **“ZEISS”**.
3. Clique em **`Pesquisar {F3}`**.
4. O sistema apresenta as transações vinculadas ao fornecedor selecionado.

**Perguntas frequentes relacionadas:**
- Como pesquisar um fornecedor pelo Histórico do Fornecedor?
- Qual botão devo usar para pesquisar o fornecedor?
- Qual fornecedor é utilizado como exemplo no manual?

**Imagens associadas:**  
A imagem mostra a tela de pesquisa do fornecedor, com destaque para o campo de pesquisa e para o botão **Pesquisar (F3)**. Também é apresentada uma listagem de transações após a pesquisa.

---

### Chunk 3 — Consultar o período e as Notas Fiscais

#### `historico-fornecedor_administrativo_notas-fiscais_03`

**Metadados:**

```json
{
  "id": "historico-fornecedor_administrativo_notas-fiscais_03",
  "manual_origem": "ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx",
  "modulo": "Administrativo",
  "assunto": "Histórico de Vendas do Fornecedor",
  "subassunto": "Notas Fiscais e período",
  "tipo_conteudo": "procedimento",
  "titulo": "Como consultar as Notas Fiscais do fornecedor por período",
  "palavras_chave": [
    "Notas Fiscais",
    "período",
    "Buscar",
    "Natureza de Operação",
    "CFOP 1.102"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "5-6",
  "revisar": false
}
```

**Conteúdo:**

Para consultar as operações do fornecedor em determinado período:

1. Escolha o **período de data** relacionado à venda executada pelo fornecedor.
2. Clique em **`Buscar`**.
3. Após a execução da pesquisa, é possível verificar as **Notas Fiscais** emitidas ao fornecedor escolhido.
4. O relatório também apresenta a **Natureza de Operação** com o **CFOP nº 1.102**.

O manual define o **CFOP nº 1.102** como referente a **Compra para comercialização**. O código classifica compras de mercadorias destinadas à comercialização e também determinadas entradas de mercadorias em estabelecimento comercial de cooperativa.

**Perguntas frequentes relacionadas:**
- Como consultar as notas fiscais de um fornecedor por período?
- Onde seleciono o período da consulta?
- O que significa o CFOP 1.102 no relatório?

**Imagens associadas:**  
As imagens mostram a tela do histórico com seleção de período, botão **Buscar** e a listagem das operações/notas fiscais.

---

### Chunk 4 — Visualizar produtos, custos e resumo financeiro

#### `historico-fornecedor_administrativo_relatorio_04`

**Metadados:**

```json
{
  "id": "historico-fornecedor_administrativo_relatorio_04",
  "manual_origem": "ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx",
  "modulo": "Administrativo",
  "assunto": "Histórico de Vendas do Fornecedor",
  "subassunto": "Relatório e resumo financeiro",
  "tipo_conteudo": "conceito",
  "titulo": "O que é possível visualizar no Histórico de Vendas do Fornecedor",
  "palavras_chave": [
    "histórico de venda",
    "produtos comprados",
    "custos",
    "compras",
    "resumo Financeiro"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "6",
  "revisar": false
}
```

**Conteúdo:**

No relatório de **Histórico de Venda do Fornecedor**, é possível visualizar:

- relação de **produtos comprados x custos**;
- **acompanhamento mensal de compras**;
- **resumo Financeiro**.

**Perguntas frequentes relacionadas:**
- O que posso consultar no Histórico de Venda do Fornecedor?
- O relatório mostra os custos dos produtos comprados?
- É possível visualizar um resumo financeiro?

**Imagens associadas:**  
As imagens mostram a tela do histórico com listagem de operações e áreas destacadas relacionadas às informações de compras, produtos/custos e resumo financeiro.

---

# 2. Manual: Retirar/Mover Produto do Estoque

**Manual de origem:** `ENTRADAS - Retirar Produto do Estoque_V2.docx`  
**Versão:** V 01.01  
**Data indicada:** agosto de 2024

O manual orienta o processo de **retirada ou movimentação de produtos do estoque**, incluindo cadastro de perda, alteração de quantidade, pesquisa do produto e movimentação da flag **“movimenta estoque”**.

## 2.1 Resumo estrutural

```text
Módulo ENTRADAS da DATAWEB
└── Processo de Retirar/Mover Produto do Estoque
    ├── Acesso ao Módulo ENTRADAS
    ├── Movimentação na guia ESTOQUE
    │   ├── Estoque
    │   ├── Movimentação do estoque
    │   └── Perda/Outras Movimentações
    ├── Cadastro de Perda de Produto
    │   ├── Novo
    │   └── Produto + Quantidade
    ├── Pesquisa Produtos
    │   └── Pesq. Produtos
    ├── Consulta Cadastro
    │   ├── Código do Produto
    │   ├── Pesquisar (F3)
    │   └── Cadastro
    └── Movimenta Flag
        ├── Alterar
        └── Desmarcar "movimenta estoque"
```

---

### Chunk 5 — Acessar a movimentação de estoque

#### `retirar-produto_entradas_movimentacao_01`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_movimentacao_01",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Movimentação na guia ESTOQUE",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar a movimentação de estoque no DATAWEB",
  "palavras_chave": [
    "ENTRADAS",
    "ESTOQUE",
    "Movimentação do estoque",
    "Perda/Outras Movimentações"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "2",
  "revisar": false
}
```

**Conteúdo:**

No **DATAWEB**, para acessar a funcionalidade de movimentação de estoque:

1. Acesse o **Módulo `<ENTRADAS>` da DATAWEB**.
2. Clique em **Estoque**.
3. Clique em **Movimentação do estoque**.
4. Clique em **Perda/Outras Movimentações**.

**Perguntas frequentes relacionadas:**
- Onde fica a movimentação de estoque no DATAWEB?
- Como acessar Perda/Outras Movimentações?
- Qual caminho devo seguir no Módulo ENTRADAS?

**Imagens associadas:**  
A Figura 1 mostra o **Módulo Entradas DATAWEB**. A Figura 2 mostra a guia **ESTOQUE** e destaca sequencialmente **Estoque → Movimentação do estoque → Perda/Outras Movimentações**.

---

### Chunk 6 — Cadastrar a perda/retirada do produto

#### `retirar-produto_entradas_cadastro-perda_02`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_cadastro-perda_02",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Cadastro de perda de produto",
  "tipo_conteudo": "procedimento",
  "titulo": "Como cadastrar a retirada de um produto do estoque",
  "palavras_chave": [
    "Cadastro de perda de produto",
    "Novo",
    "Produto",
    "Quantidade",
    "retirar"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "3-4",
  "revisar": false
}
```

**Conteúdo:**

Depois de acessar **Perda/Outras Movimentações**:

1. O sistema disponibilizará a tela **Cadastro de perda de produto**.
2. Clique na opção **Novo**.
3. No campo **Produto**, digite o produto desejado.
4. No campo **Quantidade**, digite a quantidade a retirar.

**Perguntas frequentes relacionadas:**
- Como retirar um produto do estoque?
- Onde informo o produto que será retirado?
- Onde informo a quantidade que será retirada?

**Imagens associadas:**  
As figuras mostram a tela **Cadastro de perda de produto**, a opção **Novo** e, posteriormente, os campos **Produto** e **Quantidade**.

---

### Chunk 7 — Conferir a alteração do estoque

#### `retirar-produto_entradas_pesquisa-produto_03`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_pesquisa-produto_03",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Pesquisa de produtos",
  "tipo_conteudo": "procedimento",
  "titulo": "Como conferir a efetivação da alteração de estoque",
  "palavras_chave": [
    "Pesq. Produtos",
    "Pesquisa Produtos",
    "estoque",
    "efetivação",
    "produto"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

Após a alteração da quantidade de produtos em estoque:

1. Clique em **`Pesq. Produtos`**.

**Perguntas frequentes relacionadas:**
- Como conferir se a alteração do estoque foi efetivada?
- Onde consultar os produtos após uma movimentação?
- Qual opção devo acessar para pesquisar produtos?

**Imagens associadas:**  
A Figura 5 apresenta a funcionalidade **Pesquisa Produtos**.

---

### Chunk 8 — Consultar o cadastro do produto

#### `retirar-produto_entradas_consulta-cadastro_04`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_consulta-cadastro_04",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Pesquisa de Produtos - Consulta Cadastro",
  "tipo_conteudo": "procedimento",
  "titulo": "Como consultar o cadastro de um produto",
  "palavras_chave": [
    "Pesquisa de Produtos",
    "Consulta Cadastro",
    "código",
    "Pesquisar (F3)",
    "Cadastro"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4-5",
  "revisar": false
}
```

**Conteúdo:**

Na tela disponibilizada após acessar **Pesq. Produtos**:

1. Digite o **código de identificação do Produto**.
2. Clique em **`Pesquisar (F3)`**.
3. Clique na opção **`Cadastro`**.

**Perguntas frequentes relacionadas:**
- Como pesquisar um produto pelo código?
- Como consultar o cadastro de um produto?
- Qual botão devo usar para pesquisar o produto?

**Imagens associadas:**  
A Figura 6 mostra a tela **Pesquisa de Produtos - Consulta Cadastro**, com destaque para o campo de identificação do produto, o botão **Pesquisar (F3)** e a opção **Cadastro**.

---

### Chunk 9 — Desmarcar a flag “movimenta estoque”

#### `retirar-produto_entradas_movimenta-flag_05`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_movimenta-flag_05",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Pesquisa de Produto - Movimenta Flag",
  "tipo_conteudo": "procedimento",
  "titulo": "Como desmarcar a flag movimenta estoque de um produto",
  "palavras_chave": [
    "Alterar",
    "movimenta estoque",
    "flag",
    "produto",
    "Cadastro"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "5-6",
  "revisar": false
}
```

**Conteúdo:**

Após acessar o cadastro do produto:

1. Clique no botão **`Alterar`**.
2. Desmarque a flag **`movimenta estoque`**.

**Perguntas frequentes relacionadas:**
- Como alterar a configuração de movimentação de estoque de um produto?
- Onde fica a flag “movimenta estoque”?
- Como desmarcar “movimenta estoque”?

**Imagens associadas:**  
A Figura 7 mostra a tela de cadastro do produto com destaque para a opção relacionada à flag **movimenta estoque**.

**Observação:** O trecho textual disponível termina após a instrução de desmarcar a flag. O manual não apresenta, no texto extraído, uma etapa posterior de salvamento/confirmação. Portanto, nenhuma etapa adicional foi criada.

---

# 3. Manual: NFe de Fornecedor

**Manual de origem:** `ENTRADAS - NFe DE FORNECEDOR.docx`  
**Código:** OPR_DF_05  
**Versão:** 1.1  
**Data:** 01/08/2024

O manual apresenta a funcionalidade de **NFe de Fornecedor**, cujo objetivo é automatizar a consulta e obtenção dos arquivos XML das notas fiscais. Segundo o manual, o **DWServer** executa rotinas programadas e atualiza as informações a cada três horas.

O sumário apresenta os temas: acesso ao Módulo Entradas, parâmetros de consulta, listagem das NFe, situações das NFe, ENF recebida com sucesso e dicas relacionadas a manifestação, visualização, download do XML e cópia das chaves de acesso.

## 3.1 Resumo estrutural

```text
NFe de Fornecedor
├── Introdução
├── Acessar o Módulo Entradas DATAWEB
├── NFe Fornecedor
│   └── Escolha dos parâmetros de consulta
│       ├── Aba NFe de Fornecedor
│       ├── Range de datas
│       └── Código XML
├── Listagem das NFe do Fornecedor
├── Situações das NFe Fornecedor
│   ├── Situação 1 – Não Manifestadas
│   ├── Situação 2 – Aguardando XML
│   └── Situação 3 – XML Disponível
├── ENF Recebida com Sucesso
└── Dicas
    ├── Manifestação e Recebimento
    ├── Visualizar Manifestação
    ├── Download do XML
    └── Copiar as Chaves de Acesso
```

---

### Chunk 10 — Acessar o Módulo Entradas

#### `nfe-fornecedor_entradas_acesso_01`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_acesso_01",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Acesso ao módulo",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar a funcionalidade NFe de Fornecedor",
  "palavras_chave": [
    "NFe",
    "NFe de Fornecedor",
    "Módulo Entradas",
    "DATAWEB"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "2",
  "revisar": false
}
```

**Conteúdo:**

1. No sistema **DATAWEB**, acesse o **Módulo Entradas**.

**Perguntas frequentes relacionadas:**
- Onde acesso a NFe de Fornecedor?
- Em qual módulo fica a funcionalidade NFe de Fornecedor?
- Como acessar o Módulo Entradas?

**Imagens associadas:**  
A imagem apresenta a interface do DATAWEB com o **Módulo Entradas** destacado.

---

### Chunk 11 — Definir os parâmetros de consulta das NFe

#### `nfe-fornecedor_entradas_parametros-consulta_02`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_parametros-consulta_02",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Parâmetros de consulta",
  "tipo_conteudo": "procedimento",
  "titulo": "Como pesquisar NFe de fornecedor por período ou código XML",
  "palavras_chave": [
    "NFe de Fornecedor",
    "range",
    "datas",
    "XML",
    "código XML"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "3",
  "revisar": false
}
```

**Conteúdo:**

Após acessar o Módulo Entradas:

1. Clique na aba **“NFe de Fornecedor”**.
2. Digite o **“range” de datas** para selecionar os XMLs.
3. Caso tenha um **código XML**, ele pode ser utilizado para pesquisa.

**Perguntas frequentes relacionadas:**
- Como pesquisar NFe de fornecedor por período?
- Posso pesquisar uma NFe pelo código XML?
- Onde informo o período da consulta de XMLs?

**Imagens associadas:**  
A imagem apresenta a aba **NFe de Fornecedor** e os elementos de consulta destacados.

---

### Chunk 12 — Visualizar a listagem das NFe

#### `nfe-fornecedor_entradas_listagem_03`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_listagem_03",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Listagem das NFe",
  "tipo_conteudo": "conceito",
  "titulo": "Como as NFe de fornecedor são apresentadas na tela",
  "palavras_chave": [
    "listagem",
    "NFe",
    "Fornecedor",
    "Situação"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

Ao acessar a ferramenta, fica disponível uma **listagem das NFe do Fornecedor**, agrupadas pela **Situação**.

**Perguntas frequentes relacionadas:**
- Como as NFe do fornecedor são organizadas?
- Onde vejo as NFe do fornecedor?
- O que significa a situação exibida na listagem?

**Imagens associadas:**  
As imagens mostram a listagem de NFe e sua organização por situação.

---

### Chunk 13 — Situação 1: Não Manifestadas

#### `nfe-fornecedor_entradas_nao-manifestadas_04`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_nao-manifestadas_04",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Situação 1 – Não Manifestadas",
  "tipo_conteudo": "conceito",
  "titulo": "O que significa a situação Não Manifestadas",
  "palavras_chave": [
    "Não Manifestadas",
    "manifestação",
    "desconhecimento da operação",
    "chave de acesso",
    "NFe"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

A **Situação 1 – Não Manifestadas** ocorre quando uma NFe é emitida contra o CNPJ da empresa sem ter sido solicitada ou quando a empresa não reconhece a operação.

O manual orienta que, nesses casos, deve-se manifestar **desconhecimento da operação**. Segundo o documento, essa manifestação evita a tributação do destinatário e constitui uma forma de proteção contra possíveis fraudes e notas frias.

A manifestação também é utilizada quando o receptor precisa registrar uma operação legalmente acordada como não realizada, inclusive em situação na qual o fornecedor enviou a mercadoria, mas ela não chegou.

As ações de manifestação estão disponíveis no **menu de manifestações**. Para acessá-las, deve-se marcar a caixa da **chave de acesso** e clicar com o **botão direito do mouse**.

O manual alerta que, após confirmar a operação, o fornecedor não pode mais cancelar a NFe.

**Perguntas frequentes relacionadas:**
- O que significa NFe “Não Manifestada”?
- Quando devo manifestar desconhecimento da operação?
- Onde estão as ações de manifestação da NFe?
- O que acontece depois de confirmar a manifestação?

**Imagens associadas:**  
As imagens do manual mostram a listagem das NFe e as áreas de interação relacionadas à manifestação.

---

### Chunk 14 — Situação 2: Aguardando XML

#### `nfe-fornecedor_entradas_aguardando-xml_05`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_aguardando-xml_05",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Situação 2 – Aguardando XML",
  "tipo_conteudo": "conceito",
  "titulo": "O que significa a situação Aguardando XML",
  "palavras_chave": [
    "Aguardando XML",
    "Status NF-e",
    "Aguardando Autorização",
    "STATUSNFE = E",
    "Ciência da emissão",
    "DWServer"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4-5",
  "revisar": false
}
```

**Conteúdo:**

A **Situação 2 – Aguardando XML** ocorre quando a tratativa da Nota Fiscal Eletrônica está pendente de autorização.

O manual relaciona essa situação às notas cuja coluna **“Status NF-e”** no Portal de Vendas encontra-se como **“Aguardando Autorização”**, identificada também como **`STATUSNFE = E`**.

Após uma manifestação positiva (**“Ciência da emissão”**) referente à NFe:

1. O sistema atualiza o status da nota.
2. O registro avança para a situação **Aguardando download**.
3. É necessário aguardar a próxima rotina de consulta do **DWServer** ao portal.
4. Os downloads e o armazenamento dos arquivos são realizados automaticamente pelo sistema.

O manual explica ainda que o **XML** é a versão digital da nota fiscal e segue um padrão nacional de escrituração fiscal.

**Perguntas frequentes relacionadas:**
- O que significa “Aguardando XML”?
- O que significa STATUSNFE = E?
- O que acontece depois de “Ciência da emissão”?
- Quando o DWServer baixa o XML?

**Imagens associadas:**  
As imagens apresentam a listagem de NFe e as situações/status das notas.

---

### Chunk 15 — Situação 3: XML Disponível

#### `nfe-fornecedor_entradas_xml-disponivel_06`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_xml-disponivel_06",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Situação 3 – XML Disponível",
  "tipo_conteudo": "conceito",
  "titulo": "O que significa a situação XML Disponível",
  "palavras_chave": [
    "XML Disponível",
    "XML",
    "NFe",
    "ENF",
    "Entrada de Nota fiscal",
    "chave de acesso"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "5",
  "revisar": false
}
```

**Conteúdo:**

Na **Situação 3 – XML Disponível**, os arquivos XML disponíveis são listados após a conclusão da rotina de consulta ao portal de NFe Eletrônica.

Nessa situação:

1. O XML fica disponível na listagem.
2. A NFe fica aguardando o processo de **Entrada de Nota fiscal**.
3. As ações referentes à **ENF** ficam disponíveis no **menu de manifestações** quando a chave de acesso é selecionada.

**Perguntas frequentes relacionadas:**
- O que significa “XML Disponível”?
- O que fazer quando o XML está disponível?
- Onde ficam as ações de ENF?

**Imagens associadas:**  
As imagens mostram a listagem de notas com XML disponível e as ações disponíveis para a nota selecionada.

---

### Chunk 16 — ENF recebida com sucesso

#### `nfe-fornecedor_entradas_enf-sucesso_07`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_enf-sucesso_07",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "ENF Recebida com Sucesso",
  "tipo_conteudo": "procedimento",
  "titulo": "Como identificar que a ENF foi recebida com sucesso",
  "palavras_chave": [
    "ENF",
    "Entrada de Nota fiscal",
    "fornecedor",
    "transportadora",
    "F7",
    "XML"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "6",
  "revisar": false
}
```

**Conteúdo:**

Na tela de **ENF**:

1. A tela virá parcialmente preenchida com informações de **fornecedor/transportadora**.
2. A tela de **associação de itens** ficará disponível para edição pelo usuário.
3. Após encerrar utilizando **`F7`**, aparecerá, ao lado das informações do XML, um ícone identificando que a entrada foi realizada com sucesso.

**Perguntas frequentes relacionadas:**
- Como saber se a entrada da NFe foi realizada com sucesso?
- A tela de ENF vem preenchida automaticamente?
- O que acontece ao encerrar a ENF com F7?

**Imagens associadas:**  
A imagem apresenta a tela de ENF com informações parcialmente preenchidas e a área de associação de itens. O manual também apresenta o indicador visual de entrada realizada com sucesso.

---

### Chunk 17 — Visualizar a manifestação da NFe

#### `nfe-fornecedor_entradas_visualizar-manifestacao_08`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_visualizar-manifestacao_08",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Visualizar Manifestação",
  "tipo_conteudo": "procedimento",
  "titulo": "Como visualizar a manifestação realizada em uma NFe",
  "palavras_chave": [
    "Manifestação",
    "Visualizar Manifestação",
    "coluna",
    "ícone"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "7",
  "revisar": false
}
```

**Conteúdo:**

O manual informa que:

1. É possível alterar a visualização das colunas de **Manifestação** e **Recebimento** por meio das opções disponíveis.
2. Também é possível visualizar a manifestação realizada e quando ela foi realizada passando o mouse sobre o **ícone da coluna**.

**Perguntas frequentes relacionadas:**
- Como visualizar a manifestação de uma NFe?
- Como saber quando uma manifestação foi realizada?
- É possível alterar a visualização das colunas Manifestação e Recebimento?

**Imagens associadas:**  
As imagens mostram a área das colunas **Manifestação** e **Recebimento** e a visualização das informações associadas ao ícone.

---

### Chunk 18 — Baixar o XML

#### `nfe-fornecedor_entradas_download-xml_09`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_download-xml_09",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Download do XML",
  "tipo_conteudo": "procedimento",
  "titulo": "Como baixar o XML de uma NFe",
  "palavras_chave": [
    "Download do XML",
    "XML",
    "NFe",
    "XML Disponível",
    "Situação 3"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "8",
  "revisar": false
}
```

**Conteúdo:**

Caso seja necessário, é possível realizar o **download do XML da nota após a Situação 3 – XML Disponível**.

**Perguntas frequentes relacionadas:**
- Quando posso baixar o XML da NFe?
- É possível fazer download do XML?
- Em qual situação o XML pode ser baixado?

**Imagens associadas:** nenhuma imagem específica associada ao trecho textual.

---

### Chunk 19 — Copiar as chaves de acesso

#### `nfe-fornecedor_entradas_chave-acesso_10`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_chave-acesso_10",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Copiar as Chaves de Acesso",
  "tipo_conteudo": "procedimento",
  "titulo": "Como copiar as chaves de acesso das NFe",
  "palavras_chave": [
    "chave de acesso",
    "NFe",
    "copiar",
    "coluna de chave de acesso"
  ],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "8",
  "revisar": false
}
```

**Conteúdo:**

O manual informa que é possível **copiar as chaves de acesso diretamente na coluna de chave de acesso**.

**Perguntas frequentes relacionadas:**
- Como copiar a chave de acesso de uma NFe?
- Onde encontro a chave de acesso?
- Posso copiar a chave diretamente da listagem?

**Imagens associadas:** nenhuma imagem específica associada ao trecho textual.

---

# 4. Glossário consolidado do Dataweb

| Termo/Sigla | Definição conforme os manuais |
|---|---|
| **DATAWEB** | Sistema no qual são executadas as operações descritas nos manuais. |
| **Módulo Administrativo** | Módulo utilizado no procedimento de verificação do Histórico de Vendas do Fornecedor. |
| **Módulo ENTRADAS** | Módulo utilizado para operações de estoque e funcionalidades relacionadas às NFe de fornecedor. |
| **Histórico do Fornecedor** | Área utilizada para consultar operações/transações relacionadas ao fornecedor. |
| **NFe** | Nota Fiscal Eletrônica. |
| **XML** | Arquivo/formato digital utilizado para registro das informações relativas à NF-e. |
| **DWServer** | Programa responsável por executar rotinas programadas de consulta e download dos arquivos XML. Segundo o manual, realiza consultas a cada três horas. |
| **ENF** | Sigla utilizada pelo manual no contexto de **Entrada de Nota fiscal**. |
| **CFOP** | Código utilizado no contexto da Natureza de Operação. |
| **CFOP 1.102** | Compra para comercialização. |
| **Natureza de Operação** | Informação apresentada no Histórico de Vendas do Fornecedor juntamente com o CFOP. |
| **Status NF-e** | Campo citado no manual para identificar a situação da Nota Fiscal Eletrônica no Portal de Vendas. |
| **STATUSNFE = E** | Identificação associada à situação em que o Status NF-e está como **Aguardando Autorização**. |
| **Não Manifestadas** | Situação de NFe ainda não manifestada. |
| **Aguardando XML** | Situação relacionada à pendência de autorização/tratativa da NFe. |
| **Aguardando download** | Situação posterior à manifestação positiva “Ciência da emissão”, na qual o sistema aguarda a rotina do DWServer para baixar e armazenar os arquivos. |
| **XML Disponível** | Situação na qual os arquivos XML disponíveis são listados e aguardam o processo de Entrada de Nota fiscal. |
| **Movimentação do estoque** | Funcionalidade acessada pela guia ESTOQUE para realizar operações de movimentação/perda. |
| **Perda/Outras Movimentações** | Opção dentro da movimentação do estoque utilizada no processo descrito para retirada/movimentação de produto. |
| **movimenta estoque** | Flag existente no cadastro do produto que o manual orienta desmarcar no procedimento apresentado. |
| **Pesquisar (F3)** | Botão/ação utilizado nos procedimentos de pesquisa de fornecedor e produto. |
| **F7** | Tecla utilizada para encerrar a tela de ENF. |

---

# 5. Pontos sinalizados para revisão

### `[REVISAR: nomenclatura do fornecedor no Manual OPR_DF_04]`

No texto do passo 6 aparece **“cliente ‘ZEISS’”**, embora todo o procedimento seja denominado **Histórico de Vendas do Fornecedor**. A base deve preservar o texto original, sem corrigir automaticamente “cliente” para “fornecedor”.

### `[REVISAR: nomenclatura/título do Manual OPR_DF_05]`

O título original contém **“FORNCEDOR”**, aparentemente uma grafia presente no documento. Deve ser mantida no campo `manual_origem`, mas pode ser revisada editorialmente no cadastro do manual.

### `[REVISAR: etapas posteriores à flag "movimenta estoque"]`

No Manual de Retirar/Mover Produto do Estoque, o texto disponível termina após **“Desmarque a flag ‘movimenta estoque’”**. Não há no conteúdo textual uma instrução explícita de **Salvar**, **Confirmar** ou equivalente. Portanto, essa etapa não foi inventada.

### `[REVISAR: etapas de manifestação da NFe]`

O manual explica as situações e menciona as ações de manifestação, mas não apresenta um passo a passo completo para cada tipo de manifestação. Portanto, não foram criados procedimentos detalhados além do que está efetivamente descrito.

### `[REVISAR: paginação do Manual OPR_DF_05]`

O sumário menciona **Download do XML na página 9** e **Copiar as Chaves de Acesso na página 10**, enquanto o arquivo fornecido possui **8 páginas** e os conteúdos aparecem na página 8. Para RAG, foi utilizada a paginação efetivamente presente no arquivo fornecido.

---

## Resultado para RAG

A estrutura resultante contém **19 chunks atômicos**, distribuídos em:

- **4 chunks** — Histórico de Vendas do Fornecedor;
- **5 chunks** — Retirar/Mover Produto do Estoque;
- **10 chunks** — NFe de Fornecedor.

Os chunks foram separados por intenção operacional para favorecer perguntas como:

- “Como faço...?”
- “Onde fica...?”
- “O que significa...?”
- “Como consultar...?”
- “O que acontece quando...?”

A nomenclatura de telas, botões, campos, teclas e situações foi preservada conforme os manuais.
