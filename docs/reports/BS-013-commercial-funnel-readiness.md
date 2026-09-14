# Relatório BS-013 — Prontidão do Funil Comercial

**Data:** 2026-09-14  
**Versão-alvo:** 0.10.0-rc.2
**Veredito de arquitetura e copy:** PREPARED  
**Veredito de implantação:** BLOCKED_BY_STACK_AND_ASSETS  
**Veredito de produção:** NO-GO até QA externo

## Escada decidida

- Builder IA — R$297 — capacidade;
- Builder Squad — R$497 — aceleração por sistema multiagente;
- Comunidade Builder — R$997 por 12 meses — cadência e evolução;
- um plano por degrau;
- sem renovação automática da Comunidade no piloto;
- instalação do Squad self-service, sem suporte individual.

## Entregas

- arquitetura de oferta, posicionamento e message house;
- mecanismo Builder OS: Brief → Rota → Squad → Gates → Entrega;
- registro de claims, provas, objeções e urgência permitida;
- campaign brief de quatro semanas;
- VSL de aquisição, VSL de upsell e sessão/pitch;
- copy de quatro páginas e três checkouts;
- 28 templates de e-mail;
- 10 templates privados de WhatsApp;
- 13 mensagens de grupo;
- 11 flows com 36 envios referenciados;
- 17 estados, 23 transições e 37 eventos;
- calendário semanal, segmentação, consentimento e suppressions;
- cue sheet sem bot-persona;
- onboarding self-service;
- playbook, QA, incidentes e recuperação;
- especificação técnica vendor-neutral.

## Decisões éticas

- sessão comunicada como exibição programada de conteúdo previamente gravado;
- nenhuma automação finge participante, presença, cidade, pergunta, compra ou depoimento;
- perguntas anteriores só aparecem rotuladas e autorizadas/anonimizadas;
- urgência pertence a horários e fechamentos reais da edição;
- preço futuro não é usado como âncora sem decisão global datada;
- WhatsApp promocional exige opt-in explícito e opt-out simples;
- nenhum claim de renda ou autonomia irrestrita.

## Qualidade interna

- todos os 36 envios resolvem para templates existentes;
- catálogo possui 38 IDs únicos;
- estratégia e copy internas ficam fora do pacote do comprador;
- testes de instalação confirmam essa separação;
- validações automatizadas comerciais adicionadas: 32/32 aprovadas;
- suíte automatizada: 28/28 testes aprovados;
- 44 arquivos YAML e 10 arquivos JSON parseados com sucesso;
- JavaScript com sintaxe válida, diff sem whitespace inválido e zero dependências externas instaladas;
- instalação sidecar validada sem depender dos ativos internos deliberadamente excluídos;
- pacote do comprador será reemitido e verificado para a versão-alvo antes da publicação.

## Bloqueios reais

1. nome final, módulos e prazo de acesso do curso;
2. calendário de 90 dias da Comunidade;
3. checkout, CRM/ESP, BSP WhatsApp e plataforma do evento;
4. domínios, URLs e remetentes;
5. orçamento e limite de CAC;
6. gravação/edição dos vídeos e demonstrações;
7. aprovação de templates pelo provedor;
8. revisão jurídica, fiscal e de privacidade;
9. QA com pagamentos e contatos reais controlados.

## WhatsApp Groups

A capacidade de criar e operar grupos por API oficial não foi presumida. Até validação com o fornecedor, criação semanal é manual com checklist; automação não oficial do WhatsApp Web está vetada.

## Próxima decisão

Escolher a stack e preencher os ativos reais. Depois, implementar na ordem checkout → consentimento → e-mail → WhatsApp → edição → Comunidade → analytics, executar staging e obter `GO`.

## Conclusão

O ciclo está pronto no nível que pode ser concluído sem inventar módulos, agenda, fornecedores ou evidências. Não deve ser chamado de funil em produção até que os bloqueios sejam resolvidos e o checklist end-to-end passe.
