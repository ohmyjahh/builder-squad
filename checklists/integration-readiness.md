# Quality Gate — Prontidão de Integração

**ID:** integration-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `integration_map`
- `automation_spec`
- `resilience_evidence`

## Checklist

- [ ] Origem, destino, owner e contratos estão definidos.
- [ ] Autenticação e dados sensíveis estão tratados.
- [ ] Timeout, rate limit e retry têm política.
- [ ] Idempotência e deduplicação são verificáveis.
- [ ] Falhas têm alerta, dead-letter ou fallback.
- [ ] Replay e intervenção manual foram testados.
- [ ] Custos e limites externos estão conhecidos.

## Vetos

- [ ] Não ocorre: Retry infinito.
- [ ] Não ocorre: Falha silenciosa em evento crítico.
- [ ] Não ocorre: Segredo em payload, código ou log.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

