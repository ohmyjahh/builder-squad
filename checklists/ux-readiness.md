# Quality Gate — Prontidão UX/UI

**ID:** ux-readiness  
**Contrato:** quality-gate.v1

## Evidências mínimas

- `user_journey`
- `ui_spec`
- `accessibility_review`

## Checklist

- [ ] Jornada e fluxo cobrem o resultado do usuário.
- [ ] Vazio, carregamento, erro e permissão estão definidos.
- [ ] Conteúdo orienta ação e recuperação.
- [ ] Responsividade foi especificada.
- [ ] Teclado, foco, semântica e contraste foram considerados.
- [ ] Tokens e componentes são implementáveis.
- [ ] Telemetria respeita privacidade.

## Vetos

- [ ] Não ocorre: Fluxo crítico sem recuperação.
- [ ] Não ocorre: Ação perigosa sem confirmação.
- [ ] Não ocorre: Informação essencial apenas por cor.

## Regra de decisão

- **PASS:** todos os itens aplicáveis atendidos e nenhum veto violado.
- **CONCERNS:** objetivo atendido com risco residual não crítico, aceito por autoridade identificada.
- **FAIL:** lacuna material corrigível ou qualquer veto violado.
- **BLOCKED:** evidência, acesso, ambiente ou autoridade impedem uma decisão confiável.

## Transição obrigatória

Registrar veredito, evidências, achados, owner da próxima ação e condição de nova avaliação. Um `FAIL` retorna ao owner da causa; um `BLOCKED` retorna ao Builder Chief.

