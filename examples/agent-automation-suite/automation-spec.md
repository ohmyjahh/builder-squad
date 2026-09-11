# Automation Spec — Follow-up

## Gatilho

Evento diário de tarefa atrasada.

## Fluxo

1. Deduplicar por task_id + due_date.
2. Consultar fonte autorizada.
3. Validar owner e status.
4. Solicitar rascunho ao agente.
5. Gravar rascunho e hash.
6. Solicitar aprovação.
7. Enviar somente o hash aprovado.
8. Registrar entrega ou falha.

## Falhas

- timeout: retry exponencial até duas vezes;
- rate limit: reagendar;
- owner ausente: dead-letter operacional;
- aprovação expirada: não enviar;
- evento repetido: retornar efeito anterior.

## Observabilidade

Contadores de rascunho, aprovação, envio, falha, duplicação e bloqueio.

