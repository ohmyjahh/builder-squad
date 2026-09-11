# Story BS-002 — Núcleo de Orquestração

**Status:** Done  
**Epic:** Builder Squad V1  
**Prioridade:** Crítica  
**Dependência:** BS-001

## História

Como usuário do Builder Squad, quero apresentar uma demanda a uma única porta de entrada e receber uma rota coerente para que meu projeto seja conduzido pelos especialistas certos sem eu precisar gerenciar o time manualmente.

## Critérios de aceite

1. Existe um manifest válido com todos os componentes do núcleo.
2. O Builder Chief possui comandos de início, diagnóstico, rota, status, retomada, correção e encerramento.
3. O intake exige a classificação `internal`, `market` ou `hybrid`.
4. Existe um catálogo de roteamento com regras, pesos, caminhos obrigatórios e skips.
5. Existe uma máquina de estados com transições válidas e inválidas.
6. Tasks de diagnóstico, briefing, roteamento, status, retomada, correção e encerramento têm contratos completos.
7. Handoffs separam fatos, hipóteses, decisões, riscos e pendências.
8. Um quality gate valida o núcleo antes da execução especializada.
9. Há exemplos de projeto interno e de mercado.

## Tasks

- [x] Criar manifest do squad.
- [x] Criar configuração do núcleo.
- [x] Criar definição do Builder Chief.
- [x] Criar ontologia e catálogo de roteamento.
- [x] Criar schema de projeto e status.
- [x] Criar templates de intake, briefing, handoff e decisão.
- [x] Criar tasks do núcleo.
- [x] Criar workflow de intake e classificação.
- [x] Criar checklists do núcleo.
- [x] Criar cenários de teste de roteamento.
- [x] Validar estrutura e referências.

## Definition of Done

- [x] Todos os critérios de aceite atendidos.
- [x] YAML e JSON válidos.
- [x] Cenários `internal`, `market` e `hybrid` cobertos.
- [x] Nenhum caminho de alto risco ignora aprovação humana.
- [x] File List atualizada.

## File List

- `squad.yaml`
- `config/config.yaml`
- `agents/builder-chief.md`
- `data/project-ontology.yaml`
- `data/routing-catalog.yaml`
- `data/state-machine.yaml`
- `schemas/project.schema.json`
- `schemas/status.schema.json`
- `schemas/task.schema.json`
- `schemas/handoff.schema.json`
- `schemas/decision.schema.json`
- `templates/intake-questionnaire.md`
- `templates/canonical-brief.md`
- `templates/handoff.md`
- `templates/decision-record.md`
- `tasks/start-project.md`
- `tasks/classify-project.md`
- `tasks/create-canonical-brief.md`
- `tasks/route-project.md`
- `tasks/report-project-status.md`
- `tasks/resume-project.md`
- `tasks/correct-course.md`
- `tasks/close-project.md`
- `workflows/wf-intake-and-classify.yaml`
- `checklists/intake-completeness.md`
- `checklists/handoff-quality.md`
- `checklists/orchestration-quality.md`
- `tests/fixtures/routing-scenarios.yaml`
- `docs/reports/BS-002-validation.md`
