---
task: Create Project Closure
responsavel: "@documentation-handoff-specialist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - release_evidence
  - decisions
  - open_items
  - acceptance_record
Saida: |
  - closure_report
  - final_artifact_index
  - retrospective_inputs
Checklist:
  - "[ ] Conclusão e pendências não se confundem."
  - "[ ] Aceite referencia versão e critérios."
  - "[ ] Todo item aberto possui owner."
  - "[ ] O projeto pode ser retomado pelo índice final."
---

# Objetivo

Encerrar formalmente o projeto preservando aceite, estado real, conhecimento, pendências e próximos responsáveis.

## Procedimento

1. Confirmar versão entregue e aceite correspondente.
2. Consolidar escopo realizado, não realizado e alterações.
3. Indexar decisões, evidências, acessos transferidos e documentos.
4. Registrar pendências, riscos residuais, owners e datas.
5. Capturar aprendizados e arquivar o estado canônico.

## Critérios de aceite

- Conclusão e pendências não se confundem.
- Aceite referencia versão e critérios.
- Todo item aberto possui owner.
- O projeto pode ser retomado pelo índice final.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Fatos, hipóteses e decisões misturados.
- Resultado, prova ou capacidade inventados.
- Ação externa, financeira ou de publicação sem aprovação.

## Recuperação e transição

- PASS → `close-project`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `closure-readiness.md`

