# Quality Gate — Valor Interno

**ID:** internal-value  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `process_map`
- `roi_hypothesis`
- `adoption_plan`

## Checklist

- [ ] Processo as-is possui owner e baseline.
- [ ] Gargalo e causa foram distinguidos.
- [ ] Processo to-be remove desperdício antes de automatizar.
- [ ] Exceções e fallback manual estão mapeados.
- [ ] ROI inclui custo de adoção e manutenção.
- [ ] Cenário conservador está visível.
- [ ] Plano de adoção e medição existe.

## Vetos

- [ ] Não ocorre: Automatizar processo não compreendido.
- [ ] Não ocorre: ROI com premissa oculta.
- [ ] Não ocorre: Implantar sem process owner.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

