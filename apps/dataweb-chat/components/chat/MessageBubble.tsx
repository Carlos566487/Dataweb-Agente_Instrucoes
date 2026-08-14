"use client";

import { cn, formatTime } from "@/lib/utils";
import type { Message } from "@/hooks/useChat";
import { AlertCircle, Bot, User, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useCallback, type ComponentPropsWithoutRef } from "react";

interface MessageBubbleProps {
  message: Message;
}

/**
 * Botão de copiar — exibido no hover do balão.
 * Copia o conteúdo da mensagem para o clipboard.
 */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silencioso se clipboard API não disponível
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      aria-label="Copiar mensagem"
      className={cn(
        "absolute top-2 right-2 p-1.5 rounded-lg",
        "opacity-0 group-hover:opacity-100 transition-all duration-200",
        "hover:bg-foreground/10 active:scale-90",
        copied
          ? "text-emerald-500"
          : "text-muted-foreground/50 hover:text-muted-foreground"
      )}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}

/**
 * Componentes customizados para react-markdown — estilizados com Diniz tokens.
 */
const markdownComponents = {
  // Parágrafos
  p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-2 last:mb-0 leading-relaxed" {...props}>
      {children}
    </p>
  ),

  // Links
  a: ({ children, ...props }: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),

  // Listas
  ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-2 ml-4 list-disc space-y-1 last:mb-0" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mb-2 ml-4 list-decimal space-y-1 last:mb-0" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),

  // Código inline
  code: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<"code">) => {
    // Bloco de código (tem className com language-*)
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code
          className={cn(
            "block overflow-x-auto rounded-xl bg-foreground/[0.06] p-4 text-[13px] leading-relaxed font-mono",
            className
          )}
          {...props}
        >
          {children}
        </code>
      );
    }

    // Código inline
    return (
      <code
        className="rounded-md bg-foreground/[0.08] px-1.5 py-0.5 text-[13px] font-mono text-foreground/90"
        {...props}
      >
        {children}
      </code>
    );
  },

  // Bloco pre (wrapper de code blocks)
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mb-3 overflow-hidden rounded-xl border border-border/50 last:mb-0"
      {...props}
    >
      {children}
    </pre>
  ),

  // Blockquote
  blockquote: ({
    children,
    ...props
  }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mb-2 border-l-3 border-primary/40 pl-4 italic text-muted-foreground last:mb-0"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Tabelas
  table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className="mb-2 overflow-x-auto rounded-lg border border-border/50 last:mb-0">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-muted/50 text-left" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th className="px-3 py-2 font-semibold text-foreground" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td className="border-t border-border/30 px-3 py-2" {...props}>
      {children}
    </td>
  ),

  // Heading dentro de mensagens
  h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="mb-2 text-lg font-bold text-foreground" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mb-2 text-base font-bold text-foreground" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mb-1.5 text-sm font-bold text-foreground" {...props}>
      {children}
    </h3>
  ),

  // Separador
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-3 border-border/30" {...props} />
  ),

  // Negrito e itálico
  strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
};

/**
 * Renderiza uma bolha de mensagem do chat.
 * - user: alinhada à direita, fundo vermelho Diniz, ícone User, texto simples
 * - assistant: alinhada à esquerda, fundo card, ícone Bot, renderiza Markdown
 * - error: alinhada à esquerda, fundo destrutivo suave, ícone AlertCircle
 */
export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const isError = message.role === "error";

  return (
    <div
      className={cn(
        "flex gap-3 w-full animate-fade-in group",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110",
          isUser
            ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
            : isError
            ? "bg-destructive/10 text-destructive border border-destructive/20"
            : "bg-card/80 backdrop-blur-sm text-muted-foreground border border-border/50 shadow-sm"
        )}
      >
        {isUser ? (
          <User size={14} strokeWidth={2.5} />
        ) : isError ? (
          <AlertCircle size={14} strokeWidth={2.5} />
        ) : (
          <Bot size={14} strokeWidth={2} />
        )}
      </div>

      {/* Conteúdo */}
      <div
        className={cn(
          "flex flex-col gap-1 max-w-[85%] md:max-w-[75%]",
          isUser ? "items-end" : "items-start"
        )}
      >
        {/* Rótulo do remetente */}
        <span className="text-xs text-muted-foreground/80 font-medium px-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {isUser ? "Você" : isError ? "Erro" : "Dataweb IA"}
        </span>

        {/* Balão */}
        <div
          className={cn(
            "relative px-5 py-3.5 text-[15px] leading-relaxed shadow-sm transition-shadow duration-300",
            isUser
              ? "bg-gradient-to-br from-primary to-primary/95 text-primary-foreground rounded-2xl rounded-tr-sm shadow-primary/10 whitespace-pre-wrap break-words"
              : isError
              ? "bg-destructive/5 text-destructive border border-destructive/20 rounded-2xl rounded-tl-sm backdrop-blur-sm whitespace-pre-wrap break-words"
              : "bg-card/80 backdrop-blur-md text-card-foreground border border-border/50 rounded-2xl rounded-tl-sm hover:shadow-md"
          )}
        >
          {/* Botão copiar (apenas para mensagens do assistente) */}
          {!isUser && !isError && <CopyButton text={message.content} />}

          {/* Conteúdo: Markdown para assistente, texto simples para user/error */}
          {isUser || isError ? (
            message.content
          ) : (
            <div className="prose-chat">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Timestamp */}
        <span className="text-[10px] text-muted-foreground/60 px-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}
