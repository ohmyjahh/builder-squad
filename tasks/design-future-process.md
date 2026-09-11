---
task: Design Future Process
responsavel: "@process-analyst"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - as_is_process
  - baseline
  - desired_outcome
Saida: |
  - to_be_process
  - control_points
  - exception_map
Checklist:
  - "[ ] Cada passo futuro tem propósito e owner."
  - "[ ] Exceções críticas possuem caminho."
  - "[ ] Automação não perpetua desperdício conhecido."
  - "[ ] O ganho esperado é mensurável contra a baseline."
---

# Objetivo

Projetar o processo futuro antes de automatizá-lo, eliminando desperdício e preservando controles necessários.

## Procedimento

1. Remover passos que não geram valor nem reduzem risco.
2. Simplificar decisões, entradas, aprovações e transferências.
3. Definir sequência futura, owners, SLAs e fontes de verdade.
4. Mapear exceções, fallback manual e pontos de auditoria.
5. Comparar o processo futuro com a baseline.

## Critérios de aceite

- Cada passo futuro tem propósito e owner.
- Exceções críticas possuem caminho.
- Automação não perpetua desperdício conhecido.
- O ganho esperado é mensurável contra a baseline.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `calculate-internal-roi`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `internal-value.md`
