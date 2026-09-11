---
task: Create Go-to-Market Plan
responsavel: "@growth-sales-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - offer
  - ideal_customer_profile
  - market_evidence
  - product_readiness
  - constraints
Saida: |
  - gtm_plan
  - funnel_map
  - launch_experiments
  - commercial_scorecard
Checklist:
  - "[ ] Definir segmento e momento de compra"
  - "[ ] Conectar promessa a evidências"
  - "[ ] Desenhar aquisição, ativação e venda"
  - "[ ] Definir experimentos e orçamento"
  - "[ ] Definir métricas e critérios de parada"
---

# Objetivo

Criar um caminho testável entre problema validado, oferta, aquisição, ativação, compra e aprendizagem comercial.

## Procedimento

1. Fixar ICP, problema prioritário, alternativa atual e evento de compra.
2. Articular promessa, mecanismo, prova, objeções e condição de sucesso.
3. Definir oferta, embalagem, preço hipotético e risco reverso.
4. Selecionar canais pela presença do ICP e economia, não por preferência.
5. Desenhar jornada de anúncio ou prospecção até ativação e receita.
6. Definir ativos, mensagens, responsabilidades e calendário.
7. Instrumentar impressões, leads, ativação, venda, retenção e payback.
8. Criar experimentos pequenos com hipótese, custo máximo e critério de decisão.
9. Mapear suporte, onboarding, cancelamento e feedback ao produto.
10. Separar fatos, benchmarks, hipóteses e apostas.

## Critérios de aceite

- Segmento e proposta são específicos o suficiente para serem refutados.
- Cada etapa possui conversão esperada e evento mensurável.
- O plano não depende de escassez ou prova inventadas.
- Custo, capacidade de entrega e risco de suporte estão contemplados.
- Existe circuito de aprendizagem para produto, oferta e canal.

## Vetos

- Escalar mídia antes de comprovar mensagem e conversão mínima.
- Usar depoimento, urgência ou presença ao vivo falsos.
- Promessa de resultado financeiro sem base e condições.
- Publicação externa sem aprovação.

## Transição

- PASS → produção de ativos e execução aprovada
- CONCERNS → teste limitado com teto de perda
- FAIL → `define-value-proposition` ou `design-market-offer`

**Quality gate:** `market-readiness.md`
