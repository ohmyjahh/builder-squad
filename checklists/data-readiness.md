# Quality Gate — Prontidão de Dados

**ID:** data-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `data_model`
- `access_matrix`
- `integrity_report`

## Checklist

- [ ] Modelo, identidade e invariantes estão definidos.
- [ ] Schema protege integridade crítica.
- [ ] Matriz de acesso aplica mínimo privilégio.
- [ ] Retenção, exclusão e exportação estão definidas.
- [ ] Índices e volume esperado foram avaliados.
- [ ] Migração inclui backup, rollback e reconciliação.
- [ ] Concorrência e idempotência foram testadas.

## Vetos

- [ ] Não ocorre: Isolamento multi-tenant implícito.
- [ ] Não ocorre: Dado sensível sem finalidade e controle.
- [ ] Não ocorre: Migração irreversível sem aceite.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

