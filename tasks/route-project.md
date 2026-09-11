---
task: Route Project
responsavel: "@builder-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - canonical_brief
  - data/routing-catalog.yaml
  - data/state-machine.yaml
Saida: |
  - selected_workflow
  - ordered_route
  - skipped_agents
  - route_confidence
  - first_handoff
Checklist:
  - "[ ] Selecionar workflow pela finalidade"
  - "[ ] Aplicar condições obrigatórias"
  - "[ ] Remover especialistas desnecessários"
  - "[ ] Definir dependências e gates"
  - "[ ] Justificar skips"
  - "[ ] Criar primeiro handoff"
---

# Objetivo

Selecionar o menor caminho seguro que produza o resultado aprovado.

## Passos

1. Selecionar rota-base por `purpose`.
2. Aplicar condições de interface, dados, backend, IA, integrações, pagamentos e produção.
3. Adicionar especialistas obrigatórios por risco.
4. Remover especialistas cujas entradas e saídas não sejam necessárias.
5. Registrar todo skip com justificativa e risco residual.
6. Ordenar especialistas pelas dependências dos artefatos.
7. Marcar tasks potencialmente paralelas apenas quando ownership for disjunto.
8. Inserir quality gates e aprovações humanas.
9. Calcular confiança da rota.
10. Criar o primeiro handoff usando `templates/handoff.md`.
11. Atualizar estado para `BRIEFED` ou `VALIDATING`.

## Guardas

- `internal` deve passar por `process-analyst` antes de arquitetura.
- `market` deve passar por `product-strategist` antes de autorização de build.
- `hybrid` deve registrar decisões de portabilidade.
- IA generativa exige `agent-architect` e avaliação.
- Produção pública exige QA, segurança, release e aprovação.
- Pagamentos exigem tratamento de falhas e revisão de segurança.

## Critérios de aceite

- Cada agente da rota produz artefato necessário para a etapa seguinte.
- Não existe agente sem task atribuída.
- Todas as dependências apontam para artefatos identificáveis.
- Gates possuem retorno responsável.
- Caminhos de alto risco incluem aprovação humana.
- O primeiro handoff é autocontido.

## Transição

- PASS → executar `selected_workflow`
- CONCERNS → apresentar risco e pedir aceite
- FAIL → `correct-course`

**Quality gate:** `orchestration-quality.md`
