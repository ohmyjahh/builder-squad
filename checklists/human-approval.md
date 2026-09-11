# Quality Gate — Aprovação Humana

**ID:** human-approval  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `approval_record`
- `risk_summary`
- `artifact_version`

## Checklist

- [ ] A pessoa tem autoridade sobre a decisão.
- [ ] Objeto, versão e ambiente estão identificados.
- [ ] Impacto, risco e alternativa são compreensíveis.
- [ ] Aprovação é específica e tem validade.
- [ ] Condições e ressalvas estão registradas.
- [ ] Negativa não é contornada por outra rota.

## Vetos

- [ ] Não ocorre: Aprovação genérica usada para outra ação.
- [ ] Não ocorre: Silêncio interpretado como consentimento.
- [ ] Não ocorre: Escopo alterado depois da aprovação.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

