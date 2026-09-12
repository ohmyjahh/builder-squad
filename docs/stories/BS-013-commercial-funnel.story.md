# Story BS-013 — Oferta e Funil Comercial

**Status:** In Progress
**Epic:** Builder Squad V1
**Prioridade:** Crítica
**Dependência:** BS-012
**Versão-alvo:** 0.10.0-rc.1

## História

Como titular do Builder Squad, quero uma arquitetura comercial completa e executável que conecte o curso de entrada, o Builder Squad e a Comunidade Builder, para converter tráfego frio, ativar compradores e conduzi-los a uma sessão programada semanal sem promessas, urgência ou interações falsas.

## Premissas aprovadas

- Público inicial: empreendedores, especialistas e prestadores de serviço.
- Produto de entrada: curso prático de vibe coding por R$297.
- Upsell único: Builder Squad por R$497.
- Oferta de continuidade inicial: Comunidade Builder por R$997 para 12 meses.
- Evento: exibição programada semanal às terças-feiras, 19h, com transparência de que o conteúdo principal foi previamente gravado.
- Aquecimento: grupo de WhatsApp específico da edição, acompanhado por poucos contatos privados consentidos.
- Instalação do Builder Squad: self-service, sem suporte individual de instalação.
- Tom: direto, ambicioso, claro, adulto e orientado a execução; sem hype financeiro ou jargão técnico desnecessário.
- Mecanismo: transformar IA de ferramenta de conversa em sistema de execução por meio do ciclo Brief → Rota → Squad → Gates → Entrega.

## Critérios de aceite

- [ ] Escada de produtos, papéis, preços e transições definidos.
- [ ] Promessa, mecanismo único, message house, objeções e provas necessárias documentados.
- [ ] VSL principal de tráfego frio escrita.
- [ ] VSL de upsell do Builder Squad escrita.
- [ ] Roteiro da sessão programada e pitch da comunidade escritos.
- [ ] Página principal, página de upsell, inscrição e página da comunidade especificadas.
- [ ] Checkout com oferta, aceite jurídico, consentimento e eventos especificado.
- [ ] Onboarding self-service dos produtos especificado.
- [ ] Máquina de estados, taxonomia de eventos, segmentos, suppressions e exits definidos.
- [ ] Abandono do checkout de entrada coberto por e-mail e WhatsApp.
- [ ] Aceite, recusa e abandono do upsell cobertos.
- [ ] Abandono de inscrição e de entrada no grupo cobertos.
- [ ] Convite, aquecimento, lembretes e comparecimento ao workshop cobertos.
- [ ] No-show e replay cobertos sem falsa urgência.
- [ ] Carrinho da comunidade coberto do anúncio ao encerramento real.
- [ ] Calendário semanal relativo e regra de virada da edição definidos.
- [ ] Mensagens têm opt-out, consentimento, frequência e supressão explícitos.
- [ ] Evento gravado, perguntas anteriores e prova social são apresentados com transparência.
- [ ] Métricas, metas de piloto, testes A/B e dashboards definidos.
- [ ] Playbook operacional, RACI, QA e contingências definidos.
- [ ] Validador e testes impedem lacunas éticas e estruturais críticas.

## Limites de conclusão

- A automação será vendor-neutral até checkout, CRM, provedor de e-mail, WhatsApp BSP e plataforma do evento serem escolhidos.
- Benchmarks são hipóteses de piloto, não resultados históricos.
- Depoimentos, números, datas, vagas e bônus só entram em produção com evidência verificável.
- A versão 1.0.0 continua dependente de piloto real, revisão jurídica e adequação fiscal.

## Definition of Done

- [ ] Todos os critérios executáveis internamente concluídos.
- [ ] Conteúdo completo pronto para copiar e implementar.
- [ ] Quality gate de ética comercial aprovado.
- [ ] Validação, testes, package e checksums aprovados.
- [ ] File List atualizada.
- [ ] Commit convencional, tag, CI e release privada aprovados.

## File List

- `docs/commercial/*`
- `docs/funnel/*`
- `docs/copy/*`
- `docs/operations/*`
- `docs/reports/*`
- `docs/roadmap/MASTER-PLAN.md`
- `docs/stories/BS-013-commercial-funnel.story.md`
- `scripts/validate.mjs`
- `tests/*`
- `README.md`
- `CHANGELOG.md`
- `VERSION`
- `package.json`
- `package-lock.json`
- `squad.yaml`
