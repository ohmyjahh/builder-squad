---
task: Execute Rollback
responsavel: "@devops-release-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - rollback_approval
  - incident
  - rollback_plan
Saida: |
  - rollback_evidence
  - restored_version
  - incident_handoff
Checklist:
  - "[ ] Alvo e ambiente são verificados antes da ação."
  - "[ ] Dados não são revertidos sem estratégia aprovada."
  - "[ ] Serviço restaurado possui smoke tests."
  - "[ ] Ações e efeitos são auditáveis."
---

# Objetivo

Restaurar um estado seguro quando os gatilhos aprovados indicarem degradação material.

## Procedimento

1. Confirmar gatilho, autoridade e alvo do rollback.
2. Preservar evidências do incidente.
3. Executar reversão de aplicação, configuração e dados conforme plano.
4. Validar integridade, disponibilidade e versão restaurada.
5. Comunicar estado e encaminhar análise de causa.

## Critérios de aceite

- Alvo e ambiente são verificados antes da ação.
- Dados não são revertidos sem estratégia aprovada.
- Serviço restaurado possui smoke tests.
- Ações e efeitos são auditáveis.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Aprovação humana

Obrigatória, salvo autorização emergencial previamente registrada.

## Recuperação e transição

- PASS → `wf-bug-and-recovery`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `release-readiness.md`

