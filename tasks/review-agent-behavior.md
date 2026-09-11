---
task: Review Agent Behavior
responsavel: "@agent-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - agent_output
  - agent_evals
  - execution_trace
Saida: |
  - agent_verdict
  - failure_taxonomy
  - improvement_plan
Checklist:
  - "[ ] O veredito referencia execuções rastreáveis."
  - "[ ] Chamadas de ferramentas fazem parte da avaliação."
  - "[ ] Falhas variáveis não são ocultadas por média."
  - "[ ] Correção proposta ataca a causa provável."
---

# Objetivo

Avaliar comportamento real do agente contra especificação, autorização e casos de risco.

## Procedimento

1. Fixar versão de prompt, ferramentas, modelo e contexto.
2. Executar suite com repetição proporcional à variabilidade.
3. Comparar saídas, chamadas e recusas com a rubrica.
4. Classificar falhas de instrução, contexto, ferramenta, raciocínio e política.
5. Propor a menor correção e novo teste de regressão.

## Critérios de aceite

- O veredito referencia execuções rastreáveis.
- Chamadas de ferramentas fazem parte da avaliação.
- Falhas variáveis não são ocultadas por média.
- Correção proposta ataca a causa provável.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `execute-quality-gate`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `agent-safety.md`

