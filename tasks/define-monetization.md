---
task: Define Monetization
responsavel: "@product-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - mvp_scope
  - market_evidence
  - cost_model
Saida: |
  - monetization_hypothesis
  - unit_economics_assumptions
  - validation_experiments
Checklist:
  - "[ ] Preço e métrica de cobrança têm racional explícito."
  - "[ ] Custos e margem são calculáveis."
  - "[ ] O modelo não incentiva uso destrutivo."
  - "[ ] A hipótese pode ser testada com clientes reais."
---

# Objetivo

Criar uma hipótese econômica coerente com valor percebido, comportamento de compra e custo de servir.

## Procedimento

1. Mapear unidade de valor e frequência de uso.
2. Comparar compra única, assinatura, consumo, serviço e híbridos.
3. Estimar custo variável, suporte, margem e risco de abuso.
4. Definir embalagem, limites, expansão e cancelamento.
5. Planejar testes de disposição a pagar sem confundir interesse com receita.

## Critérios de aceite

- Preço e métrica de cobrança têm racional explícito.
- Custos e margem são calculáveis.
- O modelo não incentiva uso destrutivo.
- A hipótese pode ser testada com clientes reais.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `design-market-offer`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `market-readiness.md`
