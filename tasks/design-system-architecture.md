---
task: Design System Architecture
responsavel: "@solution-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - approved_scope
  - stack_decision
  - user_and_process_flows
  - risk_profile
Saida: |
  - system_architecture
  - component_map
  - data_and_control_flows
  - architecture_risks
Checklist:
  - "[ ] Definir componentes e fronteiras"
  - "[ ] Mapear dados e controle"
  - "[ ] Definir contratos e trust boundaries"
  - "[ ] Tratar falhas e operação"
  - "[ ] Registrar decisões materiais"
---

# Objetivo

Projetar a menor arquitetura capaz de atender requisitos funcionais e não funcionais sem bloquear evolução plausível.

## Procedimento

1. Mapear casos de uso e requisitos de qualidade.
2. Identificar componentes, responsabilidades e fronteiras.
3. Definir fluxos de dados, controle e identidade.
4. Definir fontes de verdade e ownership de estado.
5. Mapear dependências externas, limites e modos de falha.
6. Definir contratos entre frontend, backend, dados, agentes e integrações.
7. Identificar trust boundaries, segredos e dados sensíveis.
8. Projetar observabilidade, retry, idempotência e rollback onde aplicáveis.
9. Avaliar custo, complexidade, lock-in e reversibilidade.
10. Criar ADR para cada decisão material.
11. Validar cobertura do escopo e dos riscos.

## Critérios de aceite

- Cada componente possui uma responsabilidade principal.
- Nenhum fluxo crítico depende de contrato implícito.
- Falhas externas possuem comportamento definido.
- Dados sensíveis e autoridade estão visíveis.
- A arquitetura explica operação, não apenas construção.
- Tradeoffs e alternativas foram registrados.

## Vetos

- Tecnologia sem relação com requisito.
- Dependência crítica sem fallback ou risco aceito.
- Produção pública sem observabilidade ou rollback.
- Arquitetura híbrida que impede separação futura de clientes.

## Transição

- PASS → contracts e decomposição técnica
- CONCERNS → aceite explícito do risco
- FAIL → revisar stack, escopo ou arquitetura

**Quality gate:** architecture-fitness
