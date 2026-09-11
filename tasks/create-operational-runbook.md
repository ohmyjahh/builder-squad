---
task: Create Operational Runbook
responsavel: "@documentation-handoff-specialist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - system_architecture
  - operations
  - observability
Saida: |
  - operational_runbook
  - incident_playbooks
  - maintenance_calendar
Checklist:
  - "[ ] Cada procedimento tem pré-condição e confirmação."
  - "[ ] Alertas apontam para owner e playbook."
  - "[ ] Backup e restore são testáveis."
  - "[ ] Segredos são referenciados, nunca copiados."
---

# Objetivo

Permitir operação previsível por meio de procedimentos acionáveis para rotina, alerta, incidente e recuperação.

## Procedimento

1. Inventariar serviços, owners e dependências.
2. Documentar início, parada, backup, restore e rotação.
3. Vincular alertas a diagnóstico e ação segura.
4. Criar playbooks para incidentes prioritários.
5. Definir manutenção, escalonamento e revisão do runbook.

## Critérios de aceite

- Cada procedimento tem pré-condição e confirmação.
- Alertas apontam para owner e playbook.
- Backup e restore são testáveis.
- Segredos são referenciados, nunca copiados.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Fatos, hipóteses e decisões misturados.
- Resultado, prova ou capacidade inventados.
- Ação externa, financeira ou de publicação sem aprovação.

## Recuperação e transição

- PASS → `prepare-client-handoff`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `handoff-readiness.md`

