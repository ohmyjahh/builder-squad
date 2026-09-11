# Quality Gate — Segurança de Agentes

**ID:** agent-safety  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `agent_spec`
- `permission_matrix`
- `evaluation_report`

## Checklist

- [ ] Missão, entradas e saídas estão delimitadas.
- [ ] Ferramentas possuem necessidade, escopo e confirmação definidos.
- [ ] Conteúdo externo é tratado como dado não confiável.
- [ ] Memória possui fonte, retenção e expiração.
- [ ] Evals incluem sucesso, recusa, injeção e indisponibilidade.
- [ ] Logs permitem auditar ações sem expor dados.
- [ ] Fallback seguro existe para falha de modelo ou ferramenta.

## Vetos

- [ ] Não ocorre: Ação destrutiva ou externa sem aprovação.
- [ ] Não ocorre: Ferramenta com autoridade maior que a missão.
- [ ] Não ocorre: Release sem eval crítica aprovada.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

