# Quality Gate — Adequação da Arquitetura

**ID:** architecture-fitness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `architecture_spec`
- `service_contracts`
- `ADRs`

## Checklist

- [ ] Drivers e restrições estão explícitos.
- [ ] Componentes têm responsabilidade e owner.
- [ ] Contratos cobrem dados, comportamento e falha.
- [ ] Fontes de verdade e trust boundaries estão mapeadas.
- [ ] NFRs têm métrica e método de verificação.
- [ ] Operação, observabilidade e rollback foram desenhados.
- [ ] Tradeoffs, lock-in e custos estão registrados.

## Vetos

- [ ] Não ocorre: Dependência crítica sem comportamento de falha.
- [ ] Não ocorre: Tecnologia escolhida sem requisito associado.
- [ ] Não ocorre: Produção sem observabilidade ou recuperação.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

