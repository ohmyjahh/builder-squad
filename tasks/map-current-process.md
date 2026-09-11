---
task: Map Current Process
responsavel: "@process-analyst"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - internal_or_hybrid_brief
  - process_owner
  - available_operational_evidence
Saida: |
  - as_is_process_map
  - operational_baseline
  - exceptions_and_controls
Checklist:
  - "[ ] Definir início e fim"
  - "[ ] Identificar atores e sistemas"
  - "[ ] Medir volume, tempo, custo e erro"
  - "[ ] Mapear exceções, filas e retrabalho"
  - "[ ] Validar com dono do processo"
---

# Objetivo

Representar o processo real antes da solução para evitar automatizar premissas, desperdícios ou fluxos idealizados.

## Procedimento

1. Definir evento de início, resultado final e owner.
2. Listar atores, sistemas, documentos e canais.
3. Mapear cada etapa com entrada, ação, decisão, saída e responsável.
4. Identificar espera, fila, duplicação, transferência e retrabalho.
5. Registrar exceções, desvios e atalhos utilizados na prática.
6. Coletar baseline de volume, lead time, touch time, custo e taxa de erro.
7. Marcar dados observados, estimados e indisponíveis.
8. Identificar controles humanos e regulatórios.
9. Validar o mapa com o process owner.
10. Registrar gargalos sem ainda prescrever tecnologia.

## Critérios de aceite

- Início, fim, owner e resultado estão claros.
- Caminho principal e exceções foram representados.
- Métricas possuem unidade, período e fonte.
- Estimativas estão marcadas.
- O owner aprovou ou apontou divergências.

## Vetos

- Processo futuro misturado ao atual.
- Automação proposta antes de localizar o gargalo.
- Baseline inexistente sem plano de medição.
- Etapa crítica sem owner.

## Transição

- PASS → `design-future-process`
- CONCERNS → medir baseline em paralelo com risco aceito
- FAIL → complementar observação e validação

**Quality gate:** internal-value
