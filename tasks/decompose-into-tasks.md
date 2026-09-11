---
task: Decompose Into Tasks
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - stories
  - architecture
  - team_capabilities
Saida: |
  - task_graph
  - ownership_map
  - definition_of_done
Checklist:
  - "[ ] Nenhuma tarefa termina em saída vaga."
  - "[ ] Dependências apontam para artefatos."
  - "[ ] Ownership não se sobrepõe silenciosamente."
  - "[ ] A Definition of Done cobre teste e documentação."
---

# Objetivo

Transformar histórias aprovadas em unidades atômicas com contratos, dependências e responsáveis claros.

## Procedimento

1. Derivar tarefas de design, dados, código, testes, segurança e documentação.
2. Definir para cada tarefa entrada, saída, owner e critério de término.
3. Mapear dependências reais entre artefatos.
4. Separar trabalho paralelizável por ownership disjunto.
5. Adicionar gates e aprovações nos pontos de risco.

## Critérios de aceite

- Nenhuma tarefa termina em saída vaga.
- Dependências apontam para artefatos.
- Ownership não se sobrepõe silenciosamente.
- A Definition of Done cobre teste e documentação.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `identify-critical-path`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `orchestration-quality.md`
