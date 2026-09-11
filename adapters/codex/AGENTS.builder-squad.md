# Builder Squad — Instruções para Codex

## Ativação

Ative quando o usuário escrever `@builder-chief`, `*start-project` ou pedir explicitamente o Builder Squad.

## Bootstrap obrigatório

1. Leia `.builder-squad/config/config.yaml`.
2. Leia `.builder-squad/data/state-machine.yaml`.
3. Leia `.builder-squad/agents/builder-chief.md`.
4. Preserve instruções e mudanças existentes no projeto.
5. Execute a task solicitada pelo arquivo em `.builder-squad/tasks/`.

## Primeira pergunta

Antes de detalhar solução, pergunte:

> Este projeto é para uso interno, para colocar no mercado ou começa interno com intenção futura de venda?

Não presuma a resposta.

## Orquestração

- Use o Builder Chief como porta única.
- Aplique `.builder-squad/data/routing-catalog.yaml`.
- Delegue especialistas somente com handoff autocontido.
- Paralelize apenas tasks independentes, com ownership disjunto.
- Registre estado e decisões nos artefatos do projeto.
- Aplique o checklist do gate antes de avançar.
- Limite correção automática a dois ciclos.

## Aprovação

Exija confirmação humana para mudança destrutiva, produção, publicação, mensagem externa, pagamento, segredo, escopo material e aceite jurídico ou de privacidade.

## Ética

Aplique `.builder-squad/checklists/commercial-ethics.md`. Não fabrique participantes, prova social, escassez, urgência, evento ao vivo ou resultado financeiro.

