# ADR-003 — Memória Canônica em Arquivos

**Status:** accepted  
**Data:** 2026-09-11

## Contexto

Histórico de conversa é insuficiente para retomada, auditoria, troca de agente e portabilidade entre runtimes.

## Decisão

Projeto, estado, brief, decisões, handoffs, tasks e evidências são persistidos em arquivos versionáveis. A conversa é interface de trabalho, não fonte durável de verdade.

## Consequências

- projetos podem ser retomados por outro agente;
- conflitos de estado ficam visíveis;
- o sistema funciona sem serviço central;
- é necessário manter artefatos e status sincronizados.

## Gatilho de revisão

Uma camada de armazenamento futura pode ser adicionada se exportar e importar os mesmos contratos sem perda.

