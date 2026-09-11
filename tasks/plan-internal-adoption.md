---
task: Plan Internal Adoption
responsavel: "@process-analyst"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - stakeholders
  - to_be_process
  - risk_profile
Saida: |
  - adoption_plan
  - training_plan
  - resistance_register
Checklist:
  - "[ ] Cada grupo afetado possui ação de adoção."
  - "[ ] Piloto tem escopo e critérios de expansão."
  - "[ ] Suporte e ownership pós-lançamento estão definidos."
  - "[ ] Métricas detectam adoção aparente e real."
---

# Objetivo

Preparar pessoas, incentivos, comunicação e suporte para que a solução interna gere uso real.

## Procedimento

1. Segmentar afetados por mudança de papel e impacto.
2. Mapear patrocinadores, opositores, dúvidas e incentivos.
3. Planejar piloto, treinamento no trabalho e materiais.
4. Definir suporte, feedback, champion e escalonamento.
5. Medir adoção, proficiência, satisfação e retorno ao processo antigo.

## Critérios de aceite

- Cada grupo afetado possui ação de adoção.
- Piloto tem escopo e critérios de expansão.
- Suporte e ownership pós-lançamento estão definidos.
- Métricas detectam adoção aparente e real.

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

**Quality gate:** `internal-value.md`
