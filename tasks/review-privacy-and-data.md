---
task: Review Privacy and Data
responsavel: "@security-reviewer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - data_model
  - policies
  - user_journey
  - jurisdiction_context
Saida: |
  - privacy_report
  - data_inventory
  - privacy_actions
Checklist:
  - "[ ] Todo dado possui finalidade e owner."
  - "[ ] Retenção e exclusão são implementáveis."
  - "[ ] Coleta não essencial está removida ou justificada."
  - "[ ] Riscos legais são encaminhados a profissional habilitado."
---

# Objetivo

Revisar necessidade, finalidade, transparência, retenção e controle dos dados tratados pelo produto.

## Procedimento

1. Inventariar dados, origem, finalidade, base e destinatários.
2. Aplicar minimização e separação por finalidade.
3. Revisar consentimento, transparência e direitos quando aplicáveis.
4. Definir retenção, exclusão, exportação e logs.
5. Avaliar terceiros, transferências e incidentes.

## Critérios de aceite

- Todo dado possui finalidade e owner.
- Retenção e exclusão são implementáveis.
- Coleta não essencial está removida ou justificada.
- Riscos legais são encaminhados a profissional habilitado.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `issue-security-verdict`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `security-readiness.md`

