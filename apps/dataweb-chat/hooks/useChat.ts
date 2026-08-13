"use client";

import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";

// ──────────────────────────────────────────────────────────────────────────────
// Tipos
// ──────────────────────────────────────────────────────────────────────────────
export interface Message {
  id: string;
  role: "user" | "assistant" | "error";
  content: string;
  timestamp: Date;
}

interface ChatApiResponse {
  reply: string;
  threadId: string;
  code?: string;
}

// Chave do sessionStorage para persistir o threadId entre reloads da mesma aba
const THREAD_STORAGE_KEY = "dataweb_thread_id";

// ──────────────────────────────────────────────────────────────────────────────
// Comunicação com a API Route — NUNCA chama o Azure SDK direto (frontend-padrao)
// ──────────────────────────────────────────────────────────────────────────────
async function postMessage(
  message: string,
  threadId: string | null
): Promise<ChatApiResponse> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, threadId }),
  });

  const data: { reply?: string; threadId?: string; error?: string; code?: string } =
    await res.json();

  if (!res.ok) {
    throw new Error(data.error ?? "Erro desconhecido ao contatar o agente.");
  }

  return data as ChatApiResponse;
}

// ──────────────────────────────────────────────────────────────────────────────
// Hook principal
// ──────────────────────────────────────────────────────────────────────────────
export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);

  // Lê threadId do sessionStorage na inicialização (preserva contexto ao reload)
  const [threadId, setThreadId] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem(THREAD_STORAGE_KEY);
  });

  const mutation = useMutation<ChatApiResponse, Error, string>({
    mutationFn: (message: string) => postMessage(message, threadId),

    // Adiciona mensagem do usuário otimisticamente antes da resposta
    onMutate: (message) => {
      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: message,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
    },

    onSuccess: (data) => {
      // Persiste o threadId para manter histórico na sessão
      if (data.threadId) {
        setThreadId(data.threadId);
        sessionStorage.setItem(THREAD_STORAGE_KEY, data.threadId);
      }

      const agentMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMsg]);
    },

    onError: (error) => {
      // Se o thread expirou, limpa o ID para criar um novo na próxima mensagem
      const errorAsAny = error as Error & { code?: string };
      if (errorAsAny.message?.includes("THREAD_NOT_FOUND")) {
        setThreadId(null);
        sessionStorage.removeItem(THREAD_STORAGE_KEY);
      }

      const errorMsg: Message = {
        id: crypto.randomUUID(),
        role: "error",
        content: error.message,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    },
  });

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (trimmed && !mutation.isPending) {
        mutation.mutate(trimmed);
      }
    },
    [mutation]
  );

  /** Limpa o histórico local e inicia nova sessão (novo thread no próximo envio) */
  const clearSession = useCallback(() => {
    setMessages([]);
    setThreadId(null);
    sessionStorage.removeItem(THREAD_STORAGE_KEY);
  }, []);

  return {
    messages,
    sendMessage,
    clearSession,
    isLoading: mutation.isPending,
    isError: mutation.isError,
  };
}
