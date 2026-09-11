# Quality Gate — Prontidão de Segurança

**ID:** security-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `threat_model`
- `security_report`
- `security_verdict`

## Checklist

- [ ] Versão, arquitetura e threat model estão alinhados.
- [ ] Autenticação e autorização foram revisadas.
- [ ] Dados, privacidade, logs e segredos foram revisados.
- [ ] Dependências e integrações foram avaliadas.
- [ ] Agentes foram testados contra abuso de ferramentas.
- [ ] Achados têm severidade, owner e evidência.
- [ ] Nenhum risco crítico ou alto está sem tratamento.

## Vetos

- [ ] Não ocorre: Segredo exposto.
- [ ] Não ocorre: Autorização apenas no cliente.
- [ ] Não ocorre: Aceite de risco sem autoridade ou prazo.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

