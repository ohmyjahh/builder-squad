# Quality Gate — Dados e Privacidade

**ID:** data-and-privacy  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `data_inventory`
- `privacy_report`
- `retention_policy`

## Checklist

- [ ] Inventário liga dado, origem, finalidade e owner.
- [ ] Coleta mínima foi aplicada.
- [ ] Base e transparência foram analisadas.
- [ ] Retenção, exclusão e exportação são implementáveis.
- [ ] Terceiros e transferências estão mapeados.
- [ ] Incidente e notificação possuem processo.
- [ ] Questão jurídica foi encaminhada quando necessária.

## Vetos

- [ ] Não ocorre: Dado sem finalidade.
- [ ] Não ocorre: Retenção indefinida sem justificativa.
- [ ] Não ocorre: Decisão legal tomada por agente não habilitado.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

