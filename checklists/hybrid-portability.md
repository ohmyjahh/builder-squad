# Quality Gate — Portabilidade Híbrida

**ID:** hybrid-portability  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `portability_ADR`
- `internal_baseline`
- `market_evidence`

## Checklist

- [ ] Valor interno imediato está mensurável.
- [ ] Intenção de mercado permanece hipótese separada.
- [ ] Fronteira de identidade futura foi decidida.
- [ ] Separação de tenants e dados foi avaliada.
- [ ] Configuração está separada de customização.
- [ ] Licenciamento e billing têm ponto de extensão.
- [ ] Custo de evolução futura foi registrado.

## Vetos

- [ ] Não ocorre: Hardcode interno sem decisão consciente.
- [ ] Não ocorre: Dados de futuros clientes no mesmo escopo implícito.
- [ ] Não ocorre: Pagar complexidade de mercado sem evidência.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

