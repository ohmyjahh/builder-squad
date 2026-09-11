# Versionamento e Migração

## SemVer

- MAJOR: quebra de contrato, estrutura ou comportamento incompatível.
- MINOR: agente, task, workflow ou capacidade compatível.
- PATCH: correção sem mudança de contrato.

## Contratos

Cada artefato canônico identifica seu contrato. Uma mudança incompatível cria nova versão e não altera silenciosamente arquivos antigos.

## Atualização

1. Execute doctor e testes na versão atual.
2. Faça backup do projeto.
3. Leia CHANGELOG e notas de migração.
4. Execute update; a instalação anterior será preservada.
5. Execute validate e testes na nova instalação.
6. Retome o projeto e reavalie contexto stale.
7. Em falha, use restore com o backup exato.

## Migração

Uma migração deve declarar:

- versões de origem e destino;
- artefatos afetados;
- transformação determinística;
- incompatibilidades;
- backup e rollback;
- validação pós-migração;
- owner e aprovação.

## Política da V1

A versão 0.x é release candidate e pode evoluir contratos com notas de migração. A versão 1.0.0 só será marcada após piloto fechado e correção dos achados impeditivos.

