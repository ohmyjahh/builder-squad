---
task: Define Nonfunctional Requirements
responsavel: "@solution-architect"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - purpose
  - risk_profile
  - expected_load
  - compliance_context
Saida: |
  - nfr_spec
  - service_levels
  - measurement_methods
Checklist:
  - "[ ] Cada NFR crítico tem métrica e limiar."
  - "[ ] Metas são proporcionais ao contexto."
  - "[ ] Conflitos entre custo e qualidade estão registrados."
  - "[ ] Testes e operação conseguem verificar a especificação."
---

# Objetivo

Converter expectativas de qualidade em limites mensuráveis que orientem arquitetura, testes e operação.

## Procedimento

1. Priorizar disponibilidade, desempenho, segurança, privacidade, acessibilidade e custo.
2. Definir carga, latência, capacidade e recuperação esperadas.
3. Definir RTO, RPO e tolerância a perda quando aplicáveis.
4. Associar cada requisito a método e ambiente de medição.
5. Negociar conflitos e registrar tradeoffs.

## Critérios de aceite

- Cada NFR crítico tem métrica e limiar.
- Metas são proporcionais ao contexto.
- Conflitos entre custo e qualidade estão registrados.
- Testes e operação conseguem verificar a especificação.

## Vetos

- Entrada obrigatória ausente ou sem versão identificável.
- Fato, hipótese e decisão misturados sem sinalização.
- Mudança material de escopo sem retorno ao `builder-chief`.
- Ação externa, destrutiva ou financeira sem aprovação explícita.

## Recuperação e transição

- PASS → `define-service-contracts`.
- CONCERNS → registrar risco e obter aceite do aprovador.
- FAIL → retornar ao owner do artefato que originou a falha.
- BLOCKED → escalar dependência ao `builder-chief`.

**Quality gate:** `architecture-fitness.md`
