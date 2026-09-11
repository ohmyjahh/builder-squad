# Quality Gate — Qualidade de Decisão

**ID:** decision-quality  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `decision_record`
- `evidence_index`

## Checklist

- [ ] Problema e prazo da decisão estão claros.
- [ ] Alternativas reais foram consideradas.
- [ ] Evidências e incertezas estão sinalizadas.
- [ ] Tradeoffs e consequências estão explícitos.
- [ ] Owner, data e status existem.
- [ ] Gatilho de revisão foi definido.

## Vetos

- [ ] Não ocorre: Opção escolhida antes de definir critérios.
- [ ] Não ocorre: Hipótese registrada como fato.
- [ ] Não ocorre: Decisão material sem autoridade.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

