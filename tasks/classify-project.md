---
task: Classify Project
responsavel: "@builder-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - user_request
  - intake_answers
  - data/project-ontology.yaml
  - data/routing-catalog.yaml
Saida: |
  - project_profile
  - purpose
  - complexity_score e level
  - risk_profile
  - confidence
  - missing_information
Checklist:
  - "[ ] Perguntar internal, market ou hybrid"
  - "[ ] Identificar tipo e contexto de entrega"
  - "[ ] Mapear funcionalidades e integrações"
  - "[ ] Calcular complexidade e risco"
  - "[ ] Separar fatos e hipóteses"
  - "[ ] Declarar confiança"
---

# Objetivo

Classificar o projeto com precisão suficiente para escolher a rota sem produzir solução prematura.

## Passos

1. Fazer obrigatoriamente a pergunta de finalidade.
2. Identificar quem usa, quem paga e quem aprova.
3. Classificar `project_kind` e `delivery_context`.
4. Preencher flags de interface, dados, backend, IA, integrações e pagamentos.
5. Identificar dados sensíveis, criticidade operacional e ações autônomas.
6. Calcular complexidade usando `routing-catalog.yaml`.
7. Calcular confiança com evidências positivas e lacunas.
8. Se confiança menor que 60, fazer uma pergunta de maior ganho informacional.
9. Recalcular e, se ainda insuficiente, registrar hipóteses e impedir decisões irreversíveis.
10. Atualizar `project.yaml` e `status.yaml` para `CLASSIFIED`.

## Diferença obrigatória por finalidade

### Internal

Identificar processo atual, dono, baseline, adoção, continuidade e ROI.

### Market

Identificar problema, segmento, evidência, pagador, monetização, aquisição e suporte.

### Hybrid

Combinar baseline interno com decisões de tenancy, dados, licença e portabilidade futura.

## Critérios de aceite

- `purpose` está explicitamente definido.
- Complexidade e risco possuem justificativa.
- Fatos e hipóteses estão separados.
- Lacunas críticas aparecem em `missing_information`.
- Nenhuma rota de mercado ignora validação do problema.
- Nenhuma rota interna ignora mapeamento do processo.

## Transição

- PASS → `create-canonical-brief`
- CONCERNS → exigir aceite das hipóteses antes de avançar
- FAIL → retornar ao intake
- BLOCKED → registrar responsável e condição de desbloqueio

**Quality gate:** `intake-completeness.md`
