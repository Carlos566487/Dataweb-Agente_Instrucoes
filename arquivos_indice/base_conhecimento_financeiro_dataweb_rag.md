# Base de Conhecimento RAG — Sistema DATAWEB

## Objetivo

Documento estruturado para uso em pipeline de **Retrieval-Augmented Generation (RAG)** destinado a responder dúvidas de colaboradores sobre procedimentos e funcionalidades do sistema **DATAWEB**.

> **Regra de fidelidade:** o conteúdo abaixo foi estruturado a partir dos manuais disponibilizados. Não foram acrescentadas etapas operacionais que não estejam descritas nos documentos. Onde o manual apresenta informação incompleta ou ambígua, isso é indicado em `[REVISAR: ...]`.

---

# 1. Mapeamento estrutural dos manuais

Os documentos disponibilizados foram identificados como cinco manuais/arquivos:

1. **ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx**
   - Módulo Administrativo
   - Histórico de Vendas do Fornecedor

2. **ENTRADAS - Retirar Produto do Estoque_V2.docx**
   - Módulo ENTRADAS
   - Retirar/Mover Produto do Estoque

3. **ENTRADAS - NFe DE FORNECEDOR.docx**
   - Módulo ENTRADAS
   - NFe de Fornecedor

4. **Financeiro - Relatório de Estoque.docx**
   - Módulo Financeiro
   - Relatório de Estoque

5. **Financeiro - Relatório de Custo_1.docx**
   - Módulo Financeiro
   - Relatório de Custo

---

# 2. Manual — Verificação de Operações de Fornecedor

**Manual:** `ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx`  
**Código:** OPR_DF_04  
**Versão:** 1.0  
**Data:** 08/07/2024  
**Módulo:** Administrativo

## 2.1 Árvore estrutural

```text
Módulo Administrativo
└── Verificando o Histórico de Vendas do Fornecedor
    ├── Acessar o Módulo Administrativo DATAWEB
    ├── Acessar a guia Histórico
    ├── Histórico do Fornecedor
    ├── Pesquisar fornecedor
    │   ├── Digitação do fornecedor
    │   └── Outra forma de pesquisa
    ├── Selecionar período
    ├── Consultar Notas Fiscais
    │   └── Natureza de Operação / CFOP 1.102
    └── Visualizar informações do histórico
        ├── Produtos comprados x custos
        ├── Acompanhamento mensal de compras
        └── Resumo Financeiro
```

---

## Chunk 01 — Acessar o Histórico do Fornecedor

### `historico-fornecedor_administrativo_acesso_01`

**Metadados:**

```json
{
  "id": "historico-fornecedor_administrativo_acesso_01",
  "manual_origem": "ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx",
  "modulo": "Administrativo",
  "assunto": "Histórico de Vendas do Fornecedor",
  "subassunto": "Acesso",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar o Histórico de Vendas do Fornecedor no DATAWEB",
  "palavras_chave": ["DATAWEB", "Módulo Administrativo", "Histórico", "Histórico do Fornecedor", "fornecedor"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "2-3",
  "revisar": false
}
```

**Conteúdo:**

Para verificar o histórico de vendas de um fornecedor:

1. Entre pelo **Módulo Administrativo DATAWEB**.
2. Clique na guia **histórico**.
3. Escolha a aba **Histórico do Fornecedor**.
4. Digite o fornecedor que deseja pesquisar.

**Perguntas frequentes relacionadas:**
- Como acesso o Histórico de Vendas do Fornecedor?
- Onde fica o Histórico do Fornecedor no DATAWEB?
- Em qual módulo consulto o histórico de um fornecedor?

**Imagens associadas:** as figuras indicadas pelo manual apresentam o acesso ao **Módulo Administrativo DATAWEB**, a guia **histórico** e a aba **Histórico do Fornecedor**.

**Fonte:** Manual OPR_DF_04, páginas 2-3.

---

## Chunk 02 — Pesquisar o fornecedor

### `historico-fornecedor_administrativo_pesquisa_02`

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
  "palavras_chave": ["fornecedor", "pesquisa", "Pesquisar{F3}", "transações", "ZEISS"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": true
}
```

**Conteúdo:**

O manual apresenta outra forma de pesquisar o fornecedor para a consulta.

1. Utilize a forma de pesquisa apresentada na tela.
2. No exemplo do manual, foi escolhido o **cliente “ZEISS”**.
3. Clique em **`Pesquisar{F3}`**.
4. O sistema apresenta as transações atreladas ao cliente citado.

**Observação de fidelidade:** o manual usa literalmente o termo **“cliente”** nesse trecho, embora o procedimento seja sobre fornecedor. O termo não foi corrigido para preservar a nomenclatura original.

**Perguntas frequentes relacionadas:**
- Como pesquisar um fornecedor no histórico?
- Qual botão devo usar para realizar a pesquisa?
- Como visualizar as transações do registro pesquisado?

**Imagens associadas:** a figura apresenta a forma alternativa de pesquisa e as transações obtidas após a pesquisa.

**Fonte:** Manual OPR_DF_04, página 4.

---

## Chunk 03 — Consultar Notas Fiscais por período

### `historico-fornecedor_administrativo_notas-fiscais_03`

**Metadados:**

```json
{
  "id": "historico-fornecedor_administrativo_notas-fiscais_03",
  "manual_origem": "ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx",
  "modulo": "Administrativo",
  "assunto": "Histórico de Vendas do Fornecedor",
  "subassunto": "Notas Fiscais e período",
  "tipo_conteudo": "procedimento",
  "titulo": "Como consultar as Notas Fiscais de um fornecedor por período",
  "palavras_chave": ["Notas Fiscais", "período", "Buscar", "Natureza de Operação", "CFOP 1.102"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "5",
  "revisar": false
}
```

**Conteúdo:**

1. Escolha o período de data relacionado à venda executada pelo fornecedor.
2. Clique em **`Buscar`**.
3. Após a execução, podem ser verificadas as **Notas Fiscais** emitidas ao fornecedor escolhido.
4. O relatório apresenta a **Natureza de Operação** com o **CFOP nº 1.102**.

O manual informa:

> **CFOP nº 1.102 — Compra para comercialização:** classificam-se neste código as compras de mercadorias a serem comercializadas. Também são classificadas neste código as entradas de mercadorias em estabelecimento comercial de cooperativa recebidas de seus cooperados ou de estabelecimento de outra cooperativa.

**Perguntas frequentes relacionadas:**
- Como consultar as Notas Fiscais de um fornecedor?
- Como selecionar o período da consulta?
- O que aparece na Natureza de Operação?
- O que significa o CFOP 1.102?

**Imagens associadas:** a figura apresenta o resultado da consulta após a seleção do período.

**Fonte:** Manual OPR_DF_04, página 5.

---

## Chunk 04 — Informações disponíveis no histórico

### `historico-fornecedor_administrativo_relatorio_04`

**Metadados:**

```json
{
  "id": "historico-fornecedor_administrativo_relatorio_04",
  "manual_origem": "ENTRADAS - Verificar o Histórico de Vendas do Fornecedor.docx",
  "modulo": "Administrativo",
  "assunto": "Histórico de Vendas do Fornecedor",
  "subassunto": "Informações do relatório",
  "tipo_conteudo": "conceito",
  "titulo": "O que é possível visualizar no Histórico de Vendas do Fornecedor",
  "palavras_chave": ["histórico de venda do fornecedor", "produtos comprados", "custos", "compras", "resumo Financeiro"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "6",
  "revisar": false
}
```

**Conteúdo:**

No relatório de **“histórico de venda do fornecedor”**, o manual informa que é possível visualizar:

- relação de **“produtos comprados x custos”**;
- **“acompanhamento mensal de compras”**;
- **“resumo Financeiro”**.

**Perguntas frequentes relacionadas:**
- O que posso visualizar no histórico de venda do fornecedor?
- O histórico mostra produtos comprados e custos?
- O relatório apresenta resumo financeiro?

**Imagens associadas:** nenhuma imagem específica é necessária para este chunk; o conteúdo é explicitamente descrito no texto do manual.

**Fonte:** Manual OPR_DF_04, página 6.

---

# 3. Manual — Retirar/Mover Produto do Estoque

**Manual:** `ENTRADAS - Retirar Produto do Estoque_V2.docx`  
**Versão:** V 01.01  
**Data:** agosto de 2024  
**Módulo:** ENTRADAS

O manual declara que orienta o processo de retirada ou movimentação de produtos do estoque e apresenta etapas para apoiar a execução dessas operações.

## 3.1 Árvore estrutural

```text
Módulo ENTRADAS
└── Retirar/Mover Produto do Estoque
    ├── Módulo ENTRADAS da DATAWEB
    ├── Movimentação na guia ESTOQUE
    │   ├── estoque
    │   ├── Movimentação do estoque
    │   └── Perda/Outras Movimentações
    ├── Cadastro de Perda de Produto
    │   ├── Novo
    │   └── Produto / Quantidade
    ├── Pesquisa Produtos
    ├── Pesquisa de Produtos - Consulta Cadastro
    │   ├── Código de identificação do Produto
    │   ├── Pesquisar (F3)
    │   └── Cadastro
    └── Pesquisa de Produto - Movimenta Flag
        ├── Alterar
        └── movimenta estoque
```

---

## Chunk 05 — Acessar a movimentação de estoque

### `retirar-produto_entradas_movimentacao_01`

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
  "palavras_chave": ["ENTRADAS", "ESTOQUE", "Movimentação do estoque", "Perda/Outras Movimentações"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "2",
  "revisar": false
}
```

**Conteúdo:**

1. Acesse o **Módulo `<ENTRADAS>` da DATAWEB**.
2. Clique em **estoque**.
3. Acesse **Movimentação do estoque**.
4. Acesse **Perda/Outras Movimentações**.

**Perguntas frequentes relacionadas:**
- Como acessar a movimentação de estoque?
- Onde fica Perda/Outras Movimentações?
- Qual é o caminho no Módulo ENTRADAS?

**Imagens associadas:** a Figura 1 identifica o **Módulo Entradas DATAWEB**. A Figura 2 apresenta as opções da guia **ESTOQUE**.

**Fonte:** Manual Retirar/Mover Produto do Estoque, página 2.

---

## Chunk 06 — Abrir o Cadastro de Perda de Produto

### `retirar-produto_entradas_cadastro-perda_02`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_cadastro-perda_02",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Cadastro de Perda de Produto",
  "tipo_conteudo": "procedimento",
  "titulo": "Como abrir o Cadastro de Perda de Produto",
  "palavras_chave": ["Cadastro de perda de produto", "Novo", "Perda", "Produto", "Quantidade"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "3",
  "revisar": false
}
```

**Conteúdo:**

1. Após executar o caminho de **Perda/Outras Movimentações**, o sistema disponibiliza a tela **`Cadastro de perda de produto`**.
2. Clique na opção **`Novo`**.

**Perguntas frequentes relacionadas:**
- Como abrir o Cadastro de perda de produto?
- Qual opção devo clicar para iniciar um novo cadastro?
- Onde encontro a opção Novo?

**Imagens associadas:** a Figura 3 mostra o **Cadastro de Perda de Produto** e a opção **Novo**.

**Fonte:** Manual Retirar/Mover Produto do Estoque, página 3.

---

## Chunk 07 — Informar produto e quantidade

### `retirar-produto_entradas_cadastro-perda_03`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_cadastro-perda_03",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Cadastro de Perda de Produto - Quantidade",
  "tipo_conteudo": "procedimento",
  "titulo": "Como informar o produto e a quantidade a retirar do estoque",
  "palavras_chave": ["Produto", "Quantidade", "Cadastro de perda de Produto", "retirar"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

Na tela **Cadastro de perda de Produto**:

1. No campo **`Produto`**, digite o produto desejado.
2. No campo **`Quantidade`**, digite a quantidade a retirar.

**Perguntas frequentes relacionadas:**
- Onde informo o produto que será retirado?
- Onde informo a quantidade a retirar?
- Como registrar a quantidade no Cadastro de perda de Produto?

**Imagens associadas:** a Figura 4 apresenta os campos **Produto** e **Quantidade** no Cadastro de perda de Produto.

**Fonte:** Manual Retirar/Mover Produto do Estoque, página 4.

---

## Chunk 08 — Pesquisar produtos

### `retirar-produto_entradas_pesquisa-produtos_04`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_pesquisa-produtos_04",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Pesquisa Produtos",
  "tipo_conteudo": "procedimento",
  "titulo": "Como conferir a efetivação da alteração de estoque",
  "palavras_chave": ["Pesq. Produtos", "Pesquisa Produtos", "estoque", "efetivação"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

Após a alteração da quantidade de produtos em estoque:

1. Para conferir a efetivação do processo, clique em **`Pesq. Produtos`**.

**Perguntas frequentes relacionadas:**
- Como conferir a efetivação da alteração de estoque?
- Onde pesquisar produtos depois de alterar a quantidade?
- Qual opção devo usar para conferir o estoque?

**Imagens associadas:** a Figura 5 apresenta a opção **Pesquisa Produtos**.

**Fonte:** Manual Retirar/Mover Produto do Estoque, página 4.

---

## Chunk 09 — Consultar o cadastro do produto

### `retirar-produto_entradas_consulta-cadastro_05`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_consulta-cadastro_05",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Pesquisa de Produtos - Consulta Cadastro",
  "tipo_conteudo": "procedimento",
  "titulo": "Como consultar o cadastro de um produto",
  "palavras_chave": ["Pesquisa de Produtos", "Consulta Cadastro", "código", "Pesquisar (F3)", "Cadastro"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4-5",
  "revisar": false
}
```

**Conteúdo:**

Na tela disponibilizada após **Pesq. Produtos**:

1. Digite o **código de identificação do Produto**.
2. Clique em **`Pesquisar (F3)`**.
3. Clique na opção **`Cadastro`**.

**Perguntas frequentes relacionadas:**
- Como pesquisar um produto pelo código?
- Como consultar o cadastro de um produto?
- Qual botão devo usar para pesquisar o produto?

**Imagens associadas:** a Figura 6 apresenta a tela **Pesquisa de Produtos - Consulta Cadastro**.

**Fonte:** Manual Retirar/Mover Produto do Estoque, páginas 4-5.

---

## Chunk 10 — Desmarcar a flag movimenta estoque

### `retirar-produto_entradas_movimenta-flag_06`

**Metadados:**

```json
{
  "id": "retirar-produto_entradas_movimenta-flag_06",
  "manual_origem": "ENTRADAS - Retirar Produto do Estoque_V2.docx",
  "modulo": "ENTRADAS",
  "assunto": "Retirar/Mover Produto do Estoque",
  "subassunto": "Pesquisa de Produto - Movimenta Flag",
  "tipo_conteudo": "procedimento",
  "titulo": "Como desmarcar a flag movimenta estoque",
  "palavras_chave": ["Alterar", "movimenta estoque", "flag", "Cadastro", "produto"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "5-6",
  "revisar": true
}
```

**Conteúdo:**

Após executar a consulta do cadastro do produto:

1. Clique no botão **`Alterar`**.
2. Desmarque a flag **`movimenta estoque`**.

**Perguntas frequentes relacionadas:**
- Como desmarcar a flag movimenta estoque?
- Onde fica a opção movimenta estoque?
- Como alterar o cadastro do produto para desmarcar essa flag?

**Imagens associadas:** a Figura 7 corresponde à **Pesquisa de Produto - Movimenta Flag**.

**Ponto de revisão:** o manual termina com a indicação da Figura 7 e não apresenta uma etapa textual explícita de salvar ou confirmar a alteração.

**Fonte:** Manual Retirar/Mover Produto do Estoque, páginas 5-6.

---

# 4. Manual — NFe de Fornecedor

**Manual:** `ENTRADAS - NFe DE FORNECEDOR.docx`  
**Código:** OPR_DF_05  
**Versão:** 1.1  
**Data:** 01/08/2024  
**Módulo:** ENTRADAS

> **Observação:** o título do arquivo/manual aparece no documento como **“NFe DE FORNCEDOR”** em alguns elementos. A nomenclatura do arquivo foi preservada nos metadados.

## 4.1 Conceito geral

A funcionalidade **NFe de Fornecedor** foi desenvolvida para automatizar a entrada de NFe de fornecedores. Os arquivos XML são carregados e listados automaticamente. O **DWServer** executa rotinas programadas de consulta e download dos XMLs e, segundo o manual, atualiza as informações a cada três horas.

O recurso realiza consultas automáticas no portal a cada três horas e baixa os arquivos disponíveis para o CNPJ da empresa, respeitando o limite diário de acessos.

## 4.2 Árvore estrutural

```text
Módulo ENTRADAS
└── NFe de Fornecedor
    ├── Introdução
    ├── Acessar o Módulo Entradas DATAWEB
    ├── Escolha dos parâmetros de consulta
    │   ├── NFe de Fornecedor
    │   ├── range de datas
    │   └── código XML
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

## Chunk 11 — Funcionamento da NFe de Fornecedor e DWServer

### `nfe-fornecedor_entradas_conceito_01`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_conceito_01",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Funcionamento e automação",
  "tipo_conteudo": "conceito",
  "titulo": "Como funciona a funcionalidade NFe de Fornecedor",
  "palavras_chave": ["NFe de Fornecedor", "XML", "DWServer", "consulta automática", "download"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "1",
  "revisar": false
}
```

**Conteúdo:**

A funcionalidade **NFe de Fornecedor** automatiza o processo de entrada de NFe de fornecedores.

- Os arquivos **XML** das notas fiscais são carregados e listados automaticamente.
- O **DWServer** é responsável por executar rotinas programadas.
- Depois que a ferramenta é habilitada e configurada no sistema, o DWServer inicia a consulta e o download dos arquivos XML.
- As informações são atualizadas a cada **três horas**.
- As consultas automáticas ao portal são realizadas a cada três horas.
- Durante essas consultas, todos os arquivos disponíveis para o CNPJ da empresa são baixados, respeitando o limite diário de acessos.
- O processo substitui o processo manual de importação descrito no manual.

**Perguntas frequentes relacionadas:**
- Como funciona a NFe de Fornecedor?
- O que é o DWServer nesse processo?
- De quanto em quanto tempo o sistema consulta o portal?
- O XML é baixado manualmente?

**Imagens associadas:** nenhuma.

**Fonte:** Manual NFe de Fornecedor, página 1.

---

## Chunk 12 — Acessar o Módulo Entradas

### `nfe-fornecedor_entradas_acesso_02`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_acesso_02",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Acesso",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar a NFe de Fornecedor no DATAWEB",
  "palavras_chave": ["DATAWEB", "Módulo Entradas", "NFe de Fornecedor"],
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
- Em qual módulo fica a NFe de Fornecedor?
- Como acessar o Módulo Entradas?

**Imagens associadas:** o manual indica figura para o acesso ao **Módulo Entradas**.

**Fonte:** Manual NFe de Fornecedor, página 2.

---

## Chunk 13 — Definir parâmetros de consulta da NFe

### `nfe-fornecedor_entradas_parametros_03`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_parametros_03",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Parâmetros de consulta",
  "tipo_conteudo": "procedimento",
  "titulo": "Como pesquisar NFe de fornecedor por período ou código XML",
  "palavras_chave": ["NFe de Fornecedor", "range", "datas", "XML", "código XML"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "3",
  "revisar": false
}
```

**Conteúdo:**

Após acessar o Módulo Entradas:

1. Clique na aba **“NFe de Fornecedor”**.
2. Digite o **`range` de datas** para selecionar os **`XMLs`**.
3. Caso tenha um **código XML**, ele pode ser utilizado para pesquisa.

**Perguntas frequentes relacionadas:**
- Como consultar NFe de fornecedor por período?
- Posso pesquisar usando um código XML?
- Onde informo o range de datas?

**Imagens associadas:** nenhuma figura foi explicitamente descrita no texto desse trecho.

**Fonte:** Manual NFe de Fornecedor, página 3.

---

## Chunk 14 — Visualizar a listagem das NFe do fornecedor

### `nfe-fornecedor_entradas_listagem_04`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_listagem_04",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Listagem das NFe",
  "tipo_conteudo": "conceito",
  "titulo": "Como as NFe do fornecedor são organizadas na ferramenta",
  "palavras_chave": ["listagem", "NFe", "Fornecedor", "Situação"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

Ao acessar a ferramenta, fica disponível uma **listagem das NFe do Fornecedor**, agrupando-as pela **Situação**.

**Perguntas frequentes relacionadas:**
- Onde ficam as NFe do fornecedor?
- Como as NFe são organizadas na tela?
- O que é a Situação da NFe?

**Imagens associadas:** nenhuma figura foi descrita textualmente neste trecho.

**Fonte:** Manual NFe de Fornecedor, página 4.

---

## Chunk 15 — Situação 1: Não Manifestadas

### `nfe-fornecedor_entradas_nao-manifestadas_05`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_nao-manifestadas_05",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Situação 1 – Não Manifestadas",
  "tipo_conteudo": "conceito",
  "titulo": "O que significa a situação Não Manifestadas",
  "palavras_chave": ["Não Manifestadas", "manifestação", "desconhecimento da operação", "chave de acesso", "NFe"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

A **Situação 1 – Não Manifestadas** é descrita pelo manual para casos em que:

- uma NFe é emitida contra o CNPJ da empresa sem ter sido solicitada; ou
- a empresa não reconhece a operação.

Nessas situações, o manual orienta manifestar **desconhecimento da operação**.

O documento informa que essa manifestação:

- evita que o destinatário seja tributado, conforme descrito no manual;
- funciona como proteção contra possíveis fraudes e notas frias;
- pode ser utilizada quando o receptor precisa registrar uma operação legalmente acordada como não realizada;
- também pode ser usada quando o fornecedor enviou a mercadoria, mas ela não chegou.

Para acessar as ações de manifestação:

1. Marque a caixa da **chave de acesso**.
2. Clique com o **botão direito do mouse**.
3. Utilize as ações disponíveis no **menu de manifestações**.

**Aviso:** após confirmar a operação, o fornecedor não pode mais cancelar a NFe.

**Perguntas frequentes relacionadas:**
- O que significa uma NFe Não Manifestada?
- Quando devo manifestar desconhecimento da operação?
- Como acessar o menu de manifestações?
- O fornecedor pode cancelar a NFe depois da confirmação?

**Imagens associadas:** o manual possui conteúdo visual associado à funcionalidade, porém o texto extraído não descreve detalhadamente todos os elementos da imagem.

**Fonte:** Manual NFe de Fornecedor, página 4.

---

## Chunk 16 — Situação 2: Aguardando XML

### `nfe-fornecedor_entradas_aguardando-xml_06`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_aguardando-xml_06",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Situação 2 – Aguardando XML",
  "tipo_conteudo": "conceito",
  "titulo": "O que significa a situação Aguardando XML",
  "palavras_chave": ["Aguardando XML", "Status NF-e", "Aguardando Autorização", "STATUSNFE = E", "DWServer"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "4-5",
  "revisar": false
}
```

**Conteúdo:**

A **Situação 2 – Aguardando XML** ocorre quando a causa/tratativa da Nota Fiscal Eletrônica está pendente de autorização.

O manual relaciona essa situação a notas em que a coluna **`Status NF-e`** no Portal de Vendas está como **`Aguardando Autorização`**, identificada como **`STATUSNFE = E`**.

O manual também informa:

1. Após uma manifestação positiva **`Ciência da emissão`** referente à NFe, o sistema atualiza o status da nota.
2. O registro avança para a situação **`Aguardando download`**.
3. É necessário aguardar a próxima rotina de consulta do **DWServer** ao portal.
4. Os downloads e o armazenamento dos arquivos são realizados automaticamente pelo sistema.

O **XML** é descrito como a versão digital da nota fiscal, utilizada para registrar informações relativas à NF-e e seguindo um padrão nacional de escrituração fiscal.

**Perguntas frequentes relacionadas:**
- O que significa Aguardando XML?
- O que significa STATUSNFE = E?
- O que acontece após Ciência da emissão?
- Quem realiza o download do XML?

**Imagens associadas:** nenhuma descrição objetiva adicional foi fornecida no texto extraído.

**Fonte:** Manual NFe de Fornecedor, páginas 4-5.

---

## Chunk 17 — Situação 3: XML Disponível

### `nfe-fornecedor_entradas_xml-disponivel_07`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_xml-disponivel_07",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Situação 3 – XML Disponível",
  "tipo_conteudo": "conceito",
  "titulo": "O que significa a situação XML Disponível",
  "palavras_chave": ["XML Disponível", "XML", "NFe", "ENF", "Entrada de Nota fiscal", "chave de acesso"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "5",
  "revisar": false
}
```

**Conteúdo:**

Na **Situação 3 – XML Disponível**:

1. A rotina de consulta ao portal de NFe Eletrônica é concluída.
2. Os arquivos disponíveis são listados nessa situação.
3. Os arquivos ficam aguardando o processo de **Entrada de Nota fiscal**.
4. As ações referentes à **ENF** ficam disponíveis no **menu de manifestações** ao selecionar a **chave de acesso**.

**Perguntas frequentes relacionadas:**
- O que significa XML Disponível?
- O que fazer quando o XML está disponível?
- Onde ficam as ações referentes à ENF?

**Imagens associadas:** nenhuma descrição objetiva adicional foi fornecida no texto extraído.

**Fonte:** Manual NFe de Fornecedor, página 5.

---

## Chunk 18 — Identificar ENF recebida com sucesso

### `nfe-fornecedor_entradas_enf-sucesso_08`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_enf-sucesso_08",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "ENF Recebida com Sucesso",
  "tipo_conteudo": "conceito",
  "titulo": "Como identificar que a ENF foi recebida com sucesso",
  "palavras_chave": ["ENF", "Entrada de Nota fiscal", "fornecedor/transportadora", "F7", "XML"],
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
3. Após encerrar com **`F7`**, ao lado das informações do XML ficará visível um ícone identificando que a entrada foi realizada com sucesso.

**Perguntas frequentes relacionadas:**
- Como saber se a ENF foi recebida com sucesso?
- A tela de ENF vem parcialmente preenchida?
- O que acontece depois de pressionar F7?

**Imagens associadas:** o manual apresenta uma figura associada à tela de ENF e ao indicador de entrada realizada com sucesso.

**Fonte:** Manual NFe de Fornecedor, página 6.

---

## Chunk 19 — Visualizar manifestação

### `nfe-fornecedor_entradas_visualizar-manifestacao_09`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_visualizar-manifestacao_09",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Visualizar Manifestação",
  "tipo_conteudo": "procedimento",
  "titulo": "Como visualizar uma manifestação realizada",
  "palavras_chave": ["Manifestação", "Visualizar Manifestação", "coluna", "ícone", "Recebimento"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "7",
  "revisar": false
}
```

**Conteúdo:**

O manual informa que:

1. É possível alterar a visualização das colunas **Manifestação** e **Recebimento** através das opções apresentadas.
2. É possível visualizar a manifestação realizada e quando ela foi realizada passando o mouse sobre o **ícone da coluna**.

**Perguntas frequentes relacionadas:**
- Como visualizar uma manifestação realizada?
- Como saber quando a manifestação foi realizada?
- Posso alterar a visualização das colunas Manifestação e Recebimento?

**Imagens associadas:** o manual apresenta figuras associadas às opções de visualização e ao ícone da coluna.

**Fonte:** Manual NFe de Fornecedor, página 7.

---

## Chunk 20 — Fazer download do XML

### `nfe-fornecedor_entradas_download-xml_10`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_download-xml_10",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Download do XML",
  "tipo_conteudo": "procedimento",
  "titulo": "Como baixar o XML de uma NFe",
  "palavras_chave": ["Download do XML", "XML", "NFe", "XML Disponível", "Situação 3"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "8",
  "revisar": false
}
```

**Conteúdo:**

Caso necessário, é possível realizar o **download do XML da nota após a Situação 3 – XML Disponível**.

**Perguntas frequentes relacionadas:**
- Quando posso baixar o XML da nota?
- Como baixar o XML de uma NFe?
- Em qual situação o XML está disponível para download?

**Imagens associadas:** nenhuma.

**Fonte:** Manual NFe de Fornecedor, página 8.

---

## Chunk 21 — Copiar chaves de acesso

### `nfe-fornecedor_entradas_chave-acesso_11`

**Metadados:**

```json
{
  "id": "nfe-fornecedor_entradas_chave-acesso_11",
  "manual_origem": "ENTRADAS - NFe DE FORNECEDOR.docx",
  "modulo": "ENTRADAS",
  "assunto": "NFe de Fornecedor",
  "subassunto": "Chaves de Acesso",
  "tipo_conteudo": "procedimento",
  "titulo": "Como copiar as chaves de acesso das NFe",
  "palavras_chave": ["chave de acesso", "NFe", "copiar", "coluna de chave de acesso"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "8",
  "revisar": false
}
```

**Conteúdo:**

É possível **copiar as chaves de acesso diretamente na coluna de chave de acesso**.

**Perguntas frequentes relacionadas:**
- Como copiar uma chave de acesso?
- Onde encontro a chave de acesso da NFe?
- Posso copiar a chave diretamente na listagem?

**Imagens associadas:** nenhuma.

**Fonte:** Manual NFe de Fornecedor, página 8.

---

# 5. Manual — Relatório de Estoque

**Manual:** `Financeiro - Relatório de Estoque.docx`  
**Código:** OPR_DF_05  
**Versão:** 1.1  
**Data:** 18/07/2024  
**Módulo:** Financeiro

## 5.1 Conceito de relatório de estoque

O manual define o relatório de estoque como um documento que fornece uma visão detalhada sobre a quantidade e o valor dos itens armazenados em depósito, armazém ou loja.

Segundo o manual, os principais componentes podem incluir:

1. **Descrição dos Itens:** nome, código, categoria e descrição.
2. **Quantidade em Estoque:** número de unidades atualmente disponíveis.
3. **Nível Mínimo e Máximo de Estoque:** níveis desejados para cada item.
4. **Custo Unitário e Total:** custo por unidade e custo total, calculado como quantidade multiplicada pelo custo unitário.
5. **Localização do Estoque:** local onde cada item está armazenado.
6. **Data de Entrada:** data em que os itens foram adicionados ao estoque.
7. **Data de Vencimento:** data de validade dos itens perecíveis.
8. **Histórico de Movimentação:** registro de entradas e saídas, incluindo datas e quantidades.

O relatório é apresentado no manual como utilizado para:

- Gerenciamento de Inventário;
- Planejamento de Compras;
- Controle Financeiro;
- Otimização de Armazenamento.

## 5.2 Árvore estrutural

```text
Módulo Financeiro
└── Relatório de Estoque
    ├── Conceito e finalidade
    ├── Acessar o Módulo Financeiro DATAWEB
    ├── Relatórios e Gráficos → Gráficos
    ├── Relatório de Estoque
    ├── Escolha do modelo de relatório
    │   └── Estoque → Estoque (Venda 2016)-Estoque
    ├── Escolha do item
    └── Relatório de Estoque disponibilizado
```

---

## Chunk 22 — Acessar o Relatório de Estoque

### `relatorio-estoque_financeiro_acesso_01`

**Metadados:**

```json
{
  "id": "relatorio-estoque_financeiro_acesso_01",
  "manual_origem": "Financeiro - Relatório de Estoque.docx",
  "modulo": "Financeiro",
  "assunto": "Relatório de Estoque",
  "subassunto": "Acesso",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar o Relatório de Estoque no DATAWEB",
  "palavras_chave": ["Módulo Financeiro", "Relatórios e Gráficos", "Relatórios", "Relatório de Estoque"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "3",
  "revisar": false
}
```

**Conteúdo:**

1. Acesse o **Módulo Financeiro DATAWEB**.
2. Clique na guia **`Relatórios e Gráficos`**.
3. Na sequência, clique em **`Relatórios`**.

**Perguntas frequentes relacionadas:**
- Como acessar o Relatório de Estoque?
- Em qual módulo fica o relatório?
- Onde encontro a opção Relatórios?

**Imagens associadas:** nenhuma descrição textual específica de imagem foi fornecida para esses dois passos.

**Fonte:** Manual Financeiro - Relatório de Estoque, página 3.

---

## Chunk 23 — Escolher o modelo do Relatório de Estoque

### `relatorio-estoque_financeiro_modelo_02`

**Metadados:**

```json
{
  "id": "relatorio-estoque_financeiro_modelo_02",
  "manual_origem": "Financeiro - Relatório de Estoque.docx",
  "modulo": "Financeiro",
  "assunto": "Relatório de Estoque",
  "subassunto": "Escolha do modelo",
  "tipo_conteudo": "procedimento",
  "titulo": "Como escolher o modelo do Relatório de Estoque",
  "palavras_chave": ["Estoque", "Estoque (Venda 2016)-Estoque", "modelo de relatório"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

Conforme o manual:

1. Na guia **`Estoque`**, acesse a aba **`Estoque (Venda 2016)-Estoque`**.
2. Escolha o modelo de relatório a ser visualizado.

**Perguntas frequentes relacionadas:**
- Qual modelo devo escolher para o Relatório de Estoque?
- Onde fica a aba Estoque (Venda 2016)-Estoque?
- Como selecionar o modelo do relatório?

**Imagens associadas:** o manual apresenta uma figura relacionada à guia **Estoque**, à aba **Estoque (Venda 2016)-Estoque** e à escolha do modelo.

**Fonte:** Manual Financeiro - Relatório de Estoque, página 4.

---

## Chunk 24 — Escolher o item e visualizar o relatório

### `relatorio-estoque_financeiro_visualizacao_03`

**Metadados:**

```json
{
  "id": "relatorio-estoque_financeiro_visualizacao_03",
  "manual_origem": "Financeiro - Relatório de Estoque.docx",
  "modulo": "Financeiro",
  "assunto": "Relatório de Estoque",
  "subassunto": "Escolha do item e resultado",
  "tipo_conteudo": "procedimento",
  "titulo": "Como escolher o item e visualizar o Relatório de Estoque",
  "palavras_chave": ["item", "Relatório de Estoque", "visualização", "relatório disponibilizado"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "5",
  "revisar": false
}
```

**Conteúdo:**

1. Escolha o **item a ser visualizado**.
2. Após a execução correta dos itens anteriores, o sistema disponibilizará a **visualização do relatório de estoque**.

**Perguntas frequentes relacionadas:**
- Como escolher o item do Relatório de Estoque?
- Quando o relatório de estoque é disponibilizado?
- O que aparece após executar as etapas anteriores?

**Imagens associadas:** o manual apresenta uma figura relacionada à escolha do item e informa a disponibilização do relatório de estoque.

**Fonte:** Manual Financeiro - Relatório de Estoque, página 5.

---

# 6. Manual — Relatório de Custo

**Manual:** `Financeiro - Relatório de Custo_1.docx`  
**Código:** OPR_DF_05  
**Versão:** 1.1  
**Data:** 18/07/2024  
**Módulo:** Financeiro

## 6.1 Conceito de relatório de custos

O manual define o relatório de custos como um documento que detalha os gastos incorridos em determinado período ou projeto.

Os principais componentes indicados são:

1. **Descrição dos Itens de Custo:** produtos, serviços ou recursos adquiridos.
2. **Quantidades:** quantidade de cada item adquirido.
3. **Preços Unitários:** custo por unidade.
4. **Custos Totais:** quantidade multiplicada pelo preço unitário.
5. **Categorias de Custo:** classificação dos custos em categorias.
6. **Período de Tempo:** intervalo ao qual o relatório se refere.
7. **Comparação com o Orçamento:** comparação das despesas reais com o orçamento planejado.

O manual informa que esses relatórios auxiliam no controle de gastos, identificação de oportunidades de economia e tomada de decisões financeiras.

## 6.2 Árvore estrutural

```text
Módulo Financeiro
└── Relatório de Custo
    ├── Conceito e finalidade
    ├── Acessar o Módulo Financeiro DATAWEB
    ├── Relatórios e Gráficos → Relatórios
    ├── Relatório de Custo
    │   └── Pesquisa relatório → "custo"
    ├── Escolha do modelo de relatório
    ├── Configuração do relatório
    └── Relatório de Custo disponibilizado
```

---

## Chunk 25 — Acessar o Relatório de Custo

### `relatorio-custo_financeiro_acesso_01`

**Metadados:**

```json
{
  "id": "relatorio-custo_financeiro_acesso_01",
  "manual_origem": "Financeiro - Relatório de Custo_1.docx",
  "modulo": "Financeiro",
  "assunto": "Relatório de Custo",
  "subassunto": "Acesso",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar o Relatório de Custo no DATAWEB",
  "palavras_chave": ["Módulo Financeiro", "Relatórios e Gráficos", "Relatórios", "Relatório de Custo"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "2-3",
  "revisar": false
}
```

**Conteúdo:**

1. Acesse o **Módulo Financeiro DATAWEB**.
2. Clique na guia **`Relatórios e Gráficos`**.
3. Na sequência, clique em **`Relatórios`**.

**Perguntas frequentes relacionadas:**
- Como acessar o Relatório de Custo?
- Em qual módulo fica o Relatório de Custo?
- Onde encontro Relatórios no DATAWEB?

**Imagens associadas:** nenhuma descrição textual específica de imagem foi fornecida para esse trecho.

**Fonte:** Manual Financeiro - Relatório de Custo, páginas 2-3.

---

## Chunk 26 — Pesquisar o Relatório de Custo

### `relatorio-custo_financeiro_pesquisa_02`

**Metadados:**

```json
{
  "id": "relatorio-custo_financeiro_pesquisa_02",
  "manual_origem": "Financeiro - Relatório de Custo_1.docx",
  "modulo": "Financeiro",
  "assunto": "Relatório de Custo",
  "subassunto": "Pesquisa do relatório",
  "tipo_conteudo": "procedimento",
  "titulo": "Como localizar o Relatório de Custo",
  "palavras_chave": ["Relatório de Custo", "Pesquisa relatório", "custo", "enter"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": false,
  "pagina_origem": "3",
  "revisar": false
}
```

**Conteúdo:**

Na área de relatórios:

1. No campo **`Pesquisa relatório`**, digite **“custo”**.
2. Tecle **`enter`**.

**Perguntas frequentes relacionadas:**
- Como localizar o Relatório de Custo?
- O que devo digitar no campo Pesquisa relatório?
- Como pesquisar o relatório de custo?

**Imagens associadas:** nenhuma.

**Fonte:** Manual Financeiro - Relatório de Custo, página 3.

---

## Chunk 27 — Escolher o modelo do Relatório de Custo

### `relatorio-custo_financeiro_modelo_03`

**Metadados:**

```json
{
  "id": "relatorio-custo_financeiro_modelo_03",
  "manual_origem": "Financeiro - Relatório de Custo_1.docx",
  "modulo": "Financeiro",
  "assunto": "Relatório de Custo",
  "subassunto": "Escolha do modelo",
  "tipo_conteudo": "procedimento",
  "titulo": "Como escolher o modelo do Relatório de Custo",
  "palavras_chave": ["modelo de relatório", "Relatório de Custo", "visualização"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

1. Conforme a figura apresentada no manual, escolha o **modelo de relatório a ser visualizado**.

**Perguntas frequentes relacionadas:**
- Como escolher o modelo do Relatório de Custo?
- Qual modelo de relatório devo selecionar?
- Onde seleciono o modelo do relatório?

**Imagens associadas:** a figura indicada pelo manual apresenta a etapa de escolha do modelo de relatório.

**Fonte:** Manual Financeiro - Relatório de Custo, página 4.

---

## Chunk 28 — Configurar e visualizar o Relatório de Custo

### `relatorio-custo_financeiro_configuracao_04`

**Metadados:**

```json
{
  "id": "relatorio-custo_financeiro_configuracao_04",
  "manual_origem": "Financeiro - Relatório de Custo_1.docx",
  "modulo": "Financeiro",
  "assunto": "Relatório de Custo",
  "subassunto": "Configuração e visualização",
  "tipo_conteudo": "procedimento",
  "titulo": "Como configurar e visualizar o Relatório de Custo",
  "palavras_chave": ["configuração", "parâmetros", "visualização", "Relatório de Custo"],
  "perfil_usuario": "não informado",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4-5",
  "revisar": true
}
```

**Conteúdo:**

1. Conforme a figura apresentada no manual, configure os **parâmetros para a visualização do relatório**.
2. Após a execução correta dos itens anteriores, o sistema disponibilizará a **visualização do relatório de custo**.

**Ponto de revisão:** o manual não fornece, no texto extraído, a relação dos parâmetros que devem ser configurados. Portanto, não foram inventados nomes ou valores de campos.

**Perguntas frequentes relacionadas:**
- Como configurar os parâmetros do Relatório de Custo?
- Quais parâmetros devo configurar?
- Quando o Relatório de Custo é disponibilizado?

**Imagens associadas:** a figura da página 4 apresenta a configuração dos parâmetros; o texto não transcreve quais parâmetros aparecem.

**Fonte:** Manual Financeiro - Relatório de Custo, páginas 4-5.

---

# 7. Glossário consolidado

| Termo | Definição conforme os manuais |
|---|---|
| **DATAWEB** | Sistema utilizado nos procedimentos descritos nos manuais. |
| **Módulo Administrativo** | Módulo utilizado para verificar o Histórico de Vendas do Fornecedor. |
| **Módulo ENTRADAS** | Módulo utilizado para operações de estoque e NFe de fornecedor. |
| **Módulo Financeiro** | Módulo utilizado nos procedimentos de emissão de Relatório de Estoque e Relatório de Custo. |
| **Histórico do Fornecedor** | Área utilizada para consultar informações e transações relacionadas ao fornecedor. |
| **NFe** | Nota Fiscal Eletrônica. |
| **XML** | Formato/arquivo digital utilizado para registrar informações relativas à NF-e. |
| **DWServer** | Programa responsável por executar as rotinas programadas de consulta e download dos XMLs. |
| **ENF** | Sigla usada no manual no contexto de Entrada de Nota fiscal. |
| **CFOP** | Código apresentado na Natureza de Operação. |
| **CFOP 1.102** | “Compra para comercialização”, conforme definição apresentada no manual. |
| **Natureza de Operação** | Informação apresentada no Histórico de Vendas do Fornecedor juntamente com o CFOP. |
| **Status NF-e** | Campo citado no Portal de Vendas para indicar a situação da NFe. |
| **STATUSNFE = E** | Identificação associada a “Aguardando Autorização”, conforme o manual. |
| **Não Manifestadas** | Situação de NFe descrita no manual para notas ainda não manifestadas. |
| **Desconhecimento da operação** | Manifestação indicada pelo manual quando a NFe não foi solicitada ou a empresa não reconhece a operação. |
| **Aguardando XML** | Situação relacionada à pendência de autorização/tratativa da NFe. |
| **Aguardando download** | Situação posterior à “Ciência da emissão”, aguardando a rotina do DWServer. |
| **XML Disponível** | Situação em que os arquivos XML disponíveis são listados e aguardam o processo de Entrada de Nota fiscal. |
| **Movimentação do estoque** | Funcionalidade do Módulo ENTRADAS usada no procedimento de retirada/movimentação de produto. |
| **Perda/Outras Movimentações** | Opção acessada dentro da movimentação do estoque. |
| **movimenta estoque** | Flag mencionada no cadastro do produto que o manual orienta desmarcar. |
| **Pesquisar (F3)** | Ação utilizada na pesquisa de produto. |
| **Pesquisar{F3}** | Forma escrita no manual OPR_DF_04 para a pesquisa apresentada no Histórico do Fornecedor. |
| **F7** | Tecla utilizada para encerrar a tela de ENF. |
| **Relatório de Estoque** | Documento/relatório que apresenta visão sobre quantidade e valor dos itens armazenados. |
| **Relatório de Custo** | Documento que detalha gastos incorridos em determinado período ou projeto. |
| **Pesquisa relatório** | Campo utilizado no Relatório de Custo para localizar o relatório por termo. |
| **Estoque (Venda 2016)-Estoque** | Aba indicada pelo manual de Relatório de Estoque para escolha do modelo. |

---

# 8. Pontos sinalizados para revisão

## `[REVISAR: "cliente" x "fornecedor" no OPR_DF_04]`

No passo 6 do manual **ENTRADAS - Verificar o Histórico de Vendas do Fornecedor**, o documento diz literalmente:

> “No caso abaixo, escolhemos o cliente ‘ZEISS’...”

O procedimento é de fornecedor, mas o texto usa **cliente**. O conteúdo foi preservado sem correção automática.

## `[REVISAR: etapa de salvamento no Retirar/Mover Produto do Estoque]`

O manual termina com:

1. Clique no botão **Alterar**.
2. Desmarque a flag **movimenta estoque**.

Não existe no texto extraído uma etapa explícita de **Salvar**, **Confirmar** ou equivalente. Essa etapa não foi inventada.

## `[REVISAR: parâmetros do Relatório de Custo]`

O manual instrui a configurar os parâmetros para visualização do relatório, mas não transcreve os nomes/valores desses parâmetros no texto extraído. A figura é citada, porém os parâmetros não foram incorporados sem confirmação visual.

## `[REVISAR: conteúdo visual das telas]`

Os manuais possuem capturas/figuras. Quando o texto fornece apenas o título da figura, a descrição foi limitada ao que está explicitamente identificado no documento. Não foram inferidos nomes de campos ou botões que não aparecem no texto extraído.

## `[REVISAR: paginação do manual NFe]`

O sumário do manual de NFe apresenta referências às páginas 9 e 10 para “Download do XML” e “Copiar as Chaves de Acesso”, porém o arquivo disponibilizado contém 8 páginas e esses conteúdos aparecem na página 8 do arquivo. Para esta base, foi usada a paginação efetivamente disponível no arquivo.

## `[REVISAR: códigos OPR_DF_05]`

Dois manuais diferentes disponibilizados utilizam o código **OPR_DF_05**:

- `ENTRADAS - NFe DE FORNECEDOR.docx`
- `Financeiro - Relatório de Estoque.docx`
- `Financeiro - Relatório de Custo_1.docx`

Por isso, os IDs dos chunks utilizam o **slug do assunto** e não apenas o código OPR_DF_05, evitando colisões na base vetorial.

---

# 9. Resumo dos chunks

| ID | Módulo | Assunto | Tipo |
|---|---|---|---|
| `historico-fornecedor_administrativo_acesso_01` | Administrativo | Histórico do Fornecedor | procedimento |
| `historico-fornecedor_administrativo_pesquisa_02` | Administrativo | Pesquisa de fornecedor | procedimento |
| `historico-fornecedor_administrativo_notas-fiscais_03` | Administrativo | Notas Fiscais | procedimento |
| `historico-fornecedor_administrativo_relatorio_04` | Administrativo | Informações do histórico | conceito |
| `retirar-produto_entradas_movimentacao_01` | ENTRADAS | Movimentação de estoque | procedimento |
| `retirar-produto_entradas_cadastro-perda_02` | ENTRADAS | Cadastro de Perda | procedimento |
| `retirar-produto_entradas_cadastro-perda_03` | ENTRADAS | Produto/Quantidade | procedimento |
| `retirar-produto_entradas_pesquisa-produtos_04` | ENTRADAS | Pesquisa Produtos | procedimento |
| `retirar-produto_entradas_consulta-cadastro_05` | ENTRADAS | Consulta Cadastro | procedimento |
| `retirar-produto_entradas_movimenta-flag_06` | ENTRADAS | Movimenta Flag | procedimento |
| `nfe-fornecedor_entradas_conceito_01` | ENTRADAS | Funcionamento NFe | conceito |
| `nfe-fornecedor_entradas_acesso_02` | ENTRADAS | Acesso | procedimento |
| `nfe-fornecedor_entradas_parametros_03` | ENTRADAS | Parâmetros | procedimento |
| `nfe-fornecedor_entradas_listagem_04` | ENTRADAS | Listagem | conceito |
| `nfe-fornecedor_entradas_nao-manifestadas_05` | ENTRADAS | Não Manifestadas | conceito |
| `nfe-fornecedor_entradas_aguardando-xml_06` | ENTRADAS | Aguardando XML | conceito |
| `nfe-fornecedor_entradas_xml-disponivel_07` | ENTRADAS | XML Disponível | conceito |
| `nfe-fornecedor_entradas_enf-sucesso_08` | ENTRADAS | ENF recebida | conceito |
| `nfe-fornecedor_entradas_visualizar-manifestacao_09` | ENTRADAS | Visualizar Manifestação | procedimento |
| `nfe-fornecedor_entradas_download-xml_10` | ENTRADAS | Download XML | procedimento |
| `nfe-fornecedor_entradas_chave-acesso_11` | ENTRADAS | Chaves de Acesso | procedimento |
| `relatorio-estoque_financeiro_acesso_01` | Financeiro | Relatório de Estoque | procedimento |
| `relatorio-estoque_financeiro_modelo_02` | Financeiro | Modelo de relatório | procedimento |
| `relatorio-estoque_financeiro_visualizacao_03` | Financeiro | Visualização | procedimento |
| `relatorio-custo_financeiro_acesso_01` | Financeiro | Relatório de Custo | procedimento |
| `relatorio-custo_financeiro_pesquisa_02` | Financeiro | Pesquisa | procedimento |
| `relatorio-custo_financeiro_modelo_03` | Financeiro | Modelo | procedimento |
| `relatorio-custo_financeiro_configuracao_04` | Financeiro | Configuração | procedimento |

**Total: 28 chunks atômicos.**

---

# 10. Diretrizes de uso no RAG

Para indexação vetorial, recomenda-se utilizar cada bloco iniciado por `### [ID do chunk]` como unidade independente de conhecimento.

Os campos JSON permitem filtragem por:

- `modulo`
- `assunto`
- `subassunto`
- `tipo_conteudo`
- `perfil_usuario`
- `possui_imagem_referenciada`
- `revisar`

As perguntas frequentes foram construídas para representar diferentes formas naturais de consulta dos colaboradores, preservando como resposta o conteúdo efetivamente existente nos manuais.

**Fim do documento.**
