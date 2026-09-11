# Mapa Mestre de Construção

**Objetivo:** construir, validar e empacotar o Builder Squad como produto proprietário instalável.
**Estado atual:** release candidate em preparação.

## Visão de progresso

| Fase | Estado | Evidência |
|---|---|---|
| 0. Fundação | Concluída | PRD, arquitetura, 5 ADRs e blueprint |
| 1. Manifest e contratos | Concluída | manifest, 5 schemas e versionamento |
| 2. Orquestração | Concluída | Builder Chief, routing e state machine |
| 3. Especialistas | Concluída | 16 agentes, fronteiras e 75 comandos |
| 4. Catálogo task-first | Concluída | 75/75 tasks válidas |
| 5. Workflows | Concluída | 12/12 esteiras condicionais |
| 6. Templates e memória | Concluída | 36 templates canônicos |
| 7. Quality gates | Concluída | 31 gates e vetos |
| 8. Runtime e automações | Concluída | CLI, 9 automações e 21 testes |
| 9. Adapters | Concluída | Codex e Claude Code |
| 10. Experiência do comprador | Documentação concluída | teste externo ainda pendente |
| 11. Projetos de referência | Concluída | 5 cenários |
| 12. Distribuição | Em andamento | pacote, CI e GitHub |

## Fase 0 — Fundação

- [x] Confirmar domínio e proposta.
- [x] Incluir classificação internal, market e hybrid.
- [x] Criar PRD e arquitetura.
- [x] Registrar decisões estruturais em ADRs.
- [x] Definir glossário, ontologia e critérios da V1.
- [x] Isolar repositório Git local.
- [ ] Criar repositório privado remoto após autenticação GitHub.

**Gate:** PASS.

## Fase 1 — Manifest e contratos

- [x] Criar squad.yaml.
- [x] Definir licença proprietária inicial.
- [x] Criar schemas de projeto, task, handoff, decisão e status.
- [x] Alinhar templates e campos obrigatórios.
- [x] Definir SemVer, atualização, backup, restore e migração.

**Gate:** PASS 20/20 no validador estrutural.

## Fase 2 — Orquestração

- [x] Criar Builder Chief.
- [x] Criar intake progressivo e pergunta obrigatória.
- [x] Classificar finalidade, complexidade, risco e features.
- [x] Criar catálogo de roteamento.
- [x] Criar máquina de estados.
- [x] Criar handoffs autocontidos.
- [x] Limitar retry automático a dois ciclos.
- [x] Governar aprovações humanas.

**Gate:** PASS.

## Fase 3 — Especialistas

- [x] Product Strategist.
- [x] Process Analyst.
- [x] Project Manager.
- [x] Solution Architect.
- [x] UX/UI Designer.
- [x] Data Architect.
- [x] Backend Engineer.
- [x] Frontend Engineer.
- [x] Agent Architect.
- [x] Automation & Integration Engineer.
- [x] QA Engineer.
- [x] Security Reviewer.
- [x] DevOps & Release Engineer.
- [x] Growth & Sales Strategist.
- [x] Documentation & Handoff Specialist.
- [x] Builder Chief.

**Gate:** cada agente possui missão, quando usar/pular, comandos, limites, qualidade e handoffs.

## Fase 4 — Catálogo Task-First

- [x] Produto e mercado.
- [x] Processo interno.
- [x] Planejamento e riscos.
- [x] Arquitetura, UX e dados.
- [x] Backend e frontend.
- [x] Agentes, automações e integrações.
- [x] QA, segurança e privacidade.
- [x] Release, rollback e produção.
- [x] Oferta, pricing, analytics e GTM.
- [x] Documentação, handoff e encerramento.

**Gate:** 75/75 tasks, 75/75 referências agent → task.

## Fase 5 — Workflows

- [x] wf-intake-and-classify.
- [x] wf-internal-tool.
- [x] wf-market-product.
- [x] wf-hybrid-evolution.
- [x] wf-client-delivery.
- [x] wf-agent-and-automation.
- [x] wf-brownfield-improvement.
- [x] wf-bug-and-recovery.
- [x] wf-security-review.
- [x] wf-release.
- [x] wf-growth-iteration.
- [x] wf-project-resume.

**Gate:** 12/12 YAML válido e referências resolvidas.

## Fase 6 — Templates e memória

- [x] Projeto, charter, status, brief e escopo.
- [x] Descoberta de processo e mercado.
- [x] PRD, plano, story, task, risco e decisões.
- [x] Arquitetura, contrato, UX e dados.
- [x] Agente e automação.
- [x] Teste, qualidade e segurança.
- [x] Release e rollback.
- [x] Oferta, GTM, analytics e experimento.
- [x] Guia, runbook, incidente, aceite e closure.

**Gate:** 36 templates listados e validados.

## Fase 7 — Quality Gates

- [x] Intake, handoff e orquestração.
- [x] Evidência interna e de mercado.
- [x] Escopo, plano, story e implementação.
- [x] Arquitetura, UX, dados e integração.
- [x] Agentes e automações.
- [x] QA, segurança, privacidade e pagamentos.
- [x] Release, incidentes e encerramento.
- [x] Growth, ética comercial e aprovação humana.
- [x] Portabilidade híbrida e entrega ao cliente.

**Gate:** 31 gates; PASS, CONCERNS, FAIL e BLOCKED padronizados.

## Fase 8 — Runtime e automações

- [x] Inicializador e gerador de memória.
- [x] Motor de rota e complexidade.
- [x] Leitor e transição de status.
- [x] Gerador de handoff com verificação de segredo.
- [x] Validador e doctor.
- [x] Package com SHA-256.
- [x] Install, update, restore e uninstall recuperáveis.
- [x] Nove automações declarativas.
- [x] Testes automatizados.

**Gate:** 21/21 testes.

## Fase 9 — Adapters

- [x] Adapter Codex.
- [x] Adapter Claude Code.
- [x] Ativação e mapeamento de comandos.
- [x] Estratégia de permissões.
- [x] Fallback sequencial sem multiagente nativo.
- [x] Matriz de compatibilidade.
- [x] Instalação sidecar sem sobrescrita.

**Gate:** instalação e validação automatizadas nos dois modelos de adapter.

## Fase 10 — Experiência do comprador

- [x] README e quickstart.
- [x] Instalação e comandos.
- [x] Manual do Builder Chief.
- [x] Ciclo de vida e roteamento.
- [x] Customização e troubleshooting.
- [x] Custos, limites, dados e segurança.
- [x] FAQ e playbook de entrega.
- [x] Mensagens orientadas à recuperação.
- [ ] Teste com comprador sem apoio síncrono.
- [ ] Confirmar primeiro projeto em até 30 minutos com amostra real.

**Gate:** documentação interna PASS; validação externa pendente.

## Fase 11 — Projetos de referência

- [x] Ferramenta interna de operações.
- [x] Micro-SaaS para o mercado.
- [x] Plataforma híbrida.
- [x] Agente + app + automação.
- [x] Brownfield + incidente + recuperação.
- [x] Testes de coerência dos exemplos.

**Gate:** 5/5 cenários presentes; checks automatizados aprovados.

## Fase 12 — Validação, segurança e distribuição

- [x] Validação estrutural.
- [x] Testes de rotas corretas e incorretas.
- [x] Testes de state machine, retry e aprovação.
- [x] Testes de install, update, restore e uninstall.
- [x] Inspeção de segredo e links.
- [x] YAML, JSON e JavaScript verificados.
- [x] Política de versão e migração.
- [ ] Revisão jurídica final de licença e termos.
- [x] Criar CI do repositório.
- [x] Gerar release candidate com checksums.
- [ ] Criar repositório privado e push.
- [ ] Executar piloto fechado.
- [ ] Corrigir achados do piloto.
- [ ] Marcar versão 1.0.0.

**Gate atual:** release candidate pode ser gerada; distribuição remota depende de autenticação e V1 depende do piloto.
