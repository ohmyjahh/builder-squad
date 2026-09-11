# Relatório BS-008 — Runtime e Automações

**Data:** 2026-09-11  
**Veredito:** PASS

## Runtime

- Node verificado: 25.8.1; mínimo suportado: 18.
- Dependências externas de runtime: 0.
- Comandos CLI: 9.
- Automações declarativas: 9/9 com IDs únicos.
- Adapters: Codex e Claude Code.

## Testes

- Total: 14.
- Passaram: 14.
- Falharam: 0.
- Cobertura comportamental: classificação, complexidade, rotas condicionais, state machine, aprovação de release, inicialização, handoff, instalação sidecar e integridade do repositório.

## Garantias operacionais

1. Não instala na raiz nem no diretório pessoal.
2. Não sobrescreve instalação sem `--force`; com `--force`, move a anterior para backup datado.
3. Grava transição de estado de forma atômica.
4. Exige approval ID para transição a release.
5. Detecta padrões de credencial em handoffs.
6. Gera pacote com checksums SHA-256.
