# Quality Gate — Segurança de Mudança

**ID:** change-safety  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `repository_status`
- `impact_map`
- `regression_plan`

## Checklist

- [ ] Baseline e versão atual foram fixadas.
- [ ] Mudanças do usuário estão preservadas.
- [ ] Impacto direto e indireto está mapeado.
- [ ] Plano altera apenas o escopo necessário.
- [ ] Regressão acompanha a superfície afetada.
- [ ] Rollback ou reversibilidade foi considerada.

## Vetos

- [ ] Não ocorre: Reset ou sobrescrita destrutiva não autorizada.
- [ ] Não ocorre: Alteração de arquivo sem ownership.
- [ ] Não ocorre: Baseline já falhava e isso foi ocultado.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

