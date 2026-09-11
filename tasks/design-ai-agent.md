---
task: Design AI Agent
responsavel: "@agent-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - agent_use_case
  - success_and_failure_criteria
  - risk_and_authority_profile
  - available_data_and_tools
Saida: |
  - agent_specification
  - behavior_contract
  - risk_controls
Checklist:
  - "[ ] Justificar uso de agente"
  - "[ ] Definir comportamento e recusas"
  - "[ ] Limitar ferramentas e autoridade"
  - "[ ] Definir memória e observabilidade"
  - "[ ] Definir evals e fallback"
---

# Objetivo

Projetar um agente útil, controlável e avaliável antes de escrever prompts ou conceder ferramentas.

## Procedimento

1. Verificar se regra determinística resolveria o caso com menor risco.
2. Definir job, usuário, contexto e resultado observável.
3. Delimitar entradas, saídas, tom e formato.
4. Listar decisões permitidas, proibidas e condicionadas à aprovação.
5. Definir ferramentas, allowlists, parâmetros e timeouts.
6. Definir memória, retenção, privacidade e atualização.
7. Mapear ataques, prompt injection, dados adversariais e uso indevido.
8. Definir comportamento de incerteza, recusa e fallback.
9. Definir logs, tracing e custo.
10. Criar critérios e dataset de avaliação antes da implementação.

## Critérios de aceite

- O agente tem função única e resultado mensurável.
- A autoridade é mínima e explícita.
- Toda ferramenta possui contrato e falha definida.
- Memória possui finalidade e ciclo de vida.
- Casos adversariais e recusas estão cobertos.
- Existe plano de avaliação e fallback humano.

## Vetos

- “Agente geral” sem fronteira.
- Ferramenta irrestrita.
- Ação de alto impacto sem aprovação.
- Dados pessoais sem necessidade.
- Qualidade definida apenas por demonstração manual favorável.

## Transição

- PASS → `define-agent-context-and-tools` e `create-agent-evaluation-suite`
- FAIL → reduzir escopo ou usar automação determinística

**Quality gate:** agent-evaluation
