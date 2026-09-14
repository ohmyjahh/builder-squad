# Playbook Operacional do Funil

## Objetivo

Operar cada edição como uma unidade auditável, com mensagens idempotentes, prazos reais, consentimento verificável e capacidade de interromper vendas quando a experiência estiver incorreta.

## Papéis

| Papel | Responsabilidade | Não pode acumular sem revisão |
|---|---|---|
| Offer Owner | aprova promessa, preço, agenda e oferta | aprovação técnica isolada |
| Funnel Operator | cria edição, links, filas e encerramentos | inventar claim ou extensão |
| Lifecycle Owner | e-mail, WhatsApp, suppressions | alterar termos |
| Event Operator | vídeo, player, cues e replay | simular interação |
| Checkout Owner | pedidos, webhooks, reembolso | editar consentimento sem versão |
| Data/Analytics | eventos, dashboard e reconciliação | usar PII em analytics |
| QA/Security | go/no-go, testes e incidentes | aprovar o próprio achado crítico |
| Community Owner | agenda, onboarding e entrega | prometer atendimento individual implícito |
| Finance/Legal | preço, fiscal, termos e base legal | claims de produto sem owner |

Em operação pequena, uma pessoa pode exercer mais de um papel, mas aprovação de go-live e revisão crítica precisam de uma segunda checagem identificada.

## Fonte da verdade

- produto/preço: catálogo do checkout;
- edição: tabela `editions`;
- consentimento: ledger imutável de versões;
- compra/reembolso: checkout;
- mensagens: catálogo versionado;
- presença: plataforma do evento;
- entrega: plataforma do produto;
- relatório: warehouse ou base reconciliada.

Planilha manual não pode sobrescrever compra, opt-out ou fechamento.

## SOP — Criar edição

1. gerar `edition_id`;
2. definir `start_at`, corte, replay e fechamento;
3. criar grupo e descrição;
4. gerar URLs com `edition_id`;
5. carregar vídeo e validar duração/hash;
6. vincular cue sheet;
7. duplicar checkout da edição sem mudar oferta;
8. confirmar agenda da Comunidade;
9. executar QA automatizado e manual;
10. obter `GO` do Offer Owner e QA;
11. abrir inscrições.

## SOP — Compra do Builder IA

1. receber webhook assinado;
2. deduplicar por `event_id` e `order_id`;
3. confirmar status aprovado;
4. provisionar acesso;
5. enviar e-mail transacional;
6. mostrar upsell opcional;
7. resolver consentimentos por canal;
8. atribuir edição;
9. enviar convite privado em 15 minutos somente com opt-in;
10. registrar entrega e conversão.

## SOP — Compra do Builder Squad

1. confirmar pedido separado;
2. emitir `license_id` e certificado;
3. liberar pacote e checksum;
4. enviar onboarding self-service;
5. cancelar follow-ups de venda;
6. medir download, doctor e primeiro brief;
7. nunca abrir promessa de instalação assistida.

## SOP — Dia do evento

### 16h

- validar vídeo, player, CDN, áudio, legenda e transcrição;
- testar sala anônima em desktop e celular;
- testar evento de presença;
- confirmar checkout e fechamento;
- revisar chat: contas de equipe com selo, automações com selo sistema;
- confirmar plano de contingência.

### 18h45

- liberar sala;
- confirmar contagem real;
- enviar lembrete apenas se sessão ainda não começou;
- iniciar monitoramento.

### 19h

- começar player pelo relógio do servidor;
- registrar `session_id`;
- acompanhar falhas e perguntas;
- não alterar telemetria ou simular presença.

### Após a sessão

- classificar presença com regra de 20 minutos;
- enviar branches corretas;
- abrir replay e carrinho;
- reconciliar cliques e compras;
- registrar incidente antes de tentar correção manual.

## SOP — Fechamento

1. cinco minutos antes, verificar fila e saúde do checkout;
2. às 23h59, bloquear novos pedidos daquela edição;
3. aceitar apenas pedidos iniciados antes do fechamento se a regra estiver previamente publicada e tecnicamente definida; caso contrário, rejeitar;
4. cancelar mensagens de venda pendentes;
5. emitir evento `community_cart_closed`;
6. congelar relatório da edição;
7. iniciar onboarding dos aprovados;
8. publicar mensagem de encerramento sem extensão.

## Controles diários

- webhooks atrasados ou duplicados;
- discrepância checkout × CRM;
- mensagens para compradores;
- opt-outs não sincronizados;
- links vencidos;
- quality rating do WhatsApp;
- bounces e spam;
- conversões e reembolsos fora da faixa;
- placeholders publicados;
- dados pessoais em logs.

## Seleção de plataforma

### Checkout

Deve oferecer webhook assinado, idempotência, status de pagamento/reembolso, exportação, checkout versionável, aceite registrável e bloqueio real por edição.

### CRM/ESP

Deve suportar eventos, delays absolutos e relativos, branches, frequência global, suppressions, versionamento de templates e logs exportáveis.

### WhatsApp BSP

Deve operar a plataforma oficial, guardar opt-in, expor status/quality, templates aprovados, webhooks de resposta e supressão imediata.

### Evento

Deve suportar vídeo programado, disclosure visível, presença real, progresso, replay com expiração, chat identificável e exportação por `edition_id`.

### Analytics

Deve aceitar IDs pseudônimos, eventos server-side, deduplicação, modelo de consentimento e reconciliação com receita real.

Escolher fornecedor somente após prova de conceito com os eventos canônicos. Evitar lock-in: templates e regras ficam neste repositório.

## RACI de aprovação

| Decisão | R | A | C | I |
|---|---|---|---|---|
| promessa e preço | Offer Owner | titular | Legal/Finance | operação |
| template | Lifecycle | Offer Owner | Legal | QA |
| edição | Funnel Operator | Offer Owner | Event/Checkout | Data |
| go-live | QA | Offer Owner | todos os owners | equipe |
| incidente S1 | Security/QA | titular | fornecedor/Legal | afetados |
| extensão de prazo | Funnel Operator | titular | Legal/Checkout | participantes |

Extensão não é resposta padrão a falha. Se necessária por incidente amplo, deve valer para todos os afetados, ter motivo e novo horário públicos e ser registrada.

## Go/no-go

`GO` exige:

- zero placeholder;
- preço e agenda reais;
- consentimentos testados;
- checkout e acesso testados;
- evento e replay testados;
- suppressions testadas;
- backup e owners presentes;
- nenhum achado crítico de ética, segurança ou privacidade.

Qualquer falha crítica produz `NO-GO` e pausa mídia e mensagens de venda.
