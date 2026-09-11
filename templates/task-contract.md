---
task: {{task_title}}
responsavel: "@{{agent_id}}"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - {{input}}
Saida: |
  - {{output}}
Checklist:
  - "[ ] {{acceptance_item}}"
---

# Objetivo

{{atomic_outcome}}

## Contexto de uso

## Procedimento

1. Validar entradas e versões.
2. Executar somente o escopo da task.
3. Produzir os artefatos contratados.
4. Aplicar critérios de aceite.
5. Registrar decisões, riscos e pendências.
6. Preparar handoff ou veredito.

## Critérios de aceite

- [ ] Saída identificável e versionada.
- [ ] Fatos e hipóteses separados.
- [ ] Critérios específicos atendidos.
- [ ] Riscos registrados.
- [ ] Próxima transição definida.

## Vetos

- Entrada obrigatória ausente.
- Mudança material de escopo.
- Ação fora da autoridade.
- Saída sem evidência.

## Recuperação

## Handoff

**Quality gate:** `{{checklist_or_null}}`
