---
task: Test Backend
responsavel: "@backend-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - backend_changes
  - acceptance_criteria
  - service_contracts
Saida: |
  - backend_test_evidence
  - coverage_gaps
  - known_limitations
Checklist:
  - "[ ] Critérios alterados possuem teste."
  - "[ ] Caminhos negados e falhas são cobertos."
  - "[ ] Evidência é reproduzível."
  - "[ ] Teste falho não é omitido."
---

# Objetivo

Demonstrar que regras e contratos do backend funcionam nos caminhos esperados, negativos e de falha.

## Procedimento

1. Executar testes unitários das regras alteradas.
2. Executar integração com banco e dependências controladas.
3. Validar contratos, erros, autorização e idempotência.
4. Testar limites, concorrência e indisponibilidade relevantes.
5. Registrar comandos, ambiente, resultados e lacunas.

## Critérios de aceite

- Critérios alterados possuem teste.
- Caminhos negados e falhas são cobertos.
- Evidência é reproduzível.
- Teste falho não é omitido.

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

**Quality gate:** `implementation-quality.md`
