---
task: Execute Approved Deploy
responsavel: "@devops-release-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - approval
  - release_candidate
  - release_plan
Saida: |
  - deployment_evidence
  - deployment_log
  - observation_window
Checklist:
  - "[ ] Aprovação corresponde ao artefato e ambiente."
  - "[ ] Todos os passos geram registro temporal."
  - "[ ] Smoke tests e métricas estão dentro dos limites."
  - "[ ] Desvio do plano interrompe a execução."
---

# Objetivo

Executar somente o deploy previamente aprovado, dentro do plano e com critérios claros de abortagem.

## Procedimento

1. Validar identidade, escopo e validade da aprovação.
2. Confirmar artefato, ambiente, backup e observabilidade.
3. Executar passos exatamente na ordem aprovada.
4. Rodar smoke tests e observar métricas.
5. Concluir ou acionar rollback conforme gatilhos.

## Critérios de aceite

- Aprovação corresponde ao artefato e ambiente.
- Todos os passos geram registro temporal.
- Smoke tests e métricas estão dentro dos limites.
- Desvio do plano interrompe a execução.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Aprovação humana

Obrigatória para produção.

## Recuperação e transição

- PASS → `verify-production`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `release-readiness.md`

