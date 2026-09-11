---
task: Resume Project
responsavel: "@builder-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project_id ou project_path
  - project.yaml
  - status.yaml
  - artifact registry
Saida: |
  - resume_assessment
  - context_refresh_plan
  - next_task
Checklist:
  - "[ ] Localizar último checkpoint válido"
  - "[ ] Verificar artefatos e versões"
  - "[ ] Detectar contexto obsoleto"
  - "[ ] Revalidar dependências externas"
  - "[ ] Definir próxima task única"
---

# Objetivo

Retomar o projeto pelo último estado comprovado, evitando repetir trabalho ou confiar em contexto obsoleto.

## Passos

1. Resolver o projeto de forma não ambígua.
2. Carregar manifest, status, brief vigente e últimas decisões.
3. Validar transição e artefatos requeridos pelo estado atual.
4. Comparar timestamps e versões das dependências.
5. Detectar mudanças externas em APIs, ferramentas, requisitos ou código.
6. Marcar artefatos que precisam de refresh.
7. Localizar último quality gate com PASS ou CONCERNS aceito.
8. Identificar handoff pendente ou task interrompida.
9. Criar plano curto de retomada.
10. Atualizar estado apenas após validação.

## Critérios de aceite

- Nenhuma task concluída é repetida sem justificativa.
- Artefatos obsoletos são revalidados antes de uso.
- Handoff consumido não é reaplicado.
- A próxima task tem owner, entrada e gate.
- O usuário recebe resumo do que mudou desde a última execução.

## Falhas

- Status corrompido → reconstruir a partir de artefatos e registrar CONCERNS.
- Brief ausente → retornar a `create-canonical-brief`.
- Dependência crítica mudou → retornar à task responsável pelo contrato.

## Transição

- PASS → próxima task válida
- CONCERNS → pedir aceite de risco
- FAIL → `correct-course`
- BLOCKED → registrar condição de desbloqueio
