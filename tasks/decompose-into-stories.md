---
task: Decompose Into Stories
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project_plan
  - approved_scope
  - user_flows
Saida: |
  - epics
  - stories
  - traceability_map
Checklist:
  - "[ ] Cada história entrega comportamento verificável."
  - "[ ] Critérios são testáveis e não prescrevem solução desnecessária."
  - "[ ] Há rastreabilidade ao escopo."
  - "[ ] Histórias grandes estão identificadas para novo fatiamento."
---

# Objetivo

Converter resultados desejados em incrementos verticais verificáveis e rastreáveis.

## Procedimento

1. Agrupar resultados em épicos orientados a capacidade.
2. Fatiar jornadas em histórias que entregam valor observável.
3. Escrever critérios de aceite funcionais e negativos.
4. Vincular requisitos, riscos, dependências e métricas.
5. Ordenar por aprendizagem, valor e dependência.

## Critérios de aceite

- Cada história entrega comportamento verificável.
- Critérios são testáveis e não prescrevem solução desnecessária.
- Há rastreabilidade ao escopo.
- Histórias grandes estão identificadas para novo fatiamento.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `decompose-into-tasks`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `story-readiness.md`
