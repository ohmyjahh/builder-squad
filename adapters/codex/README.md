# Adapter Codex

Este adapter conecta o núcleo do Builder Squad a um projeto usado no Codex sem sobrescrever o `AGENTS.md` existente.

## Ativação

1. Instale com `node scripts/install.mjs --adapter codex --target /caminho/do/projeto`.
2. Leia `.builder-squad/adapter/AGENTS.builder-squad.md`.
3. Acrescente ao `AGENTS.md` do projeto apenas a referência curta sugerida abaixo.
4. Inicie com: `@builder-chief *start-project`.

## Referência sugerida

> Quando o usuário ativar o Builder Squad, leia e siga `.builder-squad/adapter/AGENTS.builder-squad.md` e trate `.builder-squad/` como o núcleo canônico do squad.

## Regra de segurança

O instalador preserva instalações anteriores como backup quando `--force` é usado. Ele não modifica automaticamente as instruções já existentes do projeto.

