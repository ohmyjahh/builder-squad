# E-mails — Carrinho e Onboarding da Comunidade

## Arco

Resumo → decisão → objeção → fechamento real → onboarding. A urgência pertence à edição e ao início coletivo, não a uma falsa alegação de oportunidade única.

## Visão geral

| ID | Timing | CTA | Condição |
|---|---|---|---|
| `email.community_offer_summary` | +15 min do pitch | ver Comunidade | viu oferta, não comprou |
| `email.community_objection_execution` | quarta 09h | escolher projeto | carrinho aberto |
| `email.community_closing_day` | quinta 09h | entrar na edição | carrinho aberto |
| `email.community_closing_1h` | quinta 23h | concluir compra | não comprou |
| `email.community_checkout_abandonment` | +30 min checkout | retomar pedido | checkout abandonado |
| `email.community_access` | imediato | acessar Comunidade | compra aprovada |
| `email.community_onboarding_nudge` | +1 dia | concluir onboarding | não ativado |
| `email.community_cart_closed` | sexta 09h | continuar construindo | não comprador |

---

## email.community_offer_summary

**Assuntos:**

- `Resumo da Comunidade Builder`
- `O próximo passo depois da rota`
- `12 meses para construir e publicar`

**Preview:** `Entregáveis, limites, preço e encerramento real desta edição.`

**Propósito:** deixar a oferta clara após o pitch.

**Corpo:**

Olá, [primeiro_nome].

Aqui está o resumo da oferta apresentada na Sessão Builder.

**Comunidade Builder — 12 meses**

- dois encontros coletivos de implementação por mês;
- uma clínica coletiva mensal de produto, oferta ou monetização;
- um blueprint ou estudo de projeto novo por mês;
- desafios trimestrais de publicação;
- biblioteca viva e troca entre builders.

**Investimento:** R$997.  
**Renovação automática:** não, neste piloto.  
**Encerramento desta edição:** [cart_close_date], 23h59.  
**Onboarding coletivo:** [onboarding_date].

Não inclui consultoria individual, desenvolvimento feito por nós ou garantia de receita.

**CTA:** `VER A COMUNIDADE BUILDER` → `[community_offer_url]`

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** 15 minutos após o pitch.  
**Skip:** compra aprovada, carrinho fechado ou opt-out.

---

## email.community_objection_execution

**Assuntos:**

- `O problema não é falta de conteúdo`
- `Qual projeto vai ocupar seus próximos 30 dias?`
- `Ferramenta sem cadência vira arquivo`

**Preview:** `A Comunidade existe para atravessar o ciclo de execução.`

**Propósito:** vender continuidade, não mais informação.

**Corpo:**

Olá, [primeiro_nome].

Você provavelmente já tem conteúdo suficiente para começar alguma coisa.

O gargalo costuma aparecer depois: escolher o projeto, reduzir o escopo, reservar cadência, atravessar o bloqueio e publicar uma primeira versão observável.

A Comunidade Builder foi desenhada para esse intervalo entre “eu entendi” e “eu entreguei”.

Os encontros são coletivos. Ninguém constrói por você. O que existe é uma estrutura recorrente para trazer decisões, receber confronto e voltar para o projeto com um próximo incremento.

Se entrar, chegue com uma resposta: **qual problema merece ocupar seus próximos 30 dias?**

**CTA:** `ESCOLHER MEU PROJETO NA COMUNIDADE` → `[community_offer_url]`

As inscrições desta edição encerram [cart_close_date], 23h59.

**Rodapé:** `[Sair do marketing]([unsubscribe_url]).`

**Timing:** quarta 09h.  
**Skip:** compra ou carrinho fechado.

---

## email.community_closing_day

**Assuntos:**

- `As inscrições desta edição fecham hoje`
- `Hoje, 23h59: onboarding começa amanhã`
- `Último dia desta edição da Comunidade`

**Preview:** `O checkout fecha hoje para formar o onboarding coletivo de sexta.`

**Propósito:** comunicar encerramento operacional real.

**Corpo:**

Olá, [primeiro_nome].

As inscrições desta edição da Comunidade Builder encerram hoje, às 23h59.

O prazo existe porque o onboarding coletivo começa amanhã, [onboarding_date]. Após o horário, o checkout desta edição será fechado — sem extensão individual automática.

Você entra por 12 meses e recebe a cadência coletiva, clínicas, blueprints, desafios e biblioteca descritos na página.

O investimento é R$997. O piloto não tem renovação automática.

E vale repetir: isso não garante receita e não substitui execução. Entre se você quer escolher um projeto e trabalhar nele com consistência.

**CTA:** `ENTRAR NESTA EDIÇÃO` → `[community_checkout_url]`

Uma edição futura pode abrir, sem garantia da mesma agenda ou condição.

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** quinta 09h.  
**Skip:** compra, opt-out ou checkout fechado.

---

## email.community_closing_1h

**Assuntos:**

- `1 hora para o fechamento desta edição`
- `O checkout fecha às 23h59`
- `Sua decisão sobre a Comunidade`

**Preview:** `Após o horário, não aceitaremos inscrições nesta edição.`

**Propósito:** último lembrete, apenas com fechamento funcional.

**Corpo:**

Olá, [primeiro_nome].

Falta uma hora para o fechamento desta edição da Comunidade Builder.

Às 23h59, o checkout será desativado e a lista seguirá para o onboarding coletivo de amanhã.

**12 meses · R$997 · sem renovação automática no piloto.**

Se você revisou calendário, entregáveis, limites e decidiu construir dentro desse ambiente, conclua pelo botão.

Se decidiu não entrar, nenhuma ação é necessária. Não enviaremos uma falsa extensão depois do prazo.

**CTA:** `CONCLUIR ANTES DAS 23H59` → `[community_checkout_url]`

**Rodapé:** `[Sair do marketing]([unsubscribe_url]).`

**Timing:** quinta 23h.  
**Cancel automático:** compra ou fechamento.

---

## email.community_checkout_abandonment

**Assuntos:**

- `Seu checkout da Comunidade ficou pendente`
- `O pedido não foi confirmado`
- `Retome antes do fechamento da edição`

**Preview:** `Revise pagamento e termos; sua inscrição ainda não está ativa.`

**Propósito:** recuperar alta intenção e deixar status inequívoco.

**Corpo:**

Olá, [primeiro_nome].

Você iniciou o checkout da Comunidade Builder, mas o pagamento não foi confirmado.

Sua vaga nesta edição ainda não está ativa. Use o link para revisar preço, parcelamento, prazo de 12 meses, termos e dados do pagamento.

O checkout desta edição fecha em [cart_close_date], às 23h59. Se o pagamento for aprovado antes do fechamento, você receberá a confirmação e o onboarding.

**CTA:** `RETOMAR MEU CHECKOUT` → `[community_checkout_resume_url]`

Não envie dados de cartão por e-mail ou WhatsApp. A SOW HOUSE não solicita senha ou código de segurança por mensagem.

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** 30 minutos do checkout.  
**Skip:** pagamento aprovado, análise antifraude ativa, opt-out ou carrinho fechado.

---

## email.community_access

**Assuntos:**

- `Bem-vindo à Comunidade Builder`
- `Sua inscrição está confirmada`
- `Acesso e onboarding da Comunidade`

**Preview:** `Veja seu período de acesso e escolha o primeiro projeto.`

**Propósito:** confirmação transacional e ativação.

**Corpo:**

Olá, [primeiro_nome].

Sua entrada na Comunidade Builder foi confirmada.

**Pedido:** [order_id]  
**Valor:** [order_total]  
**Acesso:** [access_start_date] a [access_end_date]  
**Renovação automática:** não  
**Onboarding coletivo:** [onboarding_date]

Seu primeiro passo é acessar a plataforma e escolher um projeto principal para os próximos 30 dias.

**CTA:** `ACESSAR A COMUNIDADE` → `[community_access_url]`

Leia o calendário, as regras de convivência e os limites das sessões coletivas antes de publicar informações do seu projeto.

Documentos da compra: [purchase_documents_url].

Este e-mail é transacional.

**Timing:** imediato após pagamento aprovado.

---

## email.community_onboarding_nudge

**Assuntos:**

- `Escolha seu projeto principal`
- `Seu onboarding ainda está incompleto`
- `O primeiro incremento da Comunidade`

**Preview:** `Problema, usuário, menor fluxo e evidência de pronto.`

**Propósito:** transformar compra em compromisso de execução.

**Corpo:**

Olá, [primeiro_nome].

Seu acesso está ativo, mas o onboarding ainda não foi concluído.

Preencha quatro campos:

1. problema que você quer resolver;
2. pessoa que vive esse problema;
3. menor fluxo útil;
4. evidência que mostrará que o primeiro incremento funciona.

Você poderá revisar isso nas sessões coletivas. Não precisa chegar com escopo perfeito — precisa chegar com algo pequeno o suficiente para ser testado.

**CTA:** `CONCLUIR MEU ONBOARDING` → `[community_onboarding_url]`

**Timing:** 1 dia após compra.  
**Skip:** onboarding concluído, reembolso ou acesso suspenso.

---

## email.community_cart_closed

**Assuntos:**

- `Esta edição foi encerrada`
- `O checkout da Comunidade fechou`
- `Continue com sua primeira rota`

**Preview:** `Sem extensão automática; use o exercício e siga construindo.`

**Propósito:** cumprir o encerramento e preservar relacionamento.

**Corpo:**

Olá, [primeiro_nome].

As inscrições desta edição da Comunidade Builder foram encerradas e o checkout está fechado.

Não haverá extensão automática ou link individual para esta edição.

Você ainda pode aplicar o exercício da sessão:

**problema → usuário → menor fluxo útil → evidência de pronto.**

Se uma nova edição for aberta e você continuar elegível para comunicações, enviaremos as informações reais daquele momento. Isso não garante mesmo preço, agenda ou data.

**CTA:** `REVISAR MEU EXERCÍCIO` → `[workshop_exercise_url]`

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** sexta 09h.  
**Skip:** comprador da Comunidade ou opt-out.

## Fluxo e branches

```text
viu oferta → resumo → objeção → dia final → 1h → carrinho fechado
                    └─ checkout iniciou → abandono prioritário
qualquer ponto ── compra → cancelar venda → acesso → onboarding
```

- abandono de checkout substitui o próximo e-mail genérico durante quatro horas;
- compra cancela todas as mensagens promocionais em fila;
- falha de pagamento recebe fluxo transacional do checkout, sem copy de culpa;
- no-show só entra no carrinho depois de visualizar a oferta no replay;
- reentrada em edição futura exige novo `edition_id`.

## Testes A/B

1. resumo em lista vs. narrativa de cadência;
2. objeção “falta de tempo” vs. “excesso de conteúdo”;
3. CTA “entrar por 12 meses” vs. “construir com a edição”.

## Métricas

- visualização da oferta → checkout;
- checkout → pagamento aprovado;
- conversão por presente e por replay;
- tempo até compra;
- reembolso e chargeback;
- onboarding em 7 dias;
- unsubscribe, spam e receita por destinatário elegível.
