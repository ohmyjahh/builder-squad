---
task: Calculate Internal ROI
responsavel: "@process-analyst"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - baseline
  - to_be_process
  - implementation_cost
Saida: |
  - roi_hypothesis
  - sensitivity_analysis
  - measurement_plan
Checklist:
  - "[ ] Toda premissa possui fonte ou rótulo de hipótese."
  - "[ ] Cenário conservador permanece visível."
  - "[ ] Custos de adoção e manutenção estão incluídos."
  - "[ ] Existe plano de medição após implantação."
---

# Objetivo

Estimar valor interno com premissas transparentes, cenários e plano de confirmação pós-implantação.

## Procedimento

1. Quantificar volume, tempo, erro, retrabalho e custo atuais.
2. Estimar ganhos e custos recorrentes do estado futuro.
3. Calcular cenários conservador, provável e otimista.
4. Testar sensibilidade das premissas dominantes.
5. Definir como medir benefício realizado e prazo de retorno.

## Critérios de aceite

- Toda premissa possui fonte ou rótulo de hipótese.
- Cenário conservador permanece visível.
- Custos de adoção e manutenção estão incluídos.
- Existe plano de medição após implantação.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `plan-internal-adoption`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `internal-value.md`
