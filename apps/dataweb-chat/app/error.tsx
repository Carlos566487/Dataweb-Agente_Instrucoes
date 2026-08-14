"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[ErrorBoundary]", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div
        className={cn(
          "flex max-w-md flex-col items-center gap-6 rounded-3xl p-10 text-center",
          "bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl"
        )}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 shadow-lg">
          <AlertCircle className="h-8 w-8 text-destructive" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-foreground tracking-tight">
            Algo deu errado
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ocorreu um erro inesperado. Tente novamente ou recarregue a página.
          </p>
        </div>

        <button
          onClick={reset}
          className={cn(
            "flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold",
            "bg-primary text-primary-foreground shadow-md",
            "transition-all duration-300",
            "hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/20",
            "active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
        >
          <RotateCcw className="h-4 w-4" />
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
