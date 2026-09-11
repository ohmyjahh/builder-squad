# Story BS-001 — Fundação do Builder Squad

**Status:** In Progress  
**Epic:** Builder Squad V1  
**Prioridade:** Crítica

## História

Como criador do Builder Squad, quero uma fundação documental e estrutural validável para que agentes, tasks, workflows e automações sejam construídos sobre contratos coerentes e um escopo controlado.

## Critérios de aceite

1. Existe um PRD com visão, público, capacidades, requisitos e fora de escopo.
2. Existe uma arquitetura com orquestração, estado, handoffs, gates e memória.
3. O intake contém a pergunta obrigatória `internal` versus `market`, com suporte a `hybrid`.
4. Existe um mapa mestre com fases, entregas e gates.
5. Existe um blueprint inicial em YAML.
6. O projeto é isolado do repositório amplo da pasta pessoal.
7. Nenhum segredo ou credencial é versionado.
8. A licença inicial é proprietária e marcada para revisão jurídica.

## Tasks

- [x] Consolidar contexto do produto.
- [x] Analisar os padrões relevantes do Xquads.
- [x] Definir rotas `internal`, `market` e `hybrid`.
- [x] Criar PRD inicial.
- [x] Criar arquitetura inicial.
- [x] Criar mapa mestre.
- [x] Criar regras locais do repositório.
- [x] Criar blueprint YAML.
- [x] Validar consistência cruzada.
- [x] Inicializar repositório Git independente.
- [ ] Criar repositório privado no GitHub.

## Notas técnicas

- O GitHub CLI foi encontrado sem autenticação válida em 2026-09-11.
- O remoto será criado somente após reautenticação.
- O nome provisório do repositório é `builder-squad`.

## Definition of Done

- [ ] Todos os critérios de aceite atendidos.
- [ ] Links internos válidos.
- [ ] Story e File List atualizadas.
- [ ] Revisão estrutural sem achados críticos.
- [ ] Commit convencional criado.

## File List

- `README.md`
- `AGENTS.md`
- `.gitignore`
- `LICENSE.md`
- `docs/prd/PRODUCT-REQUIREMENTS.md`
- `docs/architecture/SYSTEM-ARCHITECTURE.md`
- `docs/roadmap/MASTER-PLAN.md`
- `docs/stories/BS-001-foundation.story.md`
- `squads/.designs/builder-squad-design.yaml` (pendente)
- `docs/reports/BS-002-validation.md`
