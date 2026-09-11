# Quality Gate — Recuperação de Incidente

**ID:** incident-recovery  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `incident_record`
- `recovery_evidence`
- `production_verdict`

## Checklist

- [ ] Severidade, impacto e commander estão definidos.
- [ ] Evidências foram preservadas.
- [ ] Contenção reduziu impacto sem ampliar risco.
- [ ] Serviço voltou a estado conhecido.
- [ ] Smoke tests e métricas confirmam recuperação.
- [ ] Timeline e causa estão documentadas.
- [ ] Ações preventivas têm owner.

## Vetos

- [ ] Não ocorre: Declarar recuperação sem evidência.
- [ ] Não ocorre: Alterar produção fora do plano e autoridade.
- [ ] Não ocorre: Apagar evidência do incidente.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

