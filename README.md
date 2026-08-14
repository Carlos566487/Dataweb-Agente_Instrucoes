# Dataweb-Instrucoes

Bem-vindo ao repositório oficial do projeto **Dataweb-Instrucoes**! 
Este repositório contém a implementação completa de um Agente de Inteligência Artificial construído com o **Azure AI Foundry Agent Service**, focado em prover suporte e instruções de uso do ERP Dataweb.

O projeto inclui não apenas a aplicação Front-end que hospeda o chat, mas também o contexto e as regras do agente de IA (RAG e System Prompt) para garantir que as respostas sejam embasadas na documentação oficial.

---

## 🎯 Sobre o Agente IA

O **Assistente DATAWEB** é especializado nos seguintes temas, baseando-se unicamente em seus documentos RAG:
1. **Garantia, devolução e crédito** (`RAG_dataweb_garantia_devolucao_credito.md`)
2. **Módulo de Caixa / Frente de Caixa** (`RAG_dataweb_modulo_caixa.md`)
3. **Cadastro de Campanhas** (`dataweb-cadastrar-campanhas_kb.md`)
4. **Importação de Certificado Digital** (`dataweb-importar-certificado-digital_kb.md`)

Ele foi instruído via System Prompt para ser **Amigável, Atencioso, Eficiente e Confiável**, não respondendo a assuntos fora do escopo ou criando informações falsas (alucinações).

---

## 🏗️ Estrutura do Repositório

O projeto é estruturado da seguinte forma:

```
Dataweb-Instrucoes/
├── .agents/                    # Repositório de skills e padrões estruturais do projeto
├── apps/
│   └── dataweb-chat/           # Aplicação Frontend em Next.js 14
├── arquivos_indice/            # Base de conhecimento e System Prompt (RAG Context)
└── README.md                   # Este arquivo
```

### 💻 Aplicação Front-end (`apps/dataweb-chat`)

Uma aplicação web moderna, responsiva e otimizada construída com:
- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS** (utilizando o padrão visual "Design Diniz")
- **Azure AI Projects SDK**
- Efeitos avançados de *Glassmorphism* e micro-animações.

Para saber mais detalhes sobre a arquitetura do front-end e como executá-lo localmente, consulte o [README da Aplicação](apps/dataweb-chat/README.md).

### 📚 Base de Conhecimento RAG (`arquivos_indice/`)

Contém todo o insumo de texto utilizado para basear (fazer o *grounding*) do agente. Os arquivos `.md` desta pasta são indexados pelo modelo do Azure AI Foundry para buscar respostas antes de enviá-las ao usuário final. 

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/Carlos566487/Dataweb-Instrucoes.git
   cd Dataweb-Instrucoes/apps/dataweb-chat
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Copie o template de ambiente:
   ```bash
   cp .env.local.example .env.local
   ```
   Preencha o arquivo `.env.local` com o Endpoint, Agent ID e a sua API Key do **Azure AI Foundry**. (Nunca compartilhe este arquivo ou comite no repositório).

4. **Inicie a aplicação:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🎨 Design System

O Front-end incorpora o **Design Diniz** através de variáveis HSL customizadas, integrando a cor primária `diniz-red (#DC2626)`. Os componentes foram estruturados com foco na experiência e no requinte visual (sombreados refinados, *backdrop-blur* nas barras superiores, animações discretas ao pairar o mouse), garantindo uma navegação "Premium".

---

## 🚀 Como Fazer o Deploy

O projeto está pronto para deploy imediato em plataformas que suportam Next.js, como **Netlify** ou **Vercel**.
Este repositório já inclui um arquivo de configuração `netlify.toml` na raiz, otimizado para o app `dataweb-chat`.

**Deploy no Netlify:**
1. Conecte este repositório no painel do Netlify.
2. Nas configurações de deploy, as variáveis do `netlify.toml` já devem apontar o base directory para `apps/dataweb-chat`.
3. Adicione as variáveis de ambiente necessárias (descritas no arquivo `.env.local.example`) nas **Environment Variables** do site.
4. Faça o deploy!
