# Quality Gate — Evidência de Growth

**ID:** growth-evidence  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `experiment_record`
- `analytics_validation`
- `metric_snapshot`

## Checklist

- [ ] Hipótese causal e segmento estão definidos.
- [ ] Métrica principal e guardrails são válidos.
- [ ] Eventos, identidade e denominadores foram verificados.
- [ ] Janela e tamanho da amostra são adequados.
- [ ] Custo e teto de perda estão registrados.
- [ ] Conclusão separa sinal, ruído e confundidores.
- [ ] Próxima decisão deriva dos dados.

## Vetos

- [ ] Não ocorre: Escalar com medição inválida.
- [ ] Não ocorre: Otimizar métrica de vaidade isolada.
- [ ] Não ocorre: Continuar após guardrail ou teto de perda.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

