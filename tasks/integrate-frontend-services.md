---
task: Integrate Frontend Services
responsavel: "@frontend-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - frontend_changes
  - service_contracts
  - auth_context
Saida: |
  - integrated_frontend
  - contract_test_evidence
  - integration_notes
Checklist:
  - "[ ] Payloads e erros seguem contratos versionados."
  - "[ ] Nenhum segredo é enviado ao cliente."
  - "[ ] Falhas produzem feedback e recuperação."
  - "[ ] Cache não viola consistência crítica."
---

# Objetivo

Conectar a interface aos serviços mantendo contratos, segurança, resiliência e feedback claro ao usuário.

## Procedimento

1. Gerar ou implementar clientes aderentes aos contratos.
2. Propagar identidade e autorização sem expor segredos.
3. Tratar carregamento, timeout, retry, conflito e erro.
4. Definir cache e invalidação coerentes.
5. Executar testes de contrato e fluxos integrados.

## Critérios de aceite

- Payloads e erros seguem contratos versionados.
- Nenhum segredo é enviado ao cliente.
- Falhas produzem feedback e recuperação.
- Cache não viola consistência crítica.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `test-frontend`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `implementation-quality.md`
