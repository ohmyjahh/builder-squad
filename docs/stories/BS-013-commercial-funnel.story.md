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

- [x] Escada de produtos, papéis, preços e transições definidos.
- [x] Promessa, mecanismo único, message house, objeções e provas necessárias documentados.
- [x] VSL principal de tráfego frio escrita.
- [x] VSL de upsell do Builder Squad escrita.
- [x] Roteiro da sessão programada e pitch da comunidade escritos.
- [x] Página principal, página de upsell, inscrição e página da comunidade especificadas.
- [x] Checkout com oferta, aceite jurídico, consentimento e eventos especificado.
- [x] Onboarding self-service dos produtos especificado.
- [x] Máquina de estados, taxonomia de eventos, segmentos, suppressions e exits definidos.
- [x] Abandono do checkout de entrada coberto por e-mail e WhatsApp.
- [x] Aceite, recusa e abandono do upsell cobertos.
- [x] Abandono de inscrição e de entrada no grupo cobertos.
- [x] Convite, aquecimento, lembretes e comparecimento ao workshop cobertos.
- [x] No-show e replay cobertos sem falsa urgência.
- [x] Carrinho da comunidade coberto do anúncio ao encerramento real.
- [x] Calendário semanal relativo e regra de virada da edição definidos.
- [x] Mensagens têm opt-out, consentimento, frequência e supressão explícitos.
- [x] Evento gravado, perguntas anteriores e prova social são apresentados com transparência.
- [x] Métricas, metas de piloto, testes A/B e dashboards definidos.
- [x] Playbook operacional, RACI, QA e contingências definidos.
- [x] Validador e testes impedem lacunas éticas e estruturais críticas.

## Limites de conclusão

- A automação será vendor-neutral até checkout, CRM, provedor de e-mail, WhatsApp BSP e plataforma do evento serem escolhidos.
- Benchmarks são hipóteses de piloto, não resultados históricos.
- Depoimentos, números, datas, vagas e bônus só entram em produção com evidência verificável.
- A versão 1.0.0 continua dependente de piloto real, revisão jurídica e adequação fiscal.

## Definition of Done

- [x] Todos os critérios executáveis internamente concluídos.
- [x] Conteúdo completo pronto para copiar e implementar.
- [x] Quality gate de ética comercial aprovado.
- [ ] Validação, testes, package e checksums aprovados.
- [x] File List atualizada.
- [ ] Commit convencional, tag, CI e release privada aprovados.

## File List

- `docs/commercial/*`
- `docs/legal/THIRD-PARTY-NOTICES.md`
- `docs/funnel/*`
- `docs/copy/*`
- `docs/operations/*`
- `docs/release/*`
- `docs/reports/*`
- `docs/roadmap/MASTER-PLAN.md`
- `docs/stories/BS-013-commercial-funnel.story.md`
- `scripts/install.mjs`
- `scripts/package.mjs`
- `scripts/validate.mjs`
- `tests/*`
- `README.md`
- `CHANGELOG.md`
- `VERSION`
- `package.json`
- `package-lock.json`
- `squad.yaml`
