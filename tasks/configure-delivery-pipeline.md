---
task: Configure Delivery Pipeline
responsavel: "@devops-release-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - release_plan
  - environment
  - repository
Saida: |
  - pipeline_changes
  - pipeline_tests
  - operator_notes
Checklist:
  - "[ ] O mesmo artefato pode ser promovido."
  - "[ ] Falhas interrompem promoção."
  - "[ ] Segredos vêm de cofre ou mecanismo seguro."
  - "[ ] Produção possui aprovação explícita."
---

# Objetivo

Configurar uma esteira reprodutível de build, teste, artefato e promoção entre ambientes.

## Procedimento

1. Mapear eventos de disparo e proteções de branch.
2. Configurar instalação, lint, tipos, testes e build.
3. Produzir artefato imutável com proveniência.
4. Separar ambientes, aprovações e segredos.
5. Testar falha, cancelamento e repetição.

## Critérios de aceite

- O mesmo artefato pode ser promovido.
- Falhas interrompem promoção.
- Segredos vêm de cofre ou mecanismo seguro.
- Produção possui aprovação explícita.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `execute-approved-deploy`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `release-readiness.md`

