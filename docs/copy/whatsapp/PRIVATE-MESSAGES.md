# WhatsApp Privado — Templates Canônicos

## Regras

- enviar somente com opt-in explícito para WhatsApp da SOW HOUSE;
- submeter templates à categoria definida pelo BSP/Meta antes de produção;
- identificar a empresa;
- mensagens de marketing incluem `SAIR`;
- máximo de uma mensagem privada em 24h e quatro em sete dias;
- compra, opt-out, bloqueio e prazo encerrado cancelam mensagens em fila;
- não usar áudio automático no piloto;
- variáveis nunca podem alterar o sentido ou inserir claims não aprovados.

## whatsapp.entry_abandonment_01

**Categoria sugerida:** marketing.  
**Timing:** duas horas após o último e-mail de recuperação, respeitando frequência.

> Oi, {{1}}. Aqui é a SOW HOUSE. Seu pedido do Builder IA não foi confirmado. Se quiser, revise produto, valor e termos aqui: {{2}}. Se decidiu não entrar, ignore. Para não receber ofertas no WhatsApp, responda SAIR.

**Variáveis:** `{{1}} nome`, `{{2}} checkout_resume_url`.  
**Exit:** compra, 48h, SAIR, bloqueio ou opt-out.

## whatsapp.workshop_invite_01

**Categoria sugerida:** marketing.  
**Timing:** 15 minutos após a compra, somente com opt-in.

> {{1}}, aqui é a SOW HOUSE. Você está convidado para a Sessão Builder de {{2}}, às 19h: como sair do chat e organizar IA para criar apps, sistemas e automações. É uma exibição programada de conteúdo previamente gravado. Inscrição: {{3}}. SAIR cancela mensagens de marketing.

**Variáveis:** nome, data completa, URL de inscrição.  
**Regra:** nunca dizer “ao vivo”.

## whatsapp.squad_abandonment_01

**Categoria sugerida:** marketing.  
**Timing:** duas horas após o abandono, se não houve outro WhatsApp em 24h.

> Oi, {{1}}. Seu Builder IA está confirmado; apenas a adição opcional do Builder Squad ficou pendente. O Squad é self-service e não inclui suporte individual de instalação. Revise licença e valor de R$497: {{2}}. SAIR cancela ofertas no WhatsApp.

**Exit:** compra do Squad, janela de 72h, reembolso ou opt-out.

## whatsapp.group_join_01

**Categoria sugerida:** utility, sujeita à classificação do provedor.  
**Timing:** dez minutos após inscrição solicitada.

> Inscrição confirmada, {{1}}. A Sessão Builder acontece {{2}}, às 19h. Entre no grupo específico desta edição para receber preparação e o link: {{3}}. O conteúdo central é previamente gravado. Para parar mensagens no WhatsApp, responda SAIR.

**Exit:** entrada registrada, início da sessão ou opt-out.

## whatsapp.event_reminder_15m

**Categoria sugerida:** utility, sujeita à aprovação.  
**Timing:** 18h45.

> {{1}}, sua Sessão Builder começa em 15 minutos. Sala: {{2}}. Exibição programada; duração aproximada de 70–80 min. Se não quiser mais lembretes no WhatsApp, responda SAIR.

**Regra:** cancelar se o envio atrasar além de 19h.

## whatsapp.workshop_replay_01

**Categoria sugerida:** marketing.  
**Timing:** quarta 07h, após classificação real de no-show.

> Oi, {{1}}. Não identificamos sua presença mínima na Sessão Builder. O replay desta edição fica disponível até hoje, 23h59: {{2}}. Ele inclui uma oferta da Comunidade ao final. SAIR cancela mensagens de marketing.

**Regra:** não enviar para presente ou replay concluído.

## whatsapp.community_closing_4h

**Categoria sugerida:** marketing.  
**Timing:** quinta 20h.

> {{1}}, as inscrições desta edição da Comunidade Builder fecham hoje, 23h59, para o onboarding coletivo de amanhã. São 12 meses por R$997, sem renovação automática no piloto: {{2}}. Não haverá extensão individual automática. SAIR cancela ofertas.

**Regra:** checkout precisa fechar no backend às 23h59.

## whatsapp.community_checkout_abandonment

**Categoria sugerida:** marketing ou utility conforme classificação do BSP.  
**Timing:** 90 minutos após checkout.

> SOW HOUSE: seu pedido da Comunidade Builder não foi confirmado. Não envie dados de cartão por mensagem. Revise o checkout seguro antes de {{1}}: {{2}}. Se o pagamento já foi aprovado, ignore. SAIR cancela marketing no WhatsApp.

**Variáveis:** fechamento absoluto, URL de retomada.

## whatsapp.opt_out_confirmation

**Categoria:** resposta de preferência, sem promoção.

> Pronto. A SOW HOUSE não enviará novas mensagens de marketing para este número. Confirmações necessárias de compras já realizadas ainda poderão ser enviadas. Para rever sua preferência, use {{1}}.

## whatsapp.edition_cancelled

**Categoria:** utility.

> SOW HOUSE: a Sessão Builder de {{1}} foi cancelada. Nenhuma ação é necessária. Veja opções de remarcação ou cancelamento da inscrição em {{2}}. Esta mensagem não contém oferta.

## QA de template

- [ ] nome da empresa presente;
- [ ] opt-in do contato preservado;
- [ ] categoria e idioma aprovados;
- [ ] variáveis têm fallback seguro;
- [ ] URL usa domínio oficial e HTTPS;
- [ ] data resolvida e edição aberta;
- [ ] produto já comprado está suprimido;
- [ ] `SAIR` processado em linguagem natural;
- [ ] nenhuma promessa de renda, fake live ou falsa escassez;
- [ ] frequência dentro do limite.

## Testes

- convite em 15 vs. 45 minutos;
- CTA “Reservar lugar” vs. “Montar minha rota”;
- lembrete 15 minutos vs. 30 minutos;
- grupo de controle sem WhatsApp para medir incremento real.

O vencedor é definido por inscrição/presença/compra com bloqueio e opt-out como guardrails.
