---
task: Implement User Interface
responsavel: "@frontend-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - ready_story
  - interface_specification
  - design_tokens
  - service_contracts
Saida: |
  - frontend_changes
  - component_tests
  - visual_and_accessibility_evidence
Checklist:
  - "[ ] Validar story, spec e contratos"
  - "[ ] Implementar todos os estados"
  - "[ ] Aplicar responsividade e acessibilidade"
  - "[ ] Integrar sem inventar contrato"
  - "[ ] Testar fluxos críticos"
---

# Objetivo

Implementar uma unidade de interface completa, fiel ao fluxo e resiliente aos estados reais da aplicação.

## Procedimento

1. Confirmar readiness, ownership e critérios de aceite.
2. Mapear componentes existentes que podem ser reutilizados.
3. Implementar estrutura e conteúdo com semântica correta.
4. Implementar estados loading, empty, error, success, disabled e unauthorized aplicáveis.
5. Integrar usando contratos aprovados e mocks tipados quando necessário.
6. Garantir navegação por teclado, foco, labels e contraste.
7. Validar layouts nos breakpoints previstos.
8. Criar testes de componentes e fluxos críticos.
9. Verificar desempenho proporcional ao risco.
10. Registrar evidências e atualizar a story.

## Critérios de aceite

- O fluxo funciona sem depender apenas do caminho feliz.
- Interface corresponde à especificação vigente.
- Contratos não foram inventados ou alterados silenciosamente.
- Critérios básicos de acessibilidade foram verificados.
- Testes cobrem comportamento, não apenas renderização.
- Nenhum segredo foi enviado ao cliente.

## Vetos

- Spec ou contrato ausente.
- Regra de negócio nova criada no frontend.
- Estado crítico sem tratamento.
- Acessibilidade quebrada no fluxo principal.

## Transição

- PASS → `integrate-frontend-services` e QA
- FAIL → correção local até dois retries
- Contradição de UX/contrato → Designer ou Architect

**Quality gate:** implementation-quality
