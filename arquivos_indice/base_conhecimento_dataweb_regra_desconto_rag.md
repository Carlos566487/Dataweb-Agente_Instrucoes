# Base de Conhecimento RAG — ERP DATAWEB
## Manual: REGRA DE DESCONTO - CADASTRO
**Versão:** V 01.01  
**Fonte:** Manual fornecido pelo usuário  
**Objetivo:** Estruturar o conteúdo do manual para uso em um agente de IA voltado a dúvidas de colaboradores sobre como utilizar o ERP DATAWEB.

---

# 1. Resumo estrutural do manual

- **Módulo:** Administrador da Dataweb
  - **Assunto:** Regras de Desconto
    - **Subassunto:** Guia Regras de Desconto
      - Opções de Regras
      - Inserir Regra
      - Inserir Regra – Opções
      - Dados da Regra de Desconto

---

# 2. Chunks

## dataweb_administrador_regras_desconto_01

**Metadados:**
```json
{
  "id": "dataweb_administrador_regras_desconto_01",
  "manual_origem": "REGRA DE DESCONTO - CADASTRO",
  "modulo": "Administrador da Dataweb",
  "assunto": "Regras de Desconto",
  "subassunto": "Conceito e elementos das regras de desconto",
  "tipo_conteudo": "conceito",
  "titulo": "Quais são os principais elementos das regras de desconto no ERP DATAWEB?",
  "palavras_chave": [
    "regra de desconto",
    "ERP DATAWEB",
    "nome da regra",
    "tipo de regra",
    "período de vigência",
    "aplicável a",
    "validade para a empresa"
  ],
  "perfil_usuario": "administrador",
  "possui_imagem_referenciada": false,
  "pagina_origem": "1",
  "revisar": false
}
```

**Conteúdo:**

No **ERP DATAWEB**, a configuração de regras de desconto é uma funcionalidade para o controle e a gestão das políticas comerciais. Ela permite definir estratégias de desconto para diferentes produtos, serviços e condições de venda.

Os principais elementos das regras de desconto são:

1. **Nome da Regra:** identifica a regra de desconto e permite seu reconhecimento e seleção durante o processo de vendas.

2. **Tipo de Regra:** determina o desconto a ser aplicado, incluindo o valor inicial (**% de desconto**) e o desconto padrão atribuído ao produto, como armação, lente ou família de produtos. Também pode ser definido um valor máximo (**% máximo**), que impede o vendedor de conceder desconto superior ao especificado. Para valores de desconto superiores ao permitido, a solicitação de senha deve estar configurada e ativa.

3. **Período de Vigência:** define o período durante o qual a regra ficará ativa. As regras podem ser programadas para iniciar e finalizar automaticamente em datas específicas.

4. **Aplicável a:** configura as condições nas quais a regra será aplicada. A regra pode ser definida para todos os itens ou de forma específica para uma determinada marca, modelo, item único ou família específica de produtos.

5. **Validade para a Empresa:** estabelece se a regra será aplicada a uma única empresa ou a múltiplas empresas dentro de um grupo.

**Perguntas frequentes relacionadas:**
- Quais são os principais campos de uma regra de desconto no Dataweb?
- Como funciona o valor máximo de desconto?
- Para quais produtos ou empresas uma regra de desconto pode ser aplicada?

**Imagens associadas:** nenhuma.

---

## dataweb_administrador_regras_desconto_02

**Metadados:**
```json
{
  "id": "dataweb_administrador_regras_desconto_02",
  "manual_origem": "REGRA DE DESCONTO - CADASTRO",
  "modulo": "Administrador da Dataweb",
  "assunto": "Regras de Desconto",
  "subassunto": "Acesso à guia Regras",
  "tipo_conteudo": "procedimento",
  "titulo": "Como acessar a guia Regras no Dataweb?",
  "palavras_chave": [
    "Dataweb",
    "Administrador",
    "Regras",
    "guia Regras"
  ],
  "perfil_usuario": "administrador",
  "possui_imagem_referenciada": false,
  "pagina_origem": "2",
  "revisar": false
}
```

**Conteúdo:**

Para acessar a área de **Regras de Desconto** no módulo **Administrador da Dataweb**:

1. Acesse a guia **<Regras>**.

2. Escolha a opção **<Regra de desconto...>**.

Após essa seleção, o manual orienta para a etapa de inserção de uma nova regra.

**Perguntas frequentes relacionadas:**
- Onde encontro as regras de desconto no Dataweb?
- Como acessar a opção Regra de desconto?

**Imagens associadas:** o manual apresenta a seção "GUIA REGRAS DE DESCONTO" e a seção "OPÇÕES DE REGRAS" na página 2, associadas aos passos 1 e 2.

---

## dataweb_administrador_regras_desconto_03

**Metadados:**
```json
{
  "id": "dataweb_administrador_regras_desconto_03",
  "manual_origem": "REGRA DE DESCONTO - CADASTRO",
  "modulo": "Administrador da Dataweb",
  "assunto": "Regras de Desconto",
  "subassunto": "Inserir Regra - Opções",
  "tipo_conteudo": "procedimento",
  "titulo": "Como iniciar o cadastro de uma regra de desconto no Dataweb?",
  "palavras_chave": [
    "inserir regra",
    "nova regra geral",
    "nova regra prioritária",
    "nova regra de cliente",
    "nova regra prioritária de cliente"
  ],
  "perfil_usuario": "administrador",
  "possui_imagem_referenciada": true,
  "pagina_origem": "3",
  "revisar": false
}
```

**Conteúdo:**

Para iniciar o cadastro de uma regra de desconto no **ERP DATAWEB**:

1. Após acessar a opção **<Regra de desconto...>**, aguarde o sistema disponibilizar a tela correspondente.

2. Clique na guia **<Inserir regra>**.

3. Ao clicar em **<INSERIR REGRA>**, serão apresentadas opções para seleção.

4. Selecione a opção de regra adequada ao objetivo do cadastro:
   - **Nova regra geral:** regra utilizada para todas as famílias e clientes.
   - **Nova regra prioritária:** regra que terá prioridade maior sobre a **“Nova Regra Geral”**.
   - **Nova regra de cliente:** regra utilizada para um cliente específico.
   - **Nova regra prioritária de cliente:** regra que terá prioridade maior sobre a **“Regra de Cliente”**.

**Perguntas frequentes relacionadas:**
- Como inserir uma nova regra de desconto no Dataweb?
- Qual a diferença entre Nova regra geral e Nova regra prioritária?
- Qual opção devo usar para uma regra de um cliente específico?

**Imagens associadas:** a página 3 contém a seção **"INSERIR REGRA"** e a seção **"INSERIR REGRA – OPÇÕES"**, relacionadas à abertura da tela e à apresentação das opções após clicar em **<INSERIR REGRA>**.

---

## dataweb_administrador_regras_desconto_04

**Metadados:**
```json
{
  "id": "dataweb_administrador_regras_desconto_04",
  "manual_origem": "REGRA DE DESCONTO - CADASTRO",
  "modulo": "Administrador da Dataweb",
  "assunto": "Regras de Desconto",
  "subassunto": "Dados da Regra de Desconto",
  "tipo_conteudo": "procedimento",
  "titulo": "Como configurar e criar uma regra de desconto no Dataweb?",
  "palavras_chave": [
    "dados da regra de desconto",
    "nome da regra",
    "tipo de regra",
    "% desc",
    "% max",
    "período de vigência",
    "aplicável a",
    "validade para a empresa",
    "OK"
  ],
  "perfil_usuario": "administrador",
  "possui_imagem_referenciada": true,
  "pagina_origem": "4",
  "revisar": false
}
```

**Conteúdo:**

Depois de selecionar uma das opções de regra, a janela de **Dados de Regras de Desconto** será aberta para configuração.

1. **Nome da Regra:** informe o nome que identificará a regra.

2. **Tipo de Regra:** configure o desconto que será gerado para a regra. O manual informa que o valor inicial (**% desc**) e o valor definido serão aplicados ao produto, como armação, lente ou família, entre outros.

3. **Valor máximo (% max):** o valor máximo inibe o vendedor de ultrapassar o desconto descrito. A tarefa de solicitação de senha para maior valor de desconto deve estar ativada para permitir a solicitação quando o desconto ultrapassar o limite configurado.

4. **Período de vigência:** configure o período para que o desconto comece automaticamente e termine na data solicitada.

5. **Aplicável a:** configure a situação na qual a regra será aplicada. O manual informa que ela pode ser aplicada a todos os itens ou a uma família específica.

6. **Validade para a empresa:** selecione se a regra será aplicada a uma única empresa ou, se necessário, às empresas selecionadas.

7. Após configurar a regra, clique em **OK**. A regra estará criada.

**Perguntas frequentes relacionadas:**
- Como configurar uma regra de desconto no Dataweb?
- Como definir o percentual máximo de desconto?
- Como configurar o período de vigência de uma regra?
- Como aplicar uma regra a uma empresa específica?
- Qual botão devo clicar para finalizar a criação da regra?

**Imagens associadas:** a página 4 contém a seção **"DADOS DA REGRA DE DESCONTO"**, associada à janela de configuração da regra descrita no passo 5 do manual.

---

# 3. Glossário de termos específicos do Dataweb

| Termo | Definição conforme o manual |
|---|---|
| **ERP DATAWEB** | Sistema no qual é realizada a configuração e gestão das regras de desconto. |
| **Regra de desconto** | Configuração utilizada para estabelecer políticas e condições de desconto. |
| **Nome da Regra** | Identificação utilizada para reconhecer e selecionar uma regra de desconto. |
| **Tipo de Regra** | Configuração que determina o desconto a ser gerado para a regra. |
| **% desc** | Valor inicial de desconto indicado na configuração da regra. |
| **% max** | Valor máximo de desconto configurado para impedir que o vendedor ultrapasse o limite estabelecido. |
| **Período de vigência** | Período durante o qual a regra de desconto permanece ativa. |
| **Aplicável a** | Configuração que determina a situação, item ou família de produtos aos quais a regra será aplicada. |
| **Validade para a empresa** | Configuração que determina para qual empresa ou empresas a regra será válida. |
| **Nova regra geral** | Regra utilizada para todas as famílias e clientes. |
| **Nova regra prioritária** | Regra que possui prioridade maior sobre a “Nova Regra Geral”. |
| **Nova regra de cliente** | Regra utilizada para um cliente específico. |
| **Nova regra prioritária de cliente** | Regra que possui prioridade maior sobre a “Regra de Cliente”. |
| **Solicitação de senha** | Configuração/tarefa que deve estar ativa para valores de desconto superiores ao permitido. |

---

# 4. Pontos sinalizados para revisão

Não foram identificados trechos ilegíveis ou informações que exigissem marcação `[REVISAR]` na versão textual fornecida.

**Observação de fidelidade:** o manual apresenta referências a figuras/capturas de tela, mas o conteúdo textual disponível não permite descrever detalhes visuais que não estejam explicitamente identificados. Por isso, as imagens foram descritas somente pela seção a que estão associadas, sem inferir elementos visuais adicionais.

---

# 5. Fonte e rastreabilidade

**Manual:** REGRA DE DESCONTO - CADASTRO  
**Versão:** V 01.01  
**Páginas analisadas:** 1 a 4  
**Módulo:** Administrador da Dataweb  
**Assunto:** Regras de Desconto
