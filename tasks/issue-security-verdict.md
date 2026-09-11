---
task: Issue Security Verdict
responsavel: "@security-reviewer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - security_report
  - privacy_report
  - risk_acceptance
Saida: |
  - security_verdict
  - risk_acceptance_record
  - security_handoff
Checklist:
  - "[ ] Nenhum achado crítico é omitido."
  - "[ ] Aceite de risco identifica aprovador, prazo e condição."
  - "[ ] Veredito referencia evidências."
  - "[ ] Retorno e nova revisão estão definidos."
---

# Objetivo

Consolidar evidências de segurança em decisão inequívoca e rastreável para a próxima fase.

## Procedimento

1. Confirmar versão e escopo das revisões.
2. Reunir achados por severidade e superfície.
3. Verificar remediações e controles compensatórios.
4. Validar autoridade de quem aceita risco.
5. Emitir PASS, CONCERNS, FAIL ou BLOCKED com transição.

## Critérios de aceite

- Nenhum achado crítico é omitido.
- Aceite de risco identifica aprovador, prazo e condição.
- Veredito referencia evidências.
- Retorno e nova revisão estão definidos.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `create-release-plan`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `security-readiness.md`

