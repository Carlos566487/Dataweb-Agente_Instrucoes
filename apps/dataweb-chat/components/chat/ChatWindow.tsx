"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Bot, Trash2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useChat } from "@/hooks/useChat";
import { MessageBubble } from "./MessageBubble";
import { InputBox } from "./InputBox";
import { cn } from "@/lib/utils";

/**
 * Indicador de digitação — exibido enquanto o agente processa a resposta.
 */
function TypingIndicator() {
  return (
    <div className="flex gap-3 w-full animate-fade-in">
      {/* Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-sm">
        <Bot size={14} className="text-muted-foreground" />
      </div>

      <div className="flex flex-col gap-1 items-start">
        <span className="text-xs text-muted-foreground font-medium px-1">
          Dataweb IA
        </span>
        <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center h-[44px]">
          <div className="flex gap-1.5 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Estado vazio — exibido quando não há mensagens ainda.
 */
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center animate-slide-up">
      {/* Logo / ícone de marca */}
      <div className="relative group">
        <div className="w-40 h-20 rounded-2xl bg-white border border-primary/20 flex items-center justify-center shadow-xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 group-hover:shadow-primary/20 p-3 overflow-hidden">
          <Image 
            src="/logo-diniz.png" 
            alt="Óticas Diniz" 
            width={140} 
            height={60} 
            className="object-contain transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg border-2 border-background z-10">
          <span className="text-[11px] text-primary-foreground font-bold">IA</span>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-foreground tracking-tight">
          Assistente Dataweb
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mx-auto">
          Olá! Sou o agente de instruções Dataweb. Pode me perguntar sobre
          processos, documentação ou qualquer dúvida operacional.
        </p>
      </div>

      {/* Sugestões rápidas */}
      <div className="flex flex-wrap gap-2 justify-center max-w-md mt-4">
        {[
          "Como faço para…?",
          "Quais são os processos de…?",
          "Explique o fluxo de…",
        ].map((suggestion) => (
          <button
            key={suggestion}
            className="text-xs px-4 py-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground border border-border/50 text-muted-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            onClick={() => {
              const input = document.getElementById('chat-input') as HTMLTextAreaElement;
              if (input) {
                input.value = suggestion;
                input.focus();
              }
            }}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * ChatWindow — container principal do chat.
 * Gerencia scroll automático, lista de mensagens, loading e input.
 * Inclui FAB de scroll-to-bottom quando o usuário rola para cima.
 */
export function ChatWindow() {
  const { messages, sendMessage, clearSession, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  /** Verifica se o scroll está perto do fundo */
  const checkScrollPosition = useCallback(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    setShowScrollButton(distanceFromBottom > 120);
  }, []);

  /** Scroll suave até o final */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Scroll automático para o fim ao receber nova mensagem ou loading
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  return (
    <div
      id="chat-window"
      className="flex flex-col h-screen max-h-screen bg-[hsl(var(--chat-bg))] bg-gradient-to-b from-[hsl(var(--chat-bg))] to-background"
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-6 py-4 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm flex-shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          {/* Indicador de status */}
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-white border border-primary/20 flex items-center justify-center shadow-sm p-1.5 overflow-hidden">
              <Image 
                src="/logo-diniz.png" 
                alt="Óticas Diniz" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </div>
            <div
              className={cn(
                "absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-background shadow-sm transition-colors duration-300",
                isLoading ? "bg-amber-400 animate-pulse" : "bg-emerald-500"
              )}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo-diniz-3.png" 
                alt="Logo Diniz" 
                width={100} 
                height={40} 
                className="object-contain rounded-md shadow-sm border border-border/50"
              />
              <h1 className="text-base font-bold text-foreground leading-tight tracking-tight">
                Dataweb — Instruções
              </h1>
            </div>
            <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
              {isLoading ? "Processando…" : "Online · Azure AI Foundry"}
            </p>
          </div>
        </div>

        {/* Botão limpar sessão */}
        {messages.length > 0 && (
          <button
            id="clear-session-button"
            type="button"
            onClick={clearSession}
            aria-label="Limpar conversa"
            title="Limpar conversa"
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium",
              "text-muted-foreground border border-border/50 bg-card/50 backdrop-blur-sm",
              "hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20 transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-sm active:scale-95"
            )}
          >
            <Trash2 size={14} className="opacity-80" />
            <span className="hidden sm:inline">Nova conversa</span>
          </button>
        )}
      </header>

      {/* ── Área de mensagens ───────────────────────────────────── */}
      <main 
        ref={messagesContainerRef}
        onScroll={checkScrollPosition}
        className="flex-1 overflow-y-auto scrollbar-thin px-4 md:px-8 lg:px-16 py-8 relative"
      >
        {messages.length === 0 && !isLoading ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-6 max-w-3xl mx-auto pb-4">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}

            {/* Indicador de digitação durante loading */}
            {isLoading && <TypingIndicator />}

            {/* Âncora para scroll automático */}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* FAB: Scroll to bottom */}
      {showScrollButton && (
        <div className="absolute bottom-[130px] right-8 z-20 animate-fade-in">
          <button
            onClick={scrollToBottom}
            aria-label="Rolar para o final"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-md text-foreground hover:bg-background transition-all hover:scale-110 active:scale-95"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      )}

      {/* ── Input ──────────────────────────────────────────────── */}
      <div className="flex-shrink-0 w-full z-10 relative bg-gradient-to-t from-background via-background/95 to-transparent pt-6 pb-2">
        <div className="max-w-3xl mx-auto w-full px-4 md:px-8 lg:px-16">
          <InputBox onSend={sendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
