import type { Metadata } from "next";
import { ChatWindow } from "@/components/chat/ChatWindow";

export const metadata: Metadata = {
  title: "Dataweb Chat — Assistente IA",
  description:
    "Converse com o agente Dataweb-Instrucoes para tirar dúvidas sobre processos e documentação.",
};

/**
 * Página principal — renderiza o ChatWindow como componente client-side.
 * O Server Component (page.tsx) é mantido leve: sem lógica, só layout.
 */
export default function HomePage() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <ChatWindow />
    </main>
  );
}
