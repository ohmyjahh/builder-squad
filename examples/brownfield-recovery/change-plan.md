# Plano de Correção

## Baseline protegida

- commit do incidente registrado;
- mudanças locais do usuário preservadas;
- teste de reprodução falha antes da correção.

## Alterações mínimas

1. incluir organization_id na chave de cache;
2. validar autorização antes da leitura;
3. invalidar estado ao trocar organização;
4. adicionar teste de isolamento e regressão.

## Fora de escopo

- reescrever autenticação;
- migrar provedor de cache;
- refatorar telas não afetadas.

## Gates

- change-safety;
- data-readiness;
- security-readiness;
- quality-verdict;
- release-readiness.

## Rollback

Feature flag mantém troca de organização desativada até veredito de produção.

