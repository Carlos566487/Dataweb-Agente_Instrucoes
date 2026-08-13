# Base de Conhecimento RAG — Manual: ADMINISTRADOR - IMPORTAR CERTIFICADO DIGITAL NO SISTEMA

---

## 1. RESUMO ESTRUTURAL DO MANUAL (sumário reconstituído)

```
(sem sumário formal no documento — estrutura reconstituída pelos títulos internos)

Certificado Digital no Dataweb (texto introdutório/conceitual)
├── O que é um certificado digital
├── É obrigatório para as empresas ter o certificado digital?
└── Certificados digitais e suas particularidades
    ├── Certificado Digital Tipo A1
    └── Certificado Digital Tipo A3 (não compatível com o Dataweb)

MÓDULO <ADMINISTRADOR> DA DATAWEB
└── Certificado Digital — procedimento de importação/cadastro
    ├── Certificado Digital - Cadastrar (acesso ao menu)
    ├── Certificado Digital - Selecionar (seleção do arquivo)
    ├── Certificado Digital - Inserir Senha
    └── Certificado Digital - Carregar no Banco de Dados
```

**Observação estrutural:** o manual não possui sumário/índice formal (diferente do manual de Campanhas). A estrutura foi reconstituída a partir dos títulos (`Heading`) presentes no corpo do texto. O conteúdo se divide claramente em duas partes: (1) material conceitual sobre certificados digitais (o que são, obrigatoriedade, tipos A1 e A3) e (2) o procedimento operacional de importação do certificado no módulo Administrador, numerado de 1 a 4.

**Nota de fidelidade sobre as imagens:** neste processamento não foi possível realizar a inspeção visual das capturas de tela (falha na ferramenta de visualização). As descrições de imagem abaixo foram construídas **apenas** a partir do que o texto do manual afirma explicitamente sobre cada tela (nomes de campos, botões e ações citados), sem inferir elementos visuais não descritos (cores, destaques, layout exato). Pontos que dependeriam de confirmação visual estão sinalizados com `[REVISAR]`.

---

## 2. LISTA DE CHUNKS

### dataweb-certificado-digital_administrador_conceito_01

**Metadados:**
```json
{
  "id": "dataweb-certificado-digital_administrador_conceito_01",
  "manual_origem": "ADMINISTRADOR - IMPORTAR CERTIFICADO DIGITAL NO SISTEMA",
  "modulo": "Administrador",
  "assunto": "Certificado Digital",
  "subassunto": "Conceito / Obrigatoriedade",
  "tipo_conteudo": "conceito",
  "titulo": "O que é um certificado digital e para que serve no Dataweb",
  "palavras_chave": ["certificado digital", "assinatura digital", "NFe", "NFCe", "CTe", "validade jurídica"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": false,
  "pagina_origem": "1",
  "revisar": false
}
```

**Conteúdo:**

**Módulo: Administrador | Assunto: Certificado Digital**

Um certificado digital é um arquivo eletrônico que atua como uma assinatura digital para pessoas físicas e jurídicas, com validade jurídica. Ele garante a autenticidade de transações eletrônicas, proporcionando mais segurança ao validar a identidade do portador, seja uma pessoa ou uma empresa.

Com o aumento das transações bancárias e da emissão de notas fiscais eletrônicas no meio digital, o certificado digital se torna essencial para atestar a veracidade desses documentos, funcionando como uma assinatura com validade jurídica. A autenticação é realizada digitalmente, permitindo a emissão de Notas Fiscais Eletrônicas e a validação de diversos outros documentos eletrônicos.

**O certificado digital autentica o usuário ou a empresa em transações online**, tornando-as mais seguras. Com essa segurança digital, é possível realizar diversas operações de maneira simples e eletrônica, como:

- Emissão de **NFe** (Notas Fiscais Eletrônicas) e **NFCe** (Notas Fiscais de Consumidor Eletrônicas);
- Emissão de **CTe** (Conhecimento de Transporte Eletrônico).

**Perguntas frequentes relacionadas:**
- O que é um certificado digital?
- Para que serve o certificado digital no Dataweb?
- É obrigatório ter certificado digital para emitir NFe no Dataweb?
- O certificado digital é usado para emitir CTe?

**Imagens associadas:** nenhuma (a única imagem próxima a este trecho é o logotipo/banner de cabeçalho do documento, sem conteúdo informativo de tela do sistema).

---

### dataweb-certificado-digital_administrador_tipos_a1_a3_02

**Metadados:**
```json
{
  "id": "dataweb-certificado-digital_administrador_tipos_a1_a3_02",
  "manual_origem": "ADMINISTRADOR - IMPORTAR CERTIFICADO DIGITAL NO SISTEMA",
  "modulo": "Administrador",
  "assunto": "Certificado Digital",
  "subassunto": "Tipos de Certificado (A1 e A3)",
  "tipo_conteudo": "conceito",
  "titulo": "Diferença entre Certificado Digital Tipo A1 e Tipo A3 no Dataweb",
  "palavras_chave": ["certificado A1", "certificado A3", "tipo de certificado", "compatibilidade", "validade de um ano"],
  "perfil_usuario": "todos",
  "possui_imagem_referenciada": false,
  "pagina_origem": "1-2",
  "revisar": false
}
```

**Conteúdo:**

**Módulo: Administrador | Assunto: Certificado Digital | Subassunto: Tipos de Certificado**

**Certificado Digital Tipo A1**

O Certificado Digital Tipo A1 é armazenado diretamente nos dispositivos, como notebooks e smartphones, permitindo o uso em qualquer lugar e a qualquer momento — sendo especialmente útil para a emissão de NFe de serviços, com disponibilidade contínua.

Este certificado possui validade de um ano e tem a vantagem de não necessitar de um dispositivo externo para seu armazenamento, como ocorre em outras modalidades. Ele fica armazenado no próprio dispositivo, tornando o processo de emissão de NFe mais ágil e dinâmico.

O Certificado Digital A1 é um arquivo digital que pode ser utilizado imediatamente após a compra, permitindo emissões de documentos em qualquer computador, tanto dentro quanto fora da empresa — basta salvar e instalar o arquivo no novo dispositivo. Ele também pode ser utilizado simultaneamente em diferentes ambientes, sendo ideal para empresas com setores fiscais e contábeis em locais físicos distintos ou em operações remotas.

**Certificado Digital Tipo A3**

⚠️ **Não é compatível com o sistema Dataweb.**

**Observações:**
- O manual não detalha as características técnicas do Certificado A3 (apenas afirma a incompatibilidade); portanto, apenas o Certificado A1 deve ser utilizado para importação no Dataweb.

**Perguntas frequentes relacionadas:**
- Qual a diferença entre certificado digital A1 e A3?
- O Dataweb aceita certificado digital A3?
- Qual a validade do certificado digital A1?
- Preciso de um dispositivo externo (token) para usar o certificado A1?

**Imagens associadas:** nenhuma

---

### dataweb-certificado-digital_administrador_importar_procedimento_03

**Metadados:**
```json
{
  "id": "dataweb-certificado-digital_administrador_importar_procedimento_03",
  "manual_origem": "ADMINISTRADOR - IMPORTAR CERTIFICADO DIGITAL NO SISTEMA",
  "modulo": "Administrador",
  "assunto": "Certificado Digital",
  "subassunto": "Importação/Cadastro do Certificado",
  "tipo_conteudo": "procedimento",
  "titulo": "Como importar (cadastrar) o certificado digital no sistema Dataweb",
  "palavras_chave": ["importar certificado digital", "cadastrar certificado", "Configurações", "Nota fiscal", "Carregar no BD", "senha do certificado"],
  "perfil_usuario": "administrador",
  "possui_imagem_referenciada": true,
  "pagina_origem": "2-3",
  "revisar": true
}
```

**Conteúdo:**

**Módulo: Administrador | Assunto: Certificado Digital | Subassunto: Importação/Cadastro do Certificado**

Procedimento para importar/cadastrar o certificado digital (Tipo A1) no sistema Dataweb, a partir do módulo Administrador.

**Pré-requisito:** possuir o arquivo do certificado digital Tipo A1 salvo no computador (o manual indica que normalmente ele fica na pasta **Downloads**) e conhecer a senha do certificado.

**Passo a passo:**

1. Acesse **Módulo Administrador > Configurações > Nota fiscal...**

2. Na parte inferior da tela, no campo **Certificado digital**, clique nos **3 pontos (...)** para selecionar o arquivo digital.
   - *Observação do manual:* ao clicar nos 3 pontos será necessário buscar no computador o local onde está o certificado — normalmente ele fica na pasta Downloads.

3. Insira a **senha** do certificado.

4. Clique no botão **Carregar no BD**. Em seguida, para salvar, clique no botão **OK** (caso o botão não apareça na tela, utilize o atalho de teclado **Alt + O** para salvar).

**Após concluir o procedimento:**
- O sistema exibe a confirmação: *"Certificado atualizado!"*
- **Para que o certificado funcione em todas as máquinas, é necessário sair do sistema e entrar novamente (logout/login).**
- O certificado importado fica **vinculado à empresa**, ficando disponível para uso por todos os usuários, se necessário.

**Perguntas frequentes relacionadas:**
- Como importar o certificado digital no Dataweb?
- Onde fica a opção para cadastrar o certificado digital no módulo Administrador?
- O que fazer se o botão OK não aparecer ao carregar o certificado?
- Preciso reiniciar o sistema depois de importar o certificado digital?
- O certificado digital importado fica disponível para todos os usuários ou só para quem o cadastrou?

**Imagens associadas:**
- **Imagem referente ao passo 1:** captura de tela do caminho de navegação **Módulo Administrador > Configurações > Nota fiscal**. `[REVISAR: inspeção visual da tela não realizada nesta sessão; descrição baseada apenas no texto do passo]`
- **Imagem referente ao passo 2:** captura de tela da tela de Nota Fiscal, mostrando o campo **Certificado digital** e o botão de reticências ("3 pontos") usado para selecionar o arquivo. `[REVISAR: inspeção visual da tela não realizada nesta sessão; descrição baseada apenas no texto do passo]`
- **Imagem referente ao passo 3:** captura de tela do campo de inserção de **senha** do certificado. `[REVISAR: inspeção visual da tela não realizada nesta sessão; descrição baseada apenas no texto do passo]`
- **Imagem referente ao passo 4:** captura de tela com os botões **Carregar no BD** e **OK**. `[REVISAR: inspeção visual da tela não realizada nesta sessão; descrição baseada apenas no texto do passo]`

---

## 3. GLOSSÁRIO DE TERMOS ESPECÍFICOS DO DATAWEB

| Termo | Definição (conforme uso no manual) |
|---|---|
| **Certificado digital** | Arquivo eletrônico com validade jurídica que atua como assinatura digital, autenticando pessoa física ou jurídica em transações eletrônicas. |
| **Certificado Digital Tipo A1** | Modalidade de certificado armazenada diretamente no dispositivo (notebook, smartphone), com validade de um ano, compatível com o Dataweb. |
| **Certificado Digital Tipo A3** | Modalidade de certificado citada no manual apenas para informar que **não é compatível** com o sistema Dataweb. |
| **NFe** | Nota Fiscal Eletrônica — documento cuja emissão é autenticada via certificado digital. |
| **NFCe** | Nota Fiscal de Consumidor Eletrônica. |
| **CTe** | Conhecimento de Transporte Eletrônico. |
| **Carregar no BD** | Botão da tela de importação do certificado, usado para gravar o certificado carregado no banco de dados do sistema. |
| **Módulo Administrador** | Módulo do Dataweb onde se realiza a importação/cadastro do certificado digital (caminho: Configurações > Nota fiscal). |

---

## 4. PONTOS SINALIZADOS PARA REVISÃO

1. **[REVISAR]** — As descrições das 4 imagens do procedimento de importação (passos 1 a 4) foram elaboradas **sem inspeção visual**, devido a uma falha na ferramenta de visualização de imagens nesta sessão. Recomenda-se reprocessar essas imagens para confirmar elementos visuais (botões destacados, layout exato da tela de "Nota fiscal", aparência do campo de senha) antes de publicar este chunk na base vetorial final.
2. **[REVISAR]** — O manual não detalha o que fazer caso a senha do certificado esteja incorreta, nem eventuais mensagens de erro do sistema durante o carregamento.
3. **[REVISAR]** — Não há informação sobre como substituir/atualizar um certificado já vinculado à empresa quando ele expirar (o A1 tem validade de um ano), nem sobre como remover um certificado cadastrado.
4. **[REVISAR]** — Não é informado se existe restrição de perfil de usuário para realizar esta importação (ex.: se apenas o perfil Administrador tem acesso à tela de Configurações > Nota fiscal).
5. **[REVISAR]** — O manual não explica por que o Certificado A3 não é compatível com o Dataweb, apenas declara o fato.

---

*Fim do processamento do manual "ADMINISTRADOR - IMPORTAR CERTIFICADO DIGITAL NO SISTEMA". Nomenclatura de módulo ("Administrador") mantida consistente com o manual "ADMINISTRADOR - CADASTRAR CAMPANHAS" já processado, para facilitar filtragem cruzada na base vetorial.*
