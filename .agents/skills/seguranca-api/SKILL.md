---
name: seguranca-api
description: Configuração obrigatória de segurança do main.ts NestJS padrão Diniz - dotenv-first, ValidationPipe global (whitelist + forbidNonWhitelisted), CORS por allowlist em produção, compression, cookie-parser, trust proxy, Swagger, prefixo /api - e checklist de segurança. Use ao criar o bootstrap da API, configurar CORS, ou revisar segurança de endpoints. Normativa: SEMPRE/NUNCA são regras rígidas.
---

# Segurança da API (`main.ts`) — padrão Diniz

## Configuração obrigatória

```ts
// .env carregado ANTES de qualquer módulo (Prisma 7 não auto-carrega)
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = await NestFactory.create(AppModule);
app.getHttpAdapter().getInstance().set('trust proxy', true);     // IP real
app.use(compression());                                          // gzip nas respostas
app.use(cookieParser());                                         // JWT via cookie (SSE)
app.useGlobalPipes(new ValidationPipe({
  whitelist: true, forbidNonWhitelisted: true, transform: true,  // DTOs estritos
}));
app.setGlobalPrefix('api');
// Swagger em /docs com addBearerAuth()
app.enableCors({
  origin: isDevelopment ? true : getAllowedOrigins(),            // allowlist em prod
  methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 204,
});
await app.listen(4000);
```

## Checklist de segurança

- [ ] `ValidationPipe` global com `whitelist` + `forbidNonWhitelisted` (rejeita campos extras).
- [ ] CORS por **allowlist** em produção; livre só em dev.
- [ ] `JWT_SECRET` forte no `.env` (NUNCA usar o fallback em prod).
- [ ] Mensagens de erro de auth **genéricas** (não vazam existência de conta).
- [ ] Senhas e tokens de reset **sempre** com bcrypt.
- [ ] `trust proxy` ligado para auditoria de IP correta.
- [ ] Toda rota nova com `JwtAuthGuard` no mínimo (ver skill `permissionamento`).
- [ ] Todo endpoint que recebe entrada tem DTO com validação (`class-validator`).
- [ ] NUNCA expor segredos (`.env`, senhas, tokens) em código, log, commit ou PR.

## Gotchas já vividos (NÃO repetir)

- Prisma 7 não carrega `.env` sozinho → `dotenv` no topo do `main.ts`, ANTES dos imports de módulos.
