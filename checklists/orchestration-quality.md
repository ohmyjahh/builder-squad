# Quality Gate — Orquestração

## Rota

- [ ] Workflow corresponde à finalidade.
- [ ] A rota utiliza o menor conjunto suficiente de especialistas.
- [ ] Todo especialista possui pelo menos uma task necessária.
- [ ] Todo skip possui justificativa.
- [ ] Dependências estão ordenadas.
- [ ] Paralelismo só ocorre com ownership disjunto e contratos aprovados.

## Segurança da execução

- [ ] Quality gates estão posicionados antes de transições irreversíveis.
- [ ] Ações de alto impacto exigem aprovação humana.
- [ ] Retry máximo é dois.
- [ ] Existe caminho de correção para cada FAIL.
- [ ] Existe condição de desbloqueio para cada BLOCKED.
- [ ] Estado alvo é permitido pela máquina de estados.

## Regras por finalidade

- [ ] Rota interna passa por mapeamento de processo.
- [ ] Rota de mercado passa por evidência do problema.
- [ ] Rota híbrida preserva decisões de portabilidade.

## Cobertura técnica

- [ ] Interface ativa design/frontend quando necessário.
- [ ] Dados persistentes ativam data.
- [ ] Backend ativa contratos e testes.
- [ ] IA ativa especificação e avaliação.
- [ ] Integrações ativam retries e fallback.
- [ ] Produção ativa QA, segurança, release e rollback.

## Veredito

- **PASS:** rota consistente e executável.
- **CONCERNS:** risco residual registrado e aceito.
- **FAIL:** rota incompleta, excessiva ou insegura.
- **BLOCKED:** falta decisão que muda a rota.
