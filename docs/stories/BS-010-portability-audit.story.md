# Story BS-010 — Auditoria de Portabilidade e Integridade

**Status:** Done  
**Epic:** Builder Squad V1  
**Prioridade:** Crítica  
**Dependência:** BS-009

## História

Como mantenedor do produto, quero provar que core, adapters, contratos, instalação e recuperação permanecem coerentes para que o release candidate seja reproduzível.

## Critérios de aceite

- [x] Scripts JavaScript passam em verificação de sintaxe.
- [x] YAMLs e JSONs parseiam em modo estrito.
- [x] Schemas e templates principais compartilham campos obrigatórios.
- [x] Instalação copiada executa o validador.
- [x] Update, restore e uninstall são recuperáveis.
- [x] Links locais principais estão válidos.
- [x] Nenhum padrão de segredo de alta confiança foi detectado.
- [x] Rotas e exemplos são testados.
- [x] O roadmap distingue concluído de dependências externas.

## Definition of Done

- [x] Tests: PASS 21/21.
- [x] Structural validation: PASS 20/20.
- [x] YAML: PASS 35/35.
- [x] JSON: PASS 9/9.
- [x] Git object database: sem erro.
- [x] Relatório de auditoria versionado.

## File List

- schemas/*.json
- templates/project-manifest.yaml
- templates/project-status.yaml
- templates/task-contract.md
- scripts/validate.mjs
- scripts/install.mjs
- scripts/update.mjs
- scripts/restore.mjs
- scripts/uninstall.mjs
- docs/architecture/decisions/*
- docs/guides/*
- docs/roadmap/MASTER-PLAN.md
- docs/reports/BS-010-portability-audit.md

