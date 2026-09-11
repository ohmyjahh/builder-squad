# Quality Gate — Prontidão de Implementação

**ID:** implementation-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `ready_story`
- `task_graph`
- `test_strategy`

## Checklist

- [ ] Story foi aprovada pelo gate de readiness.
- [ ] Arquitetura e contratos necessários existem.
- [ ] Design e dados estão disponíveis quando aplicáveis.
- [ ] Tasks têm owner, entrada, saída e dependências.
- [ ] Ambiente e critérios de teste estão definidos.
- [ ] Riscos críticos possuem resposta.

## Vetos

- [ ] Não ocorre: Começar com requisito material em aberto.
- [ ] Não ocorre: Task sem critério de término.
- [ ] Não ocorre: Dependência externa presumida.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

