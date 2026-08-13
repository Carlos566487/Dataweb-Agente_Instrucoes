---
name: logs-auditoria
description: Padrão de logs e auditoria Diniz - registro de tentativas de login (sucesso e falha) em LOG_ACESSO com IP/user-agent, gravação que nunca lança exceção, módulo logs/ com listagem paginada restrita a MASTER/ADMINISTRADOR. Use ao implementar auditoria, logging de domínio ou telas de log. Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Logs & Auditoria — padrão Diniz

## Princípios

- **SEMPRE** registrar tentativas de login (sucesso e falha) na tabela `LOG_ACESSO`.
- A gravação de log **NUNCA** lança exceção — falha de auditoria não pode quebrar o fluxo de auth
  (envolver em `try/catch` que só loga o erro).
- Capturar metadados da requisição: **IP** (respeitando `X-Forwarded-For`) + **navegador/SO/dispositivo**
  derivados do `user-agent` (via `ua-parser-js`). Truncar campos (UA ≤ 512, navegador/SO ≤ 80, etc.).
- `main.ts` deve ter `app.set('trust proxy', true)` para o IP real atrás de nginx/load balancer
  (ver skill `seguranca-api`).

```ts
// registrarAcesso — nunca lança
private async registrarAcesso(email, sucesso, motivo, userId, meta?) {
  try {
    await this.prisma.lOG_ACESSO.create({ data: {
      user_id: userId,
      email: (email ?? '').slice(0, 254),
      sucesso, motivo,
      ip: meta?.ip ?? null,
      user_agent: meta?.userAgent ?? null,
      navegador: meta?.navegador ?? null,
      so: meta?.so ?? null,
      dispositivo: meta?.dispositivo ?? null,
    }});
  } catch (err) {
    this.logger.error(`Falha ao registrar log de acesso: ${(err as Error).message}`);
  }
}
```

## Módulo `logs/`

- Endpoint paginado de acessos com filtros (`email`, `resultado: sucesso|falha`, intervalo `de`/`ate`).
  `ate` sem hora cobre o dia inteiro (`23:59:59.999`).
- Endpoint "últimos acessos por usuário" (`ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY criado_em DESC)`).
- Tela de logs no front é **restrita a MASTER/ADMINISTRADOR**.
- Usar o `Logger` do NestJS (`private readonly logger = new Logger(Classe.name)`) em services para
  warn/error de domínio.
