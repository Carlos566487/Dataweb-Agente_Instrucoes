"use client";

import { useRef, useCallback, useState, KeyboardEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_CHARS = 4000;

interface InputBoxProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

/**
 * Campo de entrada do chat.
 * - Enter: envia a mensagem
 * - Shift+Enter: insere quebra de linha
 * - Auto-resize até 5 linhas
 * - Desabilitado durante loading
 * - Indicador de caracteres (máx 4000)
 */
export function InputBox({ onSend, isLoading, disabled }: InputBoxProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState(0);

  /** Ajusta altura do textarea ao conteúdo (máx ~5 linhas) e atualiza contador */
  const autoResize = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 140)}px`;
    setCharCount(el.value.length);
  }, []);

  const handleSend = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    const value = el.value.trim();
    if (!value || isLoading || disabled || value.length > MAX_CHARS) return;
    onSend(value);
    el.value = "";
    el.style.height = "auto";
    setCharCount(0);
  }, [onSend, isLoading, disabled]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const isDisabled = isLoading || disabled;
  const isOverLimit = charCount > MAX_CHARS;

  return (
    <div className="bg-transparent p-2 md:p-4 pb-4">
      <div
        className={cn(
          "flex items-end gap-3 rounded-[24px] border border-border/60 bg-card/80 backdrop-blur-xl",
          "px-4 py-3 shadow-lg transition-all duration-300",
          "focus-within:border-primary/50 focus-within:shadow-[0_4px_24px_-4px_hsl(var(--primary)/0.15)] focus-within:-translate-y-0.5",
          isDisabled && "opacity-60",
          isOverLimit && "border-destructive/50"
        )}
      >
        {/* Textarea auto-resize */}
        <textarea
          ref={textareaRef}
          id="chat-input"
          rows={1}
          maxLength={MAX_CHARS + 100} // Soft limit — Zod valida no backend
          placeholder={
            isLoading
              ? "Aguardando resposta do agente…"
              : "Digite sua mensagem… (Enter para enviar, Shift+Enter para nova linha)"
          }
          disabled={isDisabled}
          onChange={autoResize}
          onKeyDown={handleKeyDown}
          className={cn(
            "flex-1 resize-none bg-transparent text-sm text-foreground",
            "placeholder:text-muted-foreground/70 outline-none",
            "scrollbar-thin max-h-[140px] min-h-[24px] leading-6 py-1.5",
            "disabled:cursor-not-allowed transition-colors"
          )}
        />

        {/* Botão de enviar */}
        <button
          id="chat-send-button"
          type="button"
          onClick={handleSend}
          disabled={isDisabled || isOverLimit}
          aria-label="Enviar mensagem"
          className={cn(
            "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-2xl",
            "bg-primary text-primary-foreground shadow-md",
            "transition-all duration-300",
            "hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/20",
            "active:scale-95",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          {isLoading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Send size={18} strokeWidth={2.5} className="-ml-0.5" />
          )}
        </button>
      </div>

      {/* Contador de caracteres + disclaimer */}
      <div className="flex items-center justify-between mt-3 px-2">
        <p className="text-[11px] font-medium text-muted-foreground/60 transition-opacity hover:text-muted-foreground">
          Dataweb IA pode cometer erros. Verifique informações importantes.
        </p>

        {charCount > 0 && (
          <span
            className={cn(
              "text-[11px] font-mono font-medium tabular-nums transition-colors duration-200",
              isOverLimit
                ? "text-destructive"
                : charCount > MAX_CHARS * 0.9
                ? "text-amber-500"
                : "text-muted-foreground/50"
            )}
          >
            {charCount}/{MAX_CHARS}
          </span>
        )}
      </div>
    </div>
  );
}
