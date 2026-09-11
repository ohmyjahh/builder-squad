# Story BS-011 — Release Candidate e Repositório Privado

**Status:** In Progress  
**Epic:** Builder Squad V1  
**Prioridade:** Crítica  
**Dependência:** BS-010

## História

Como proprietário do Builder Squad, quero uma release candidate versionada, verificável e enviada a um repositório privado para iniciar o piloto sem expor o produto.

## Critérios de aceite

- [x] Versão 0.9.0-rc.1 alinhada em manifest, package e VERSION.
- [x] Changelog, release notes, security e support presentes.
- [x] CI testa Node mínimo e moderno.
- [x] Pacote comercial contém core, adapters, docs e exemplos.
- [x] SHA256SUMS validado.
- [x] Plano de piloto e revisão jurídica documentados.
- [ ] Repositório privado criado na conta autorizada.
- [ ] Remote origin configurado.
- [ ] Branch main enviada.
- [ ] Tag v0.9.0-rc.1 enviada.

## Definition of Done

- [x] Testes locais PASS.
- [x] Validação estrutural PASS.
- [x] Package manifest e checksums.
- [ ] GitHub acessível e privado.
- [ ] Story e relatório atualizados com URL remota.

## File List

- VERSION
- CHANGELOG.md
- SECURITY.md
- SUPPORT.md
- CONTRIBUTING.md
- .github/*
- docs/release/*
- docs/commercial/*
- package-lock.json
- scripts/package.mjs
- docs/reports/BS-011-release-candidate.md

