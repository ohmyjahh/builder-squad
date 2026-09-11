# ADR-001 — Portabilidade sem SaaS prematuro

**Status:** accepted  
**Owner:** solution-architect

## Contexto

A solução precisa gerar valor interno agora. Há intenção de venda futura, mas ainda não existe evidência suficiente para financiar autenticação, billing e operação multi-tenant completos.

## Decisão

- manter autenticação atrás de uma interface substituível;
- incluir organization_id nas entidades de negócio;
- aplicar uma única organização no produto atual;
- separar configuração de código;
- não implementar billing, convite self-service ou isolamento físico agora;
- registrar testes que impedirão consulta sem escopo de organização na evolução futura.

## Consequências positivas

A solução interna continua simples e a migração futura não parte de um modelo sem fronteira de organização.

## Consequências negativas

Ainda será necessário revisar autorização, índices, suporte e observabilidade antes de vender.

## Gatilho de revisão

Três clientes de design partner ou evidência equivalente de disposição a pagar.

