import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/lib/providers";
import { ThemeProvider } from "@/lib/theme-provider";
import { TooltipProvider } from "@/lib/tooltip-provider";

export const metadata: Metadata = {
  title: "Dataweb Chat — Assistente IA",
  description:
    "Chat com o agente Dataweb-Instrucoes powered by Azure AI Foundry. Tire suas dúvidas sobre instruções, processos e documentação.",
  robots: { index: false, follow: false }, // App interno — não indexar
};

/**
 * Layout raiz — cadeia de providers seguindo padrão design-diniz:
 * ThemeProvider → TooltipProvider → QueryProvider → children
 *
 * Dark mode preparado mas pausado: forcedTheme="light" conforme a skill.
 * Para reativar, remova o atributo forcedTheme e reexiba o toggle.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider delayDuration={300}>
            {/* QueryProvider: gerencia estado de server mutations (useChat) */}
            <QueryProvider>
              {children}
            </QueryProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
