---
name: autenticacao
description: Padrão de autenticação Diniz na API NestJS - login por e-mail, JWT access+refresh, bcrypt, recuperação de senha por token com hash, jwt.strategy multi-fonte (header + cookie para SSE). Use ao criar/alterar login, tokens, troca ou reset de senha. Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Autenticação (API) — padrão Diniz

## Regras

- **SEMPRE** login por **e-mail** (campo único do usuário).
- **SEMPRE** senha com **bcrypt** (`saltRounds = 10`). NUNCA armazenar senha em texto.
- **SEMPRE** emitir **dois tokens**: `access_token` (curto) e `refresh_token` (`expiresIn: '7d'`).
- **SEMPRE** mensagem de erro genérica em falha de login (`"Credenciais inválidas"`) — NUNCA
  revelar se foi e-mail inexistente, usuário inativo ou senha errada.
- **SEMPRE** registrar a tentativa (sucesso E falha) na auditoria — ver skill `logs-auditoria`.
- **OBRIGATÓRIO** definir `JWT_SECRET` no `.env`. O fallback `'fallback-secret'` existe só para
  não quebrar o boot em dev; em produção, a ausência da env é erro de configuração.

## `auth.service.ts` (esqueleto canônico)

```ts
async login(loginDto: LoginDto, meta?: RequestMeta) {
  const { login, senha } = loginDto;

  const user = await this.prisma.uSUARIO.findUnique({
    where: { email: login },
    select: {
      user_id: true, nome: true, email: true, senha: true, status: true,
      USUARIO_PERFIL: { select: { PERFIL: { select: { perfil_id: true, codigo: true } } } },
      ACESSO: { where: { ativo: true }, select: { tipo: true } },
    },
  });

  // Falhas → mesma exceção genérica, mas auditadas com motivo distinto
  if (!user)        { await this.registrarAcesso(login, false, 'USUARIO_NAO_ENCONTRADO', null, meta); throw new UnauthorizedException('Credenciais inválidas'); }
  if (!user.status) { await this.registrarAcesso(login, false, 'USUARIO_INATIVO', user.user_id, meta); throw new UnauthorizedException('Credenciais inválidas'); }

  const ok = await bcrypt.compare(senha, user.senha);
  if (!ok) { await this.registrarAcesso(login, false, 'SENHA_INVALIDA', user.user_id, meta); throw new UnauthorizedException('Credenciais inválidas'); }

  // Perfil principal: acesso GLOBAL ⇒ MASTER; senão, perfil MASTER da lista, senão o primeiro, senão 'USER'
  const perfis = user.USUARIO_PERFIL.map(up => up.PERFIL.codigo);
  const temGlobal = user.ACESSO?.some(a => a.tipo === 'GLOBAL') ?? false;
  const perfilPrincipal = temGlobal ? 'MASTER'
    : (perfis.find(p => p.toUpperCase() === 'MASTER') || perfis[0] || 'USER');

  const payload = { sub: Number(user.user_id), email: user.email, perfil: perfilPrincipal, nome: user.nome };
  const access_token  = this.jwtService.sign(payload);
  const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });

  await this.registrarAcesso(user.email, true, 'OK', user.user_id, meta);

  return {
    access_token, refresh_token,
    usuario: { id: Number(user.user_id), nome: user.nome, email: user.email, status: user.status, perfil: perfilPrincipal, perfis },
  };
}
```

## Recuperação de senha — token por **hash** (NUNCA em texto)

- Gera `rawToken = crypto.randomBytes(32).toString('hex')` → enviado por e-mail.
- Salva no banco apenas `bcrypt.hash(rawToken)`. Expira em **1 hora**.
- No reset, busca candidatos não-usados/não-expirados e compara via `bcrypt.compare` (o token não
  é indexável). Ao usar, marca `used_at` e **invalida os demais tokens pendentes** do usuário.
- Ao trocar senha (logado ou via reset), **invalidar** os resets pendentes na mesma transação.
- A URL de reset usa origem validada contra a **allowlist** (`resolveAllowedOrigin`) — NUNCA confiar
  cegamente no header `Origin`/`Referer` (evita phishing).
- `forgotPassword` **SEMPRE** retorna mensagem genérica, exista o e-mail ou não.

## `jwt.strategy.ts` — extração multi-fonte

- Extrai o JWT de `Authorization: Bearer` **e**, como fallback, do cookie `access_token`
  (necessário para SSE/`EventSource`, que não suporta headers customizados).
- No `validate`, **re-busca** o usuário no banco (status ativo), perfis e acessos — NUNCA confiar
  só no payload do token para autorização. Recalcula `perfilPrincipal` e retorna
  `{ sub, nome, email, status, perfil, perfis }`.

## Gotchas já vividos (NÃO repetir)

- `EventSource` (SSE) não manda header `Authorization` → `JwtStrategy` lê o cookie `access_token`.
