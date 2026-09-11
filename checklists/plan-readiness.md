# Quality Gate — Prontidão do Plano

**ID:** plan-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `project_plan`
- `task_graph`
- `risk_register`

## Checklist

- [ ] Resultado e escopo aprovado estão rastreáveis.
- [ ] Marcos possuem evidência, owner e dependência.
- [ ] Stories entregam fatias verificáveis.
- [ ] Grafo de tarefas e caminho crítico são coerentes.
- [ ] Capacidade e paralelismo são realistas.
- [ ] Riscos críticos têm resposta.
- [ ] Aprovações estão posicionadas antes do impacto.

## Vetos

- [ ] Não ocorre: Data sem dependência ou capacidade.
- [ ] Não ocorre: Marco definido apenas por atividade.
- [ ] Não ocorre: Risco crítico sem owner.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

