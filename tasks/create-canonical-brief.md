---
task: Create Canonical Brief
responsavel: "@builder-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project_profile
  - intake_answers
  - original_request
  - templates/canonical-brief.md
Saida: |
  - canonical_brief
  - brief_version
  - open_questions
Checklist:
  - "[ ] Preservar resultado desejado"
  - "[ ] Registrar escopo e fora de escopo"
  - "[ ] Separar fatos, hipóteses e decisões"
  - "[ ] Definir critérios de sucesso"
  - "[ ] Registrar riscos e aprovações"
  - "[ ] Versionar o briefing"
---

# Objetivo

Criar a fonte de verdade que todos os especialistas utilizarão, sem depender do histórico completo da conversa.

## Passos

1. Instanciar `templates/canonical-brief.md`.
2. Registrar classificação e justificativas.
3. Traduzir o pedido para resultado observável, sem alterar sua intenção.
4. Listar usuários, stakeholders, pagador e aprovador quando aplicável.
5. Definir escopo mínimo e não objetivos.
6. Registrar funcionalidades como hipóteses até aprovação.
7. Documentar restrições, riscos e dependências.
8. Definir critérios mensuráveis de sucesso.
9. Separar fatos, hipóteses, decisões e questões abertas.
10. Adicionar artefatos obrigatórios específicos da finalidade.
11. Salvar como `brief/canonical-brief-v{n}.md`.
12. Atualizar ponteiro do brief vigente em `project.yaml`.

## Regras de versionamento

- Correção editorial não altera versão principal.
- Mudança de público, finalidade, resultado ou escopo cria nova versão.
- Versão anterior nunca é apagada; recebe status `superseded`.
- Mudança material durante execução retorna o estado para `BRIEFED`.

## Critérios de aceite

- Um especialista sem acesso à conversa consegue entender a demanda.
- Escopo e fora de escopo não se contradizem.
- Critérios de sucesso são verificáveis.
- Toda hipótese está marcada.
- Questões críticas possuem responsável.
- Artefatos obrigatórios da finalidade foram incluídos.

## Transição

- PASS → `route-project`
- CONCERNS → aprovação explícita das premissas
- FAIL → `classify-project` ou correção do brief

**Quality gate:** `handoff-quality.md`
