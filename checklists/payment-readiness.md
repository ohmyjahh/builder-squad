# Quality Gate — Prontidão de Pagamentos

**ID:** payment-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `payment_flow`
- `webhook_tests`
- `reconciliation_plan`

## Checklist

- [ ] Provedor e modelo de cobrança estão definidos.
- [ ] Estados pendente, aprovado, falho, estornado e chargeback existem.
- [ ] Webhooks são autenticados e idempotentes.
- [ ] Valores e moeda são validados no servidor.
- [ ] Dados de cartão não entram no sistema sem necessidade.
- [ ] Reconciliação e suporte financeiro estão definidos.
- [ ] Termos e cancelamento são transparentes.

## Vetos

- [ ] Não ocorre: Confiar em valor enviado pelo cliente.
- [ ] Não ocorre: Processar webhook sem verificação.
- [ ] Não ocorre: Release sem reconciliação ou logs.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

