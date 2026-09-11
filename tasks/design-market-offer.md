---
task: Design Market Offer
responsavel: "@growth-sales-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - value_proposition
  - market_evidence
  - mvp_scope
Saida: |
  - offer
  - offer_stack
  - objection_map
Checklist:
  - "[ ] Oferta e ICP estão alinhados."
  - "[ ] Entregáveis sustentam o mecanismo prometido."
  - "[ ] Provas são reais e rastreáveis."
  - "[ ] Suporte e capacidade de entrega estão dimensionados."
---

# Objetivo

Empacotar produto, resultado, prova, suporte e termos em uma oferta coerente com o problema e a capacidade de entrega.

## Procedimento

1. Definir resultado principal e perfil elegível.
2. Traduzir funcionalidades em capacidades e resultados.
3. Organizar entregáveis, onboarding, suporte e tempo até valor.
4. Mapear objeções, prova disponível e reversão de risco.
5. Validar promessa contra limites reais do produto.

## Critérios de aceite

- Oferta e ICP estão alinhados.
- Entregáveis sustentam o mecanismo prometido.
- Provas são reais e rastreáveis.
- Suporte e capacidade de entrega estão dimensionados.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Fatos, hipóteses e decisões misturados.
- Resultado, prova ou capacidade inventados.
- Ação externa, financeira ou de publicação sem aprovação.

## Recuperação e transição

- PASS → `define-pricing-hypothesis`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `market-readiness.md`

