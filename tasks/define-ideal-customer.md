---
task: Define Ideal Customer
responsavel: "@product-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - problem_evidence
  - market_context
Saida: |
  - ideal_customer_profile
  - exclusion_profile
  - buying_context
Checklist:
  - "[ ] O ICP é identificável por sinais observáveis."
  - "[ ] Existe contexto e evento de compra."
  - "[ ] Papéis de compra estão explícitos."
  - "[ ] Exclusões evitam escopo universal."
---

# Objetivo

Definir o segmento inicial com maior combinação de dor, urgência, acesso, capacidade de compra e aderência à solução.

## Procedimento

1. Agrupar evidências por tipo de cliente e contexto de uso.
2. Descrever trabalho a realizar, dor, consequência e alternativa atual.
3. Mapear decisor, usuário, influenciador, pagador e bloqueadores.
4. Pontuar urgência, acesso, poder de compra e frequência do problema.
5. Escolher o beachhead e registrar quem não será atendido agora.

## Critérios de aceite

- O ICP é identificável por sinais observáveis.
- Existe contexto e evento de compra.
- Papéis de compra estão explícitos.
- Exclusões evitam escopo universal.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `define-value-proposition`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `market-readiness.md`
