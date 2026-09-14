# E-mails — Entrada, Upsell e Ativação do Squad

## Arco

O abandono recupera intenção sem desconto. A confirmação entrega o curso antes de vender. O upsell mostra o gap entre saber construir e organizar a execução. Após a compra do Squad, a narrativa muda de venda para ativação self-service.

## Visão geral

| ID | Gatilho | Timing | CTA | Condição |
|---|---|---|---|---|
| `email.entry_abandonment_01` | checkout Builder IA | +30 min | continuar checkout | não comprou |
| `email.entry_abandonment_02` | mesma jornada | +24h | revisar a oferta | não comprou |
| `email.entry_abandonment_03` | mesma jornada | +48h | decidir se começa | não comprou |
| `email.entry_access` | compra aprovada | imediato | acessar curso | transacional |
| `email.entry_activation_01` | compra aprovada | +1 dia | definir primeiro projeto | não reembolsado |
| `email.squad_abandonment_01` | checkout Squad | +45 min | revisar Squad | não comprou Squad |
| `email.squad_abandonment_02` | checkout Squad | +24h | adicionar Squad | não comprou Squad |
| `email.squad_access` | compra Squad | imediato | iniciar onboarding | transacional |
| `email.squad_download_nudge` | sem download | +1 dia | baixar e verificar | não baixou |
| `email.squad_self_service_diagnostic` | sem doctor | +3 dias | executar doctor | doctor ausente |
| `email.squad_first_brief` | sem brief | +6 dias | criar brief | brief ausente |

---

## email.entry_abandonment_01

**Assuntos:**

- `Seu projeto ficou no checkout`
- `Quer continuar de onde parou?`
- `Faltou concluir o Builder IA`

**Preview:** `Seu pedido ainda não foi confirmado; revise os dados com calma.`

**Propósito:** remover dúvida operacional e recuperar intenção recente.

**Corpo:**

Olá, [primeiro_nome].

Você iniciou sua entrada no Builder IA, mas o pedido não foi confirmado.

Se houve erro no pagamento ou você apenas fechou a página, pode continuar pelo link abaixo. Antes de concluir, revise o produto, o preço total, as condições e os termos.

O Builder IA é o treinamento para aprender a transformar problemas reais em apps, sistemas e automações com IA. Ele não é um serviço feito por nós e não promete renda ou resultado automático.

Se decidiu não entrar, não precisa fazer nada.

**CTA:** `CONTINUAR MEU CHECKOUT` → `[entry_checkout_resume_url]`

**Rodapé:** `Não quer receber mensagens de oferta? [Cancelar comunicações]([unsubscribe_url]).`

**Timing:** 30 minutos.  
**Skip:** compra, opt-out, hard bounce, fraude ou reembolso.

---

## email.entry_abandonment_02

**Assuntos:**

- `O que o Builder IA realmente ensina`
- `Não é sobre um prompt mágico`
- `Antes de decidir, veja isto`

**Preview:** `A proposta é construir uma capacidade — e ela exige prática.`

**Propósito:** qualificar o comprador e tratar expectativa errada.

**Corpo:**

Olá, [primeiro_nome].

Talvez sua dúvida seja simples: “eu consigo começar mesmo sem formação em programação?”.

Sim, você pode começar. Mas vale ser direto: a IA não elimina a necessidade de aprender conceitos, testar e revisar o que foi criado.

O Builder IA organiza esse começo. Você aprende a escolher um problema observável, definir o menor resultado útil, construir em incrementos e verificar se o projeto funciona.

Não é uma promessa de “qualquer app em minutos”. É um caminho para deixar de usar IA apenas como chat e começar a construir com ela.

Se isso corresponde ao que você procura, revise a apresentação e o checkout.

**CTA:** `REVISAR O BUILDER IA` → `[entry_offer_url]`

**Rodapé:** `Para sair dos e-mails promocionais, [clique aqui]([unsubscribe_url]).`

**Timing:** 24 horas após o início.  
**Skip:** compra ou supressão.

---

## email.entry_abandonment_03

**Assuntos:**

- `Construir ou continuar só perguntando?`
- `Uma decisão sobre seu primeiro projeto`
- `Último e-mail sobre este checkout`

**Preview:** `Encerramos aqui a recuperação deste pedido não concluído.`

**Propósito:** fechar a sequência sem inventar prazo de oferta.

**Corpo:**

Olá, [primeiro_nome].

Este é o último e-mail sobre o checkout que você iniciou.

A decisão não é entre “saber tudo” e “não saber nada”. É entre continuar usando IA apenas para respostas isoladas ou praticar a construção de um projeto real.

Se quiser entrar no Builder IA por R$297, o link está abaixo. O checkout mostrará as condições vigentes no momento da compra.

Se não for a hora, tudo certo. Não criaremos uma falsa contagem regressiva e não enviaremos novos lembretes deste checkout.

**CTA:** `VER CONDIÇÕES ATUAIS` → `[entry_checkout_resume_url]`

**Rodapé:** `[Cancelar comunicações de marketing]([unsubscribe_url]).`

**Timing:** 48 horas após o início.  
**Exit:** sequência encerrada após o envio, compra ou opt-out.

---

## email.entry_access

**Assuntos:**

- `Seu acesso ao Builder IA`
- `Compra confirmada: comece aqui`
- `Bem-vindo ao Builder IA`

**Preview:** `Acesso, recibo e primeiro passo do seu projeto.`

**Propósito:** confirmar a transação e levar à primeira ação.

**Corpo:**

Olá, [primeiro_nome].

Sua compra do Builder IA foi confirmada.

**Produto:** Builder IA  
**Pedido:** [order_id]  
**Valor:** [order_total]  
**E-mail de acesso:** [buyer_email]

Use o botão abaixo para entrar. Se ainda não houver senha, siga a criação de acesso exibida na página.

Comece escolhendo um problema pequeno que você encontra no seu negócio, trabalho ou rotina. Não comece pelo app completo; comece pelo menor fluxo que provaria valor.

**CTA:** `ACESSAR O BUILDER IA` → `[entry_access_url]`

Termos, recibo e política de reembolso: [purchase_documents_url].

Este e-mail é transacional e foi enviado por causa da sua compra.

**Timing:** imediato.  
**Condição:** pagamento aprovado; não depende de marketing opt-in.

---

## email.entry_activation_01

**Assuntos:**

- `Qual problema você vai transformar?`
- `Seu primeiro passo como builder`
- `Não comece pelo app inteiro`

**Preview:** `Defina hoje o menor fluxo útil do seu primeiro projeto.`

**Propósito:** ativar o aluno antes de consumir conteúdo passivamente.

**Corpo:**

Olá, [primeiro_nome].

Antes de abrir dez aulas, faça este exercício:

**Quero transformar [problema] em [app, sistema ou automação] para [usuário], começando por [menor fluxo útil].**

Exemplo: “Quero transformar pedidos perdidos no WhatsApp em um sistema simples para minha equipe, começando por pedido, responsável, prazo e status.”

Essa frase não precisa estar perfeita. Ela precisa ser específica o suficiente para você testar o primeiro incremento.

Salve sua frase e leve-a para a primeira aula prática.

**CTA:** `DEFINIR MEU PRIMEIRO PROJETO` → `[entry_first_project_url]`

**Rodapé:** `[Cancelar e-mails promocionais]([unsubscribe_url]). Mensagens de acesso continuam sendo enviadas quando necessárias.`

**Timing:** 1 dia após compra.  
**Skip:** reembolso ou exercício já concluído.

---

## email.squad_abandonment_01

**Assuntos:**

- `O Builder Squad ficou pendente`
- `Você quer construir com uma esteira?`
- `Seu curso está seguro — o Squad é opcional`

**Preview:** `Revise o acelerador de execução sem afetar sua compra anterior.`

**Propósito:** recuperar checkout sem gerar medo sobre o produto principal.

**Corpo:**

Olá, [primeiro_nome].

Seu acesso ao Builder IA está confirmado. O que ficou pendente foi apenas a adição opcional do Builder Squad.

O Squad não é outro curso. É um sistema operacional multiagente com 16 agentes, 75 tasks, 12 workflows, 36 templates e 31 gates para organizar projetos.

Ele começa perguntando se a demanda é interna, para o mercado ou híbrida — e muda a rota a partir dessa resposta.

Se o checkout foi interrompido, você pode revisar a licença, os limites e o valor de R$497 pelo link abaixo.

**CTA:** `REVISAR O BUILDER SQUAD` → `[squad_checkout_resume_url]`

**Nota:** instalação self-service, sem suporte individual; contas e créditos de terceiros não incluídos.

**Rodapé:** `[Cancelar mensagens promocionais]([unsubscribe_url]).`

**Timing:** 45 minutos.  
**Skip:** Squad comprado, entrada reembolsada ou opt-out.

---

## email.squad_abandonment_02

**Assuntos:**

- `Curso e sistema não são a mesma coisa`
- `Aprender a construir vs. organizar a execução`
- `Seu time de agentes, sob sua supervisão`

**Preview:** `Veja exatamente o que o Squad resolve — e o que ele não promete.`

**Propósito:** tratar “já comprei o curso” e “a IA faz tudo”.

**Corpo:**

Olá, [primeiro_nome].

O Builder IA responde “como eu começo a construir?”.

O Builder Squad responde “como eu organizo um projeto quando produto, interface, dados, integrações, testes e publicação começam a se cruzar?”.

Você recebe papéis, tarefas, handoffs e gates prontos. Os agentes ficam disponíveis sob demanda; eles não trabalham sozinhos e decisões críticas continuam sob sua aprovação.

A licença permite usar o Squad em projetos próprios e de clientes, dentro de até cinco usuários e cinco ambientes. A versão adquirida permanece utilizável, com doze meses de atualizações.

Se essa aceleração faz sentido, adicione o Squad. Caso contrário, continue normalmente no curso.

**CTA:** `ADICIONAR O SQUAD — R$497` → `[squad_checkout_resume_url]`

**Rodapé:** `Este é o último e-mail desta recuperação. [Sair do marketing]([unsubscribe_url]).`

**Timing:** 24 horas.  
**Exit:** compra, opt-out ou fim da janela configurada.

---

## email.squad_access

**Assuntos:**

- `Seu Builder Squad está liberado`
- `Licença e pacote do Builder Squad`
- `Comece o onboarding self-service`

**Preview:** `Baixe, verifique e execute o diagnóstico antes do primeiro projeto.`

**Propósito:** entrega transacional e primeiro passo seguro.

**Corpo:**

Olá, [primeiro_nome].

Sua compra do Builder Squad foi confirmada.

**Pedido:** [order_id]  
**Licença:** [license_id]  
**Versão:** [package_version]  
**Valor:** [order_total]

O onboarding é self-service e começa pela verificação do pacote:

1. baixe o arquivo e o checksum;
2. confirme o SHA-256;
3. abra o quickstart;
4. execute o doctor;
5. só depois inicie o primeiro brief.

**CTA:** `INICIAR ONBOARDING SELF-SERVICE` → `[squad_onboarding_url]`

O produto não inclui suporte individual de instalação, configuração do ambiente, infraestrutura ou créditos de IA. Defeitos reproduzíveis podem ser reportados pelo canal indicado na documentação.

Este e-mail é transacional.

**Timing:** imediato.  
**Condição:** pagamento aprovado.

---

## email.squad_download_nudge

**Assuntos:**

- `Você ainda não baixou o Squad`
- `Primeiro passo: pacote + checksum`
- `Seu Builder Squad está esperando`

**Preview:** `Comece pela verificação do arquivo, não pela instalação apressada.`

**Propósito:** recuperar comprador que ainda não iniciou.

**Corpo:**

Olá, [primeiro_nome].

Seu Builder Squad está disponível, mas o download ainda não foi registrado.

Reserve alguns minutos e faça apenas o primeiro bloco do onboarding: baixar o pacote da sua versão e comparar o checksum SHA-256.

Essa verificação confirma que o arquivo recebido é o mesmo artefato publicado para sua licença.

Depois, siga o quickstart no seu ritmo. Não é necessário começar um projeto no mesmo momento.

**CTA:** `BAIXAR E VERIFICAR O PACOTE` → `[squad_download_url]`

**Nota:** ativação self-service; não há suporte individual de instalação.

**Timing:** 1 dia após compra.  
**Skip:** download já confirmado, reembolso ou acesso suspenso.

---

## email.squad_self_service_diagnostic

**Assuntos:**

- `O doctor ainda não passou?`
- `Valide seu ambiente antes do projeto`
- `Seu próximo gate é o diagnóstico`

**Preview:** `Use o resultado do doctor para chegar ao recurso certo.`

**Propósito:** ativar sem prometer atendimento individual.

**Corpo:**

Olá, [primeiro_nome].

Ainda não identificamos um `doctor` aprovado para sua licença.

Execute o diagnóstico documentado. Se aparecer `FAIL`, use o nome do item para abrir a seção correspondente do troubleshooting: runtime, Git, permissões, adapter, manifest ou licença.

Corrija um item por vez e execute novamente. O objetivo não é “forçar a instalação”; é deixar o ambiente observável antes de iniciar.

**CTA:** `ABRIR DIAGNÓSTICO E TROUBLESHOOTING` → `[squad_doctor_guide_url]`

Não há suporte individual de instalação. Se o comportamento do produto divergir da documentação em ambiente compatível, registre um defeito reproduzível conforme as instruções.

**Timing:** 3 dias após compra.  
**Skip:** doctor aprovado, reembolso ou supressão transacional pertinente.

---

## email.squad_first_brief

**Assuntos:**

- `Ative o Squad com esta pergunta`
- `Seu primeiro brief começa aqui`
- `Interno, mercado ou híbrido?`

**Preview:** `Uma pergunta muda toda a rota do seu projeto.`

**Propósito:** levar do ambiente instalado ao valor central.

**Corpo:**

Olá, [primeiro_nome].

Se o ambiente já está válido, ative o Builder Chief com esta mensagem:

> Quero iniciar um projeto. Primeiro, pergunte se ele é interno, para colocar no mercado ou híbrido. Depois conduza o briefing e proponha a rota, sem implementar antes da minha aprovação.

Essa primeira classificação impede que um sistema interno receba etapas comerciais desnecessárias — ou que um produto de mercado comece a ser construído sem validar problema, usuário e oferta.

Seu objetivo agora é aprovar um brief, não terminar o software.

**CTA:** `CRIAR MEU PRIMEIRO BRIEF` → `[squad_first_brief_guide_url]`

**Timing:** 6 dias após compra.  
**Skip:** primeiro brief já criado ou reembolso.

## Lógica e exits

```text
checkout entrada
  ├─ comprou → cancelar abandono → acesso → ativação
  └─ não comprou → E1 → E2 → E3 → exit

checkout Squad
  ├─ comprou → cancelar venda → acesso → download → doctor → brief
  └─ não comprou → U1 → U2 → exit
```

- compra sempre vence mensagens enfileiradas;
- reembolso suspende venda e inicia fluxo transacional próprio;
- e-mails de acesso não dependem de opt-in de marketing;
- ativação não deve conter nova oferta antes da entrega principal;
- reentrada no abandono somente após novo `checkout_id`, com cooldown de 30 dias.

## Testes A/B

1. abandono E1: continuidade operacional vs. benefício do projeto;
2. upsell U2: organização vs. segurança/gates;
3. ativação: exercício no corpo vs. template clicável.

Vencedor por compra ou ativação, não apenas abertura.

## Métricas

- recuperação de checkout;
- receita por checkout iniciado;
- take rate do Squad;
- download, doctor e primeiro brief em 7 dias;
- opt-out, bounce, reclamação e reembolso;
- tempo mediano compra → primeiro brief.
