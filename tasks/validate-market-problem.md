---
task: Validate Market Problem
responsavel: "@product-strategist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - canonical_brief
  - existing_evidence
  - target_segment_hypothesis
Saida: |
  - problem_evidence_report
  - evidence_strength
  - build_or_discovery_recommendation
Checklist:
  - "[ ] Definir problema e contexto"
  - "[ ] Separar evidência de opinião"
  - "[ ] Analisar solução atual e custo do problema"
  - "[ ] Identificar riscos de falso positivo"
  - "[ ] Emitir recomendação"
---

# Objetivo

Determinar se existe evidência suficiente para autorizar um MVP de mercado ou se o projeto deve executar discovery antes de construir.

## Procedimento

1. Definir o problema como situação observável, sem mencionar a solução proposta.
2. Identificar segmento, contexto, frequência, severidade e alternativa atual.
3. Classificar evidências em comportamento observado, compromisso, declaração ou suposição.
4. Verificar fonte, recência, diversidade e potencial viés.
5. Mapear custo de agir, custo de não agir e gatilho de busca.
6. Listar soluções atuais e motivo de insuficiência.
7. Identificar usuário, pagador e beneficiário.
8. Avaliar força da evidência: none, weak, moderate ou strong.
9. Se insuficiente, propor o menor experimento capaz de reduzir incerteza.
10. Emitir `BUILD`, `DISCOVERY_FIRST`, `PIVOT_PROBLEM` ou `STOP`.

## Critérios de aceite

- Problema não é descrito como ausência da solução desejada.
- Toda evidência informa origem e limitação.
- O relatório diferencia fala de comportamento e compromisso.
- Existe critério explícito para o próximo passo.
- Nenhuma pesquisa ou resultado é inventado.

## Vetos

- Segmento indefinido.
- Somente opinião do criador apresentada como evidência.
- Problema regulado ou de alto risco sem especialista apropriado.
- Recomendação de build sem critério de sucesso.

## Transição

- BUILD → `define-ideal-customer`
- DISCOVERY_FIRST → workflow de discovery
- PIVOT_PROBLEM → atualizar briefing
- STOP → Builder Chief para encerramento ou nova tese

**Quality gate:** market-evidence
