---
task: Verify Production
responsavel: "@devops-release-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - deployment_evidence
  - smoke_tests
  - observability_data
Saida: |
  - production_verdict
  - baseline_comparison
  - release_handoff
Checklist:
  - "[ ] Métricas técnicas e de negócio foram verificadas."
  - "[ ] Nenhum teste altera dados críticos sem limpeza."
  - "[ ] Período de observação foi cumprido."
  - "[ ] Veredito referencia a versão implantada."
---

# Objetivo

Confirmar que a release funciona em produção sem degradação material nos sinais técnicos e de negócio.

## Procedimento

1. Executar smoke tests seguros no ambiente real.
2. Comparar erros, latência, saturação e disponibilidade à baseline.
3. Verificar eventos de negócio e integrações críticas.
4. Observar pelo período definido no plano.
5. Emitir veredito e encerrar ou acionar resposta.

## Critérios de aceite

- Métricas técnicas e de negócio foram verificadas.
- Nenhum teste altera dados críticos sem limpeza.
- Período de observação foi cumprido.
- Veredito referencia a versão implantada.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `create-project-closure`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `release-readiness.md`

