---
task: Create Test Strategy
responsavel: "@qa-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - scope
  - risk_profile
  - acceptance_criteria
Saida: |
  - test_strategy
  - test_matrix
  - environment_plan
Checklist:
  - "[ ] Riscos críticos têm tipo de teste apropriado."
  - "[ ] A pirâmide evita depender apenas de E2E."
  - "[ ] Ambientes e dados são reproduzíveis."
  - "[ ] Critérios de saída são objetivos."
---

# Objetivo

Definir a cobertura de teste proporcional a valor, risco, mudança e modos de falha.

## Procedimento

1. Mapear requisitos e riscos por camada.
2. Selecionar testes unitários, integração, contrato, E2E e não funcionais.
3. Definir dados, ambientes, mocks e dependências reais.
4. Priorizar caminhos críticos, negativos e regressão.
5. Definir evidências, owners, critérios de entrada e saída.

## Critérios de aceite

- Riscos críticos têm tipo de teste apropriado.
- A pirâmide evita depender apenas de E2E.
- Ambientes e dados são reproduzíveis.
- Critérios de saída são objetivos.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `review-story-readiness`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `story-readiness.md`

