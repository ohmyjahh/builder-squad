# Mapa Mestre de Construção

**Objetivo:** construir, validar e empacotar o Builder Squad como produto proprietário instalável.

## Fase 0 — Fundação

- [x] Confirmar domínio e proposta.
- [x] Incluir classificação `internal`, `market` e `hybrid`.
- [x] Criar PRD inicial.
- [x] Criar arquitetura inicial.
- [ ] Criar ADRs das decisões estruturais.
- [ ] Definir glossário e ontologia.
- [ ] Definir critérios mensuráveis da V1.

**Gate:** visão, fronteiras e rotas aprovadas.

## Fase 1 — Manifest e contratos

- [ ] Criar `squad.yaml`.
- [ ] Definir compatibilidade e licença.
- [ ] Criar schema de projeto.
- [ ] Criar schema de task.
- [ ] Criar schema de handoff.
- [ ] Criar schema de decisão.
- [ ] Criar schema de status.
- [ ] Definir política de versões e migrações.

**Gate:** contratos validáveis e sem dependência de provedor.

## Fase 2 — Orquestração

- [ ] Criar Builder Chief.
- [ ] Criar intake progressivo.
- [ ] Criar classificador de finalidade.
- [ ] Criar classificador de complexidade e risco.
- [ ] Criar catálogo de roteamento.
- [ ] Criar máquina de estados.
- [ ] Criar contratos de handoff.
- [ ] Criar protocolo de retry, rollback e escalonamento.

**Gate:** uma demanda percorre diagnóstico, briefing e rota sem execução especializada.

## Fase 3 — Especialistas

- [ ] Product Strategist.
- [ ] Process Analyst.
- [ ] Project Manager.
- [ ] Solution Architect.
- [ ] UX/UI Designer.
- [ ] Data Architect.
- [ ] Backend Engineer.
- [ ] Frontend Engineer.
- [ ] Agent Architect.
- [ ] Automation & Integration Engineer.
- [ ] QA Engineer.
- [ ] Security Reviewer.
- [ ] DevOps & Release Engineer.
- [ ] Growth & Sales Strategist.
- [ ] Documentation & Handoff Specialist.

**Gate:** cada responsabilidade tem dono, comandos, limites e critérios de qualidade.

## Fase 4 — Catálogo task-first

- [ ] Discovery e diagnóstico.
- [ ] Validação de problema.
- [ ] Mapeamento de processo interno.
- [ ] Definição de ICP e mercado.
- [ ] Escopo de MVP.
- [ ] PRD.
- [ ] Arquitetura.
- [ ] UX flow e UI specification.
- [ ] Modelagem de dados.
- [ ] Contratos de API.
- [ ] Planejamento frontend/backend.
- [ ] Design de agente.
- [ ] Design de automação e integrações.
- [ ] Decomposição em stories/tasks.
- [ ] Implementação.
- [ ] Testes funcionais e não funcionais.
- [ ] Auditoria de segurança.
- [ ] Deploy, rollback e observabilidade.
- [ ] Onboarding, suporte e documentação.
- [ ] Oferta, pricing e go-to-market.
- [ ] Medição e iteração.

**Gate:** toda capacidade do PRD possui pelo menos uma task responsável.

## Fase 5 — Workflows

- [ ] `wf-intake-and-classify`.
- [ ] `wf-internal-tool`.
- [ ] `wf-market-product`.
- [ ] `wf-hybrid-evolution`.
- [ ] `wf-client-delivery`.
- [ ] `wf-agent-and-automation`.
- [ ] `wf-brownfield-improvement`.
- [ ] `wf-bug-and-recovery`.
- [ ] `wf-security-review`.
- [ ] `wf-release`.
- [ ] `wf-growth-iteration`.
- [ ] `wf-project-resume`.

**Gate:** happy path, caminhos condicionais, falhas e encerramento definidos.

## Fase 6 — Templates e memória

- [ ] Project charter.
- [ ] Intake questionnaire.
- [ ] Canonical brief.
- [ ] Process map.
- [ ] Market evidence report.
- [ ] PRD.
- [ ] Architecture decision record.
- [ ] System architecture.
- [ ] UX specification.
- [ ] Data model.
- [ ] API contract.
- [ ] Agent specification.
- [ ] Automation specification.
- [ ] Story e task.
- [ ] Handoff.
- [ ] Decision log.
- [ ] QA report.
- [ ] Security report.
- [ ] Release plan.
- [ ] Rollback plan.
- [ ] GTM plan.
- [ ] Project closure.

**Gate:** todo output de task possui template versionado.

## Fase 7 — Quality gates

- [ ] Intake completeness.
- [ ] Internal viability.
- [ ] Market evidence.
- [ ] MVP discipline.
- [ ] Architecture fitness.
- [ ] UX readiness.
- [ ] Data and privacy.
- [ ] Code quality.
- [ ] Agent evaluation.
- [ ] Integration resilience.
- [ ] Security readiness.
- [ ] Release readiness.
- [ ] Commercial readiness.
- [ ] Handoff completeness.

**Gate:** gates possuem vetos objetivos e caminhos de correção.

## Fase 8 — Automação e ferramentas

- [ ] Inicializador de projeto.
- [ ] Validador de manifest.
- [ ] Validador de artefatos.
- [ ] Validador de transições.
- [ ] Gerador de ID e estrutura.
- [ ] Leitor de status.
- [ ] Detector de contexto desatualizado.
- [ ] Gerador de handoff.
- [ ] Verificador de cobertura.
- [ ] Instalador e desinstalador.
- [ ] Atualizador com backup e migração.
- [ ] Diagnóstico de ambiente.
- [ ] Testes automatizados.

**Gate:** automações são idempotentes, reversíveis e testadas.

## Fase 9 — Adaptadores

- [ ] Adaptador Codex.
- [ ] Adaptador Claude Code.
- [ ] Mapeamento de comandos e agentes.
- [ ] Estratégia de permissões.
- [ ] Fallback sem suporte multiagente nativo.
- [ ] Matriz de compatibilidade.

**Gate:** mesmo projeto produz artefatos canônicos equivalentes em ambientes suportados.

## Fase 10 — Experiência do comprador

- [ ] Quick start.
- [ ] Instalação guiada.
- [ ] Primeiro projeto em menos de 30 minutos.
- [ ] Ajuda contextual.
- [ ] Exemplos interno e mercado.
- [ ] Mensagens de erro orientadas à recuperação.
- [ ] Guia de custos e limites.
- [ ] Política de dados e segurança.
- [ ] FAQ e troubleshooting.

**Gate:** teste com usuário sem apoio síncrono.

## Fase 11 — Projetos de referência

- [ ] Projeto interno: operação e follow-up.
- [ ] Produto de mercado: micro-SaaS.
- [ ] Projeto híbrido: ferramenta interna preparada para venda.
- [ ] Agente + app + automação integrados.
- [ ] Brownfield com correção e retomada.

**Gate:** cinco cenários percorrem workflows e deixam trilha auditável.

## Fase 12 — Validação, segurança e distribuição

- [ ] Validação de schema em modo estrito.
- [ ] Testes de cobertura de rotas.
- [ ] Testes de caminhos errados.
- [ ] Testes de retry e recuperação.
- [ ] Revisão de segurança.
- [ ] Revisão de licença e termos.
- [ ] Versionamento semântico.
- [ ] Changelog.
- [ ] Repositório privado.
- [ ] Release candidate.
- [ ] Piloto fechado.
- [ ] Correções do piloto.
- [ ] Versão 1.0.0.

**Gate:** critérios do PRD atendidos e aceite formal de release.
