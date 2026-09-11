---
task: Create User Guide
responsavel: "@documentation-handoff-specialist"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - product
  - user_flows
  - known_limitations
Saida: |
  - user_guide
  - quick_start
  - troubleshooting_section
Checklist:
  - "[ ] Um usuário elegível consegue obter primeiro valor."
  - "[ ] Passos correspondem à versão atual."
  - "[ ] Limitações e riscos aparecem no ponto relevante."
  - "[ ] O guia foi testado por execução."
---

# Objetivo

Ensinar o usuário a alcançar o primeiro valor, executar tarefas principais e recuperar-se de erros comuns.

## Procedimento

1. Definir público, pré-requisitos e resultado do guia.
2. Escrever início rápido orientado a uma conquista.
3. Documentar fluxos principais com exemplos reais.
4. Adicionar erros, limites, segurança e recuperação.
5. Validar instruções em ambiente limpo.

## Critérios de aceite

- Um usuário elegível consegue obter primeiro valor.
- Passos correspondem à versão atual.
- Limitações e riscos aparecem no ponto relevante.
- O guia foi testado por execução.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Fatos, hipóteses e decisões misturados.
- Resultado, prova ou capacidade inventados.
- Ação externa, financeira ou de publicação sem aprovação.

## Recuperação e transição

- PASS → `prepare-client-handoff`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner da causa.
- BLOCKED → escalar ao `builder-chief`.

**Quality gate:** `handoff-readiness.md`

