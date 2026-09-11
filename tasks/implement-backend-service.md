---
task: Implement Backend Service
responsavel: "@backend-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - ready_story
  - service_contracts
  - database_schema
  - access_matrix
Saida: |
  - backend_changes
  - unit_tests
  - implementation_notes
Checklist:
  - "[ ] Validar story e contratos"
  - "[ ] Implementar caminho principal e erros"
  - "[ ] Aplicar autenticação e autorização"
  - "[ ] Adicionar observabilidade segura"
  - "[ ] Executar testes"
---

# Objetivo

Implementar uma unidade de serviço dentro da story aprovada, preservando contratos, segurança e comportamento de falha.

## Procedimento

1. Confirmar readiness, ownership e arquivos permitidos.
2. Ler contratos, schema, acesso e critérios de aceite.
3. Criar teste ou cenário verificável para comportamento crítico.
4. Implementar menor mudança completa.
5. Validar entrada e normalizar erros.
6. Aplicar autenticação, autorização e isolamento.
7. Tratar concorrência, idempotência e retry quando aplicáveis.
8. Adicionar logs e métricas sem segredos ou dados indevidos.
9. Executar testes unitários e de integração relevantes.
10. Atualizar documentação e File List da story.
11. Preparar handoff para QA.

## Critérios de aceite

- Contrato aprovado foi preservado ou mudança foi revalidada.
- Caminho principal e erros relevantes estão cobertos.
- Autorização foi verificada no servidor.
- Testes falham quando o comportamento é removido.
- Não há segredo ou dado sensível em log.
- Mudança permanece dentro da story.

## Vetos

- Story não pronta.
- Schema ou contrato alterado unilateralmente.
- Testes relevantes ausentes.
- Credencial hardcoded.
- Ação em produção sem aprovação.

## Transição

- PASS → `test-backend` e QA
- FAIL → correção local até dois retries
- Mudança estrutural → Architect/Data/Builder Chief

**Quality gate:** backend-quality
