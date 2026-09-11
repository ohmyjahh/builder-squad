---
task: Close Project
responsavel: "@builder-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - approved brief
  - completed task graph
  - quality e security verdicts
  - release evidence
  - open items
Saida: |
  - closure_verdict
  - closure_report
  - residual_risk_register
  - next_cycle_recommendation
Checklist:
  - "[ ] Comparar resultado com brief aprovado"
  - "[ ] Verificar tasks e gates"
  - "[ ] Confirmar ausência de críticos"
  - "[ ] Registrar riscos e débitos residuais"
  - "[ ] Validar documentação e aceite"
---

# Objetivo

Encerrar apenas quando o resultado estiver comprovado e o próximo responsável conseguir operar, medir ou evoluir a solução.

## Passos

1. Comparar entregas com critérios de sucesso e aceite.
2. Verificar conclusão do task graph e justificar tasks canceladas.
3. Verificar vereditos de QA, segurança e produção quando aplicáveis.
4. Impedir conclusão com achado crítico aberto.
5. Consolidar decisões, riscos aceitos e débitos.
6. Validar guias, runbook, rollback, suporte e handoff.
7. Obter aceite do owner ou cliente quando exigido.
8. Definir medição pós-release ou próximo ciclo.
9. Criar `closure_report` e atualizar estado para `COMPLETE`.

## Vereditos

- `COMPLETE`: todos os critérios atendidos.
- `COMPLETE_WITH_ACCEPTED_RISK`: riscos não críticos aceitos explicitamente.
- `NOT_COMPLETE`: faltam critérios ou evidências.
- `BLOCKED`: depende de aceite ou evidência externa.

## Critérios de aceite

- Resultado rastreável ao brief vigente.
- Evidências de teste e release acessíveis.
- Riscos residuais possuem owner.
- Documentação operacional está atualizada.
- Aceite foi registrado.
- Estado terminal respeita `state-machine.yaml`.

## Transição

- COMPLETE → `COMPLETE`
- NOT_COMPLETE → `correct-course`
- BLOCKED → `BLOCKED`
