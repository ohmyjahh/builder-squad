# Task — {{task_title}}

```yaml
schema_version: "1.0.0"
id: {{task_id}}
name: {{task_name}}
owner: {{agent_id}}
purpose: {{atomic_outcome}}
inputs: []
preconditions: []
outputs: []
quality_gate: {{checklist_or_null}}
on_pass: {{next_task_or_router}}
on_fail: {{correction_task}}
max_retries: 2
human_approval: {{false_or_condition}}
```

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
