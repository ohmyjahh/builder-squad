---
task: Map User Journey
responsavel: "@ux-ui-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - personas
  - approved_scope
  - research_evidence
Saida: |
  - user_journey
  - pain_opportunity_map
  - journey_metrics
Checklist:
  - "[ ] A jornada começa antes da interface e termina após o resultado."
  - "[ ] Fatos de pesquisa estão separados de hipóteses."
  - "[ ] Fricções possuem evidência ou plano de validação."
  - "[ ] Momentos críticos têm métrica."
---

# Objetivo

Mapear a experiência ponta a ponta do usuário, incluindo contexto anterior, objetivo, uso, falhas e continuidade.

## Procedimento

1. Selecionar persona e cenário prioritários.
2. Mapear gatilho, expectativas, passos, decisões e canais.
3. Registrar pensamentos, emoções, fricções e alternativas por etapa.
4. Adicionar bastidores, dados e dependências que sustentam a experiência.
5. Definir momentos da verdade e métricas da jornada.

## Critérios de aceite

- A jornada começa antes da interface e termina após o resultado.
- Fatos de pesquisa estão separados de hipóteses.
- Fricções possuem evidência ou plano de validação.
- Momentos críticos têm métrica.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `design-user-flows`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `ux-readiness.md`
