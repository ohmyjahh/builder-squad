# ADR-001 — Arquitetura Task-First

**Status:** accepted  
**Data:** 2026-09-11

## Contexto

Squads baseados primeiro em personas tendem a acumular comandos vagos, sobreposição e saídas incompatíveis.

## Decisão

Cada comando executável referencia uma task atômica com entrada, saída, procedimento, aceite, veto, gate e transição. Agentes agrupam competências e executam tasks; não são a unidade primária de contrato.

## Consequências

- cobertura pode ser medida;
- handoffs são verificáveis;
- novos adapters reutilizam o mesmo núcleo;
- a criação inicial exige mais rigor documental.

## Gatilho de revisão

Somente se um runtime suportado provar que outro contrato mantém rastreabilidade e qualidade equivalentes.

