---
task: Define Product Analytics
responsavel: "@growth-sales-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - product_goals
  - user_journey
  - data_policies
Saida: |
  - analytics_plan
  - event_taxonomy
  - metric_tree
Checklist:
  - "[ ] Cada métrica leva a uma decisão possível."
  - "[ ] Eventos têm definição e condição de disparo."
  - "[ ] Identidade e deduplicação são consistentes."
  - "[ ] Dados pessoais não essenciais são excluídos."
---

# Objetivo

Instrumentar aprendizagem do produto com eventos confiáveis, métricas acionáveis e coleta mínima.

## Procedimento

1. Definir métrica norte e árvore de drivers.
2. Mapear eventos da jornada e propriedades essenciais.
3. Especificar identidade, sessão e regras de deduplicação.
4. Definir dashboards, alertas e owners de decisão.
5. Revisar minimização, consentimento e retenção.

## Critérios de aceite

- Cada métrica leva a uma decisão possível.
- Eventos têm definição e condição de disparo.
- Identidade e deduplicação são consistentes.
- Dados pessoais não essenciais são excluídos.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Fatos, hipóteses e decisões misturados.
- Resultado, prova ou capacidade inventados.
- Ação externa, financeira ou de publicação sem aprovação.

## Recuperação e transição

- PASS → `review-growth-cycle`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `market-readiness.md`

