# Quality Gate — Qualidade de Implementação

**ID:** implementation-quality  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `changeset`
- `test_evidence`
- `contract_tests`

## Checklist

- [ ] Mudança segue contratos e padrões existentes.
- [ ] Validação, erros e autorização estão cobertos.
- [ ] Testes alterados passam e são reproduzíveis.
- [ ] Estados de falha e limites foram exercitados.
- [ ] Logs e telemetria não expõem segredos.
- [ ] Código e documentação estão sincronizados.

## Vetos

- [ ] Não ocorre: Teste falho omitido.
- [ ] Não ocorre: Segredo ou credencial versionado.
- [ ] Não ocorre: Critério atendido apenas no caminho feliz.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

