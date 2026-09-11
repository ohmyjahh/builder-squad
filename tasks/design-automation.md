---
task: Design Automation
responsavel: "@automation-integration-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - approved_process
  - integration_map
  - provider_constraints
  - failure_scenarios
Saida: |
  - automation_specification
  - event_contracts
  - failure_recovery_plan
Checklist:
  - "[ ] Definir trigger e resultado"
  - "[ ] Mapear eventos e contratos"
  - "[ ] Tratar idempotência e retry"
  - "[ ] Definir reconciliação e fallback"
  - "[ ] Definir observabilidade e autoridade"
---

# Objetivo

Projetar uma automação que produza resultado repetível e recuperável mesmo diante de atraso, duplicidade, indisponibilidade e dados inválidos.

## Procedimento

1. Definir trigger, precondições, resultado e owner.
2. Mapear eventos, payloads, contratos e autenticação.
3. Definir fonte de verdade e correlação entre sistemas.
4. Tratar validação, transformação e versionamento de payload.
5. Definir idempotency key e política de duplicidade.
6. Definir timeout, retry, backoff e limite.
7. Definir dead-letter, reconciliação e reprocessamento.
8. Criar caminho manual de contingência.
9. Definir logs, métricas, alertas e dados proibidos.
10. Mapear aprovação humana para ações externas de alto impacto.

## Critérios de aceite

- Trigger e resultado são inequívocos.
- Duplicidade não produz efeito indevido.
- Falhas podem ser detectadas e recuperadas.
- Existe fonte de verdade e reconciliação.
- Observabilidade não expõe segredo.
- Ações críticas respeitam autoridade.

## Vetos

- Retry infinito.
- Dependência de webhook como entrega garantida.
- Segredo em payload, prompt ou log.
- Falha silenciosa.
- Ausência de fallback em processo crítico.

## Transição

- PASS → `implement-integration`
- CONCERNS → aceite de risco e monitoramento reforçado
- FAIL → revisar processo ou contrato

**Quality gate:** integration-resilience
