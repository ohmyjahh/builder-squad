---
task: Prepare Client Handoff
responsavel: "@documentation-handoff-specialist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project_artifacts
  - acceptance_records
  - decisions
  - release_evidence
  - open_items
Saida: |
  - handoff_package
  - artifact_index
  - access_transfer_plan
  - acceptance_request
Checklist:
  - "[ ] Indexar entregáveis e versões"
  - "[ ] Explicar uso, operação e limites"
  - "[ ] Separar acessos de segredos"
  - "[ ] Registrar pendências e responsabilidades"
  - "[ ] Solicitar aceite verificável"
---

# Objetivo

Entregar o projeto de forma que o recebedor consiga validar, operar, manter e evoluir o resultado sem depender de conhecimento tácito.

## Procedimento

1. Confirmar escopo contratado e critérios aceitos.
2. Criar inventário de código, ambientes, dados, decisões, testes e documentos.
3. Preparar guia de início, operação, suporte e resolução de incidentes.
4. Documentar limitações, riscos residuais, custos e itens fora de escopo.
5. Preparar transferência de acessos por canal seguro, sem incluir segredos no pacote.
6. Vincular evidências de qualidade, segurança, deploy e aceite.
7. Conduzir validação guiada pelos cenários críticos.
8. Registrar perguntas, ajustes, owners e prazos.
9. Solicitar aceite explícito e versionado.

## Critérios de aceite

- O recebedor encontra todos os artefatos por um único índice.
- Os cenários operacionais críticos podem ser executados a partir dos guias.
- Ownership, suporte, custos e pendências estão claros.
- A transferência de acesso respeita mínimo privilégio.
- O aceite referencia a versão entregue.

## Vetos

- Compartilhar segredo em documento, chat ou repositório.
- Declarar conclusão sem aceite ou ressalva registrada.
- Ocultar dívida, dependência pessoal ou custo recorrente.
- Transferir produção sem backup e plano de recuperação.

## Transição

- Aceito → `create-project-closure`
- Ajustes → tasks donas das pendências
- Bloqueado → `builder-chief` resolve autoridade ou acesso

**Quality gate:** `handoff-readiness.md`
