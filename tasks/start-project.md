---
task: Start Project
responsavel: "@builder-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - user_request: descrição inicial em linguagem natural
  - existing_project_path: opcional
Saida: |
  - project_id
  - project.yaml inicial
  - status.yaml em DISCOVERY
  - intake_session
Checklist:
  - "[ ] Detectar projeto novo ou existente"
  - "[ ] Criar identificador estável"
  - "[ ] Preservar arquivos existentes"
  - "[ ] Inicializar estrutura e estado"
  - "[ ] Registrar solicitação original sem reinterpretar"
---

# Objetivo

Criar uma identidade e um espaço de estado confiável antes de qualquer análise ou execução.

## Pré-condições

- Existe uma demanda do usuário.
- O caminho de destino está dentro do escopo autorizado.
- Nenhuma estrutura existente será sobrescrita silenciosamente.

## Passos

1. Verificar se a solicitação referencia projeto existente.
2. Se existente, encaminhar para `resume-project` ou workflow brownfield.
3. Se novo, gerar `project_id` no padrão `BS-{SLUG}-{ID_CURTO}`.
4. Criar a estrutura definida em `docs/architecture/SYSTEM-ARCHITECTURE.md`.
5. Salvar a solicitação original em `brief/original-request.md`.
6. Criar `project.yaml` com campos ainda desconhecidos explicitamente nulos.
7. Criar `status.yaml` com estado `DISCOVERY`.
8. Abrir a sessão de intake usando `templates/intake-questionnaire.md`.
9. Apresentar a primeira pergunta obrigatória sobre finalidade.

## Critérios de aceite

- O identificador não colide com outro projeto.
- A solicitação original foi preservada literalmente.
- O projeto tem manifest e status válidos.
- O estado é `DISCOVERY`.
- Nenhum especialista foi ativado antes da classificação.

## Falhas e recuperação

- Estrutura existente: parar e solicitar escolha entre retomar ou criar novo ID.
- Falha parcial de criação: remover apenas arquivos criados nesta tentativa e registrar o erro.
- Caminho sem permissão: retornar `BLOCKED` com ação de recuperação.

## Transição

- PASS → `classify-project`
- FAIL → repetir uma vez após correção estrutural
- BLOCKED → aguardar resolução externa

**Quality gate:** `intake-completeness.md` apenas após a classificação.
