# Quality Gate — Prontidão do Handoff

**ID:** handoff-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `handoff_package`
- `artifact_index`
- `acceptance_request`

## Checklist

- [ ] Índice contém todos os entregáveis e versões.
- [ ] Guia de uso e runbook foram testados.
- [ ] Limitações e riscos residuais estão explícitos.
- [ ] Acessos seguem plano seguro e mínimo privilégio.
- [ ] Critérios de aceite têm evidência.
- [ ] Suporte e ownership futuro estão definidos.

## Vetos

- [ ] Não ocorre: Segredo em documento ou repositório.
- [ ] Não ocorre: Conhecimento operacional apenas tácito.
- [ ] Não ocorre: Transferência sem backup ou owner.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

