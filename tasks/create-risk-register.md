---
task: Create Risk Register
responsavel: "@project-manager"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project_plan
  - architecture
  - commercial_context
Saida: |
  - risk_register
  - response_plan
  - escalation_rules
Checklist:
  - "[ ] Riscos críticos têm owner e resposta."
  - "[ ] Gatilhos são observáveis."
  - "[ ] Problemas atuais não são mascarados como riscos."
  - "[ ] O registro influencia plano e gates."
---

# Objetivo

Tornar riscos materiais visíveis, priorizados, atribuídos e acionáveis durante todo o projeto.

## Procedimento

1. Identificar riscos de valor, escopo, tecnologia, segurança, prazo, operação e mercado.
2. Avaliar probabilidade, impacto, proximidade e detectabilidade.
3. Definir prevenção, contingência, gatilho e owner.
4. Separar riscos de problemas já ocorridos.
5. Agendar revisões e critérios de escalonamento.

## Critérios de aceite

- Riscos críticos têm owner e resposta.
- Gatilhos são observáveis.
- Problemas atuais não são mascarados como riscos.
- O registro influencia plano e gates.

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

**Quality gate:** `plan-readiness.md`
