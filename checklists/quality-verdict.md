# Quality Gate — Veredito de Qualidade

**ID:** quality-verdict  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `quality_report`
- `evidence_index`
- `defect_register`

## Checklist

- [ ] Versão e ambiente revisados estão fixados.
- [ ] Cada critério obrigatório aponta para evidência.
- [ ] Caminhos negativos e regressão foram avaliados.
- [ ] Defeitos têm severidade, reprodução e owner.
- [ ] Testes não executados estão visíveis.
- [ ] Risco residual tem aprovador quando necessário.
- [ ] Existe exatamente um veredito e próxima transição.

## Vetos

- [ ] Não ocorre: PASS sem evidência.
- [ ] Não ocorre: Defeito crítico convertido em backlog comum.
- [ ] Não ocorre: Revisor alterou silenciosamente o objeto revisado.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

