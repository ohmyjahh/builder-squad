# ADR-002 — Finalidade Antes da Arquitetura

**Status:** accepted  
**Data:** 2026-09-11

## Contexto

Ferramenta interna, produto de mercado e solução interna com intenção de venda parecem tecnicamente semelhantes, mas possuem riscos, evidências e critérios de conclusão diferentes.

## Decisão

A primeira decisão do intake é internal, market ou hybrid, confirmada pelo usuário. Ela escolhe um workflow base. Features e risco adicionam especialistas e gates depois.

## Consequências

- projetos internos não pagam complexidade comercial desnecessária;
- produtos de mercado não pulam discovery, segurança, analytics ou suporte;
- híbridos preservam opção de evolução sem fingir demanda validada.

## Gatilho de revisão

Mudança real da finalidade retorna ao intake e invalida decisões afetadas.

