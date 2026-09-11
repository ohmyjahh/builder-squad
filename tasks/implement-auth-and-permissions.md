---
task: Implement Auth and Permissions
responsavel: "@backend-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - data_access_matrix
  - system_architecture
  - auth_task
Saida: |
  - auth_changes
  - authorization_tests
  - security_notes
Checklist:
  - "[ ] Toda operação sensível valida autorização no servidor."
  - "[ ] Testes cobrem acesso permitido e negado."
  - "[ ] Sessões e tokens têm expiração e revogação adequadas."
  - "[ ] Logs não expõem credenciais."
---

# Objetivo

Implementar identidade, sessão e autorização de recursos na camada confiável com mínimo privilégio.

## Procedimento

1. Validar matriz de acesso e provedor de identidade.
2. Implementar autenticação e ciclo de sessão.
3. Aplicar autorização por ação e recurso no servidor.
4. Tratar revogação, expiração e acesso privilegiado.
5. Testar negação, escalada horizontal e vertical.

## Critérios de aceite

- Toda operação sensível valida autorização no servidor.
- Testes cobrem acesso permitido e negado.
- Sessões e tokens têm expiração e revogação adequadas.
- Logs não expõem credenciais.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `test-backend`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `security-readiness.md`
