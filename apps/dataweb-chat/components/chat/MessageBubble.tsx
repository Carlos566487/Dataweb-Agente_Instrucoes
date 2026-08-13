"use client";

import { cn, formatTime } from "@/lib/utils";
import type { Message } from "@/hooks/useChat";
import { AlertCircle, Bot, User } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
}

/**
 * Renderiza uma bolha de mensagem do chat.
 * - user: alinhada à direita, fundo vermelho Diniz, ícone User
 * - assistant: alinhada à esquerda, fundo card, ícone Bot
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
            "whitespace-pre-wrap break-words",
            isUser
              ? "bg-gradient-to-br from-primary to-primary/95 text-primary-foreground rounded-2xl rounded-tr-sm shadow-primary/10"
              : isError
              ? "bg-destructive/5 text-destructive border border-destructive/20 rounded-2xl rounded-tl-sm backdrop-blur-sm"
              : "bg-card/80 backdrop-blur-md text-card-foreground border border-border/50 rounded-2xl rounded-tl-sm hover:shadow-md"
          )}
        >
          {message.content}
        </div>

        {/* Timestamp */}
        <span className="text-[10px] text-muted-foreground/60 px-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}
