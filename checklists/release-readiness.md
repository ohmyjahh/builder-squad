# Quality Gate — Prontidão de Release

**ID:** release-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `release_plan`
- `gate_reports`
- `approval_record`

## Checklist

- [ ] Artefato é imutável e identificável.
- [ ] QA, segurança e dados emitiram veredito aplicável.
- [ ] Ambiente, acesso e janela estão confirmados.
- [ ] Migração e compatibilidade foram avaliadas.
- [ ] Smoke tests e limites estão definidos.
- [ ] Rollback foi ensaiado ou risco aceito.
- [ ] Aprovação corresponde ao artefato e ambiente.

## Vetos

- [ ] Não ocorre: Produção sem aprovação humana.
- [ ] Não ocorre: Artefato diferente do aprovado.
- [ ] Não ocorre: Release sem observabilidade ou retorno.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

