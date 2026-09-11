# Quality Gate — Prontidão de Encerramento

**ID:** closure-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `closure_report`
- `acceptance_record`
- `artifact_index`

## Checklist

- [ ] Versão final e aceite correspondem.
- [ ] Entregues, não entregues e mudanças estão separados.
- [ ] Artefatos estão indexados.
- [ ] Acessos foram transferidos ou revogados.
- [ ] Pendências têm owner e prazo.
- [ ] Operação, suporte e custos estão registrados.
- [ ] Retomada é possível pelo estado canônico.

## Vetos

- [ ] Não ocorre: Declarar conclusão sem aceite ou ressalva.
- [ ] Não ocorre: Pendência sem owner.
- [ ] Não ocorre: Segredo dentro do pacote final.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

