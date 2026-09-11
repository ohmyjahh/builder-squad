---
task: Review Usability and Accessibility
responsavel: "@ux-ui-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - implemented_interface
  - user_flows
  - accessibility_target
Saida: |
  - ux_review
  - accessibility_findings
  - remediation_priorities
Checklist:
  - "[ ] Fluxos críticos podem ser concluídos sem mouse quando aplicável."
  - "[ ] Foco e leitura seguem ordem significativa."
  - "[ ] Erros explicam causa e recuperação."
  - "[ ] Achados possuem evidência e prioridade."
---

# Objetivo

Verificar se pessoas reais conseguem concluir fluxos críticos com compreensão, eficiência e acesso inclusivo.

## Procedimento

1. Fixar build, dispositivos e fluxos revisados.
2. Executar inspeção heurística por tarefa.
3. Navegar com teclado e tecnologia assistiva aplicável.
4. Revisar contraste, foco, semântica, mensagens e movimento.
5. Classificar achados por impacto na conclusão.

## Critérios de aceite

- Fluxos críticos podem ser concluídos sem mouse quando aplicável.
- Foco e leitura seguem ordem significativa.
- Erros explicam causa e recuperação.
- Achados possuem evidência e prioridade.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `execute-quality-gate`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `ux-readiness.md`
