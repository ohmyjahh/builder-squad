---
task: Create Interface Specification
responsavel: "@ux-ui-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - approved_user_flows
  - information_architecture
  - design_constraints
  - brand_context
Saida: |
  - interface_specification
  - screen_inventory
  - interaction_and_state_matrix
Checklist:
  - "[ ] Cobrir fluxo e telas"
  - "[ ] Definir conteúdo e hierarquia"
  - "[ ] Definir estados e interações"
  - "[ ] Incluir acessibilidade e responsividade"
  - "[ ] Criar critérios implementáveis"
---

# Objetivo

Produzir uma especificação de interface que permita implementação fiel sem depender de interpretação visual subjetiva.

## Procedimento

1. Criar inventário de telas, rotas, modais e componentes.
2. Ligar cada tela a objetivo, usuário e fluxo aprovado.
3. Definir hierarquia de informação e conteúdo funcional.
4. Documentar navegação, ações, validação e feedback.
5. Especificar estados loading, empty, error, success, disabled e unauthorized.
6. Definir responsividade e comportamento por breakpoint relevante.
7. Definir teclado, foco, labels, contraste e leitura por tecnologia assistiva.
8. Mapear dependências de dados e contratos.
9. Registrar tokens, padrões e exceções.
10. Criar critérios de aceite visuais e comportamentais.

## Critérios de aceite

- Toda etapa do fluxo aponta para interface ou comportamento explícito.
- Estados não ideais foram especificados.
- Texto funcional não é placeholder ambíguo.
- Dependências de API estão identificadas, não inventadas.
- Acessibilidade e responsividade possuem critérios verificáveis.

## Vetos

- Tela sem objetivo ou fluxo.
- Regra de negócio nova escondida no design.
- Apenas mockup feliz sem erro, vazio e carregamento.
- Handoff impossível de implementar sem nova descoberta material.

## Transição

- PASS → `plan-frontend-implementation`
- CONCERNS → registrar lacuna e owner
- FAIL → retornar a user flow ou arquitetura

**Quality gate:** ux-readiness
