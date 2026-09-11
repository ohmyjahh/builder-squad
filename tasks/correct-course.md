---
task: Correct Course
responsavel: "@builder-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - issue ou finding
  - project state
  - current brief e route
Saida: |
  - root_cause
  - correction_route
  - affected_artifacts
  - rollback_or_rework_plan
Checklist:
  - "[ ] Separar sintoma de causa"
  - "[ ] Identificar primeira decisão inválida"
  - "[ ] Mapear impacto downstream"
  - "[ ] Escolher menor correção segura"
  - "[ ] Preservar evidências e trabalho válido"
---

# Objetivo

Corrigir um desvio retornando ao primeiro ponto inválido, sem reiniciar o projeto inteiro ou mascarar o problema.

## Passos

1. Registrar o sintoma e o gate que o detectou.
2. Reproduzir ou confirmar o desvio quando possível.
3. Percorrer dependências para localizar a primeira premissa, decisão, contrato ou implementação inválida.
4. Classificar a causa: escopo, requisito, arquitetura, execução, integração, qualidade, ambiente ou mudança externa.
5. Identificar artefatos afetados e artefatos ainda válidos.
6. Escolher entre correção local, novo handoff, rebrief, rollback ou escalonamento.
7. Designar responsável e critérios de recuperação.
8. Incrementar retry apenas para a mesma causa.
9. Se retry exceder dois, bloquear e escalar ao usuário.
10. Registrar aprendizado no catálogo apenas quando o padrão se repetir.

## Critérios de aceite

- A causa raiz tem evidência.
- A correção começa no primeiro ponto inválido.
- Trabalho não afetado é preservado.
- Impactos downstream são explicitados.
- Existe owner, prazo lógico e gate de retorno.
- Nenhum terceiro retry automático é permitido.

## Transição

- Correção local → task responsável
- Escopo mudou → `create-canonical-brief`
- Arquitetura mudou → `design-system-architecture`
- Produção comprometida → workflow de rollback
- Impasse externo → `BLOCKED`
