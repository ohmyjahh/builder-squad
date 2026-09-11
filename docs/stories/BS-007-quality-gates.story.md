# Story BS-007 — Sistema de Quality Gates

**Status:** Done  
**Epic:** Builder Squad V1  
**Prioridade:** Crítica  
**Dependência:** BS-006

## História

Como governante do Builder Squad, quero decisões de avanço baseadas em gates específicos para que qualidade, segurança e ética não dependam de uma impressão subjetiva do agente.

## Critérios de aceite

- [x] Gates cobrem intake, handoff, orquestração e cada domínio especializado.
- [x] Todo gate declara evidências, checklist, vetos e semântica de veredito.
- [x] Vereditos são limitados a PASS, CONCERNS, FAIL e BLOCKED.
- [x] FAIL retorna à causa e BLOCKED ao Builder Chief.
- [x] Gates separam risco aceito de aprovação plena.
- [x] Existe gate específico de aprovação humana.
- [x] Existe gate de ética comercial que veta fake live, prova e urgência fabricadas.
- [x] Manifest referencia todos os gates.

## Definition of Done

- [x] 31 checklists presentes.
- [x] Referências de tasks e workflows resolvidas.
- [x] Gates de produção e pagamento incluem aprovação explícita.
- [x] Nenhum checklist duplicado.

## File List

- checklists/*.md
- squad.yaml
- docs/reports/BS-007-gate-coverage.md
