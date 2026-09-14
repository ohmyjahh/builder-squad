# Funil Mestre — Builder Ecosystem

## Objetivo

Converter tráfego frio qualificado em comprador do Builder IA, acelerar parte dos compradores com o Builder Squad e conduzir compradores consentidos a uma exibição programada que oferece 12 meses da Comunidade Builder.

## Visão geral

```text
Tráfego frio
    ↓
VSL Builder IA — R$297
    ↓
Checkout iniciado ──abandono──→ recuperação
    ↓ compra
Obrigado + acesso ao curso
    ↓ imediato
VSL Builder Squad — R$497
    ├─ aceita → onboarding Squad
    └─ recusa/abandona → follow-up curto
    ↓ T+15 min, somente com opt-in WhatsApp
Convite para a próxima edição elegível
    ↓
Inscrição → entrada no grupo semanal
    ↓
Aquecimento → exibição programada terça, 19h
    ├─ compareceu → pitch Comunidade
    └─ não compareceu → replay honesto
    ↓
Carrinho da edição até quinta, 23h59
    ├─ compra → onboarding Comunidade
    └─ não compra → nurture, sem falsa extensão
```

## Degrau 1 — Aquisição do Builder IA

### Entrada

- anúncio para empreendedores, especialistas e prestadores de serviço;
- promessa de capacidade prática, não de renda;
- VSL com demonstração de um projeto simples;
- CTA único para o checkout de R$297.

### Conversão

- evento de intenção em 25%, 50%, 75% e 90% da VSL;
- checkout iniciado com identidade da empresa, produto, preço total, parcelamento e termos;
- consentimento de marketing por e-mail e WhatsApp separado do aceite contratual;
- recuperação de abandono sem criar desconto imediato.

### Saída

- `entry_purchase_approved` remove o contato do abandono;
- acesso ao curso é enviado independentemente de aceitar marketing;
- página de upsell é apresentada uma vez após a compra e pode ser revisitada durante 72 horas sem alegar exclusividade falsa.

## Degrau 2 — Upsell Builder Squad

### Timing

- imediatamente após a confirmação do Builder IA;
- VSL de 8 a 12 minutos;
- CTA único de R$497;
- uma oferta, sem planos concorrentes ou downsell neste piloto.

### Argumento

“Você aprendeu a construir. Agora pare de organizar cada projeto sozinho.” O Squad acelera a passagem da ideia à entrega por agentes, tarefas, workflows, templates e gates prontos.

### Branches

- **Aceitou:** registrar licença, entregar pacote, onboarding self-service e suprimir follow-up de venda do Squad.
- **Recusou explicitamente:** continuar entrega do curso; enviar no máximo dois e-mails educativos sobre o gap de processo.
- **Iniciou checkout e abandonou:** duas tentativas por e-mail e, se houver opt-in específico, uma por WhatsApp.
- **Reembolso:** remover acesso conforme termos, preservar registros legais mínimos e suprimir promoções incompatíveis.

## Convite para a edição semanal

### Regra de elegibilidade

Compradores do Builder IA, com ou sem Squad, podem participar. WhatsApp privado exige opt-in explícito; e-mail usa a base legal definida e sempre oferece saída simples.

### Atribuição da edição

- fuso: `America/Fortaleza`;
- corte para a edição do mesmo dia: terça-feira, 15h;
- compra/inscrição até terça 15h: edição daquela terça;
- após terça 15h: edição da terça seguinte;
- cada contato tem um único `edition_id` ativo.

### Linguagem relativa

| Janela | Expressão permitida |
|---|---|
| quarta a domingo | “nesta terça-feira” |
| segunda-feira | “amanhã” |
| terça até 18h30 | “hoje, às 19h” |
| após o corte | “na próxima terça-feira” |

O banco guarda a data ISO mesmo quando a copy usa linguagem relativa. Isso evita mensagens erradas e permite auditoria.

## Inscrição e grupo de WhatsApp

### Formulário mínimo

- nome;
- e-mail;
- WhatsApp;
- aceite da política de privacidade;
- checkbox não pré-marcado: “Quero receber no WhatsApp lembretes desta edição e informações relacionadas da SOW HOUSE.”

### Grupo semanal

- um grupo por `edition_id`;
- link único daquela edição;
- descrição com tema, horário, regra de convivência, aviso de exibição programada e saída;
- somente administradores enviam durante aquecimento;
- participantes podem responder nos momentos definidos, sem automações fingindo pessoas.

## Exibição programada

### Posicionamento

Usar “sessão especial”, “aula com horário marcado” ou “exibição programada”. Na página e na abertura, informar que o conteúdo central foi previamente gravado para manter a mesma experiência em todas as edições.

### Interação

- perguntas atuais podem ser respondidas por participantes reais;
- perguntas de eventos anteriores podem aparecer como “pergunta de uma edição anterior”, com autorização e anonimização quando necessário;
- respostas geográficas antigas podem formar um mosaico identificado como histórico;
- bots não podem usar nomes ou mensagens para simular pessoas presentes.

## Carrinho da Comunidade

### Janela real por edição

- abre no momento do pitch;
- encerra quinta-feira às 23h59 no fuso definido;
- novos membros daquela edição entram no onboarding coletivo de sexta-feira;
- após o encerramento, checkout da edição fica indisponível;
- não existe extensão individual automática.

### Oferta

- Comunidade Builder, 12 meses;
- R$997 no piloto;
- sem renovação automática;
- agenda e entregáveis visíveis;
- direito de arrependimento aplicável;
- nenhuma promessa de faturamento.

## Recuperações

| Momento | Canal | Limite | Exit principal |
|---|---|---:|---|
| checkout Builder IA | e-mail + WhatsApp consentido | 3 e-mails + 1 WA | compra ou opt-out |
| checkout Builder Squad | e-mail + WhatsApp consentido | 2 e-mails + 1 WA | compra ou 72h |
| inscrição incompleta | e-mail | 2 e-mails | inscrição ou edição fechada |
| grupo não acessado | e-mail + WA consentido | 1 por canal | clique ou início da sessão |
| no-show | e-mail + WA consentido | 2 e-mails + 1 WA | replay visto ou expiração |
| checkout Comunidade | e-mail + WA consentido | integrado ao carrinho | compra ou fechamento |

## Saídas globais

- compra do produto-alvo;
- reembolso ou chargeback em análise;
- descadastro de marketing;
- pedido “SAIR” no WhatsApp;
- bloqueio ou denúncia;
- e-mail com hard bounce;
- edição encerrada;
- contato incorporado a uma comunicação legal/transacional que não deve ser misturada com marketing.

## Handoff entre sistemas

1. Checkout emite evento assinado.
2. Orquestrador valida idempotência e atualiza contato/pedido.
3. CRM calcula produto, consentimentos, estágio e `edition_id`.
4. Provedor envia somente templates elegíveis.
5. Plataforma do evento registra inscrição, presença e consumo.
6. Checkout da Comunidade registra abertura, compra, reembolso e encerramento.
7. Analytics consolida a jornada sem guardar conteúdo sensível desnecessário.

## Dependências para implantação

- checkout;
- CRM/automação;
- provedor de e-mail autenticado;
- WhatsApp Business Platform/BSP;
- gerenciador dos grupos;
- plataforma de vídeo/exibição;
- analytics e consent ledger;
- URLs finais e domínios.

Sem essas escolhas, este documento é a especificação canônica vendor-neutral; nenhum fluxo deve ser ativado manualmente com listas soltas.
