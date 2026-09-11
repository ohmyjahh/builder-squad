# ADR-004 — Core Independente e Adapters Laterais

**Status:** accepted  
**Data:** 2026-09-11

## Contexto

Codex, Claude Code e futuros ambientes possuem instruções, comandos e capacidades multiagente diferentes.

## Decisão

Agentes, tasks, workflows, gates, dados e schemas permanecem neutros. Instruções específicas vivem em adapters sidecar e não sobrescrevem configurações existentes.

## Consequências

- o mesmo projeto produz artefatos equivalentes;
- integração inicial requer uma referência curta nas instruções do host;
- features exclusivas não podem contaminar contratos canônicos.

## Gatilho de revisão

Novo runtime exige adapter e teste de equivalência antes de ser declarado suportado.

