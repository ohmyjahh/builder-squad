---
task: Report Project Status
responsavel: "@builder-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project.yaml
  - status.yaml
  - task graph
  - findings e decisions
Saida: |
  - status_report
  - next_action
Checklist:
  - "[ ] Verificar consistência do estado"
  - "[ ] Resumir concluído e evidências"
  - "[ ] Exibir task, owner e próximo gate"
  - "[ ] Exibir bloqueios e riscos"
  - "[ ] Não ocultar incertezas"
---

# Objetivo

Explicar o estado real do projeto em linguagem simples e orientar a próxima ação sem reconstruir toda a história.

## Passos

1. Validar `status.yaml` contra a máquina de estados.
2. Conferir se artefatos declarados existem e estão vigentes.
3. Listar marcos concluídos com evidência.
4. Identificar fase, task e responsável atuais.
5. Exibir percentual baseado em tasks, não em estimativa narrativa.
6. Listar achados abertos por severidade.
7. Listar decisões pendentes e seus impactos.
8. Identificar próximo gate e condição de conclusão.
9. Se houver inconsistência, abrir `correct-course`.

## Formato obrigatório

```text
Estado:
Progresso verificável:
Concluído:
Em andamento:
Próximo:
Bloqueios:
Riscos:
Decisões necessárias:
Evidências:
```

## Critérios de aceite

- O relatório corresponde aos arquivos, não apenas à narrativa do agente.
- Percentuais podem ser recalculados.
- Bloqueios têm owner e condição de saída.
- Próxima ação é única e executável.

## Transição

- Estado consistente → retornar ao workflow atual
- Estado inconsistente → `correct-course`
- Projeto terminal → `close-project`
