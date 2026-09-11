---
task: Test Integration Resilience
responsavel: "@automation-integration-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - integration_changes
  - failure_scenarios
  - service_limits
Saida: |
  - resilience_evidence
  - failure_findings
  - recovery_proof
Checklist:
  - "[ ] Cenários prioritários possuem evidência."
  - "[ ] Nenhuma falha silenciosa crítica permanece."
  - "[ ] Replay não corrompe estado."
  - "[ ] Alertas chegam ao owner correto."
---

# Objetivo

Provar que integrações se comportam de forma controlada diante de indisponibilidade, repetição e dados inválidos.

## Procedimento

1. Testar timeout, rate limit, credencial inválida e resposta malformada.
2. Repetir eventos e verificar idempotência.
3. Simular atraso, ordem invertida e indisponibilidade parcial.
4. Validar dead-letter, replay, alerta e recuperação manual.
5. Medir tempo de recuperação e perda residual.

## Critérios de aceite

- Cenários prioritários possuem evidência.
- Nenhuma falha silenciosa crítica permanece.
- Replay não corrompe estado.
- Alertas chegam ao owner correto.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `execute-quality-gate`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `integration-readiness.md`

