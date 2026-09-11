---
task: Map Integration
responsavel: "@automation-integration-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - systems
  - events
  - business_process
Saida: |
  - integration_map
  - system_owners
  - failure_boundaries
Checklist:
  - "[ ] Todo sistema tem owner e fonte de documentação."
  - "[ ] Fluxos de dados e identidade estão visíveis."
  - "[ ] Limites e indisponibilidade são conhecidos."
  - "[ ] A fonte de verdade é inequívoca."
---

# Objetivo

Mapear sistemas, eventos, dados, donos e fronteiras de falha antes de escolher a automação.

## Procedimento

1. Inventariar origem, destino, owner e ambiente de cada sistema.
2. Definir eventos, frequência, volume e latência.
3. Mapear identidade, credenciais e classificação de dados.
4. Registrar contratos, limites, custos e SLAs externos.
5. Identificar fonte de verdade, duplicação e modos de falha.

## Critérios de aceite

- Todo sistema tem owner e fonte de documentação.
- Fluxos de dados e identidade estão visíveis.
- Limites e indisponibilidade são conhecidos.
- A fonte de verdade é inequívoca.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `design-automation`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `integration-readiness.md`

