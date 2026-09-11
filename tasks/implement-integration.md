---
task: Implement Integration
responsavel: "@automation-integration-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - integration_task
  - contracts
  - automation_spec
Saida: |
  - integration_changes
  - configuration_contract
  - implementation_evidence
Checklist:
  - "[ ] Contratos são validados nas fronteiras."
  - "[ ] Repetição não duplica efeito crítico."
  - "[ ] Falhas ficam observáveis e recuperáveis."
  - "[ ] Segredos não entram em código ou logs."
---

# Objetivo

Implementar uma integração observável e segura de acordo com contratos e modos de falha aprovados.

## Procedimento

1. Fixar versões de APIs, eventos e autenticação.
2. Implementar validação, transformação e correlação.
3. Aplicar timeout, retry com backoff, idempotência e deduplicação.
4. Tratar limites, segredos, logs e dead-letter.
5. Adicionar testes locais e simulações de falha.

## Critérios de aceite

- Contratos são validados nas fronteiras.
- Repetição não duplica efeito crítico.
- Falhas ficam observáveis e recuperáveis.
- Segredos não entram em código ou logs.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `test-integration-resilience`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `integration-readiness.md`

