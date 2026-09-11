# Quality Gate — Prontidão da Story

**ID:** story-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `story`
- `dependencies`
- `readiness_verdict`

## Checklist

- [ ] Ator, capacidade e valor estão claros.
- [ ] Critérios positivos e negativos são testáveis.
- [ ] Requisitos não funcionais aplicáveis aparecem.
- [ ] Design, dados e contratos necessários existem.
- [ ] Dependências e riscos estão visíveis.
- [ ] Story cabe em incremento demonstrável.
- [ ] Definition of Done está definida.

## Vetos

- [ ] Não ocorre: Critério subjetivo sem método de avaliação.
- [ ] Não ocorre: Dependência material desconhecida.
- [ ] Não ocorre: Story mistura múltiplos resultados independentes.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

