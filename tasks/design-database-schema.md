---
task: Design Database Schema
responsavel: "@data-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - domain_model
  - approved_workflows
  - nonfunctional_requirements
  - privacy_requirements
Saida: |
  - database_schema
  - constraints_and_indexes
  - data_lifecycle_spec
Checklist:
  - "[ ] Modelar entidades e relações"
  - "[ ] Definir constraints e ownership"
  - "[ ] Definir índices por acesso real"
  - "[ ] Definir ciclo de vida e retenção"
  - "[ ] Validar tenancy e privacidade"
---

# Objetivo

Traduzir o modelo de domínio em schema íntegro, mínimo e seguro que sustente os fluxos aprovados.

## Procedimento

1. Confirmar entidades, eventos, invariantes e ownership.
2. Definir chaves, relações, cardinalidade e nulabilidade.
3. Criar constraints que expressem regras estáveis do domínio.
4. Mapear padrões de leitura e escrita antes dos índices.
5. Definir identidade, tenancy e separação entre clientes.
6. Classificar dados pessoais, sensíveis e confidenciais.
7. Definir criação, atualização, retenção, exportação e exclusão.
8. Identificar trilhas de auditoria necessárias.
9. Avaliar concorrência, consistência e volume plausível.
10. Produzir diagrama, dicionário e especificação migrável.

## Critérios de aceite

- Todo campo possui propósito e tipo.
- Invariantes críticas possuem constraint ou validação definida.
- Consultas críticas possuem estratégia de acesso.
- Tenancy e permissões não dependem apenas da interface.
- Dados desnecessários foram removidos.
- Retenção e exclusão foram consideradas.

## Vetos

- Dados sensíveis sem finalidade e política.
- Multi-tenant sem isolamento definido.
- Índices especulativos sem consulta associada.
- Alteração destrutiva sem migração e rollback.

## Transição

- PASS → `define-data-access` e implementação
- FAIL → retornar ao domain model ou arquitetura

**Quality gate:** data-and-privacy
