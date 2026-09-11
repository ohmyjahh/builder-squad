---
task: Review Data Integrity
responsavel: "@data-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - implementation
  - database_schema
  - tests
Saida: |
  - data_verdict
  - integrity_findings
  - remediation_plan
Checklist:
  - "[ ] Invariantes críticas são protegidas na camada confiável."
  - "[ ] Operações repetidas não corrompem estado."
  - "[ ] Exclusão e retenção seguem política."
  - "[ ] A versão revisada é rastreável."
---

# Objetivo

Verificar que regras, relações e ciclos de vida permanecem corretos sob concorrência, falha e mudança.

## Procedimento

1. Comparar schema real com modelo aprovado.
2. Revisar constraints, índices, transações e defaults.
3. Testar concorrência, duplicação, exclusão e retry.
4. Avaliar migrações e reconciliação.
5. Classificar violações e risco de propagação.

## Critérios de aceite

- Invariantes críticas são protegidas na camada confiável.
- Operações repetidas não corrompem estado.
- Exclusão e retenção seguem política.
- A versão revisada é rastreável.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `execute-quality-gate`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `data-readiness.md`
