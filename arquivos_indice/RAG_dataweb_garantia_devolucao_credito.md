# Base de Conhecimento RAG — CAIXA: Garantia, Devolução e Crédito (V3)

**Manual de origem:** CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx
**Total de imagens no documento:** 30 (media/image1.jpg a image18.jpg, image19.png a image27.png)
**Relação com outro manual:** este documento detalha e refina os mesmos três assuntos (Garantia, Devolução, Utilizar Crédito do Cliente) que também aparecem no "Manual Operacional do Sistema DataWeb – Módulo Caixa". Por ser a versão **V3**, mais recente e com uma nota conceitual explícita que não existe no outro manual (diferença entre Garantia e Devolução), **recomenda-se tratar este documento como a fonte canônica** para esses três assuntos na base RAG — ver seção 4.
**Nota metodológica:** imagens referenciadas pelo nome de arquivo e pela legenda/contexto do passo ao qual pertencem, sem inferência de conteúdo visual além do descrito no texto.

---

## 1. Resumo estrutural do manual

```
Garantia, Devolução e Crédito
├── [Conceito] Garantia vs. Devolução — diferença fundamental
├── GARANTIA
│   ├── Pesquisar e selecionar a venda
│   ├── Escolha da venda para emissão da garantia / Gerar OS de Garantia-Reparo
│   ├── Relação de produtos habilitados a receber garantia
│   ├── Preenchimento de dados (Observações, Defeitos Relatados)
│   ├── Preenchimento da receita (somente para lentes)
│   ├── Encerrar a OS de garantia (F9)
│   ├── Identificação de OS atreladas à garantia (fundo amarelo)
│   ├── 1º Passo vs. 2º Passo (quando gerar ENF)
│   ├── Geração do nº de ENF
│   ├── Módulo de Entradas — validação da ENF (CFOP 1915)
│   └── Geração de Pedido de Garantia — Módulo Pedido (CFOP 5.916)
├── DEVOLUÇÃO
│   ├── Escolha da venda para devolução de mercadoria
│   ├── Demonstração de itens que podem ser devolvidos
│   ├── Selecionar item que 'não' será devolvido
│   ├── Confirmar exclusão do item que 'não' será devolvido
│   └── Gerar crédito ou estorno
└── UTILIZAR CRÉDITO DO CLIENTE EM UMA VENDA
    ├── Selecionar formas de pagamento (F6)
    ├── Selecionar opção 6 – Crédito
    ├── Informar valor de crédito a utilizar
    └── Encerramento com utilização de crédito (F9)
```

---

## 2. Chunks

### garantia-devolucao_conceito_01
**Metadados:**
```json
{
  "id": "garantia-devolucao_conceito_01",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Garantia e Devolução",
  "subassunto": "Diferença conceitual entre os dois processos",
  "tipo_conteudo": "conceito",
  "titulo": "Qual a diferença entre Garantia e Devolução no DataWeb",
  "palavras_chave": ["garantia", "devolução", "diferença", "crédito", "financeiro", "conceito"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": false,
  "pagina_origem": "1",
  "revisar": false
}
```
**Conteúdo:**
**Garantia** é um processo exclusivamente relacionado ao tratamento do produto e **não possui vínculo com o setor financeiro**. Envolve a recepção do produto com defeito, sua correção ou troca por um item de igual ou menor valor, e a saída do produto corrigido de forma fiscalmente adequada. O processo consiste em registrar a entrada do produto defeituoso (nota de entrada), enviá-lo ao laboratório de reparos, acompanhar o serviço e, ao concluir, devolver o produto ao cliente através da emissão de um pedido de garantia. A garantia envolve a emissão de uma nota no módulo de Entradas e outra no módulo de Pedido, **sem envolver transações financeiras** e **sem impactar os totais de caixa do dia**, e **não gera crédito ao cliente**.

**Devolução** é utilizada quando o cliente solicita a garantia de um produto, mas opta por adquirir uma mercadoria de **maior valor**. Nesse caso, gera-se um crédito equivalente ao valor do produto devolvido, que o cliente pode usar no pagamento do novo produto de maior valor — resultando em uma **nova venda** pela loja e ajustando adequadamente a transação financeira.

**Perguntas frequentes relacionadas:**
- Qual a diferença entre Garantia e Devolução no DataWeb?
- A Garantia gera crédito para o cliente?
- Quando devo usar Devolução em vez de Garantia?
- A Garantia impacta o financeiro/caixa do dia?

**Imagens associadas:** nenhuma

---

### garantia_01_pesquisar-venda
**Metadados:**
```json
{
  "id": "garantia_01_pesquisar-venda",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Pesquisar e selecionar a venda",
  "tipo_conteudo": "procedimento",
  "titulo": "Como pesquisar e selecionar a venda para emitir garantia de um produto",
  "palavras_chave": ["garantia", "pesquisar venda", "período de datas", "validade garantia"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "1-2",
  "revisar": false
}
```
**Conteúdo:**
Este processo emite uma "nota fiscal de garantia" para o produto, com validade de **3 meses** para uso, salvo garantia especial adquirida pelo cliente com prazo maior (geralmente 2 anos). Passos:
1. Pesquisar e selecionar a venda através do caminho de pesquisa do sistema.
2. É possível pesquisar/selecionar a venda filtrando, por exemplo, por período de datas.

**Perguntas frequentes relacionadas:**
- Qual a validade padrão da nota fiscal de garantia?
- Como pesquiso a venda para iniciar uma garantia?

**Imagens associadas:**
- `image1.jpg` — tela de pesquisa de vendas.
- `image2.jpg` — filtro por período de datas.

---

### garantia_02_gerar-os-garantia
**Metadados:**
```json
{
  "id": "garantia_02_gerar-os-garantia",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Escolha da venda e geração da OS de Garantia/Reparo",
  "tipo_conteudo": "procedimento",
  "titulo": "Como escolher a venda e gerar a OS de Garantia/Reparo",
  "palavras_chave": ["gerar OS garantia", "reparo", "botão direito"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "2-3",
  "revisar": false
}
```
**Conteúdo:**
Após a consulta, escolher a venda para a emissão da garantia. Em seguida, clicar com o botão direito sobre a venda selecionada e clicar na opção **"Gerar OS de Garantia/Reparo"**.

**Perguntas frequentes relacionadas:**
- Como gero a OS de Garantia/Reparo a partir de uma venda?

**Imagens associadas:**
- `image3.jpg` — venda selecionada.
- `image4.jpg` — opção "Gerar OS de Garantia/Reparo".

---

### garantia_03_selecionar-itens
**Metadados:**
```json
{
  "id": "garantia_03_selecionar-itens",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Relação de produtos habilitados a receber garantia",
  "tipo_conteudo": "procedimento",
  "titulo": "Como selecionar os produtos que farão parte da garantia",
  "palavras_chave": ["produtos habilitados", "selecionar itens", "garantia"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "3-4",
  "revisar": false
}
```
**Conteúdo:**
Após gerar a OS de Garantia/Reparo, o sistema disponibiliza a tela com a relação de produtos habilitados a receber garantia, atrelados à venda selecionada. Deve-se escolher os itens que farão parte da garantia.

**Perguntas frequentes relacionadas:**
- Como sei quais produtos da venda podem entrar em garantia?
- Posso selecionar mais de um item para a mesma garantia?

**Imagens associadas:**
- `image5.jpg` — relação de produtos habilitados.
- `image6.jpg` — seleção dos itens da garantia.

---

### garantia_04_dados-e-receita
**Metadados:**
```json
{
  "id": "garantia_04_dados-e-receita",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Preenchimento de dados e da receita",
  "tipo_conteudo": "procedimento",
  "titulo": "Como preencher observações, defeitos relatados e a receita (apenas para lentes) na garantia",
  "palavras_chave": ["observações", "defeitos relatados", "receita", "F7", "somente lentes", "armações", "acessórios"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4-5",
  "revisar": false
}
```
**Conteúdo:**
Após a revisão dos dados, preencher os campos "Observações" e "Defeitos Relatados"; o número da Garantia fica visível na tela.

**Regra importante:** o preenchimento da receita **só é necessário quando o produto selecionado para garantia é um par de lentes**. Para outros produtos, como armações e acessórios, **não é necessário** preencher a receita.

Quando aplicável (lentes), pressionar **F7: Receita** para abrir a tela de preenchimento e inserir os dados da dioptria da receita do cliente, teclando **OK (F9)** para efetivar o processo.

**Perguntas frequentes relacionadas:**
- Preciso preencher a receita para uma garantia de armação?
- Quando devo preencher a receita no processo de garantia?
- Como preencho os dados de defeitos relatados na garantia?

**Imagens associadas:**
- `image7.jpg` — preenchimento de observações/defeitos relatados e nº da garantia.
- `image8.jpg` — preenchimento da receita (dioptria).

---

### garantia_05_encerrar-e-identificar
**Metadados:**
```json
{
  "id": "garantia_05_encerrar-e-identificar",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Encerramento da OS e identificação visual (fundo amarelo)",
  "tipo_conteudo": "procedimento",
  "titulo": "Como encerrar a OS de garantia e identificar OS atreladas à garantia",
  "palavras_chave": ["F9 encerrar", "fundo amarelo", "ordens de serviço em aberto"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "5-6",
  "revisar": false
}
```
**Conteúdo:**
Após a execução do preenchimento anterior (dados/receita), o sistema retorna à tela do pedido; deve-se clicar em **F9: Encerrar** para finalizar. Em seguida, ao clicar no botão "Ordens de Serviço", o sistema disponibiliza as ordens de serviço em aberto — as que possuem **fundo em amarelo** estão atreladas à GARANTIA, permitindo identificá-las visualmente na listagem.

**Perguntas frequentes relacionadas:**
- Como identifico visualmente quais OS são de garantia na listagem?
- Como finalizo o preenchimento da OS de garantia?

**Imagens associadas:**
- `image9.jpg` — encerramento da OS (F9).
- `image10.jpg` — listagem de OS com fundo amarelo (garantia).

---

### garantia_06_passo1-vs-passo2
**Metadados:**
```json
{
  "id": "garantia_06_passo1-vs-passo2",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Quando gerar a ENF de garantia (1º Passo x 2º Passo)",
  "tipo_conteudo": "conceito",
  "titulo": "Quando é necessário gerar a ENF de garantia — produto fica ou não na loja",
  "palavras_chave": ["ENF de garantia", "produto na loja", "troca direta", "avaliação"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": false,
  "pagina_origem": "6",
  "revisar": false
}
```
**Conteúdo:**
Existem duas situações possíveis no processo de garantia:
- **1º Passo** — o cliente **não deixa** o produto na loja e apenas pede a troca direta via garantia. **Não é necessário** gerar uma ENF de garantia neste caso.
- **2º Passo** — o cliente **deixa** o produto na loja e pede avaliação/troca via garantia. **É necessário** gerar uma ENF de garantia (ver chunk `garantia_07_gerar-enf`).

**Perguntas frequentes relacionadas:**
- Quando não preciso gerar uma ENF de garantia?
- O que diferencia o "1º Passo" do "2º Passo" no processo de garantia?

**Imagens associadas:** nenhuma

---

### garantia_07_gerar-enf
**Metadados:**
```json
{
  "id": "garantia_07_gerar-enf",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Geração do número de ENF",
  "tipo_conteudo": "procedimento",
  "titulo": "Como gerar o número de ENF de garantia (Outras Operações)",
  "palavras_chave": ["ENF", "outras operações", "gerar ENF de garantia"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "6-7",
  "revisar": false
}
```
**Conteúdo:**
Após selecionar a ordem de serviço, clicar com o botão direito do mouse; o sistema mostrará uma guia onde deve-se escolher **"Outras Operações"** e, em seguida, **"Gerar ENF de garantia"**. O sistema gera um número de ENF.

**Perguntas frequentes relacionadas:**
- Onde encontro a opção para gerar a ENF de garantia?
- O que é uma ENF no contexto de garantia?

**Imagens associadas:**
- `image11.jpg` — menu "Outras Operações" > "Gerar ENF de garantia".
- `image12.jpg` — número de ENF gerado.

---

### garantia_08_modulo-entradas
**Metadados:**
```json
{
  "id": "garantia_08_modulo-entradas",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Entradas",
  "assunto": "Garantia",
  "subassunto": "Validação da ENF no Módulo de Entradas (CFOP 1915)",
  "tipo_conteudo": "procedimento",
  "titulo": "Como validar a ENF de garantia no Módulo de Entradas (CFOP 1915)",
  "palavras_chave": ["módulo entradas", "CFOP 1915", "entrada de mercadoria para garantia", "nota fiscal encerrada"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "7-8",
  "revisar": false
}
```
**Conteúdo:**
Após o sistema gerar o número da ENF, deve-se acessar o **MÓDULO ENTRADAS** do sistema DataWeb. Passos:
1. No Módulo de Entrada, digitar o número da ENF no campo "Número da ENF" e clicar em "Pesquisas" para efetivar a consulta.
2. Constatar que a **CFOP é nº 1915**, referente a "ENTRADA DE MERCADORIA PARA GARANTIA".

**Observação:** o sistema gera uma "Nota Fiscal" já encerrada; esse processo já realiza a baixa no módulo Estoque e registra o produto como garantia.

**Perguntas frequentes relacionadas:**
- O que significa o CFOP 1915 no módulo de entradas?
- Como confirmo que a ENF de garantia foi processada corretamente?
- A entrada da garantia já dá baixa no estoque automaticamente?

**Imagens associadas:**
- `image13.jpg` — consulta da ENF no Módulo de Entrada.
- `image14.jpg` — confirmação do CFOP 1915.

---

### garantia_09_pedido-garantia
**Metadados:**
```json
{
  "id": "garantia_09_pedido-garantia",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Pedido",
  "assunto": "Garantia",
  "subassunto": "Geração do Pedido de Garantia (entrega final)",
  "tipo_conteudo": "procedimento",
  "titulo": "Como gerar o Pedido de Garantia para entrega final do produto ao cliente",
  "palavras_chave": ["pedido de garantia", "entrega final", "etapas do processo", "movimentação loja", "laboratório"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "8-9",
  "revisar": false
}
```
**Conteúdo:**
O processo completo de garantia envolve 4 etapas:
1. Entrada de Produto
2. Movimentação na Loja
3. Movimentação no Laboratório (Produção)
4. Entrega Final do Produto ao Consumidor

A etapa 4 (entrega final) depende da execução íntegra das etapas anteriores. Para gerar o **Pedido de Garantia**, seguir os passos indicados na tela do sistema. Após a execução, o sistema emite um pedido com status "pedido encerrado com nota emitida".

**Perguntas frequentes relacionadas:**
- Quais são as 4 etapas do processo completo de garantia?
- Como gero o Pedido de Garantia para entregar o produto ao cliente?

**Imagens associadas:** `image15.jpg` — passos para geração do Pedido de Garantia.

---

### garantia_10_modulo-pedido
**Metadados:**
```json
{
  "id": "garantia_10_modulo-pedido",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Pedido",
  "assunto": "Garantia",
  "subassunto": "Validação do Pedido no Módulo Pedido (CFOP 5.916)",
  "tipo_conteudo": "procedimento",
  "titulo": "Como validar o Pedido Encerrado com Nota Emitida no Módulo Pedido (CFOP 5.916)",
  "palavras_chave": ["módulo pedido", "CFOP 5916", "pedido encerrado com nota emitida", "retorno de mercadoria"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "9",
  "revisar": false
}
```
**Conteúdo:**
No **MÓDULO PEDIDO**, é possível visualizar, através do número de pedido gerado, o status **"PEDIDO ENCERRADO COM NOTA EMITIDA"**. Ao selecionar esse pedido, é possível validar/visualizar que ele possui o **CFOP nº 5.916**, referente a "Retorno de Mercadoria de entrega de garantia", além dos dados do produto a ser entregue ao cliente.

**Perguntas frequentes relacionadas:**
- O que significa o CFOP 5.916?
- Como confirmo que o pedido de garantia está pronto para entrega ao cliente?

**Imagens associadas:**
- `image16.jpg` — pedido emitido.
- `image17.jpg` — Módulo Pedido, pedido encerrado com nota emitida.
- `image18.jpg` — confirmação do CFOP 5.916 e dados do produto.

---

### devolucao_01_processo-completo
**Metadados:**
```json
{
  "id": "devolucao_01_processo-completo",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Devolução",
  "subassunto": "Processo completo de devolução de mercadoria",
  "tipo_conteudo": "procedimento",
  "titulo": "Como realizar o processo completo de Devolução de Mercadoria",
  "palavras_chave": ["devolução de mercadoria", "estorno", "crédito", "selecionar item"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "19-23",
  "revisar": false
}
```
**Conteúdo:**
Passos completos do processo de devolução:
1. Clicar com o botão direito sobre a venda e escolher a opção **"devolução de mercadoria"**.
2. Na nova janela exibida (que também representa uma entrada de mercadoria no estoque), visualizar os itens que podem ser devolvidos.
3. Selecionar o item que o cliente **NÃO** devolverá, excluindo-o da lista de itens de devolução, e manter somente o item que será de fato devolvido.
4. Confirmar a exclusão do item que **NÃO** será devolvido.
5. O sistema perguntará se deseja gerar um crédito no valor da devolução:
   - **Opção NÃO**: se o cliente estiver exigindo o estorno, deve-se devolver o valor ao cliente;
   - **Opção SIM**: se o cliente **NÃO** estiver exigindo o estorno, deve-se gerar o crédito referente à devolução.

**Perguntas frequentes relacionadas:**
- Como faço a devolução de um produto no DataWeb?
- Como excluo da devolução um item que o cliente vai manter?
- Quando devo gerar crédito em vez de estornar o valor ao cliente?

**Imagens associadas:**
- `image19.png` — Figura 1: opção "devolução de mercadoria".
- `image20.png` — Figura 2: itens que podem ser devolvidos.
- `image21.png` — Figura 3: seleção do item que não será devolvido.
- `image22.png` — Figura 4: confirmação da exclusão.
- `image23.png` — Figura 5: finalização (crédito ou estorno).

---

### credito-cliente_01_utilizar-credito
**Metadados:**
```json
{
  "id": "credito-cliente_01_utilizar-credito",
  "manual_origem": "CAIXA_-_Garantia_Devoluçao_Crédito_V3.docx",
  "modulo": "Caixa",
  "assunto": "Utilizar Crédito do Cliente em uma Venda",
  "subassunto": "Processo completo",
  "tipo_conteudo": "procedimento",
  "titulo": "Como utilizar o crédito do cliente (gerado por devolução) em uma nova venda",
  "palavras_chave": ["crédito do cliente", "F6", "opção 6 crédito", "encerrar F9", "saldo"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "24-27",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Após selecionar os itens da venda, pressionar **F6** para acessar as formas de pagamento.
2. Selecionar a opção **"6 - Crédito"**.
3. Informar o valor que deseja utilizar do crédito disponível para o cliente.
4. Após os passos anteriores, escolher a opção **"Encerrar F9"** para finalizar o processo.

**Observação:** o valor utilizado pode ser menor ou igual ao disponível. Se for menor, o saldo restante do crédito fica disponível para uma compra futura. Se o valor de crédito disponível for menor que o valor total da venda, é necessário selecionar outra forma de pagamento e inserir o valor do saldo restante para finalizar a venda.

**Perguntas frequentes relacionadas:**
- Como aplico o crédito gerado por uma devolução em uma nova venda?
- Como encerro a venda depois de aplicar o crédito do cliente?

**Imagens associadas:**
- `image24.png` — acesso às formas de pagamento (F6).
- `image25.png` — Figura 6: opção "6 - Crédito".
- `image26.png` — Figura 7: valor de crédito a utilizar.
- `image27.png` — encerramento (F9) do processo de devolução/crédito.

---

## 3. Glossário

Este manual não possui uma seção de glossário própria. Os termos técnicos identificados (ENF, CFOP, Garantia, Devolução, Crédito) estão definidos em contexto nos chunks acima. Para termos fiscais gerais (NF-e, NFC-e, PDV etc.), consultar o glossário do manual "Módulo Caixa" (`RAG_dataweb_modulo_caixa.md`).

**Termos específicos deste manual:**

| Termo | Definição (conforme manual) |
|---|---|
| **ENF** | Documento gerado no processo de garantia para registrar a entrada do produto defeituoso no módulo Entradas; validado com CFOP 1915 ("Entrada de mercadoria para garantia"). |
| **CFOP 1915** | Código Fiscal de Operações e Prestações usado na entrada de mercadoria para garantia (Módulo Entradas). |
| **CFOP 5.916** | Código Fiscal de Operações e Prestações usado no retorno de mercadoria de entrega de garantia (Módulo Pedido). |

---

## 4. Pontos sinalizados para revisão

- `[REVISAR: duplicidade de conteúdo entre manuais]` — as seções de **Garantia**, **Devolução** e **Utilizar Crédito do Cliente em uma Venda** deste manual (V3) são equivalentes às presentes no "Manual Operacional do Sistema DataWeb – Módulo Caixa". Para evitar respostas duplicadas ou conflitantes no agente de IA, recomenda-se uma das seguintes estratégias antes de carregar na base vetorial:
  1. **Usar este manual (V3) como fonte única** para os três assuntos, removendo os chunks equivalentes do manual "Módulo Caixa" (`caixa_devolucao_01`, `caixa_garantia_01_iniciar`, `caixa_garantia_02_dados-receita`, `caixa_garantia_03_enf-e-pedido`, `caixa_credito-cliente_01`); ou
  2. Manter ambos, mas com metadado adicional `"substitui": "<id_do_chunk_equivalente>"` apontando para a versão mais antiga, e priorizar este manual no retrieval em caso de empate de similaridade.
- Este manual (V3) contém uma informação que **não aparece** no manual "Módulo Caixa": a regra de que o preenchimento da receita na garantia só é necessário para lentes, não para armações/acessórios (`garantia_04_dados-e-receita`). Essa nuance deve ser preservada ao consolidar as duas fontes.
- `[REVISAR: numeração de figuras não sequencial]` — no manual original, a numeração de "Figura X" reinicia em alguns pontos (ex.: Figura 1 a 7 na seção Devolução/Crédito, após dezenas de imagens sem numeração de figura explícita na seção Garantia). Os chunks acima usam o nome do arquivo de imagem como referência primária por ser mais confiável.
