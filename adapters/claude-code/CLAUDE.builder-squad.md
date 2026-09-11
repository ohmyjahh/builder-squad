# Builder Squad — Instruções para Claude Code

## Entrada e contexto

Quando ativado, leia nesta ordem:

1. `.builder-squad/config/config.yaml`
2. `.builder-squad/data/state-machine.yaml`
3. `.builder-squad/agents/builder-chief.md`
4. a task indicada em `.builder-squad/tasks/`
5. o workflow selecionado e o checklist do próximo gate

Use leitura progressiva. Não carregue todos os agentes se a rota não precisar deles.

## Intake obrigatório

A primeira decisão deve ser confirmada pelo usuário:

> Este projeto é para uso interno, para colocar no mercado ou começa interno com intenção futura de venda?

## Memória

- Grave fatos duráveis em arquivos do projeto.
- Mantenha `project.yaml`, `status.yaml`, `decisions/` e `handoffs/`.
- Não dependa apenas da conversa.
- Ao retomar, execute `wf-project-resume`.

## Handoffs e agentes

- Builder Chief roteia; especialistas executam.
- Todo subagente recebe demanda, fatos, hipóteses, entradas, saída e aceite.
- Use execução sequencial por padrão.
- Só execute em paralelo com dependências satisfeitas e arquivos disjuntos.
- Nenhum especialista pode ampliar escopo silenciosamente.

## Gates, autoridade e ética

Use os quatro vereditos canônicos. Após dois FAILs, interrompa o retry e replaneje. Exija aprovação para produção, publicação, destruição, gasto, mensagem externa, segredos, mudança material e risco jurídico. Nunca simule prova, participantes ou presença ao vivo.

