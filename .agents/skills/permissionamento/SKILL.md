---
name: permissionamento
description: Padrão de permissionamento Diniz - perfis administrativos (MASTER, ADMINISTRADOR), perfis internos por setor (RH, TI, JURIDICO, FINANCEIRO, OPERACOES, ARMACOES, LENTES), perfis externos com escopo (DIRETOR, GERENTE), decorator @Roles + RolesGuard na API, ProtectedRoute/useAuth no front, escopo de dados por loja/CNPJ atribuído pelo admin. Use ao criar rota/tela com restrição de acesso, novo perfil, ou atribuição de escopo. Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Permissionamento (Roles) — padrão Diniz

## Perfis padrão (`codigo` em UPPERCASE)

### Administrativos
- **MASTER** — acesso total, inclui operações administrativas. Equivalente a acesso `GLOBAL`.
- **ADMINISTRADOR** — gestão de usuários e atribuição de perfis/escopo.

### Internos (setores da empresa)
- **RH** — recursos humanos.
- **TI** — tecnologia da informação.
- **JURIDICO** — jurídico.
- **FINANCEIRO** — financeiro e configurações financeiras.
- **OPERACOES** — operações.
- **ARMACOES** — setor de armações.
- **LENTES** — setor de lentes.

### Externos (fora da empresa — sempre com escopo de dados restrito)
- **DIRETOR** — vê apenas o escopo (lojas/CNPJs) atribuído pelo admin.
- **GERENTE** — escopo operacional restrito à(s) loja(s) atribuída(s).

### Fallback
- **USER** — usuário sem perfil atribuído. Não dá acesso a nada além do básico autenticado.

Regras:
- Cada projeto usa **apenas os perfis que fizerem sentido** para o seu domínio, mas os `codigo`s
  acima são canônicos — NUNCA inventar variações (ex.: `FINANC`, `RECURSOS_HUMANOS`).
- Perfil novo que não esteja nesta lista exige aprovação do revisor (registrar na SPEC).
- Perfis **externos** NUNCA enxergam dados fora do escopo atribuído; toda query de dados de
  negócio para eles filtra pelo escopo.

> Escopo de dados (ex.: quais lojas um DIRETOR/GERENTE vê) é **atribuído manualmente pelo admin**
> via tabela de associação (`USUARIO_LOJA` ou equivalente). NUNCA derivar escopo de regras
> implícitas de grupo.

## API — guards + decorator

`@Roles(...)` define os perfis exigidos; `RolesGuard` aceita match em `perfil` **ou** em `perfis[]`
(case-insensitive). Aplicar **sempre** `JwtAuthGuard` antes de `RolesGuard`.

```ts
// roles.decorator.ts
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

// uso no controller
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('MASTER', 'ADMINISTRADOR')
@Get('usuarios')
listar() { /* ... */ }
```

```ts
// roles.guard.ts (núcleo)
const required = this.reflector.getAllAndOverride<string[]>('roles', [ctx.getHandler(), ctx.getClass()]);
if (!required) return true;                          // rota sem @Roles = só exige autenticação
const user = ctx.switchToHttp().getRequest().user;
if (!user) throw new ForbiddenException('Usuário não autenticado');
const perfil  = String(user.perfil ?? '').toUpperCase();
const perfis  = (user.perfis ?? []).map(p => String(p).toUpperCase());
const hasRole = required.some(r => perfil === r.toUpperCase() || perfis.includes(r.toUpperCase()));
if (!hasRole) throw new ForbiddenException(`Acesso negado. Perfil necessário: ${required.join(' ou ')}.`);
return true;
```

## Web — proteção de rota + contexto

- `useAuth()` (`AuthContext`) expõe `user` (`{ id, nome, email, status, perfil, perfis[] }`),
  `login`, `logout`, `isLoading`, `isAuthenticated`. Tokens e `user` ficam em **cookie**
  (`expires: 7`, `secure` quando HTTPS, `sameSite: 'lax'`).
- `<ProtectedRoute requiredRoles={['MASTER']}>` redireciona para `/login` se não autenticado e para
  `/unauthorized` se autenticado sem o perfil. O grupo `(authenticated)/layout.tsx` envolve as
  páginas internas.
- `logout()` **SEMPRE** limpa cookies, `queryClient.clear()` e `sessionStorage` antes de redirecionar.

## Regra de ouro para funcionalidades novas

Toda rota nova de API nasce com `JwtAuthGuard` no mínimo; se a SPEC define quem pode usar,
adicionar `RolesGuard` + `@Roles(...)`. Lembrar que o front (`ProtectedRoute`) é conveniência de
UX — a segurança real é **sempre** no guard da API.
