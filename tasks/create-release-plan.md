---
task: Create Release Plan
responsavel: "@devops-release-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - release_candidate
  - system_architecture
  - quality_verdicts
  - environment_inventory
Saida: |
  - release_plan
  - deployment_checklist
  - rollback_plan
  - approval_request
Checklist:
  - "[ ] Fixar versão e conteúdo da release"
  - "[ ] Validar gates e dependências"
  - "[ ] Definir deploy, smoke test e observação"
  - "[ ] Definir rollback ensaiável"
  - "[ ] Solicitar aprovação de produção"
---

# Objetivo

Transformar um candidato aprovado em uma mudança de ambiente controlada, observável e reversível.

## Procedimento

1. Identificar versão, commit, artefatos, migrações e mudanças de configuração.
2. Confirmar vereditos de QA, segurança e dados aplicáveis.
3. Mapear ambientes, acessos, janelas, dependências e responsáveis.
4. Escolher estratégia de release proporcional ao risco.
5. Ordenar backup, migração, deploy, validação, comunicação e monitoramento.
6. Definir smoke tests e métricas com limites de sucesso e abortagem.
7. Construir rollback com gatilhos, comandos, restauração e verificação.
8. Registrar riscos sem reversão automática.
9. Preparar pedido de aprovação humano com resumo do impacto.

## Critérios de aceite

- A release aponta para artefatos imutáveis.
- Cada passo possui owner, condição de sucesso e reação à falha.
- Migrações têm compatibilidade e retorno documentados.
- O rollback foi validado em ambiente seguro ou sua limitação foi aceita.
- Nenhum deploy de produção é executado por esta task.

## Vetos

- Plano sem rollback ou sem justificativa aceita.
- Artefato não rastreável.
- Gate obrigatório ausente.
- Credencial escrita no plano.

## Transição

- Aprovado → `configure-delivery-pipeline` ou `execute-approved-deploy`
- Não aprovado → `correct-course`
- Evidência incompleta → owner do gate ausente

**Quality gate:** `release-readiness.md`
