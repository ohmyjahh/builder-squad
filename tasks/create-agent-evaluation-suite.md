---
task: Create Agent Evaluation Suite
responsavel: "@agent-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - agent_spec
  - risk_profile
  - expected_outputs
Saida: |
  - agent_evals
  - golden_cases
  - adversarial_cases
  - scoring_rubric
Checklist:
  - "[ ] Evals cobrem sucesso e recusa correta."
  - "[ ] Casos críticos possuem expectativa verificável."
  - "[ ] Pontuação diferencia erro factual, de processo e de segurança."
  - "[ ] Suite pode ser repetida após mudança."
---

# Objetivo

Criar avaliações reproduzíveis de capacidade, limites, segurança e consistência do agente.

## Procedimento

1. Derivar dimensões do objetivo e dos riscos.
2. Criar casos normais, limites, ambíguos e adversariais.
3. Definir resultados esperados e tolerâncias.
4. Adicionar injeção de prompt, ferramenta indisponível e contexto conflitante.
5. Definir amostra, rubrica, limiar e regra de regressão.

## Critérios de aceite

- Evals cobrem sucesso e recusa correta.
- Casos críticos possuem expectativa verificável.
- Pontuação diferencia erro factual, de processo e de segurança.
- Suite pode ser repetida após mudança.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `review-agent-behavior`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `agent-safety.md`

