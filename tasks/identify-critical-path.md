---
task: Identify Critical Path
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - task_graph
  - capacity
  - external_dependencies
Saida: |
  - critical_path
  - milestones
  - schedule_risks
Checklist:
  - "[ ] O caminho crítico deriva do grafo de tarefas."
  - "[ ] Marcos possuem evidência de conclusão."
  - "[ ] Dependências externas têm owner e data."
  - "[ ] Riscos de prazo têm resposta definida."
---

# Objetivo

Identificar a sequência que governa prazo e os riscos que podem bloquear entrega.

## Procedimento

1. Validar durações relativas e dependências.
2. Calcular caminhos e folgas sem falsa precisão.
3. Destacar dependências externas e decisões irreversíveis.
4. Criar marcos baseados em evidência entregável.
5. Planejar buffers e sinais antecipados de atraso.

## Critérios de aceite

- O caminho crítico deriva do grafo de tarefas.
- Marcos possuem evidência de conclusão.
- Dependências externas têm owner e data.
- Riscos de prazo têm resposta definida.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `create-risk-register`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `plan-readiness.md`
