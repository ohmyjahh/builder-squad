---
task: Plan Frontend Implementation
responsavel: "@frontend-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - ui_spec
  - service_contracts
  - design_tokens
Saida: |
  - frontend_plan
  - component_map
  - frontend_test_plan
Checklist:
  - "[ ] Todos os estados da UI possuem tratamento."
  - "[ ] Componentes têm responsabilidade coerente."
  - "[ ] Contratos e erros estão vinculados."
  - "[ ] Acessibilidade integra o plano."
---

# Objetivo

Converter especificação de interface em componentes, estados e integrações implementáveis.

## Procedimento

1. Mapear telas e estados a componentes.
2. Definir fronteiras entre apresentação, estado e dados.
3. Planejar responsividade, acessibilidade e desempenho.
4. Mapear contratos, cache, optimistic UI e erros.
5. Definir testes por componente e fluxo.

## Critérios de aceite

- Todos os estados da UI possuem tratamento.
- Componentes têm responsabilidade coerente.
- Contratos e erros estão vinculados.
- Acessibilidade integra o plano.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `implement-user-interface`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `implementation-readiness.md`
