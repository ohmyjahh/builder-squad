# Especificação Técnica Vendor-Neutral

## Arquitetura

```text
Anúncios/Páginas
      ↓
Event Gateway ← Webhooks assinados de checkout/evento
      ↓
Contact + Consent Ledger + Orders + Editions
      ↓
Lifecycle Orchestrator → Scheduler/Queue → Email Adapter
                                  └──────→ WhatsApp BSP Adapter
                                  └──────→ Event Adapter
      ↓
Warehouse pseudônimo ← Delivery Events + Conversion Events
```

O CRM pode executar parte dessas funções, mas eventos, consentimentos, estados e regras deste repositório continuam sendo a fonte funcional.

## Entidades

### `contacts`

- `contact_id` UUID;
- nome;
- e-mail normalizado + status;
- telefone E.164 criptografado + hash de deduplicação;
- timezone/locale;
- estado do funil;
- created/updated;
- sem dados sensíveis.

### `consent_ledger`

- `consent_id`;
- `contact_id`;
- canal e categoria;
- granted/revoked;
- texto e versão;
- empresa identificada;
- ponto de coleta;
- timestamp e evidência;
- política vinculada.

Registros são anexados, não reescritos. O estado atual é derivado do último evento válido.

### `orders`

- `order_id` externo e interno;
- produto, oferta e versão;
- amount/currency/installments;
- status;
- termos e licença aceitos;
- timestamps de início, aprovação, reembolso e chargeback;
- `edition_id` para Comunidade;
- sem dados completos de cartão.

### `entitlements`

- produto e versão;
- início/fim;
- licença;
- status active/suspended/revoked/expired;
- origem do pedido.

### `editions`

- `edition_id`;
- início, corte, replay_close e cart_close;
- timezone;
- status draft/qa/open/running/replay/cart_open/closed/cancelled;
- room/group/replay/checkout URLs;
- vídeo e cue versions;
- aprovadores.

### `registrations`

- contato + edição únicos;
- source;
- consent version;
- grupo clicado/confirmado;
- presence e watched_minutes;
- replay progress.

### `message_jobs`

- `job_id`, contact, edition, template/version;
- scheduled/locked/sent/cancelled/failed;
- purpose, basis e consent reference;
- experiment variant;
- cancel reason;
- idempotency key.

### `delivery_events`

- provider message ID;
- queued/sent/delivered/read/clicked/bounced/replied/blocked;
- timestamp;
- provider error class;
- sem corpo livre em analytics.

### `event_log`

- payload canônico;
- hash e assinatura verificada;
- source;
- processed_at;
- resultado e erro;
- retenção conforme política.

## APIs internas

- `POST /events` — ingestão canônica autenticada;
- `POST /webhooks/checkout/:provider` — status de pedido;
- `POST /webhooks/email/:provider` — entrega e opt-out;
- `POST /webhooks/whatsapp/:provider` — entrega, resposta, bloqueio;
- `POST /webhooks/event/:provider` — presença e progresso;
- `GET /editions/current` — edição elegível;
- `POST /preferences` — opt-in/opt-out verificável;
- `GET /access/:order_id` — resolução segura de entitlement;
- `POST /privacy/requests` — direitos do titular;
- `GET /health` — dependências críticas sem segredos.

## Ingestão

1. validar TLS, assinatura, timestamp e tamanho;
2. rejeitar replay fora da janela;
3. persistir `event_id` antes de processar;
4. normalizar para taxonomia canônica;
5. aplicar transição válida;
6. cancelar jobs incompatíveis;
7. criar jobs novos;
8. responder rápido e processar efeitos de forma assíncrona;
9. enviar falhas permanentes para dead-letter queue.

## Scheduler

- relógio do servidor em UTC;
- edição armazenada com timezone IANA;
- cada job resolve data absoluta no momento da criação;
- antes do envio, revalida compra, consentimento, supressão, edição e frequência;
- lock transacional impede dois workers;
- atraso que torna a mensagem obsoleta cancela o job;
- reprocessamento usa a mesma idempotency key.

## Renderização

- templates imutáveis por versão;
- allowlist de variáveis;
- fallback obrigatório;
- URL gerada no servidor e vinculada ao contato/edição;
- HTML sanitizado;
- textos relativos derivados de `edition_start_at`;
- data completa presente na confirmação;
- zero placeholder em produção.

## WhatsApp e grupos

Mensagens privadas devem usar a Plataforma WhatsApp Business por um BSP aprovado e respeitar opt-in, templates e qualidade.

A automação oficial de criação/gestão de grupos deve ser validada com o fornecedor escolhido antes de prometer. Enquanto a capacidade não estiver comprovada:

- criar o grupo manualmente com checklist e dupla conferência;
- registrar URL e `edition_id` no sistema;
- não usar automação não oficial do WhatsApp Web;
- não usar ferramenta que viole termos ou simule usuários;
- disparos privados continuam pela plataforma oficial.

`GROUP_AUTOMATION_CAPABILITY` permanece `PENDING_VENDOR_VALIDATION`.

## Segurança

- secrets apenas em secret manager;
- criptografia em trânsito e repouso;
- RBAC e mínimo privilégio;
- ambientes dev/staging/prod separados;
- URLs de acesso assinadas e expiradas;
- logs sem cartão, senha, token, telefone ou e-mail em claro;
- rate limits por IP, contato e endpoint;
- verificação de arquivo e checksum no Squad;
- backup, restore e auditoria testados;
- revisão de fornecedores e transferências internacionais.

## Observabilidade

- fila por canal e idade do job;
- taxa de erro por provider/template;
- atraso de webhook;
- suppressions por motivo;
- duplicatas evitadas;
- divergência orders × entitlements;
- edição com mensagens após fechamento;
- opt-out com sincronização acima de 15 minutos;
- PII detectada em analytics/log.

## Ambientes

### Staging

- checkout em modo teste;
- número e e-mails allowlisted;
- edição curta controlada;
- clock testável;
- nenhum anúncio real.

### Produção

- mudança por versão e aprovação;
- feature flag por flow;
- kill switch global e por canal;
- canário interno antes da coorte;
- rollback de template e regra;
- acesso administrativo com MFA.

## Ordem de implantação

1. contato, consent e orders;
2. checkout do Builder IA e entrega;
3. e-mail de acesso e abandono;
4. checkout/entitlement do Squad;
5. editions e inscrição;
6. WhatsApp privado;
7. evento e presença;
8. checkout da Comunidade;
9. carrinho e onboarding;
10. dashboard e experimentos;
11. automação de grupo somente após validação oficial.

## Critério de aceite técnico

Todos os cenários do checklist executam em staging, webhooks duplicados não duplicam ações, compras cancelam promoções antes do próximo envio e nenhum canal envia sem estado e permissão válidos.
