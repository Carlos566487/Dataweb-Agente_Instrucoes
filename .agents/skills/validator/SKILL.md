# Skill: validator

## Propósito
Esta skill define diretrizes e um checklist para validação completa do app, abrangendo tanto o backend quanto o frontend. O objetivo é garantir qualidade, robustez, segurança e aderência às melhores práticas em todas as features do sistema.

## Abrangência
- **Backend:** APIs, autenticação, banco de dados, regras de negócio, segurança, testes automatizados, documentação.
- **Frontend:** UI/UX, responsividade, acessibilidade, integração com backend, testes automatizados, performance, internacionalização.

## Checklist Geral de Validação

### Backend
- [ ] Endpoints REST/GraphQL cobertos por testes automatizados (unitários e integração)
- [ ] Validação de dados de entrada (DTOs, schemas, etc.)
- [ ] Tratamento de erros e respostas padronizadas
- [ ] Autenticação e autorização implementadas corretamente
- [ ] Logs e monitoramento de erros
- [ ] Documentação atualizada (Swagger/OpenAPI, README)
- [ ] Cobertura de testes mínima de 80%
- [ ] Segurança: proteção contra SQL Injection, XSS, CSRF, rate limiting, etc.
- [ ] Scripts de seed e migração funcionando
- [ ] Integração com serviços externos validada

### Frontend
- [ ] Componentes cobertos por testes unitários e de integração (ex: React Testing Library)
- [ ] Responsividade em múltiplos dispositivos
- [ ] Acessibilidade (uso de ARIA, navegação por teclado, contraste)
- [ ] Internacionalização (i18n) funcionando
- [ ] Integração com backend validada (mock e real)
- [ ] Tratamento de erros e feedbacks visuais
- [ ] Performance (lazy loading, otimização de assets)
- [ ] UI consistente com design system
- [ ] Documentação de componentes e páginas

## Como usar
1. Execute a skill para obter um relatório detalhado do status de validação do app.
2. O relatório será dividido por feature, apontando o que está completo, o que precisa ser melhorado e o que está faltando.
3. Siga as recomendações para garantir a qualidade total do produto.

## Output esperado
- Análise detalhada por feature (ex: autenticação, kanban, squads, portfolios, etc.)
- Status de cada item do checklist
- Sugestões de melhoria e apontamento de lacunas

---

> **Nota:** Esta skill pode ser expandida conforme novas features ou requisitos surgirem.