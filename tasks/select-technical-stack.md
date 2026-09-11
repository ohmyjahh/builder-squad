---
task: Select Technical Stack
responsavel: "@solution-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - approved_scope
  - constraints
  - team_capabilities
  - risk_profile
Saida: |
  - stack_decision
  - comparison_matrix
  - prototype_requirements
Checklist:
  - "[ ] A escolha é rastreável a requisitos."
  - "[ ] Custos de operação e migração foram considerados."
  - "[ ] A decisão não depende de tendência sem evidência."
  - "[ ] Incertezas críticas têm experimento."
---

# Objetivo

Escolher tecnologias pelo ajuste aos requisitos, competência, custo e reversibilidade.

## Procedimento

1. Derivar critérios técnicos e operacionais do escopo.
2. Listar alternativas viáveis, inclusive manter a stack atual.
3. Comparar maturidade, custo total, segurança, talento e lock-in.
4. Validar incógnitas críticas com protótipo quando necessário.
5. Registrar decisão, rejeitadas e gatilhos de revisão.

## Critérios de aceite

- A escolha é rastreável a requisitos.
- Custos de operação e migração foram considerados.
- A decisão não depende de tendência sem evidência.
- Incertezas críticas têm experimento.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `design-system-architecture`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `architecture-fitness.md`
