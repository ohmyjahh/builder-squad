# Builder Squad

Sistema multiagente task-first para transformar uma ideia em um projeto digital planejado, construído, validado e preparado para operação ou mercado.

## Proposta

O Builder Squad não é uma coleção de prompts nem um diretório de agentes isolados. Ele combina:

- uma porta de entrada única (`Builder Chief`);
- diagnóstico e classificação do projeto;
- briefing canônico compartilhado;
- roteamento condicional por complexidade;
- especialistas com responsabilidades não sobrepostas;
- tasks com contratos explícitos de entrada e saída;
- handoffs auditáveis;
- quality gates entre fases;
- memória persistente em arquivos;
- workflows distintos para projetos internos e produtos de mercado.

## Primeira decisão obrigatória

Todo novo projeto deve responder:

> Este projeto é para uso interno ou para ser colocado no mercado?

Essa resposta muda escopo, riscos, agentes, requisitos não funcionais, validações e critérios de conclusão.

## Estado

Em construção. A fonte de verdade inicial está em:

- `docs/prd/PRODUCT-REQUIREMENTS.md`
- `docs/architecture/SYSTEM-ARCHITECTURE.md`
- `docs/roadmap/MASTER-PLAN.md`
- `docs/stories/BS-001-foundation.story.md`
- `squads/.designs/builder-squad-design.yaml`

## Licença

Produto proprietário. Consulte `LICENSE.md`.
