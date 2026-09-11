# Quality Gate — Entrega para Cliente

**ID:** client-delivery  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `scope_baseline`
- `delivery_plan`
- `acceptance_records`

## Checklist

- [ ] Escopo, premissas e exclusões foram aceitos.
- [ ] Aprovador e dependências do cliente estão nomeados.
- [ ] Marcos possuem evidência de aceite.
- [ ] Mudança material segue controle formal.
- [ ] Custos, suporte e garantia estão claros.
- [ ] Comunicação e escalonamento estão definidos.

## Vetos

- [ ] Não ocorre: Build iniciado sem baseline aceita.
- [ ] Não ocorre: Escopo ampliado sem impacto e aprovação.
- [ ] Não ocorre: Resultado prometido sem capacidade de entrega.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

