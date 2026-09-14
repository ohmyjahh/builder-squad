# E-mails — Convite, Inscrição, Aquecimento e Replay

## Arco

O contato passa de comprador para participante: convite → compromisso → preparação → presença → aplicação. A comunicação sempre apresenta a sessão como exibição programada e usa data completa na confirmação.

## Visão geral

| ID | Timing | CTA | Segmento |
|---|---|---|---|
| `email.workshop_invite_01` | +45 min da compra | reservar lugar | comprador não inscrito |
| `email.workshop_registration_abandonment_01` | +1h | concluir inscrição | formulário incompleto |
| `email.workshop_registration_abandonment_02` | +24h | reservar edição | ainda incompleto |
| `email.workshop_confirmation` | imediato | entrar no grupo/calendário | inscrito |
| `email.workshop_warmup_01` | D-2, 09h | definir problema | inscrito |
| `email.workshop_warmup_02` | D-1, 09h | preencher exercício | inscrito |
| `email.workshop_today_01` | D0, 16h | acessar sala | inscrito |
| `email.workshop_no_show_replay` | +30 min da classificação | assistir replay | no-show |
| `email.workshop_replay_closing` | 4h antes do fim | assistir replay | replay incompleto |

---

## email.workshop_invite_01

**Assuntos:**

- `Seu convite para esta terça-feira`
- `Pare de usar IA como chat`
- `Uma sessão para organizar seu primeiro projeto`

**Preview:** `Monte a rota inicial de um app, sistema ou automação.`

**Propósito:** converter comprador em inscrito.

**Corpo:**

Olá, [primeiro_nome].

Além do seu acesso ao Builder IA, você pode participar da próxima Sessão Builder.

Na exibição programada de [edition_date], às 19h, eu vou mostrar:

- por que um prompt gigante aumenta retrabalho;
- como separar projeto interno, de mercado e híbrido;
- o ciclo Brief → Rota → Squad → Gates → Entrega;
- como definir o primeiro incremento útil.

O conteúdo central foi previamente gravado para manter a mesma demonstração em todas as edições. A página explica como perguntas atuais serão coletadas.

**CTA:** `RESERVAR MEU LUGAR` → `[workshop_registration_url]`

Ao se inscrever, você escolhe separadamente se quer receber lembretes no WhatsApp.

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** 45 minutos após compra.  
**Skip:** já inscrito, reembolso, edição fechada ou opt-out.

---

## email.workshop_registration_abandonment_01

**Assuntos:**

- `Sua inscrição ficou incompleta`
- `Faltou reservar seu lugar`
- `Quer concluir a inscrição?`

**Preview:** `A sessão desta edição acontece em [edition_date], às 19h.`

**Propósito:** recuperar o formulário sem presumir consentimento.

**Corpo:**

Olá, [primeiro_nome].

Você começou a inscrição para a Sessão Builder de [edition_date], mas não concluiu.

O formulário confirma seu e-mail, sua edição e, de forma opcional, se você quer lembretes pelo WhatsApp. Nenhuma caixa de marketing vem marcada.

Se ainda quer participar da exibição programada, finalize pelo botão abaixo.

**CTA:** `CONCLUIR MINHA INSCRIÇÃO` → `[workshop_registration_resume_url]`

**Rodapé:** `A sessão contém uma oferta ao final. [Cancelar comunicações]([unsubscribe_url]).`

**Timing:** 1 hora.  
**Skip:** inscrição concluída, edição fechada ou supressão.

---

## email.workshop_registration_abandonment_02

**Assuntos:**

- `A rota começa com uma pergunta`
- `Interno, mercado ou híbrido?`
- `Último lembrete desta inscrição`

**Preview:** `A resposta muda as etapas e os especialistas do projeto.`

**Propósito:** reforçar valor e encerrar recuperação.

**Corpo:**

Olá, [primeiro_nome].

Na Sessão Builder, o primeiro exercício não será escrever código.

Será responder: **este projeto é interno, para colocar no mercado ou híbrido?**

Um sistema interno precisa mapear processo, acesso e adoção. Um produto de mercado precisa validar problema, usuário, oferta e aquisição. Misturar os dois caminhos cria complexidade antes da hora.

Se quer montar a rota do seu projeto, conclua sua inscrição para [edition_date], às 19h.

**CTA:** `RESERVAR ESTA EDIÇÃO` → `[workshop_registration_resume_url]`

Este é o último e-mail sobre o formulário incompleto.

**Rodapé:** `[Sair do marketing]([unsubscribe_url]).`

**Timing:** 24 horas.  
**Exit:** inscrito, edição fechada ou envio concluído.

---

## email.workshop_confirmation

**Assuntos:**

- `Inscrição confirmada: [edition_date]`
- `Sua Sessão Builder está reservada`
- `Data, sala e grupo desta edição`

**Preview:** `Salve no calendário e entre no grupo específico desta edição.`

**Propósito:** confirmar e criar compromisso.

**Corpo:**

Olá, [primeiro_nome].

Sua inscrição está confirmada.

**Sessão:** Pare de usar IA como chat  
**Data:** [edition_date]  
**Horário:** 19h — Fortaleza/Brasília  
**Formato:** conteúdo principal previamente gravado, com exibição programada  
**Duração:** aproximadamente 70–80 minutos

**CTA principal:** `ADICIONAR AO CALENDÁRIO` → `[calendar_url]`

Se você autorizou mensagens pelo WhatsApp, esta seção exibirá o grupo específico da edição:

**CTA secundário condicional:** `ENTRAR NO GRUPO DA EDIÇÃO` → `[group_url]`

O grupo receberá preparação e links. Responda `SAIR` no privado ou deixe o grupo quando quiser. Sair não cancela sua inscrição por e-mail.

Este e-mail confirma uma inscrição solicitada.

**Timing:** imediato.  
**Condição:** registro concluído. O bloco do grupo só é renderizado com `whatsapp_opt_in == true`.

---

## email.workshop_warmup_01

**Assuntos:**

- `Qual tarefa não deveria continuar manual?`
- `Prepare este problema para terça`
- `Seu primeiro ativo começa num gargalo`

**Preview:** `Escolha uma repetição observável; não uma ideia gigante.`

**Propósito:** gerar envolvimento antes do evento.

**Corpo:**

Olá, [primeiro_nome].

Para aproveitar a sessão, escolha uma tarefa que hoje depende de copiar, lembrar, cobrar ou conferir manualmente.

Pode ser um pedido perdido, um briefing desorganizado, um relatório repetitivo ou uma etapa de atendimento.

Agora complete:

**Hoje, [pessoa] precisa [tarefa manual] para conseguir [resultado].**

Não desenhe a solução ainda. Na terça, vamos transformar esse problema em uma rota e decidir se ele pede um app, um sistema ou uma automação.

**CTA:** `SALVAR MEU PROBLEMA` → `[workshop_exercise_url]`

**Data:** [edition_date], 19h.

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** D-2 às 09h.  
**Skip:** edição cancelada, opt-out ou inscrição cancelada.

---

## email.workshop_warmup_02

**Assuntos:**

- `Amanhã: não traga uma ideia perfeita`
- `Seu brief de uma frase`
- `O projeto começa antes do código`

**Preview:** `Traga problema, usuário e menor resultado útil.`

**Propósito:** aumentar show-up e preparar exercício.

**Corpo:**

Olá, [primeiro_nome].

Amanhã, às 19h, acontece sua Sessão Builder.

Traga esta frase, mesmo incompleta:

**Quero transformar [problema] em [app/sistema/automação] para [usuário], começando por [menor fluxo útil].**

Durante a sessão, você verá por que o caminho muda quando o projeto é interno, para o mercado ou híbrido — e como dividir trabalho entre especialistas sem perder controle.

O conteúdo principal é previamente gravado. Se houver moderação na edição, o moderador estará identificado; perguntas também poderão ser enviadas pelo formulário da sala.

**CTA:** `VER DETALHES DA MINHA EDIÇÃO` → `[workshop_confirmation_url]`

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** D-1 às 09h.

---

## email.workshop_today_01

**Assuntos:**

- `Hoje, 19h: sua Sessão Builder`
- `Sua sala abre hoje às 19h`
- `Tenha seu problema em mãos`

**Preview:** `O link e a agenda da exibição programada estão aqui.`

**Propósito:** maximizar presença com informação operacional.

**Corpo:**

Olá, [primeiro_nome].

Sua Sessão Builder acontece **hoje, [edition_date], às 19h**.

Tenha em mãos:

- a frase do problema;
- algo para anotar a rota;
- cerca de 80 minutos sem interrupção.

A sala abre alguns minutos antes. O conteúdo central foi previamente gravado e será exibido no horário marcado.

**CTA:** `ACESSAR A SALA` → `[event_room_url]`

Se o link não abrir, use a página de confirmação: [workshop_confirmation_url].

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** D0 às 16h.  
**Cancel:** se horário passou ou edição foi cancelada.

---

## email.workshop_no_show_replay

**Assuntos:**

- `Você não conseguiu entrar — aqui está o replay`
- `Replay da sua Sessão Builder`
- `A rota do projeto ainda está disponível`

**Preview:** `Assista até amanhã, 23h59; o link expira de verdade.`

**Propósito:** recuperar no-show sem fingir presença.

**Corpo:**

Olá, [primeiro_nome].

Não identificamos sua presença mínima na Sessão Builder desta edição.

O replay está disponível até **[replay_close_date], 23h59**. Depois desse horário, o link desta edição será encerrado.

Na aula você verá:

- o fork interno, mercado ou híbrido;
- o ciclo Brief → Rota → Squad → Gates → Entrega;
- a construção de uma rota e do primeiro incremento;
- a apresentação da Comunidade Builder ao final.

**CTA:** `ASSISTIR AO REPLAY` → `[replay_url]`

Se você entrou por poucos minutos, o sistema pode tê-lo classificado como no-show; use o mesmo link para continuar.

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** 30 minutos após classificação.  
**Skip:** presença confirmada, replay concluído ou edição encerrada.

---

## email.workshop_replay_closing

**Assuntos:**

- `O replay encerra hoje às 23h59`
- `Últimas horas do replay desta edição`
- `Feche sua rota antes do link sair`

**Preview:** `O encerramento vale para o replay desta edição, não para sempre.`

**Propósito:** lembrar prazo real sem urgência enganosa.

**Corpo:**

Olá, [primeiro_nome].

O replay da sua edição será encerrado hoje, às 23h59.

Esse prazo vale para o link desta edição. Outras edições podem acontecer no futuro, mas não há garantia da mesma agenda ou condição.

Se você assistir, faça pelo menos o exercício do primeiro incremento. O objetivo não é consumir mais conteúdo; é sair com uma próxima ação verificável.

**CTA:** `ASSISTIR ANTES DO ENCERRAMENTO` → `[replay_url]`

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]).`

**Timing:** 4 horas antes do fechamento.  
**Cancel:** replay concluído, Comunidade comprada, opt-out ou link já fechado.

## Fluxo

```text
comprador elegível → convite
  ├─ inscrição iniciada e incompleta → R1 → R2 → exit
  └─ inscrito → confirmação → D-2 → D-1 → D0
                                  ├─ compareceu → carrinho Comunidade
                                  └─ no-show → replay → fechamento
```

## Suppressions

- uma edição ativa por contato;
- quem já entrou na sala não recebe “você não apareceu”;
- quem comprou a Comunidade sai do replay promocional e do carrinho;
- sem WhatsApp opt-in, todo lembrete privado fica somente no e-mail;
- após horário, lembretes pendentes são cancelados.

## Testes A/B

1. convite por big idea vs. exercício concreto;
2. D-2 com formulário interativo vs. resposta mental;
3. no-show com CTA “assistir replay” vs. “montar minha rota”.

## Métricas

- convite → inscrição;
- inscrição iniciada → concluída;
- adição ao calendário;
- entrada no grupo;
- show-up e minutos assistidos;
- início/conclusão do replay;
- opt-out e reclamações por edição.
