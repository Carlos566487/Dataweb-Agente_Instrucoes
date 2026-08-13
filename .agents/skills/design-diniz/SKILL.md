---
name: design-diniz
description: Design system e identidade visual Diniz - cor de marca (vermelho #DC2626), tokens HSL semânticos no globals.css, tipografia Proxima Nova Soft/Inter, shadcn/ui + Radix, dark mode preparado mas pausado, cadeia de providers do layout.tsx. Use ao criar telas, componentes visuais, configurar Tailwind ou montar o layout base do web. Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Design System & UI — identidade Diniz

## 1. Cor de marca (Tailwind)

```ts
diniz: { red: '#DC2626', 'red-dark': '#B91C1C', 'red-light': '#EF4444' }
```

Spinner/realces de marca usam `border-diniz-red`. Cores semânticas (`primary`, `card`, `muted`...)
**SEMPRE** via tokens HSL (`hsl(var(--token))`), nunca hex hardcoded em componentes.

## 2. Tokens HSL (`globals.css`)

Definir variáveis `--background`, `--foreground`, `--primary(-foreground)`, `--secondary`, `--muted`,
`--accent`, `--destructive`, `--card`, `--popover`, `--border`, `--input`, `--ring`, `--radius` e
`--chart-1..5` em dois blocos: `:root` (light) e `.dark`. `--primary` mapeia para o vermelho Diniz.

## 3. Tipografia

```ts
fontFamily: {
  sans:      ['Proxima Nova Soft', 'Inter', 'Arial', ...fontFamily.sans],
  primary:   ['Proxima Nova Soft', 'Inter', 'Arial', ...fontFamily.sans],  // títulos/marca
  secondary: ['Inter', 'Arial', ...fontFamily.sans],                       // corpo
}
```

## 4. Componentes

- **shadcn/ui** (Radix) como base; componentes em `components/` e UI compartilhada importada de `@/ui/*`.
- `darkMode: ['class']`, container centralizado (`padding: 2rem`, `2xl: 1400px`),
  plugin `tailwindcss-animate` para acordeões/transições.
- Dark mode **preparado mas pausado**: `ThemeProvider` com `forcedTheme="light"` até as cores do tema
  escuro estarem revisadas. Reativar removendo `forcedTheme` e reexibindo o toggle.

> Para telas/features novas com peso visual, considere acionar também a skill `frontend-design`
> (minimalismo premium), se disponível — mas a identidade de marca aqui (cor/fonte Diniz) prevalece.

## 5. Cadeia de providers (`app/layout.tsx`) — ORDEM OBRIGATÓRIA

```tsx
<ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem disableTransitionOnChange>
  <TooltipProvider delayDuration={300}>
    <QueryProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryProvider>
  </TooltipProvider>
</ThemeProvider>
```

`<html lang="pt-BR" suppressHydrationWarning>`.
