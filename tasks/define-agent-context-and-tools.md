---
task: Define Agent Context and Tools
responsavel: "@agent-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - agent_spec
  - available_tools
  - data_policies
Saida: |
  - context_and_tools_spec
  - permission_matrix
  - context_budget
Checklist:
  - "[ ] Cada ferramenta possui necessidade e limite."
  - "[ ] Ações de alto impacto exigem aprovação."
  - "[ ] Conteúdo externo é tratado como não confiável."
  - "[ ] Memória tem retenção, fonte e atualização definidas."
---

# Objetivo

Definir o que o agente sabe, pode consultar e pode executar, limitando autoridade ao necessário.

## Procedimento

1. Separar instrução estável, contexto de sessão e memória persistente.
2. Mapear cada ferramenta ao caso de uso e risco.
3. Definir escopos, confirmações e argumentos permitidos.
4. Planejar recuperação de contexto, citações e expiração.
5. Criar orçamento de contexto e política contra instruções não confiáveis.

## Critérios de aceite

- Cada ferramenta possui necessidade e limite.
- Ações de alto impacto exigem aprovação.
- Conteúdo externo é tratado como não confiável.
- Memória tem retenção, fonte e atualização definidas.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Escopo, ambiente ou autoridade presumidos.
- Evidência crítica ausente ou não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `create-agent-evaluation-suite`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa identificada.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `agent-safety.md`

