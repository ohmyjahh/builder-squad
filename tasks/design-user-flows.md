---
task: Design User Flows
responsavel: "@ux-ui-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - user_journey
  - mvp_scope
  - business_rules
Saida: |
  - user_flows
  - state_inventory
  - edge_case_map
Checklist:
  - "[ ] Cada fluxo possui início, sucesso, falha e recuperação."
  - "[ ] Estados não felizes estão visíveis."
  - "[ ] Regras e dados aparecem no ponto de uso."
  - "[ ] O fluxo cobre o escopo sem telas órfãs."
---

# Objetivo

Transformar jornadas em fluxos completos de ação, decisão, erro, recuperação e conclusão.

## Procedimento

1. Definir ponto de entrada e resultado de cada fluxo.
2. Mapear passos principais e decisões.
3. Incluir vazio, carregamento, erro, permissão, expiração e abandono.
4. Validar regras de negócio e dados necessários.
5. Reduzir passos e dependências sem perder controle.

## Critérios de aceite

- Cada fluxo possui início, sucesso, falha e recuperação.
- Estados não felizes estão visíveis.
- Regras e dados aparecem no ponto de uso.
- O fluxo cobre o escopo sem telas órfãs.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `create-interface-specification`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `ux-readiness.md`
