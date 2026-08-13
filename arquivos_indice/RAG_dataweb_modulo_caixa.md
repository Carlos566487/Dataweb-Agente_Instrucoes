# Base de Conhecimento RAG — Manual Operacional DataWeb / Módulo Caixa

**Manual de origem:** MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx
**Total de páginas (sumário original):** 85 | **Total de imagens no documento:** 133 (media/image1.png a image130.png)
**Nota metodológica:** as imagens não foram descritas pixel a pixel; cada chunk referencia o(s) arquivo(s) de imagem e a legenda/figura original do manual, preservando o contexto do passo ao qual pertencem. Nenhum conteúdo visual foi inferido além do que está descrito no texto do manual.

---

## 1. Resumo estrutural do manual (sumário reconstituído)

```
Módulo Caixa
├── Introdução (segurança, objetivo do manual)
├── Acesso ao Sistema – Módulo Caixa
├── Abertura de Caixa
├── Venda via Ordem de Serviço (O.S.)
│   ├── Cadastro do cliente e campanha
│   ├── Inserção de produtos (armação, lentes)
│   ├── Preenchimento da receita (F7)
│   └── Encerramento da O.S. (F9)
├── Gerar a Venda referente à Ordem de Serviço
│   └── Formas de pagamento (Dinheiro, Cartão, Carnê, Desconto, Brinde, Crédito)
├── Venda Anexa (aglutinar várias O.S. em uma venda)
├── Imprimir Ordem de Serviço (OS)
├── Monitor de Produção
│   ├── Venda concluída / serviço na loja
│   ├── Translado Loja → Estoque
│   ├── Operações no Estoque (5 opções)
│   ├── Operações no Laboratório (4 opções)
│   └── Recebimento na Loja / Entrega ao cliente
├── Venda com Saldo a Receber
├── Promoção Lentes em Dobro
├── Baixa de Carnê
├── Impressão de 2ª via de comprovante de pagamento de carnê
├── Impressão de 2ª via de NFC-e e NF-e
├── Devolução de Mercadoria
├── GARANTIA
│   ├── Pesquisar/selecionar venda e gerar OS de Garantia/Reparo
│   ├── Selecionar itens e preencher dados/receita
│   ├── Encerrar OS de garantia
│   ├── Geração de ENF (Módulo Entradas – CFOP 1915)
│   └── Geração de Pedido de Garantia (Módulo Pedido – CFOP 5916)
├── Utilizar Crédito do Cliente em uma Venda
├── Retirada de Caixa
├── Aporte de Caixa
├── Pesquisa de Receita
├── Pesquisa de Venda
├── Histórico Financeiro
├── Relatório de Resumo de Caixa
├── Encerramento de Caixa (Conferência de Caixa)
└── GLOSSÁRIO
```

---

## 2. Chunks

### caixa_intro_01
**Metadados:**
```json
{
  "id": "caixa_intro_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Introdução e Segurança",
  "subassunto": "Sobre o sistema e boas práticas de acesso",
  "tipo_conteudo": "conceito",
  "titulo": "O que é o Módulo Caixa do Sistema DataWeb",
  "palavras_chave": ["dataweb", "módulo caixa", "PDV", "segurança", "login"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": false,
  "pagina_origem": "2-3",
  "revisar": false
}
```
**Conteúdo:**
O Módulo Caixa do Sistema DataWeb é a ferramenta utilizada para operações de ponto de venda (PDV), permitindo realizar vendas, gerenciar estoque, gerar relatórios e acompanhar o financeiro da loja. O acesso ao módulo exige login com usuário e senha, pois é a forma de proteger dados sensíveis e garantir que apenas usuários autorizados operem o sistema. Recomenda-se manter a senha em sigilo, fazer logout após o uso e estar atento a tentativas de phishing ou engenharia social.

**Perguntas frequentes relacionadas:**
- Para que serve o Módulo Caixa do DataWeb?
- É necessário login para acessar o Módulo Caixa?
- Quais boas práticas de segurança devo seguir ao usar o sistema?

**Imagens associadas:** nenhuma

---

### caixa_acesso_01
**Metadados:**
```json
{
  "id": "caixa_acesso_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Acesso ao Sistema",
  "subassunto": "Login",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar o Sistema DataWeb – Módulo Caixa",
  "palavras_chave": ["login", "acesso", "credenciais", "usuário", "senha"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```
**Conteúdo:**
O acesso ao Módulo Caixa requer a utilização de credenciais de usuário e senha, processo de autenticação essencial para proteger os dados sensíveis e garantir que apenas usuários autorizados tenham acesso às funcionalidades do sistema.

**Perguntas frequentes relacionadas:**
- Como faço login no Módulo Caixa do DataWeb?
- O que é necessário para acessar o sistema?

**Imagens associadas:** `image1.png` — Figura 1: tela de acesso/login ao sistema.

---

### caixa_abertura_01
**Metadados:**
```json
{
  "id": "caixa_abertura_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Abertura de Caixa",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como realizar a Abertura de Caixa",
  "palavras_chave": ["abertura de caixa", "novo caixa", "fundo de caixa", "valor de abertura"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "5-6",
  "revisar": false
}
```
**Conteúdo:**
A abertura de caixa é utilizada para iniciar o período de movimentações de uma loja. O caixa pode ser aberto e fechado várias vezes ao dia, desde que não seja executado o processo de "Encerrar Caixa". A abertura de caixa somente pode ser realizada quando o caixa estiver fechado.

Passos:
1. Após acessar o sistema, acessar a opção **Novo Caixa**.
2. Uma nova janela se abrirá para inserção do valor de abertura do caixa. Inserir o valor (se desejado) e clicar em **OK**.
3. O campo "Valor de abertura" permite inserir valores que serão usados ao longo do dia como "Fundo de Caixa". A inserção de valores **não é obrigatória** para concluir a Abertura de Caixa nem para usar o sistema.
4. Caso a abertura seja feita sem inserir valores (abertura = zero), o sistema exibirá uma mensagem de confirmação antes de prosseguir.

**Observação:** este tópico está relacionado ao conceito de "Aporte de Caixa" (ver chunk `caixa_aporte-caixa_01`).

**Perguntas frequentes relacionadas:**
- Como abrir o caixa no DataWeb?
- É obrigatório inserir um valor na abertura de caixa?
- Posso abrir o caixa mais de uma vez no mesmo dia?

**Imagens associadas:**
- `image2.png` — Figura 2: opção "Novo Caixa".
- `image3.png` — Figura 3: janela de inserção do valor de abertura.
- `image4.png` — Figura 4: mensagem de confirmação quando a abertura é feita com valor zero.

---

### caixa_venda-os_01_cadastro-cliente
**Metadados:**
```json
{
  "id": "caixa_venda-os_01_cadastro-cliente",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Venda via Ordem de Serviço (O.S.)",
  "subassunto": "Início da O.S. e cadastro do cliente",
  "tipo_conteudo": "procedimento",
  "titulo": "Como iniciar uma Ordem de Serviço (O.S.) e cadastrar o cliente",
  "palavras_chave": ["ordem de serviço", "O.S.", "venda", "cadastro de cliente", "campanha"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "7-9",
  "revisar": false
}
```
**Conteúdo:**
Passos para iniciar uma venda via Ordem de Serviço:
1. Clicar no botão **O.S.** localizado na aba superior da tela.
2. Pressionar a tecla **F5** para abrir a janela de O.S. (o número da O.S. é preenchido automaticamente).
3. Escolher a campanha desejada, marcando-a com 1 clique do mouse, e confirmar com **OK**.
4. Preencher os dados do cliente nos campos indicados para dar prosseguimento à criação da O.S.
5. Completar o preenchimento dos demais dados necessários da Ordem de Serviço.

**Perguntas frequentes relacionadas:**
- Como abrir uma nova Ordem de Serviço no DataWeb?
- Como associar um cliente a uma O.S.?
- O que é a tecla F5 usada na abertura da O.S.?

**Imagens associadas:**
- `image5.png` — Figura 5: botão O.S. na aba superior.
- `image6.png` — Figura 6: início da venda com Ordem de Serviço.
- `image7.png` — Figura 7: seleção de campanha.
- `image8.png` — Figura 8: cadastro dos dados do cliente na O.S.
- `image9.png` — Figura 9: tela de preenchimento da Ordem de Serviço.

---

### caixa_venda-os_02_adicionar-produtos
**Metadados:**
```json
{
  "id": "caixa_venda-os_02_adicionar-produtos",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Venda via Ordem de Serviço (O.S.)",
  "subassunto": "Inserção de produtos (armação e lentes)",
  "tipo_conteudo": "procedimento",
  "titulo": "Como adicionar armação e lentes em uma Ordem de Serviço",
  "palavras_chave": ["adicionar produto", "armação", "lentes", "código", "quantidade de lentes"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "9-13",
  "revisar": false
}
```
**Conteúdo:**
Após o cadastro do cliente na O.S., para inserir os produtos:
1. Clicar em **Adicionar** para inserir os produtos a serem vendidos.
2. Escolher o tipo de produto a ser vendido (ex.: armação).
3. Inserir o código ou a descrição do produto.
4. A armação inserida aparecerá listada na O.S.
5. Clicar novamente em **Adicionar** para inserir um novo produto (ex.: lentes).
6. Para lentes, é importante inserir a quantidade correta: se for 1 par de lentes, deve-se inserir a quantidade "2" (duas lentes), pois isso define quantas lentes serão produzidas.
7. Inserir o código/descrição da lente.
8. A lente inserida aparecerá listada na O.S.

**Observação:** a ordem de inserção dos produtos (armação antes de lentes ou vice-versa) é irrelevante.

**Perguntas frequentes relacionadas:**
- Como adicionar uma armação na Ordem de Serviço?
- Por que preciso inserir "2" ao adicionar um par de lentes?
- A ordem de inserção dos produtos importa?

**Imagens associadas:**
- `image10.png` — Figura 10: botão Adicionar Produto.
- `image11.png` — Figura 11: adicionar armação.
- `image12.png` — Figura 12: inserir código/descrição.
- `image13.png` — Figura 13: armação inserida.
- `image14.png` — Figura 14: adicionar novo produto.
- `image15.png` — Figura 15: adicionar lentes (quantidade).
- `image16.png` — Figura 16: inserir código/descrição da lente.
- `image17.png` — Figura 17: lentes inseridas.

---

### caixa_venda-os_03_preencher-receita
**Metadados:**
```json
{
  "id": "caixa_venda-os_03_preencher-receita",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Venda via Ordem de Serviço (O.S.)",
  "subassunto": "Preenchimento da receita",
  "tipo_conteudo": "procedimento",
  "titulo": "Como preencher a receita (dioptria) em uma Ordem de Serviço",
  "palavras_chave": ["receita", "dioptria", "F7", "multifocal", "grau"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "13-16",
  "revisar": false
}
```
**Conteúdo:**
Com os itens (armação e lentes) inseridos na O.S., é possível adicionar os detalhes da receita:
1. Pressionar a tecla **F7** para abrir a janela de receita.
2. Preencher os dados da receita para o olho direito e para o olho esquerdo.

**Regras de preenchimento importantes:**
- Não utilizar a tecla de vírgula ( , ) nem a tecla **Tab** (↹) durante o preenchimento.
- O sistema insere a vírgula automaticamente: basta digitar o número (ex.: "100" para 1 grau positivo) e pressionar **Enter**; o sistema formata para "+1,00". Para grau negativo, digitar "-100", que será formatado como "-1,00".
- Para lentes multifocais, o campo "adição" na janela de receita deve ser preenchido conforme indicado, pressionando **Enter** ao final; o sistema calcula automaticamente o valor referente à lente multifocal.
- O preenchimento deve ser realizado igualmente para o olho direito e o olho esquerdo.

Após o preenchimento, clicar em **OK** para confirmar a receita, que ficará inserida na Ordem de Serviço.

**Perguntas frequentes relacionadas:**
- Como inserir a receita/dioptria em uma O.S.?
- Posso usar vírgula ou Tab ao preencher a receita?
- Como o sistema calcula lentes multifocais?

**Imagens associadas:**
- `image18.png` — Figura 18: abrir janela de receita (F7).
- `image19.png` — Figura 19: tela de inserção dos dados da receita.
- `image20.png` — Figura 20: exemplo de receita preenchida.
- `image21.png` — Figura 21: confirmação da receita inserida.

---

### caixa_venda-os_04_encerrar
**Metadados:**
```json
{
  "id": "caixa_venda-os_04_encerrar",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Venda via Ordem de Serviço (O.S.)",
  "subassunto": "Encerramento da O.S.",
  "tipo_conteudo": "procedimento",
  "titulo": "Como encerrar o preenchimento de uma Ordem de Serviço",
  "palavras_chave": ["encerrar O.S.", "F9", "finalizar ordem de serviço"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "16",
  "revisar": false
}
```
**Conteúdo:**
Uma vez a receita inserida no sistema e todos os campos necessários da O.S. preenchidos, pressionar a tecla **F9** para encerrar o preenchimento da Ordem de Serviço.

**Perguntas frequentes relacionadas:**
- Como finalizo o preenchimento de uma O.S.?
- O que faz a tecla F9 na Ordem de Serviço?

**Imagens associadas:** `image22.png` — Figura 22: encerramento da Ordem de Serviço.

---

### caixa_gerar-venda_01
**Metadados:**
```json
{
  "id": "caixa_gerar-venda_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Gerar a Venda referente à Ordem de Serviço",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como gerar a venda a partir de uma Ordem de Serviço já criada",
  "palavras_chave": ["gerar venda", "ordem de serviço", "NFCe", "dados do cliente"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "17-19",
  "revisar": false
}
```
**Conteúdo:**
Para gerar a venda referente a uma O.S. já criada:
1. Clicar no botão do lado esquerdo (faixa azul) **Ordens de Serviço** e selecionar a ordem que precisa ser transformada em venda.
2. Clicar com o botão esquerdo do mouse sobre a O.S. selecionada e escolher a opção **Gerar Venda**.
3. Abrirá uma nova janela onde deve-se marcar a opção "informar dados do cliente (endereço, telefone) na NFC-e" para que os dados apareçam na nota fiscal — é importante que o cadastro do cliente esteja devidamente preenchido. Em seguida, clicar em **OK**.
4. Uma nova janela exibirá os itens vendidos, seus respectivos valores e informações da venda.
5. Para checar uma venda já realizada, acessar a opção "Vendas" (primeira opção na faixa azul, canto superior esquerdo) e filtrar a venda desejada.

**Perguntas frequentes relacionadas:**
- Como transformar uma O.S. em venda no DataWeb?
- Por que preciso marcar "informar dados do cliente na NFC-e"?
- Onde consulto uma venda já gerada?

**Imagens associadas:**
- `image23.png` — Figura 23: escolha da Ordem de Serviço para gerar venda.
- `image24.png` — Figura 24: opção "Gerar Venda".
- `image25.png` — Figura 25: confirmação de dados do cliente na NFC-e.
- `image26.png` — Figura 26: tela com total da venda.
- `image35.png` — Figura 35: consulta de dados da venda gerada.

---

### caixa_formas-pagamento_01
**Metadados:**
```json
{
  "id": "caixa_formas-pagamento_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Gerar a Venda referente à Ordem de Serviço",
  "subassunto": "Formas de pagamento",
  "tipo_conteudo": "procedimento",
  "titulo": "Como registrar formas de pagamento em uma venda (Dinheiro, Cartão, Carnê, Desconto, Brinde)",
  "palavras_chave": ["pagamento", "F6", "dinheiro", "cartão", "carnê", "desconto", "brinde", "vendedor", "CPF"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "19-22",
  "revisar": false
}
```
**Conteúdo:**
Após abrir a tela com o total da venda, o pagamento é realizado da seguinte forma:
1. Clicar em **Pagamentos** ou pressionar a tecla **F6** para acessar as formas de pagamento.
2. Confirmar o vendedor e selecionar o método de pagamento entre as opções:
   - **Dinheiro**;
   - **Cartão** (com opções de débito e crédito);
   - **Carnê**;
   - **Desconto** (inserir o valor do desconto para abater do saldo da dívida);
   - **Brinde** (ao selecionar esta opção, toda a venda se torna um brinde e não é necessário efetuar pagamento).
3. Para remover um método de pagamento já selecionado, pressionar **Ctrl+R** e inserir o número do método que deseja remover.
4. Ao selecionar o(s) método(s) de pagamento, digitar o **vendedor** para dar prosseguimento.
5. Ao final, é possível inserir o CPF do cliente, caso ele deseje.

**Perguntas frequentes relacionadas:**
- Como faço um pagamento em dinheiro/cartão/carnê no DataWeb?
- Como removo uma forma de pagamento já inserida?
- É obrigatório informar o CPF do cliente na venda?
- Como funciona a opção "Brinde"?

**Imagens associadas:**
- `image27.png` — Figura 27: acesso às formas de pagamento (F6).
- `image28.png` — Figura 28: confirmação do vendedor.
- `image29.png` — Figura 29: pagamento em dinheiro.
- `image30.png` — Figura 30: pagamento em cartão (débito/crédito).
- `image31.png` — Figura 31: pagamento em carnê.
- `image32.png` — Figura 32: remoção de método de pagamento (Ctrl+R).
- `image33.png` — Figura 33: inserção do vendedor.
- `image34.png` — Figura 34: inserção do CPF do cliente.

---

### caixa_venda-anexa_01
**Metadados:**
```json
{
  "id": "caixa_venda-anexa_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Venda Anexa",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como realizar uma Venda Anexa (aglutinar várias O.S. em uma única venda)",
  "palavras_chave": ["venda anexa", "aglutinar", "várias ordens de serviço", "CTRL"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "23-24",
  "revisar": false
}
```
**Conteúdo:**
A Venda Anexa consiste em aglutinar várias Ordens de Serviço (O.S.) em apenas uma venda. Passos:
1. Identificar as várias O.S. em aberto aguardando finalização.
2. Com a tecla **CTRL** pressionada, selecionar com o mouse as O.S. que serão aglutinadas na mesma venda.
3. Clicar com o botão direito do mouse e escolher a opção **Gerar Venda**.
4. Após aceitar a confirmação de dados do cliente na tela inicial, a venda exibirá as Ordens de Serviço selecionadas.
5. Para efetivar a venda, pressionar **Pagamento (F6)**, escolher a(s) forma(s) de pagamento conforme o desejo do cliente e finalizar a venda.

**Perguntas frequentes relacionadas:**
- Como juntar várias Ordens de Serviço em uma única venda?
- É possível vender mais de uma O.S. ao mesmo tempo?

**Imagens associadas:**
- `image36.png` — Figura 36: O.S. em aberto aguardando finalização.
- `image37.png` — Figura 37: seleção de múltiplas O.S. com CTRL.
- `image38.png` — Figura 38: opção Gerar Venda.
- `image39.png` — Figura 39: venda com as O.S. selecionadas.
- `image40.png` — Figura 40: forma de pagamento da venda anexa.

---

### caixa_imprimir-os_01
**Metadados:**
```json
{
  "id": "caixa_imprimir-os_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Imprimir Ordem de Serviço (OS)",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como imprimir uma via da Ordem de Serviço (OS)",
  "palavras_chave": ["imprimir OS", "visualizar OS", "impressões", "produção"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "25-26",
  "revisar": false
}
```
**Conteúdo:**
A impressão da via da O.S. é usada para acompanhamento dos produtos nos processos de produção. Passos:
1. Acessar a opção "Ordem de Serviço" no menu vertical (faixa azul).
2. Filtrar a O.S. que deseja visualizar.
3. Clicar com o botão direito sobre a O.S. desejada.
4. Ir para a guia **Impressões** > aba **Imprimir** > opção **Imprimir OS**:
   - **Imprimir O.S.**: abre a tela de impressão para configuração;
   - **Visualizar O.S.**: abre a visualização da O.S., podendo imprimir em seguida.
5. Escolher a impressora desejada.

**Perguntas frequentes relacionadas:**
- Como imprimir uma via da Ordem de Serviço?
- Qual a diferença entre "Imprimir O.S." e "Visualizar O.S."?

**Imagens associadas:**
- `image41.png` — Figura 41: escolha da O.S. a imprimir.
- `image42.png` — Figura 42: opções de impressão.
- `image43.png` — Figura 43: escolha da impressora.
- `image44.png` — Figura 44: modelo da O.S. impressa.

---

### caixa_monitor-producao_01_conceito
**Metadados:**
```json
{
  "id": "caixa_monitor-producao_01_conceito",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Monitor de Produção",
  "subassunto": "Conceito e acesso",
  "tipo_conteudo": "conceito",
  "titulo": "O que é o Monitor de Produção e como acessá-lo",
  "palavras_chave": ["monitor de produção", "acompanhamento de O.S.", "produção", "laboratório"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "27",
  "revisar": false
}
```
**Conteúdo:**
O Monitor de Produção permite acompanhar todo o processo das Ordens de Serviço na ótica, desde a entrada da O.S. na loja até a retirada do óculos pronto pelo cliente. Para acessar o Monitor de Produção é necessário estar com o Caixa aberto. Acesso: clicar na aba "Ordem de serviço" e depois na aba "Monitor de produção". Toda O.S. aparece automaticamente na tela, uma abaixo da outra, e é possível pesquisar pelo número da O.S., pelo nome do cliente ou por uma data pré-definida.

**Perguntas frequentes relacionadas:**
- O que é o Monitor de Produção no DataWeb?
- Como acesso o Monitor de Produção?
- É possível pesquisar uma O.S. específica no Monitor de Produção?

**Imagens associadas:**
- `image45.png` — Figura 45: abas Ordem de Serviço e Monitor de Produção.
- `image46.png` — Figura 46: identificação/pesquisa no monitor de produção.

---

### caixa_monitor-producao_02_venda-concluida-loja
**Metadados:**
```json
{
  "id": "caixa_monitor-producao_02_venda-concluida-loja",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Monitor de Produção",
  "subassunto": "Venda concluída e serviço na loja",
  "tipo_conteudo": "procedimento",
  "titulo": "Como informar no Monitor de Produção que a venda foi concluída e o serviço está na loja",
  "palavras_chave": ["venda concluída", "serviço na loja", "monitor de produção"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "28-29",
  "revisar": false
}
```
**Conteúdo:**
Assim que o vendedor registra a Ordem de Serviço e conclui a venda, é necessário informar no Monitor de Produção que a venda foi concluída e o serviço está na loja:
1. Clicar com o botão direito do mouse na O.S. desejada.
2. Selecionar a opção **"Venda concluída e serviço na Loja"**.
3. Abrirá uma nova janela onde é possível inserir uma observação para quem consultar a O.S.
4. Clicar em **OK** para confirmar.

Após essa confirmação, qualquer pessoa que consultar a O.S. saberá que ela está na loja aguardando envio ao Estoque/Laboratório; o ícone da O.S. muda para refletir esse status.

**Perguntas frequentes relacionadas:**
- Como marco que uma venda foi concluída no Monitor de Produção?
- O que significa o status "serviço na loja"?

**Imagens associadas:**
- `image47.png` — Figura 47: opção "Venda concluída e serviço na Loja".
- `image48.png` — Figura 48: confirmação com campo de observação.
- `image49.png` — Figura 49: ícone da O.S. após status "serviço na loja".

---

### caixa_monitor-producao_03_translado-estoque
**Metadados:**
```json
{
  "id": "caixa_monitor-producao_03_translado-estoque",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Monitor de Produção",
  "subassunto": "Translado Loja → Estoque",
  "tipo_conteudo": "procedimento",
  "titulo": "Como enviar a Ordem de Serviço da Loja para o Estoque no Monitor de Produção",
  "palavras_chave": ["translado loja estoque", "monitor de produção", "estoque"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "29-30",
  "revisar": false
}
```
**Conteúdo:**
Quando a Ordem de Serviço for enviada para o Estoque, é necessário informar isso no Monitor de Produção:
1. Clicar com o botão direito do mouse na O.S.
2. Clicar na opção **"Translado loja → estoque"** (apenas as opções válidas para a próxima etapa ficam disponíveis).
3. Caso a O.S. não precise ser enviada para o Estoque/Laboratório, é possível usar diretamente "Ordem de serviço entregue ao cliente" ou "Ordem de serviço Cancelada".
4. Ao confirmar o translado, abrirá a mesma tela de observação vista no passo anterior; clicar em **OK** para prosseguir.

Após esse processo, o ícone da O.S. muda para "translado estoque → Loja" e o operador do Estoque deve confirmar o recebimento.

**Perguntas frequentes relacionadas:**
- Como envio uma O.S. da loja para o estoque?
- Toda O.S. precisa passar pelo estoque?

**Imagens associadas:**
- `image50.png` — Figura 50: opção "Translado loja → estoque".
- `image51.png` — Figura 51: tela de observação do translado.

---

### caixa_monitor-producao_04_operacoes-estoque
**Metadados:**
```json
{
  "id": "caixa_monitor-producao_04_operacoes-estoque",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Monitor de Produção",
  "subassunto": "Operações disponíveis no Estoque",
  "tipo_conteudo": "procedimento",
  "titulo": "Quais opções o operador do Estoque tem para movimentar uma O.S. no Monitor de Produção",
  "palavras_chave": ["estoque", "recebimento", "aguardando compra de lente", "tratamento externo", "laboratório"],
  "perfil_usuario": "suporte | estoque",
  "possui_imagem_referenciada": true,
  "pagina_origem": "30-33",
  "revisar": false
}
```
**Conteúdo:**
Para receber a O.S. no Estoque, o operador deve clicar com o botão direito na O.S. e ir em **"Ordem de Serviço no Estoque"** (é possível inserir observação). Depois de informado o recebimento, o sistema habilita 5 opções para definir o que será feito com a O.S.:
1. **Devolver estoque → Loja** (caso esteja faltando alguma informação da loja).
2. **Aguardando compra da Lente** (quando o estoque ainda vai solicitar a compra das lentes). Nesta opção a O.S. permanece no estoque; é possível adicionar lentes na tela de Dados da Ordem de Serviço e solicitar a geração de ordem de compra.
3. **O.S. em tratamento externo** (quando enviada para algum serviço fora da loja, ex.: montagem). A O.S. permanece no estoque.
4. **Translado estoque → laboratório** (quando o estoque envia para o laboratório).
5. **Serviço forçar finalização** (usado quando não há mais nada a fazer na O.S. no estoque nem no laboratório). Após selecionada, somente fica habilitada a opção "Devolver estoque → Loja".

Em todas as opções acima, abrirá a tela de Dados da O.S. para inserir qualquer informação. A O.S. sai do Estoque quando o operador selecionar "Translado estoque → laboratório", "Devolver estoque → Loja" ou "Serviço forçar finalização". Se for enviada ao laboratório, o Laboratório precisa confirmar o recebimento (ou o Estoque, caso a loja não tenha laboratório próprio), clicando com o botão direito na O.S. e escolhendo "Ordem de serviço no laboratório".

**Perguntas frequentes relacionadas:**
- Quais são as opções disponíveis quando uma O.S. chega ao estoque?
- O que significa "Aguardando compra da Lente"?
- Quando devo usar "Serviço forçar finalização"?

**Imagens associadas:**
- `image52.png` — Figura 52: recebimento da O.S. no estoque.
- `image53.png` — Figura 53: opção "Devolver estoque → Loja" / tela de dados da O.S.
- `image54.png` — Figura 54: recebimento da O.S. no laboratório.

---

### caixa_monitor-producao_05_operacoes-laboratorio
**Metadados:**
```json
{
  "id": "caixa_monitor-producao_05_operacoes-laboratorio",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Monitor de Produção",
  "subassunto": "Operações disponíveis no Laboratório",
  "tipo_conteudo": "procedimento",
  "titulo": "Quais opções o operador do Laboratório tem para movimentar uma O.S. no Monitor de Produção",
  "palavras_chave": ["laboratório", "aguardando armação", "devolvida para tratamento", "translado laboratório loja"],
  "perfil_usuario": "suporte | laboratório",
  "possui_imagem_referenciada": true,
  "pagina_origem": "33-35",
  "revisar": false
}
```
**Conteúdo:**
Com a O.S. no laboratório, ao clicar com o botão direito o sistema habilita 4 opções:
1. **Aguardando armação para montagem** (a O.S. permanece no laboratório).
2. **O.S. devolvida para tratamento** — nesse caso é necessário inserir um "Motivo", que deve estar previamente cadastrado.
3. **Translado laboratório → loja** (usado quando o laboratório envia direto para a loja) — é necessário inserir uma observação do laboratório informando que o serviço foi concluído.
4. **Translado laboratório → Estoque** (usado quando é necessário devolver ao estoque) — o estoque deve realizar a entrada da O.S. novamente e repetir os processos de movimentação já descritos.

Em todas as opções, abrirá a tela de Dados da O.S. para inserir qualquer informação. Quando o laboratório enviar a O.S. para a loja, o vendedor que receber deve confirmar o recebimento no Monitor de Produção, onde o sistema habilita 3 opções: "Ordem de serviço entregue ao cliente", "Ordem de serviço recebida do laboratório" e "Devolver para o Laboratório" (caso seja constatado algum problema). Ao selecionar "Ordem de serviço entregue ao cliente", a operação da O.S. no sistema é finalizada.

**Perguntas frequentes relacionadas:**
- Quais opções o laboratório tem para uma O.S.?
- Como devolvo uma O.S. do laboratório para tratamento?
- Como confirmo a entrega final ao cliente?

**Imagens associadas:**
- `image55.png` — Figura 55: opção "O.S. devolvida para tratamento" com campo de motivo.
- `image56.png` — Figura 56: translado laboratório → loja.

---

### caixa_venda-saldo-a-receber_01
**Metadados:**
```json
{
  "id": "caixa_venda-saldo-a-receber_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Venda com Saldo a Receber",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como gerar uma venda com saldo a receber (pagamento parcial + crédito)",
  "palavras_chave": ["saldo a receber", "crédito do cliente", "pagamento parcial", "carnê"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "35-36",
  "revisar": false
}
```
**Conteúdo:**
Na O.S. criada, acessar com o botão direito do mouse e gerar a venda normalmente. Se o cliente possuir saldo (crédito), é possível receber parte do valor em uma forma de pagamento e debitar a outra parte faltante desse crédito. Exemplo do manual: valor de R$ 303,00 pago em dinheiro e saldo faltante de R$ 300,00 aplicado via carnê. Caso o valor seja parcelado, basta determinar a quantidade de parcelas no campo correspondente; não havendo mais valores a receber, a venda pode ser encerrada.

**Perguntas frequentes relacionadas:**
- Como faço uma venda com parte do pagamento em carnê e parte em dinheiro?
- É possível parcelar o saldo a receber?

**Imagens associadas:** `image57.png` — Figura 57: venda com saldo a receber.

---

### caixa_promocao-lentes-dobro_01
**Metadados:**
```json
{
  "id": "caixa_promocao-lentes-dobro_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Promoção Lentes em Dobro",
  "subassunto": "Requisitos e geração",
  "tipo_conteudo": "procedimento",
  "titulo": "Requisitos e como gerar a Promoção Lentes em Dobro",
  "palavras_chave": ["promoção lentes em dobro", "lente dobro", "marcador", "módulo administrativo"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "36-38",
  "revisar": false
}
```
**Conteúdo:**
A Lente em Dobro é uma promoção onde o cliente compra um par de lentes e ganha outro. Requisitos e regras:
- A promoção "Lente em Dobro" precisa estar habilitada no módulo administrativo, com a família de lentes atrelada/habilitada para essa promoção.
- É possível alterar a lente da segunda O.S. de "Lente em Dobro" para outra lente que também tenha o marcador "PROMOÇÃO: LENTE EM DOBRO", desde que o usuário tenha permissão total na tarefa "Promoção lente em dobro: autorização para alterar lentes".
- Deve-se gerar uma O.S. que contenha produtos (lentes) com o marcador da promoção. O sistema gera automaticamente a O.S. em dobro somente com as lentes (quantidade de 2 lentes, pelo preço real de cada uma).
- Demais produtos (ex.: armações) devem ser inseridos na primeira O.S., ou pode-se gerar uma terceira O.S. para o mesmo cliente — a escolha fica a critério do operador.

Passos para gerar a segunda O.S. da promoção:
1. Gerar a O.S. original com produtos que tenham marcadores da promoção.
2. No campo azul (lado esquerdo), clicar na guia "Ordem de Serviço".
3. Clicar com o botão direito na O.S. original (que precisa ter lentes com o marcador) e selecionar **"Promoção lente em dobro"**.
4. Será gerada automaticamente uma nova O.S. contendo a lente da promoção.

**Perguntas frequentes relacionadas:**
- Quais são os requisitos para usar a Promoção Lentes em Dobro?
- É possível trocar a lente da segunda O.S. da promoção?
- Como o sistema gera a segunda O.S. da promoção lente em dobro?

**Imagens associadas:**
- `image58.png` — Figura 58: O.S. com armações e lente da promoção.
- `image59.png` — Figura 59: opção "Promoção lente em dobro" na O.S. original.
- `image60.png` — Figura 60: geração da segunda O.S.

---

### caixa_promocao-lentes-dobro_02_finalizacao
**Metadados:**
```json
{
  "id": "caixa_promocao-lentes-dobro_02_finalizacao",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Promoção Lentes em Dobro",
  "subassunto": "Finalização das duas O.S. (venda e brinde)",
  "tipo_conteudo": "procedimento",
  "titulo": "Como finalizar as duas Ordens de Serviço da Promoção Lentes em Dobro",
  "palavras_chave": ["promoção lentes em dobro", "brinde", "nota fiscal modelo 55", "natureza de operação"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "38-40",
  "revisar": false
}
```
**Conteúdo:**
Passos para finalizar as duas O.S. da promoção:
1. Finalizar a primeira O.S. (gerar venda), considerando as formas de pagamento escolhidas pelo cliente.
2. Após a primeira O.S. estar com a venda finalizada, finalizar a segunda O.S. (a que contém a lente da promoção).
3. A venda da O.S. com a lente em dobro deve ser finalizada com a forma de pagamento **"Brinde"** — será emitida uma nota fiscal modelo 55 com natureza de operação Brinde (5910). O preço exibido na nota é ajustado no cadastro da Natureza de Operação.
4. Escolher um motivo para finalizar a O.S. atrelada à promoção e escolher o vendedor.
5. Após "gerar vendas" nas duas O.S., é possível visualizar ambas na guia "VENDAS".

**Observações importantes:**
- Só é possível vender a O.S. de Lente em Dobro se a primeira O.S. (que originou a lente em dobro) já estiver com a venda **finalizada**.
- A venda gerada a partir da lente em dobro **não aparece** na aba "Vendas" do caixa — apenas no histórico de vendas.

**Perguntas frequentes relacionadas:**
- Com qual forma de pagamento devo finalizar a O.S. da lente em dobro?
- Por que a venda da lente em dobro não aparece na aba Vendas do caixa?
- Posso vender a segunda O.S. antes da primeira estar finalizada?

**Imagens associadas:**
- `image61.png`, `image62.png` — Figuras 61-62: finalização da primeira O.S.
- `image63.png`, `image64.png` — Figuras 63-64: finalização da segunda O.S.
- `image65.png` — Figura 65: encerramento com forma de pagamento Brinde.
- `image66.png` — Figura 66: motivo de finalização.
- `image67.png` — Figura 67: escolha do vendedor.
- `image68.png` — Figura 68: visualização das vendas geradas.

---

### caixa_baixa-carne_01
**Metadados:**
```json
{
  "id": "caixa_baixa-carne_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Baixa de Carnê",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como realizar a baixa de uma parcela de carnê",
  "palavras_chave": ["baixa de carnê", "parcela", "F5", "F6", "F7", "F10", "pagamento carnê"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "40-42",
  "revisar": false
}
```
**Conteúdo:**
Válido tanto para "Saldo a Receber" quanto para crediário próprio da loja. Passos:
1. Clicar na opção **"Operações"** (barra de botões horizontal, faixa cinza) e em seguida em **"Baixa de carnê"**.
2. Filtrar o carnê buscando pelo cliente na barra de pesquisa e confirmar com o botão **"Buscar"**.
3. Com o cliente selecionado, escolher a parcela em aberto e pressionar a tecla referente ao meio de pagamento utilizado (pode ser mais de um):
   - **F5** = cartão;
   - **F6** = cheque;
   - **F7** = dinheiro;
   - **F10** = banco.
4. Após inserir os meios de pagamento, pressionar **F9** ou clicar em **"Pagar"** — a parcela do carnê será baixada.

**Perguntas frequentes relacionadas:**
- Como dar baixa em uma parcela de carnê?
- Quais teclas de atalho existem para os meios de pagamento na baixa de carnê?
- É possível pagar uma parcela com mais de uma forma de pagamento?

**Imagens associadas:**
- `image69.png` — Figura 69: acesso a Operações > Baixa de Carnê.
- `image70.png` — Figura 70: busca do carnê por cliente.
- `image71.png` — Figura 71: forma de pagamento na baixa de carnê.

---

### caixa_2via-carne_01
**Metadados:**
```json
{
  "id": "caixa_2via-carne_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Impressão de 2ª via de comprovante de pagamento de carnê",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como imprimir a segunda via de um comprovante de pagamento de carnê",
  "palavras_chave": ["segunda via", "carnê", "histórico financeiro", "comprovante"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "42-43",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Acessar a ferramenta "Histórico Financeiro" na guia superior, opção "Histórico".
2. Utilizar os parâmetros de pesquisa disponíveis (ex.: filtro "cliente/fornecedor" pela lupa, selecionar o cliente na nova janela e pressionar **F3** ou o botão "Pesquisar").
3. Selecionar o documento pago que deseja reimprimir, clicar com o botão direito do mouse e seguir: **Imprimir > Recibo > Comprovante de carnês – Tipo carnê**. Após clicar nesta opção, a impressão sai automaticamente na impressora térmica conectada.

**Perguntas frequentes relacionadas:**
- Como reimprimir o comprovante de pagamento de um carnê?
- Onde encontro o histórico financeiro de um cliente para reimpressão?

**Imagens associadas:**
- `image72.png` — Figura 72: acesso ao histórico financeiro.
- `image73.png` — Figura 73: escolha do cliente na pesquisa.
- `image74.png` — Figura 74: opção de reimpressão do comprovante de carnê.

---

### caixa_2via-nfce-nfe_01
**Metadados:**
```json
{
  "id": "caixa_2via-nfce-nfe_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Impressão de 2ª via de NFC-e e NF-e",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como emitir a segunda via de um documento fiscal (NFC-e ou NF-e)",
  "palavras_chave": ["segunda via", "NFC-e", "NF-e", "nota fiscal", "imprimir nota"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "44-45",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Acessar a opção "Vendas" no menu da faixa azul.
2. Identificar a venda que deseja imprimir a segunda via (ver chunk `caixa_pesquisa-venda_01`).
3. Clicar com o botão direito do mouse sobre a venda.
4. Ir em "Nota Fiscal" > "Imprimir Nota Fiscal". Também é possível usar a opção "Mais" apenas para visualizar a nota, sem imprimir.

**Perguntas frequentes relacionadas:**
- Como emito uma segunda via de nota fiscal (NFC-e/NF-e)?
- Como visualizo uma nota fiscal sem imprimir?

**Imagens associadas:** `image75.png` — Figura 75: emissão de segunda via de NFC-e/NF-e.

---

### caixa_devolucao_01
**Metadados:**
```json
{
  "id": "caixa_devolucao_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Devolução",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como realizar a devolução de mercadoria de uma venda",
  "palavras_chave": ["devolução", "devolução de mercadoria", "crédito", "estorno"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "45-49",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Encontrar a venda gerada ao cliente (ver "Pesquisa de venda").
2. Clicar com o botão direito sobre a venda e escolher a opção **"devolução de mercadoria"**.
3. Uma nova janela se abrirá — a devolução também é tratada como uma entrada de mercadoria no estoque.
4. Selecionar o item que o cliente **NÃO** devolverá e excluí-lo dos itens de devolução listados, mantendo somente o item que será de fato devolvido.
5. Confirmar a exclusão do item que **NÃO** será devolvido.
6. O sistema perguntará se deseja gerar um crédito no valor da devolução:
   - **Opção NÃO**: se o cliente estiver exigindo o estorno, deve-se devolver o valor ao cliente;
   - **Opção SIM**: se o cliente **NÃO** estiver exigindo o estorno, deve-se gerar o crédito referente à devolução.

**Perguntas frequentes relacionadas:**
- Como faço uma devolução de mercadoria no DataWeb?
- Qual a diferença entre gerar crédito e fazer estorno na devolução?
- Como excluo um item que o cliente não quer devolver?

**Imagens associadas:**
- `image76.png` — Figura 76: opção "devolução de mercadoria".
- `image77.png` — Figura 77: escolha do item na devolução.
- `image78.png` — Figura 78: exclusão de item não devolvido.
- `image79.png` — Figura 79: confirmação da exclusão.
- `image80.png` — Figura 80: finalização (crédito ou estorno).

---

### caixa_garantia_01_iniciar
**Metadados:**
```json
{
  "id": "caixa_garantia_01_iniciar",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Pesquisar venda e gerar OS de Garantia/Reparo",
  "tipo_conteudo": "procedimento",
  "titulo": "Como iniciar o processo de Garantia de um produto (pesquisar venda e gerar OS de Garantia/Reparo)",
  "palavras_chave": ["garantia", "nota fiscal de garantia", "OS de garantia", "reparo", "validade garantia"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "50-52",
  "revisar": false
}
```
**Conteúdo:**
Este processo emite uma "nota fiscal de garantia" para o produto. Essa nota de garantia tem validade de **3 meses** para ser usada, salvo se o cliente tiver adquirido uma garantia especial com prazo maior (geralmente 2 anos).

Passos:
1. Pesquisar e selecionar a venda relacionada ao produto.
2. Pesquisar/selecionar a venda — é possível filtrar, por exemplo, por período de datas da venda.
3. Após a consulta, escolher a venda para a emissão da garantia.
4. Clicar com o botão direito na venda e selecionar **"Gerar OS de Garantia/Reparo"**.
5. O sistema disponibiliza a tela com a relação de produtos habilitados a receber garantia atrelados à venda.
6. Escolher os itens que farão parte da garantia.

**Perguntas frequentes relacionadas:**
- Qual a validade da nota fiscal de garantia?
- Como inicio um processo de garantia para um produto vendido?
- Onde seleciono os itens que entrarão na garantia?

**Imagens associadas:**
- `image81.png`, `image82.png`, `image83.png` — pesquisa e seleção da venda.
- `image84.png` — opção "Gerar OS de Garantia/Reparo".
- `image85.png` — relação de produtos habilitados à garantia.
- `image86.png` — seleção dos itens da garantia.

---

### caixa_garantia_02_dados-receita
**Metadados:**
```json
{
  "id": "caixa_garantia_02_dados-receita",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Preenchimento de dados e receita / Encerramento da OS de garantia",
  "tipo_conteudo": "procedimento",
  "titulo": "Como preencher os dados, a receita e encerrar a OS de Garantia",
  "palavras_chave": ["garantia", "observações", "defeitos relatados", "receita", "F7", "F9 encerrar"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "52-54",
  "revisar": false
}
```
**Conteúdo:**
Após escolher os itens da garantia, revisar os dados e preencher os campos **"Observações"** e **"Defeitos Relatados"**; o número da Garantia é exibido na tela. Se o item selecionado for um par de lentes, pressionar **F7 (Receita)** para preencher os dados da receita com a dioptria do cliente e teclar **OK (F9)** para efetivar. Em seguida, o sistema retorna à tela do pedido, onde deve-se clicar em **F9: Encerrar** para concluir o preenchimento da OS de garantia.

Após esse encerramento, ao clicar no botão "Ordens de Serviço", o sistema exibirá as ordens de serviço em aberto — as que possuem **fundo amarelo** estão atreladas à GARANTIA.

**Perguntas frequentes relacionadas:**
- Preciso preencher a receita para qualquer produto em garantia?
- Como sei quais O.S. estão relacionadas a garantia?
- Como encerro o preenchimento de uma OS de garantia?

**Imagens associadas:**
- `image87.png` — preenchimento de observações/defeitos relatados.
- `image88.png` — preenchimento da receita (F7).
- `image89.png` — encerramento da OS (F9).
- `image90.png` — lista de O.S. com fundo amarelo (garantia).

---

### caixa_garantia_03_enf-e-pedido
**Metadados:**
```json
{
  "id": "caixa_garantia_03_enf-e-pedido",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Garantia",
  "subassunto": "Geração de ENF (Módulo Entradas) e Pedido de Garantia (Módulo Pedido)",
  "tipo_conteudo": "procedimento",
  "titulo": "Como gerar a ENF de garantia e o Pedido de Garantia (CFOP 1915 e 5916)",
  "palavras_chave": ["ENF", "CFOP 1915", "CFOP 5916", "módulo entradas", "módulo pedido", "garantia", "outras operações"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "54-64",
  "revisar": false
}
```
**Conteúdo:**
**Duas situações possíveis no processo de garantia:**
- **1º Passo:** o cliente não deixa o produto na loja e apenas pede a troca via garantia — **não é necessário** gerar uma ENF de garantia.
- **2º Passo:** o cliente deixa o produto na loja e pede avaliação/troca via garantia — **é necessário** gerar uma ENF de garantia, conforme descrito abaixo.

**Passos (2º Passo):**
1. Selecionar a ordem de serviço, clicar com o botão direito, escolher **"Outras Operações"** > **"Gerar ENF de garantia"**. O sistema gera um número de ENF.
2. Ir ao **MÓDULO ENTRADAS** do sistema DataWeb.
3. No Módulo de Entrada, digitar o número da ENF no campo "Número da ENF" e clicar em "Pesquisas" para efetivar a consulta.
4. Constatar que o CFOP gerado é o **nº 1915**, referente a "ENTRADA DE MERCADORIA PARA GARANTIA". O sistema gera uma "Nota Fiscal" já encerrada — esse processo já dá baixa no módulo estoque e registra o produto como garantia.

**Etapas do processo completo de Garantia:**
1. Entrada de Produto
2. Movimentação na Loja
3. Movimentação no Laboratório (Produção)
4. Entrega Final do Produto ao Consumidor (depende da integridade da execução das etapas anteriores)

**Geração do Pedido de Garantia (entrega final ao cliente):**
1. Seguir os passos para gerar o Pedido de Garantia.
2. O sistema emite um pedido (pedido encerrado com nota emitida).
3. No **MÓDULO PEDIDO**, é possível visualizar o pedido, com status "PEDIDO ENCERRADO COM NOTA EMITIDA".
4. Ao selecionar esse pedido, é possível validar que ele tem o CFOP nº **5.916**, referente a "Retorno de Mercadoria de entrega de garantia", além dos dados do produto a ser entregue ao cliente.

**Perguntas frequentes relacionadas:**
- Quando é necessário gerar uma ENF de garantia?
- O que significa o CFOP 1915?
- O que significa o CFOP 5916?
- Quais são as etapas completas do processo de garantia?

**Imagens associadas:**
- `image91.png` — opção "Outras Operações" > "Gerar ENF de garantia".
- `image92.png` — número de ENF gerado.
- `image93.png` — consulta da ENF no Módulo Entradas.
- `image94.png` — CFOP 1915 confirmado.
- `image95.png` — geração de Pedido de Garantia.
- `image96.png` — pedido encerrado com nota emitida.
- `image97.png` — Módulo Pedido, pedido encerrado.
- `image98.png` — CFOP 5.916 confirmado.
- `image99.png`, `image100.png` — ícones das etapas do processo de garantia.

---

### caixa_credito-cliente_01
**Metadados:**
```json
{
  "id": "caixa_credito-cliente_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Utilizar Crédito do Cliente em uma Venda",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como utilizar o crédito disponível do cliente como forma de pagamento",
  "palavras_chave": ["crédito do cliente", "F6", "forma de pagamento crédito", "saldo disponível"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "66-67",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Após selecionar os itens da venda, pressionar **F6** para selecionar as formas de pagamento.
2. Selecionar a opção **"6 - Crédito"**.
3. Informar o valor que deseja utilizar do crédito disponível para o cliente.

**Observação:** o valor utilizado pode ser menor ou igual ao disponível. Se for menor, o saldo restante do crédito fica disponível para uma compra futura. Se o crédito disponível for menor que o valor total da venda, é necessário selecionar outra forma de pagamento para completar o valor restante.

**Perguntas frequentes relacionadas:**
- Como uso o crédito do cliente em uma nova venda?
- O que acontece se o crédito do cliente for menor que o valor da venda?
- O saldo de crédito não utilizado fica disponível depois?

**Imagens associadas:**
- `image101.png` — acesso às formas de pagamento (F6).
- `image102.png` — opção "6 - Crédito".
- `image103.png` — inserção do valor de crédito a utilizar.

---

### caixa_retirada-caixa_01
**Metadados:**
```json
{
  "id": "caixa_retirada-caixa_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Retirada de Caixa",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como realizar uma Retirada de Caixa",
  "palavras_chave": ["retirada de caixa", "sangria", "motivo retirada"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "68-69",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Ir ao menu "Caixa" e selecionar a opção **"Retirada"**.
2. Na tela seguinte, informar o valor e o motivo da retirada.
3. Clicar em **"OK"** para concluir.
4. O sistema exibe uma mensagem de confirmação, para garantir que se trata de uma retirada e não de uma transferência para outra conta.

A retirada aparece registrada no resumo de venda/caixa.

**Perguntas frequentes relacionadas:**
- Como faço uma retirada de dinheiro do caixa (sangria)?
- É necessário informar um motivo para a retirada?

**Imagens associadas:**
- `image104.png` — menu Caixa > Retirada.
- `image105.png` — tela de valor e motivo.
- `image106.png` — mensagem de confirmação.
- `image107.png` — retirada refletida no resumo de caixa.

---

### caixa_aporte-caixa_01
**Metadados:**
```json
{
  "id": "caixa_aporte-caixa_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Aporte de Caixa",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como realizar um Aporte de Caixa",
  "palavras_chave": ["aporte de caixa", "fundo de caixa", "motivo aporte"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "70-71",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Ir ao menu "Caixa" e selecionar a opção **"Aporte de caixa"**.
2. Na tela seguinte, informar o valor e o motivo do aporte.
3. Clicar em **"OK"** para concluir.

O aporte fica registrado no resumo de caixa.

**Perguntas frequentes relacionadas:**
- Como faço um aporte de dinheiro no caixa?
- Qual a diferença entre aporte e abertura de caixa?

**Imagens associadas:**
- `image108.png` — menu Caixa > Aporte de Caixa.
- `image109.png` — tela de valor e motivo do aporte.
- `image110.png` — aporte refletido no resumo de caixa.

---

### caixa_pesquisa-receita_01
**Metadados:**
```json
{
  "id": "caixa_pesquisa-receita_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Consultas de receitas de vendas e histórico financeiro",
  "subassunto": "Pesquisa de receita",
  "tipo_conteudo": "procedimento",
  "titulo": "Como pesquisar a receita de um cliente",
  "palavras_chave": ["pesquisa de receita", "filtro cliente", "CPF/CNPJ", "médico"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "72-73",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Acessar a opção "Receita" no menu superior.
2. Na janela que se abre, filtrar o cliente por: parte ou nome completo, CPF/CNPJ, ou pelo médico que prescreveu a receita (nesta opção é importante que a O.S. gerada contenha o nome do médico).
3. Após pesquisar e selecionar corretamente o cliente, acessar a opção "Cadastro" com o cliente selecionado.
4. A receita informada no momento da O.S. será exibida.

**Perguntas frequentes relacionadas:**
- Como consulto a receita de um cliente?
- É possível filtrar a receita pelo médico prescritor?

**Imagens associadas:**
- `image111.png` — acesso à opção Receita.
- `image112.png` — critérios de filtro da pesquisa.
- `image113.png` — seleção do cliente / opção Cadastro.
- `image114.png` — receita exibida.

---

### caixa_pesquisa-venda_01
**Metadados:**
```json
{
  "id": "caixa_pesquisa-venda_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Pesquisa de venda",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como pesquisar uma venda já realizada",
  "palavras_chave": ["pesquisa de venda", "histórico de vendas", "filtro", "número da venda"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "74-75",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Acessar a opção "Histórico" no menu superior e selecionar "Histórico de vendas".
2. Utilizar os parâmetros de pesquisa disponíveis, como filtro por nome do cliente, vendedor ou fornecedor (clicando na lupa), ou o botão "Avançado" para outros filtros.
3. Verificar, na listagem retornada, qual venda é a correta.
4. Alternativamente, na tela "Vendas" (primeira opção no menu de faixa azul), é possível inserir diretamente o número da venda, caso seja conhecido.

**Perguntas frequentes relacionadas:**
- Como encontro uma venda antiga no DataWeb?
- É possível pesquisar a venda pelo número diretamente?

**Imagens associadas:**
- `image115.png` — acesso a Histórico > Histórico de vendas.
- `image116.png` — filtro por lupa.
- `image117.png` — filtro avançado.
- `image118.png` — pesquisa rápida por número da venda.

---

### caixa_historico-financeiro_01
**Metadados:**
```json
{
  "id": "caixa_historico-financeiro_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Histórico Financeiro",
  "subassunto": "",
  "tipo_conteudo": "procedimento",
  "titulo": "Como consultar o Histórico Financeiro de um cliente",
  "palavras_chave": ["histórico financeiro", "filtro documento", "financeiro do cliente"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "76-77",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. No menu superior, acessar "Histórico" > "Histórico financeiro".
2. Na janela exibida, selecionar o método de filtro mais adequado às informações disponíveis.
3. Após o filtro, visualizar o documento desejado — a janela permite várias opções de ação sobre o documento.

**Perguntas frequentes relacionadas:**
- Como consulto o histórico financeiro de um cliente?
- Que tipo de filtros existem no histórico financeiro?

**Imagens associadas:**
- `image119.png` — acesso ao histórico financeiro.
- `image120.png` — métodos de filtro.
- `image121.png` — documento localizado com opções disponíveis.

---

### caixa_resumo-caixa_01
**Metadados:**
```json
{
  "id": "caixa_resumo-caixa_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Relatório de Resumo de Caixa",
  "subassunto": "",
  "tipo_conteudo": "conceito",
  "titulo": "O que contém o Relatório de Resumo de Caixa",
  "palavras_chave": ["resumo de caixa", "relatório", "totais do caixa", "movimentações", "vendas por forma de pagamento", "vendas por vendedor"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "78-79",
  "revisar": false
}
```
**Conteúdo:**
Acesso: opção "Resumo" no menu superior (faixa cinza) > "Visualizar resumo do caixa". O resumo de caixa, após as movimentações do dia, apresenta 4 blocos principais de informação (que podem ocupar mais de 3 páginas):
1. **Totais do caixa**: valores de entrada por forma de pagamento (cheque, cartão, dinheiro etc.), valores retirados (mesma estrutura) e a soma total (entradas − retiradas).
2. **Movimentações do caixa**: total de desconto cedido em R$, valor de devolução em R$, aporte de dinheiro, cheque pré-datado, à vista e carnês.
3. **Resumo de vendas por forma de pagamento ou por vendedor**: por forma de pagamento (dinheiro, cartão — com bandeira, modalidade débito/crédito e parcelamento) ou por vendedor (quanto cada vendedor gerou em receita).
4. **Vendas detalhadas**: detalhe da venda gerada por O.S., forma de pagamento e detalhe por parcela (quando pagamento em crédito parcelado).

**Perguntas frequentes relacionadas:**
- O que mostra o relatório de resumo de caixa?
- Como vejo quanto cada vendedor gerou de receita no dia?
- Onde consulto o total de descontos concedidos no dia?

**Imagens associadas:**
- `image122.png` — acesso ao Resumo de Caixa.
- `image123.png`, `image124.png` — Figuras 102-103: partes 1 e 2 do resumo de caixa.

---

### caixa_encerramento-caixa_01
**Metadados:**
```json
{
  "id": "caixa_encerramento-caixa_01",
  "manual_origem": "MANUAL_OPERACIONAL_DO_SISTEMA_DATAWEB___MÓDULO_CAIXA.docx",
  "modulo": "Caixa",
  "assunto": "Encerramento de Caixa",
  "subassunto": "Conferência de Caixa",
  "tipo_conteudo": "procedimento",
  "titulo": "Como realizar o Encerramento de Caixa (Conferência de Caixa)",
  "palavras_chave": ["encerrar caixa", "conferência de caixa", "fechamento de caixa", "impressora matricial"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": true,
  "pagina_origem": "80-84",
  "revisar": false
}
```
**Conteúdo:**
Passos:
1. Acessar a opção **"Encerrar Caixa"** no menu superior (faixa cinza). O sistema exibirá a tela de "Conferência de Caixa".
2. **Parte 1 — Conferência de Caixa sem valores:** tela inicial onde se deve preencher as caixas de valores, distribuindo os valores de acordo com as formas de pagamento utilizadas.
3. **Parte 2 — Conferência de Caixa com valores conforme Resumo:** preencher as caixas de valores com base nos valores captados no Resumo de Caixa, seguindo os exemplos e descrições de cada forma de pagamento.
4. Após o preenchimento correto (com base no Resumo de Caixa), clicar em **OK** para prosseguir.
5. O sistema disponibiliza um relatório de "Conferência de Caixa" para impressão em impressora comum. Caso não deseje imprimir, clicar em **VOLTAR**.
6. Em seguida, o sistema disponibiliza um relatório de "Fechamento de Caixa" para impressão em impressora matricial. Caso não deseje imprimir, clicar em **VOLTAR**.

**Perguntas frequentes relacionadas:**
- Como encerro o caixa no fim do dia?
- O que é a Conferência de Caixa?
- Preciso imprimir o relatório de fechamento de caixa?

**Imagens associadas:**
- `image125.png` — Figura 104: acesso a "Encerrar Caixa".
- `image126.png` — Figura 105: exemplo de conferência de caixa preenchida.
- `image127.png` — Figura 106: descrições nas formas de pagamento.
- `image128.png` — Figura 107: conferência de caixa final.
- `image129.png` — Figura 108: relatório final de conferência de caixa.
- `image130.png` — Figura 109: impressão em impressora matricial.

---

## 3. Glossário (Módulo Caixa)

| Termo | Definição (conforme manual) |
|---|---|
| **Cartão Fidelidade** | Sistema para fidelizar clientes, oferecendo benefícios em troca de compras/uso de serviços; o cliente acumula pontos trocáveis por prêmios/descontos. |
| **Cartão Bonificação** | Cartões que oferecem aos colaboradores liberdade de escolher como desejam ser recompensados (produtos, serviços ou experiências). |
| **DANFE** | Documento Auxiliar da Nota Fiscal Eletrônica; fornece dados rápidos ao consumidor/fiscalização e serve como comprovante da operação, coletando assinatura do destinatário na entrega. |
| **Inventário** | Listagem completa de todos os produtos armazenados no estoque de uma empresa, identificando, classificando e valorando cada produto. |
| **Fundo de Caixa / Aporte** | Valor que inicia junto do operador de caixa para atender clientes que pagam em dinheiro. |
| **Retirada de Caixa (Sangria)** | Retirada de valores do caixa quando as transações em dinheiro acumulam valores elevados. |
| **Sobra de Caixa** | Quando há dinheiro a mais no caixa (o oposto de "quebra de caixa", que ocorre quando falta dinheiro). |
| **Ordem de Serviço** | Tarefa/trabalho para um cliente, que pode ser agendado ou atribuído; pode originar de solicitação do cliente ou ser criada internamente. |
| **NF-e** | Nota Fiscal Eletrônica; documento fiscal eletrônico com validade jurídica a partir da assinatura digital do emissor e recepção pelo Fisco; substitui a nota fiscal em papel Modelo 1/A-1. Emissão obrigatória em toda transação. |
| **NFC-e** | Nota Fiscal de Consumidor Eletrônica; documento fiscal emitido diretamente ao consumidor, substituindo o cupom fiscal e a nota de venda em papel; iniciativa do SPED (Receita Federal). |
| **Nota Fiscal** | Documento fiscal que comprova uma operação de compra e venda; depende de sistema emissor e, geralmente, de certificado digital. |
| **PDV** | Ponto de Venda — espaço (físico ou online) onde a empresa vende produtos/serviços ao cliente. |

---

## 4. Pontos sinalizados para revisão

- `[REVISAR: numeração de figuras inconsistente]` — a partir da seção "Utilizar Crédito do Cliente" o manual reinicia a numeração das figuras (Figura 81 em diante), sem retomar a sequência anterior de forma always-linear; confirmar se a intenção era reiniciar por seção.
- `[REVISAR: nota de rodapé 1 vazia]` — a nota de rodapé `[^1]` no trecho sobre "Valor de abertura" está vazia no documento original; não foi possível recuperar o conteúdo pretendido.
- `[REVISAR: relação entre este manual e o manual "CAIXA - Garantia Devolução Crédito V3"]` — as seções **Garantia**, **Devolução** e **Utilizar Crédito do Cliente em uma Venda** deste manual têm conteúdo equivalente (e mais detalhado/atualizado, incluindo a distinção conceitual entre Garantia e Devolução) no manual dedicado "CAIXA - Garantia Devolução Crédito V3". Recomenda-se usar o manual V3 como fonte canônica para esses três assuntos na base RAG, para evitar duplicidade ou informações conflitantes — ver observação na seção final deste documento e o arquivo `RAG_dataweb_garantia_devolucao_credito.md`.
