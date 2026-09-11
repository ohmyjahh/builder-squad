---
task: Define Value Proposition
responsavel: "@product-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - ideal_customer_profile
  - problem_evidence
  - alternatives
Saida: |
  - value_proposition
  - message_hypotheses
  - proof_plan
Checklist:
  - "[ ] A promessa liga problema, mecanismo e resultado."
  - "[ ] Os diferenciais não dependem de adjetivos vazios."
  - "[ ] Condições e limites estão declarados."
  - "[ ] Afirmações materiais possuem prova ou hipótese marcada."
---

# Objetivo

Converter um problema validado em uma proposta específica, diferenciada e demonstrável.

## Procedimento

1. Priorizar o resultado funcional e emocional do ICP.
2. Descrever a alternativa atual e seus custos.
3. Definir mecanismo, transformação e tempo até o primeiro valor.
4. Explicitar condições, limites e diferenciais defensáveis.
5. Criar plano de prova para cada afirmação material.

## Critérios de aceite

- A promessa liga problema, mecanismo e resultado.
- Os diferenciais não dependem de adjetivos vazios.
- Condições e limites estão declarados.
- Afirmações materiais possuem prova ou hipótese marcada.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `scope-market-mvp`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `market-readiness.md`
