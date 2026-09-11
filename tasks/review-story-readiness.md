---
task: Review Story Readiness
responsavel: "@qa-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - story
  - dependencies
  - architecture_context
Saida: |
  - readiness_verdict
  - clarification_list
  - testability_notes
Checklist:
  - "[ ] Critérios descrevem comportamento observável."
  - "[ ] Dependências estão disponíveis ou planejadas."
  - "[ ] Dados e estados de erro estão cobertos."
  - "[ ] A história cabe em incremento verificável."
---

# Objetivo

Impedir início de implementação com história ambígua, não testável ou bloqueada por dependências.

## Procedimento

1. Verificar valor, escopo e ator da história.
2. Revisar critérios positivos, negativos e limites.
3. Confirmar contratos, dados, design e dependências.
4. Identificar riscos e requisitos não funcionais.
5. Emitir veredito e perguntas bloqueadoras.

## Critérios de aceite

- Critérios descrevem comportamento observável.
- Dependências estão disponíveis ou planejadas.
- Dados e estados de erro estão cobertos.
- A história cabe em incremento verificável.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `decompose-into-tasks`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `story-readiness.md`

