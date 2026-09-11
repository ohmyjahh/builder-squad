# Adapter Claude Code

Este adapter conecta o núcleo do Builder Squad ao Claude Code sem substituir o `CLAUDE.md` existente.

## Ativação

1. Instale com `node scripts/install.mjs --adapter claude-code --target /caminho/do/projeto`.
2. Leia `.builder-squad/adapter/CLAUDE.builder-squad.md`.
3. Acrescente ao `CLAUDE.md` existente a referência curta sugerida.
4. Inicie com: `@builder-chief *start-project`.

## Referência sugerida

> Quando o Builder Squad for ativado, leia e siga `.builder-squad/adapter/CLAUDE.builder-squad.md` e use `.builder-squad/` como núcleo canônico.

O adapter é sidecar: não sobrescreve hooks, settings, comandos nem memórias existentes.

