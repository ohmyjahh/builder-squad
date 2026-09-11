---
task: Scope Market MVP
responsavel: "@product-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - value_proposition
  - constraints
  - market_evidence
Saida: |
  - mvp_scope
  - success_metrics
  - out_of_scope
Checklist:
  - "[ ] O MVP entrega uma jornada completa mínima."
  - "[ ] Cada item reduz um risco ou entrega valor observável."
  - "[ ] Métricas possuem evento e limiar."
  - "[ ] Fora de escopo protege prazo e foco."
---

# Objetivo

Definir o menor produto vendável capaz de entregar valor, validar risco e gerar aprendizagem de mercado.

## Procedimento

1. Identificar a ação central que entrega valor ao ICP.
2. Separar necessidades de compra, ativação, resultado e retenção.
3. Priorizar funcionalidades por risco reduzido e evidência gerada.
4. Definir métricas de ativação, valor, receita e suporte.
5. Registrar explicitamente fora de escopo e hipóteses adiadas.

## Critérios de aceite

- O MVP entrega uma jornada completa mínima.
- Cada item reduz um risco ou entrega valor observável.
- Métricas possuem evento e limiar.
- Fora de escopo protege prazo e foco.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `create-project-plan`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `scope-readiness.md`
