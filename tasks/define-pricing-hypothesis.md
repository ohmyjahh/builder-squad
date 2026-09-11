---
task: Define Pricing Hypothesis
responsavel: "@growth-sales-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - offer
  - economics
  - customer_research
Saida: |
  - pricing_hypothesis
  - packaging_options
  - pricing_test
Checklist:
  - "[ ] Preço possui teto de valor e piso econômico."
  - "[ ] Opções não criam complexidade artificial."
  - "[ ] O teste mede ação, não apenas opinião."
  - "[ ] Termos e recorrência são transparentes."
---

# Objetivo

Definir preço e embalagem como hipótese testável de captura de valor, não como chute ou simples comparação.

## Procedimento

1. Mapear valor econômico e alternativas percebidas.
2. Definir unidade e âncora de valor.
3. Calcular piso econômico e limites de suporte.
4. Criar poucas opções de embalagem com diferenças claras.
5. Planejar teste com comportamento real de compra.

## Critérios de aceite

- Preço possui teto de valor e piso econômico.
- Opções não criam complexidade artificial.
- O teste mede ação, não apenas opinião.
- Termos e recorrência são transparentes.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Fatos, hipóteses e decisões misturados.
- Resultado, prova ou capacidade inventados.
- Ação externa, financeira ou de publicação sem aprovação.

## Recuperação e transição

- PASS → `create-go-to-market-plan`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `market-readiness.md`

