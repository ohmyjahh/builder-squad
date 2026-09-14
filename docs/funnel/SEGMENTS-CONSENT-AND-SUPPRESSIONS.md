# Segmentos, Consentimento e Supressões

## Princípio

Contrato, consentimento e marketing são registros diferentes. O comprador recebe mensagens necessárias à compra e ao acesso; mensagens promocionais dependem da base legal documentada e da política do canal. WhatsApp promocional exige opt-in explícito para a SOW HOUSE.

## Campos canônicos do contato

| Campo | Tipo | Regra |
|---|---|---|
| `contact_id` | UUID interno | nunca usar e-mail como chave |
| `email_status` | valid/soft_bounce/hard_bounce/suppressed | hard bounce é terminal |
| `email_marketing_basis` | consent/legitimate_interest/none | decisão documentada |
| `email_opt_out_at` | timestamp/null | saída imediata de marketing |
| `whatsapp_e164` | string/null | criptografado no sistema operacional |
| `whatsapp_opt_in` | boolean | nunca inferir da compra |
| `whatsapp_consent_version` | string/null | guardar texto e ponto de coleta |
| `whatsapp_opt_out_at` | timestamp/null | “SAIR”, bloqueio ou pedido equivalente |
| `products_owned` | array | define exits e conteúdo de ativação |
| `refund_status` | enum | suprime promoção durante análise |
| `edition_id` | string/null | uma edição ativa por contato |
| `funnel_state` | enum | conforme state machine |
| `last_marketing_at` | timestamp/null | frequência global |
| `locale` | string | `pt-BR` no piloto |
| `timezone` | string | default `America/Fortaleza` |

## Segmentos operacionais

### S01 — Lead sem checkout

Visitou a VSL, mas não iniciou checkout. Só recebe retargeting baseado em consentimento/cookies e e-mail se tiver se cadastrado voluntariamente.

### S02 — Checkout de entrada abandonado

Iniciou checkout, não comprou e não está suprimido. Exit imediato ao receber `entry_purchase_approved`.

### S03 — Comprador do curso sem Squad

Comprou Builder IA, não comprou Builder Squad e não pediu reembolso. Recebe ativação e, por até 72 horas, follow-up limitado do upsell.

### S04 — Comprador do Squad não ativado

Comprou o Squad, mas ainda não baixou, não passou no doctor ou não criou o primeiro brief. Recebe onboarding self-service, não oferta repetida.

### S05 — Convidado não inscrito

Tem edição elegível, mas não completou a inscrição. Recebe apenas mensagens compatíveis com o consentimento e sai no fechamento da inscrição.

### S06 — Inscrito fora do grupo

Inscrito, opt-in WhatsApp válido, mas não clicou/entrou no grupo. Uma tentativa por canal; depois segue por e-mail.

### S07 — Inscrito aquecendo

Registrado para uma edição aberta. Recebe agenda e conteúdo daquela edição; não entra simultaneamente em convite para outra edição.

### S08 — Compareceu

Assistiu pelo menos 20 minutos ou atingiu marco equivalente. Recebe resumo, oferta e carrinho real.

### S09 — No-show

Não entrou ou ficou abaixo do marco. Recebe replay e uma nova oportunidade de consumir o conteúdo; não recebe copy que diga “você viu”.

### S10 — Checkout da Comunidade abandonado

Iniciou pagamento, não concluiu e o carrinho ainda está aberto. Prioridade sobre mensagens genéricas de carrinho.

### S11 — Membro da Comunidade

Sai de todas as sequências de venda da Comunidade e entra no onboarding transacional.

## Hierarquia de prioridade

1. Segurança, fraude e confirmação transacional.
2. Acesso e onboarding do produto comprado.
3. Recuperação de checkout iniciada pelo próprio contato.
4. Lembrete de evento no qual se inscreveu.
5. Oferta relacionada.
6. Conteúdo geral.

Uma mensagem de prioridade maior suprime mensagens menores no mesmo período de frequência.

## Opt-in de WhatsApp

### Texto recomendado no checkout

“Quero receber pelo WhatsApp da SOW HOUSE lembretes da próxima sessão, atualizações dos produtos que adquiri e ofertas relacionadas. Posso sair a qualquer momento respondendo SAIR.”

- checkbox desmarcado por padrão;
- link para privacidade;
- registrar data, IP ou evidência equivalente, origem, texto e versão;
- separar de “Li e aceito os termos”, pois o contrato não depende do marketing;
- se o escopo mudar, coletar novo opt-in.

## Opt-out

- e-mail: link de descadastro em uma etapa;
- WhatsApp: reconhecer `SAIR`, `PARAR`, `CANCELAR`, `REMOVER`, “não quero receber” e equivalentes;
- confirmação de saída não contém oferta;
- sincronização de supressão entre provedores em até 15 minutos como SLO interno;
- opt-out de marketing não bloqueia recibos, acesso, segurança ou resposta solicitada.

## Supressões obrigatórias

- `global_marketing_opt_out == true`;
- `channel_opt_out == true`;
- `email_status == hard_bounce`;
- bloqueio ou denúncia no WhatsApp;
- chargeback, fraude ou reembolso em análise;
- produto-alvo já comprado;
- edição encerrada;
- contato sem `edition_id` consistente;
- menor de idade identificado no fluxo adulto;
- base legal ausente;
- mensagem ultrapassaria frequência máxima;
- template do WhatsApp não aprovado quando exigido pelo provedor.

## Conflitos

- Se o contato comprar enquanto uma mensagem está em fila, o consumidor de eventos deve verificar o estado novamente antes de enviar.
- Se houver duas compras com e-mails diferentes, a unificação exige confirmação; não mesclar automaticamente por nome.
- Se o telefone mudar de dono ou apresentar conflito, suspender WhatsApp até nova confirmação.
- Se a pessoa estiver em duas edições por erro, manter a mais próxima ainda aberta e cancelar as demais.

## Auditoria mínima

Guardar `message_id`, template, versão, canal, finalidade, base legal, consentimento, edição, horário agendado, horário enviado, resultado, provedor e motivo de supressão. Não guardar corpo livre de conversa em analytics.

## Referências normativas

- LGPD e direitos do titular: informação, acesso, oposição e revogação facilitada.
- Guia da ANPD sobre legítimo interesse: finalidade, necessidade, balanceamento e salvaguardas.
- Política de Mensagens do WhatsApp Business: número fornecido, opt-in claro, identificação da empresa e respeito ao opt-out.

Este documento é controle operacional e não substitui definição de base legal por profissional habilitado.
