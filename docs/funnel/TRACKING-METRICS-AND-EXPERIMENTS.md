# Tracking, Métricas e Experimentos

## North star do piloto

**Compradores ativados que concluem um primeiro incremento útil.** Receita isolada não confirma valor; o funil precisa medir aquisição, ativação e continuidade.

## Funil de métricas

| Etapa | Métrica | Fórmula | Hipótese inicial |
|---|---|---|---:|
| anúncio → VSL | taxa de visita qualificada | sessões válidas / cliques | medir baseline |
| VSL → checkout | intenção de compra | checkouts / sessões com 25% | 5%–12% |
| checkout → curso | conversão de checkout | compras / checkouts | 25%–45% |
| curso → Squad | take rate do upsell | compradores Squad / compradores curso | 10%–25% |
| compra → convite | elegibilidade entregue | convites entregues / elegíveis | >95% |
| convite → inscrição | registro | inscritos / convites entregues | 25%–45% |
| inscrição → grupo | adesão ao grupo | entradas / opt-ins com link | 55%–80% |
| inscrição → presença | show-up | presentes / inscritos | 25%–45% |
| presença → checkout Comunidade | intenção | checkouts / presentes | 8%–20% |
| presença → Comunidade | conversão | compras / presentes | 3%–10% |
| Squad → ativação | doctor aprovado em 7 dias | buyers com doctor / buyers | meta após baseline |
| Comunidade → ativação | onboarding em 7 dias | onboarded / buyers | >70% |

As faixas são hipóteses de planejamento, não benchmarks garantidos. Após quatro edições ou 100 contatos elegíveis, substituir por intervalos observados.

## Métricas de canal

### E-mail

- entrega e hard bounce;
- abertura como sinal auxiliar, pois privacidade pode distorcer;
- clique único;
- conversão atribuída por evento, não apenas por cookie;
- descadastro e reclamação;
- receita por destinatário elegível.

### WhatsApp

- template aprovado/reprovado;
- entrega, leitura e clique quando disponíveis;
- respostas úteis;
- `SAIR`, bloqueios e denúncias;
- quality rating do número;
- conversão incremental sobre grupo de controle.

### Evento

- registros por fonte;
- entradas únicas;
- minutos assistidos;
- marcos 20%, 50%, pitch e conclusão;
- cliques na oferta;
- perguntas reais enviadas;
- replay iniciado/concluído.

## Qualidade econômica

- CAC do Builder IA;
- AOV imediato com Squad;
- receita por comprador de entrada em D0, D7 e D30;
- taxa de reembolso por produto;
- chargeback;
- custo de mídia, plataforma e atendimento coletivo;
- margem de contribuição por coorte;
- payback por canal.

Não escalar com base apenas em ROAS de plataforma. Reconciliar receita aprovada, reembolsos e custos reais.

## Dashboard mínimo

Filtros: período, campanha, anúncio, página, edição, produto, opt-in, dispositivo e coorte. Exibir volume absoluto ao lado de cada taxa para evitar decisões com amostra pequena.

## Experimentos priorizados

### E01 — Hook da VSL principal

- A: “Pare de usar IA como chat.”
- B: “Seu negócio tem gargalos que já poderiam virar sistemas.”
- Métrica: checkout iniciado por sessão com 25% assistido.
- Guardrail: reembolso e reclamação.

### E02 — Demonstração cedo vs. tese cedo

- A: demo até minuto 3.
- B: mecanismo antes da demo.
- Métrica: retenção até CTA e conversão.

### E03 — Upsell por velocidade vs. governança

- A: “pare de começar do zero”.
- B: “não publique sem gates”.
- Métrica: take rate do Squad, com ativação em 7 dias como guardrail.

### E04 — Convite T+15 vs. T+45

- A: WhatsApp consentido em 15 minutos.
- B: em 45 minutos.
- Métrica: inscrição, opt-out e bloqueio.

### E05 — Assunto do aquecimento

- A: benefício concreto.
- B: pergunta/curiosidade.
- Métrica: clique na sala, não abertura isolada.

### E06 — CTA da Comunidade

- A: “Entrar por 12 meses”.
- B: “Construir com a próxima coorte”.
- Métrica: checkout e compra.

## Regras de teste

- uma hipótese principal por teste;
- distribuição aleatória persistente por contato;
- não trocar variante durante a jornada;
- pré-definir métrica primária, guardrails e prazo;
- evitar conclusão com menos de 100 conversões por variante; se o volume for menor, tratar como direção, não certeza;
- interromper variante por dano claro: reclamação, bloqueio, erro jurídico ou conversão enganosa;
- registrar decisão em `experiment-record`.

## Cadência de análise

- diária durante evento e carrinho: integridade, entrega e incidentes;
- semanal: conversões por etapa e edição;
- mensal: CAC, AOV, reembolso, margem e ativação;
- trimestral: retenção da Comunidade, projetos publicados e roadmap.
