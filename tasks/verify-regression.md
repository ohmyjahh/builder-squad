---
task: Verify Regression
responsavel: "@qa-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - changes
  - regression_suite
  - risk_map
Saida: |
  - regression_evidence
  - impact_findings
  - regression_verdict
Checklist:
  - "[ ] Seleção de regressão é justificada pelo impacto."
  - "[ ] Falha preexistente não é atribuída à mudança sem evidência."
  - "[ ] Flakiness é visível."
  - "[ ] Veredito aponta versão e ambiente."
---

# Objetivo

Demonstrar que a mudança não degradou comportamentos adjacentes ou compromissos anteriores.

## Procedimento

1. Identificar superfícies tocadas direta e indiretamente.
2. Selecionar regressão por dependência e risco.
3. Executar testes automatizados e explorações críticas.
4. Comparar métricas e snapshots legítimos.
5. Registrar falhas novas, preexistentes e flakiness.

## Critérios de aceite

- Seleção de regressão é justificada pelo impacto.
- Falha preexistente não é atribuída à mudança sem evidência.
- Flakiness é visível.
- Veredito aponta versão e ambiente.

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

**Quality gate:** `quality-verdict.md`

