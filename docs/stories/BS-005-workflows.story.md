# Story BS-005 — Esteiras Condicionais

**Status:** Done  
**Epic:** Builder Squad V1  
**Prioridade:** Crítica  
**Dependência:** BS-004

## História

Como Builder Chief, quero selecionar e executar uma esteira específica para o contexto do projeto para que o squad preserve rigor sem aplicar complexidade desnecessária.

## Critérios de aceite

- [x] Existe um workflow universal de intake e classificação.
- [x] Existem rotas próprias para interno, mercado e híbrido.
- [x] Existem wrappers especializados para cliente, IA e brownfield.
- [x] Existem fluxos de incidente, segurança, release, growth e retomada.
- [x] Cada fluxo declara invariantes, gates, dependências e conclusão.
- [x] Deploy, publicação, gasto e mudança material exigem aprovação humana.
- [x] Execução paralela só ocorre após dependências e com ownership disjunto.
- [x] Os 12 workflows são YAML válido e possuem IDs únicos.

## Decisões

1. O intake sempre pergunta `internal`, `market` ou `hybrid` antes do briefing progressivo.
2. `internal` exige baseline e adoção; `market` exige evidência e analytics; `hybrid` exige decisão explícita de portabilidade.
3. Workflows especializados retornam ao fluxo pai em vez de duplicar encerramento.
4. Gates são referências canônicas e não regras reescritas em cada fase.

## Definition of Done

- [x] 12/12 workflows presentes.
- [x] 12/12 YAMLs válidos.
- [x] IDs sem duplicidade.
- [x] Tasks referenciadas existem.
- [x] Manifest atualizado.

## File List

- `workflows/*.yaml`
- `squad.yaml`
- `docs/reports/BS-005-workflow-coverage.md`
