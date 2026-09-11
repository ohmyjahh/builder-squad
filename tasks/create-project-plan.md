---
task: Create Project Plan
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - approved_scope
  - required_artifacts
  - constraints
  - route_plan
Saida: |
  - project_plan
  - milestones
  - dependency_map
Checklist:
  - "[ ] Definir resultados e marcos"
  - "[ ] Mapear entregáveis e gates"
  - "[ ] Identificar dependências"
  - "[ ] Definir ownership"
  - "[ ] Registrar riscos e aprovações"
---

# Objetivo

Converter escopo aprovado em plano executável que permita decomposição task-first e medição por evidência.

## Procedimento

1. Fixar versão do briefing e escopo utilizados.
2. Mapear resultados intermediários que reduzem risco cedo.
3. Definir marcos por artefato aceito, não apenas por data.
4. Associar cada marco a owner, entradas, saída e gate.
5. Identificar dependências duras, suaves e externas.
6. Definir caminho crítico e pontos de aprovação humana.
7. Reservar ciclos de validação e correção.
8. Identificar trabalho potencialmente paralelo e ownership de arquivos.
9. Registrar riscos, sinais antecipados e mitigação.
10. Preparar o plano para decomposição em épicos, stories e tasks.

## Critérios de aceite

- Todo requisito aprovado pertence a um entregável.
- Todo entregável possui gate e owner.
- Dependências externas possuem fallback ou blocker explícito.
- Paralelismo não cria disputa de ownership.
- Progresso pode ser calculado por entregas concluídas.

## Vetos

- Marco definido apenas como data.
- Task futura sem saída verificável.
- Prazo tratado como justificativa para ignorar gate.
- Escopo não aprovado inserido no plano.

## Transição

- PASS → `decompose-into-stories`
- FAIL → corrigir plano ou retornar ao briefing

**Quality gate:** plan-readiness
