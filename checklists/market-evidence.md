# Quality Gate — Evidência de Mercado

**ID:** market-evidence  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `discovery_evidence`
- `ICP`
- `problem_verdict`

## Checklist

- [ ] Segmento e contexto são específicos.
- [ ] Problema é observado em comportamento ou consequência.
- [ ] Alternativa atual e custo estão documentados.
- [ ] Decisor, usuário e pagador foram distinguidos.
- [ ] Evidência contrária foi procurada.
- [ ] Força e limitações da amostra estão registradas.
- [ ] Próxima decisão é refutável.

## Vetos

- [ ] Não ocorre: Entrevista hipotética tratada como compra.
- [ ] Não ocorre: Mercado total usado como prova do problema.
- [ ] Não ocorre: Construção autorizada sem evidência ou aceite de risco.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

