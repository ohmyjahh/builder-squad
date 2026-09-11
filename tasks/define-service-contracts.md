---
task: Define Service Contracts
responsavel: "@solution-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - system_architecture
  - domain_model
  - nfr_spec
Saida: |
  - service_contracts
  - event_contracts
  - error_contracts
Checklist:
  - "[ ] Consumidor e provedor compartilham o mesmo contrato."
  - "[ ] Erros e falhas estão modelados."
  - "[ ] Mudanças têm política de compatibilidade."
  - "[ ] Dados sensíveis estão minimizados."
---

# Objetivo

Eliminar dependências implícitas entre componentes por contratos versionados de dados, comportamento e falha.

## Procedimento

1. Listar interações síncronas, assíncronas e humanas.
2. Definir payloads, tipos, invariantes e compatibilidade.
3. Padronizar autenticação, autorização, erros e idempotência.
4. Definir timeouts, retries, ordering e deduplicação.
5. Versionar exemplos válidos, inválidos e transições.

## Critérios de aceite

- Consumidor e provedor compartilham o mesmo contrato.
- Erros e falhas estão modelados.
- Mudanças têm política de compatibilidade.
- Dados sensíveis estão minimizados.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `decompose-into-tasks`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `architecture-fitness.md`
