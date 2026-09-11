---
task: Model Domain Data
responsavel: "@data-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - canonical_brief
  - business_rules
  - workflows
Saida: |
  - domain_model
  - entity_glossary
  - invariant_catalog
Checklist:
  - "[ ] Cada conceito possui definição inequívoca."
  - "[ ] Identidade e ownership estão explícitos."
  - "[ ] Invariantes são verificáveis."
  - "[ ] O modelo não depende prematuramente do banco escolhido."
---

# Objetivo

Representar conceitos, relações, ciclos de vida e invariantes do domínio antes de escolher tabelas.

## Procedimento

1. Extrair substantivos, eventos e regras dos fluxos.
2. Definir entidades, value objects e agregados quando úteis.
3. Mapear identidade, ownership, cardinalidade e ciclo de vida.
4. Registrar invariantes e transições proibidas.
5. Validar linguagem com negócio e consumidores técnicos.

## Critérios de aceite

- Cada conceito possui definição inequívoca.
- Identidade e ownership estão explícitos.
- Invariantes são verificáveis.
- O modelo não depende prematuramente do banco escolhido.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `design-database-schema`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `data-readiness.md`
