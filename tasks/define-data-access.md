---
task: Define Data Access
responsavel: "@data-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - database_schema
  - personas
  - trust_boundaries
Saida: |
  - data_access_matrix
  - row_level_policies
  - audit_requirements
Checklist:
  - "[ ] Toda permissão liga sujeito, ação, recurso e condição."
  - "[ ] Negação por padrão é implementável."
  - "[ ] Isolamento multi-tenant está explícito quando necessário."
  - "[ ] Acesso privilegiado é auditável."
---

# Objetivo

Definir quem pode executar qual ação sobre cada classe de dado e sob quais condições.

## Procedimento

1. Listar sujeitos humanos, serviços, agentes e administradores.
2. Mapear recursos, ações e escopos de acesso.
3. Aplicar negação por padrão e mínimo privilégio.
4. Definir isolamento por usuário, organização e ambiente.
5. Registrar auditoria, revisão e acesso emergencial.

## Critérios de aceite

- Toda permissão liga sujeito, ação, recurso e condição.
- Negação por padrão é implementável.
- Isolamento multi-tenant está explícito quando necessário.
- Acesso privilegiado é auditável.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `implement-auth-and-permissions`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `security-readiness.md`
