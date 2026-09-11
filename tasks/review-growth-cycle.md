---
task: Review Growth Cycle
responsavel: "@growth-sales-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - metrics
  - hypotheses
  - experiment_log
Saida: |
  - growth_recommendations
  - experiment_verdicts
  - next_hypotheses
Checklist:
  - "[ ] Conclusões respeitam tamanho e qualidade da amostra."
  - "[ ] Métricas de vaidade não dirigem decisão isoladamente."
  - "[ ] Custos e efeitos adversos estão visíveis."
  - "[ ] Cada recomendação tem hipótese e critério."
---

# Objetivo

Converter dados de aquisição, ativação, receita e retenção em decisões disciplinadas de continuidade, mudança ou parada.

## Procedimento

1. Verificar qualidade e janela dos dados.
2. Comparar resultados com hipóteses e guardrails.
3. Separar sinal por segmento e etapa do funil.
4. Documentar aprendizado, confundidores e custo.
5. Priorizar o próximo teste pela maior incerteza econômica.

## Critérios de aceite

- Conclusões respeitam tamanho e qualidade da amostra.
- Métricas de vaidade não dirigem decisão isoladamente.
- Custos e efeitos adversos estão visíveis.
- Cada recomendação tem hipótese e critério.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Fatos, hipóteses e decisões misturados.
- Resultado, prova ou capacidade inventados.
- Ação externa, financeira ou de publicação sem aprovação.

## Recuperação e transição

- PASS → `correct-course`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `growth-evidence.md`

