# Ciclo de Vida do Projeto

## Fonte de verdade

A conversa ajuda a trabalhar, mas não governa o projeto. A fonte de verdade é composta por:

- `project.yaml`: identidade, finalidade, perfil, features e workflow;
- `status.yaml`: estado, fase, task, owner, retry e vereditos;
- `brief.md`: fatos, hipóteses, escopo e sucesso;
- `decisions/`: decisões materiais e alternativas;
- `handoffs/`: transferências autocontidas;
- `evidence/`: testes, pesquisa, gates e aprovações;
- `reports/`: histórico e encerramento.

## Estados

```text
NEW → DISCOVERY → CLASSIFIED → BRIEFED → VALIDATING/PLANNED
→ READY_FOR_EXECUTION → IN_EXECUTION → IN_REVIEW
→ READY_FOR_RELEASE → RELEASING → RELEASED → MEASURING → COMPLETE
```

Rotas de retorno usam `NEEDS_REVISION`; dependências externas usam `BLOCKED`; incidentes podem usar `ROLLING_BACK`. `CANCELLED` e `COMPLETE` são terminais.

## Fases universais

1. **Diagnosticar:** preservar demanda e confirmar finalidade.
2. **Briefar:** transformar conversa em contrato canônico.
3. **Validar:** entender processo interno ou evidência de mercado.
4. **Planejar:** escopo, stories, tasks, dependências e riscos.
5. **Projetar:** arquitetura e especialistas condicionais.
6. **Executar:** trabalhar por ownership e contratos.
7. **Revisar:** QA, segurança e gates independentes.
8. **Liberar/entregar:** aprovação, deploy, handoff e aceite.
9. **Medir:** adoção, ROI, ativação, receita ou confiabilidade.
10. **Encerrar:** índice final, pendências e forma de retomada.

## Regras de transição

- A entrada obrigatória da próxima fase deve existir.
- O gate deve estar aprovado ou o risco aceito.
- O estado alvo deve ser permitido pela máquina.
- Aprovações são vinculadas ao objeto e à versão.
- Mudança material invalida brief, escopo ou aprovação afetados.
- Após dois retries sem resolver a causa, o Builder Chief bloqueia e replaneja.

## Mudança de finalidade

Um projeto interno que passará a clientes não muda apenas o rótulo. Ele retorna ao intake, é reclassificado como híbrido ou mercado e recebe os gates adicionais de identidade, dados, segurança, analytics, suporte e release.

