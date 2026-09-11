# Quality Gate — Prontidão de Escopo

**ID:** scope-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `scope_baseline`
- `acceptance_criteria`
- `approval_record`

## Checklist

- [ ] Resultado e usuário estão explícitos.
- [ ] Capacidades incluídas têm critério de aceite.
- [ ] Fora de escopo protege o foco.
- [ ] Premissas e dependências estão registradas.
- [ ] Métricas de sucesso têm evento e limiar.
- [ ] Custo, prazo e risco são compatíveis.
- [ ] Aprovador aceitou a versão.

## Vetos

- [ ] Não ocorre: Escopo universal ou não testável.
- [ ] Não ocorre: Mudança material escondida como detalhe.
- [ ] Não ocorre: Aprovação sem versão.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

