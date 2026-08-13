---
name: frontend-padrao
description: Convenções de código do frontend Next.js padrão Diniz - todo fetch autenticado via fetchWithAuth + buildApiUrl, refresh automático em 401, dados sempre via React Query em hooks/, pt-BR na UI. Use ao consumir API no front, criar hooks de dados, ou revisar chamadas fetch. Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Convenções de código (frontend) — padrão Diniz

## Todo fetch autenticado passa por `fetchWithAuth` + `buildApiUrl`

```ts
const res = await fetchWithAuth(buildApiUrl('/usuarios'));
```

- `buildApiUrl(path)` resolve a base: `NEXT_PUBLIC_API_URL + '/api'` ou `/api` (proxy do Next em dev).
- `fetchWithAuth` injeta `Authorization: Bearer`, e em **401** tenta **um** refresh automático
  (`/auth/refresh`); se falhar, limpa cookies e redireciona para `/login`. NUNCA fazer `fetch` cru
  para a API autenticada.

## Dados sempre via React Query

- Hooks em `hooks/` (ex.: `useUsuarios`, `useVendas`). Componentes consomem o hook, não chamam
  fetch direto.
- `logout`/troca de usuário chama `queryClient.clear()`.

## Padrões gerais

- pt-BR em UI, mensagens e nomes de domínio.
- Código conciso, sem abstração prematura nem over-engineering.
- Comentários explicam **por quê** (decisão/gotcha), não o óbvio.
- Cores e fontes **sempre** pelos tokens da skill `design-diniz` — nunca hex hardcoded.
