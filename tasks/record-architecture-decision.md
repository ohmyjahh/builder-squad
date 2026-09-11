---
task: Record Architecture Decision
responsavel: "@solution-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - decision_context
  - considered_options
  - evidence
Saida: |
  - architecture_decision_record
Checklist:
  - "[ ] O ADR explica por que, não apenas o quê."
  - "[ ] Alternativas rejeitadas permanecem visíveis."
  - "[ ] Consequências operacionais estão explícitas."
  - "[ ] A decisão possui data, status e referência."
---

# Objetivo

Preservar contexto, alternativas, tradeoffs e consequências das decisões arquiteturais materiais.

## Procedimento

1. Definir problema, forças e prazo da decisão.
2. Listar opções realmente consideradas.
3. Comparar consequências positivas, negativas e riscos.
4. Registrar decisão, evidência e dissensos.
5. Definir status, owner e gatilho de revisão.

## Critérios de aceite

- O ADR explica por que, não apenas o quê.
- Alternativas rejeitadas permanecem visíveis.
- Consequências operacionais estão explícitas.
- A decisão possui data, status e referência.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `route-project`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `decision-quality.md`
