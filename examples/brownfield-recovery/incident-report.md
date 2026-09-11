# Incidente — INC-042

**Severidade:** SEV2  
**Estado:** monitoring

## Impacto

Usuários com duas organizações podiam visualizar o nome de um projeto da organização anterior após troca rápida de contexto. Conteúdo detalhado não foi confirmado como exposto.

## Contenção

- troca de organização desativada por feature flag;
- caches de sessão invalidados;
- logs e versão preservados;
- nenhuma limpeza destrutiva executada.

## Hipóteses

1. chave de cache sem organization_id;
2. autorização aplicada após leitura;
3. estado de frontend não invalidado.

## Evidência

Reprodução confirmada na versão 0.8.3 com duas organizações de teste.

## Rota

Threat model → correção de cache e autorização → testes negativos → security verdict → release aprovada.

