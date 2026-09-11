---
task: Plan Backend Implementation
responsavel: "@backend-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - system_architecture
  - service_contracts
  - database_schema
Saida: |
  - backend_plan
  - module_boundaries
  - backend_test_plan
Checklist:
  - "[ ] Cada item aponta para contrato e critério de aceite."
  - "[ ] Fronteiras de módulos são claras."
  - "[ ] Falhas e autorização fazem parte do plano."
  - "[ ] A sequência permite validação incremental."
---

# Objetivo

Converter arquitetura e contratos em uma sequência implementável de mudanças de backend.

## Procedimento

1. Mapear casos de uso a módulos e operações.
2. Definir ordem por dependências e fatias verticais.
3. Planejar persistência, validação, autorização e erros.
4. Adicionar observabilidade, idempotência e resiliência.
5. Definir testes unitários, integração e contrato.

## Critérios de aceite

- Cada item aponta para contrato e critério de aceite.
- Fronteiras de módulos são claras.
- Falhas e autorização fazem parte do plano.
- A sequência permite validação incremental.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `implement-backend-service`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `implementation-readiness.md`
