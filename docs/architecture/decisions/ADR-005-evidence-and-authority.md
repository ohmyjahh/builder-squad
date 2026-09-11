# ADR-005 — Gates por Evidência e Autoridade Humana

**Status:** accepted  
**Data:** 2026-09-11

## Contexto

Agentes podem produzir saídas convincentes sem evidência suficiente e executar ações com impacto fora da intenção original.

## Decisão

Transições materiais passam por gates com PASS, CONCERNS, FAIL ou BLOCKED. Produção, publicação, mensagens externas, gastos, segredos, destruição, escopo material e aceite jurídico exigem aprovação humana vinculada ao objeto e versão.

## Consequências

- risco aceito não se confunde com qualidade plena;
- silêncio nunca é aprovação;
- retries são limitados a dois antes de replanejamento;
- automação perde alguma velocidade nos pontos de maior impacto.

## Gatilho de revisão

Somente com redução demonstrável de risco e mecanismo de autorização equivalente.

