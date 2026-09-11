---
task: Create Threat Model
responsavel: "@security-reviewer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - system_architecture
  - data_flows
  - actors
Saida: |
  - threat_model
  - abuse_cases
  - security_requirements
Checklist:
  - "[ ] Ativos críticos e trust boundaries estão explícitos."
  - "[ ] Ameaças ligam ator, caminho e impacto."
  - "[ ] Controles geram requisitos testáveis."
  - "[ ] Risco residual possui owner."
---

# Objetivo

Identificar ativos, fronteiras, atacantes e caminhos de abuso antes que riscos virem implementação.

## Procedimento

1. Inventariar ativos, dados sensíveis e objetivos de proteção.
2. Mapear atores, identidades e fronteiras de confiança.
3. Percorrer fluxos para spoofing, alteração, vazamento e indisponibilidade.
4. Adicionar abuso de negócio, supply chain e agentes.
5. Priorizar ameaças e derivar controles verificáveis.

## Critérios de aceite

- Ativos críticos e trust boundaries estão explícitos.
- Ameaças ligam ator, caminho e impacto.
- Controles geram requisitos testáveis.
- Risco residual possui owner.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `review-application-security`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `security-readiness.md`

