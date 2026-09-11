# Story BS-004 — Catálogo Task-First

**Status:** Done  
**Epic:** Builder Squad V1  
**Prioridade:** Crítica  
**Dependência:** BS-003

## História

Como especialista do Builder Squad, quero executar comandos através de tasks atômicas e contratadas para que toda entrega tenha entradas, processo, saída, aceite, gate e caminho de correção consistentes.

## Critérios de aceite

1. Os 75 comandos do blueprint possuem arquivos de task.
2. Toda task segue o contrato task.v1.
3. Entradas e saídas correspondem ao blueprint.
4. Toda task possui pré-condições, passos, critérios de aceite e transição.
5. Tasks críticas possuem veto e recuperação específicos.
6. Nenhuma task autoriza ação externa de alto impacto sem aprovação.
7. O manifest referencia todas as tasks implementadas.
8. Não existem IDs ou nomes duplicados.

## Tranches

### A — Decisões e gates críticos

- [x] Produto e mercado.
- [x] Processo interno.
- [x] Planejamento.
- [x] Arquitetura.
- [x] UX/UI.
- [x] Dados.
- [x] Backend e frontend.
- [x] Agentes e automações.
- [x] QA e segurança.
- [x] Release.
- [x] Growth e documentação.

### B — Tasks auxiliares

- [x] Expandir todos os comandos secundários.
- [x] Validar cobertura contra o blueprint.
- [x] Validar referências do manifest.
- [x] Validar estrutura em modo estrito.

## Definition of Done

- [x] 75 tasks presentes.
- [x] 75 tasks válidas.
- [x] Cobertura de comandos em 100%.
- [x] Nenhuma referência quebrada.
- [x] File List gerada e conferida.

## File List

- `templates/task-contract.md`
- `tasks/*.md`
- `squad.yaml`
- `docs/reports/BS-004-task-coverage.md`
