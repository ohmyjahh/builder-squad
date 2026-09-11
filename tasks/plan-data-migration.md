---
task: Plan Data Migration
responsavel: "@data-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - current_schema
  - target_schema
  - data_profile
Saida: |
  - migration_plan
  - rollback_plan
  - reconciliation_plan
Checklist:
  - "[ ] Toda transformação é determinística ou revisável."
  - "[ ] Backups e rollback possuem teste."
  - "[ ] Compatibilidade durante deploy está definida."
  - "[ ] Reconciliação detecta perda e corrupção."
---

# Objetivo

Planejar transformação de dados com preservação, compatibilidade, verificação e retorno controlado.

## Procedimento

1. Perfilar volume, qualidade, chaves e anomalias atuais.
2. Mapear transformação campo a campo.
3. Definir estratégia compatível de leitura e escrita durante transição.
4. Planejar backup, ensaio, janela, rollback e ownership.
5. Criar reconciliação com contagens, checksums e amostras.

## Critérios de aceite

- Toda transformação é determinística ou revisável.
- Backups e rollback possuem teste.
- Compatibilidade durante deploy está definida.
- Reconciliação detecta perda e corrupção.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `create-release-plan`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `data-readiness.md`
