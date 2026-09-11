---
task: Test Frontend
responsavel: "@frontend-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - integrated_frontend
  - acceptance_criteria
  - user_flows
Saida: |
  - frontend_test_evidence
  - browser_matrix
  - known_limitations
Checklist:
  - "[ ] Critérios funcionais possuem evidência."
  - "[ ] Estados não felizes foram exercitados."
  - "[ ] Acessibilidade crítica foi verificada."
  - "[ ] Resultados são reproduzíveis."
---

# Objetivo

Demonstrar comportamento da interface em fluxos, estados, tamanhos e tecnologias assistivas relevantes.

## Procedimento

1. Executar testes de componentes e regras de apresentação.
2. Executar fluxos críticos ponta a ponta.
3. Testar vazio, carregamento, erro, permissão e reconexão.
4. Verificar teclado, foco, semântica e contraste.
5. Registrar navegadores, dispositivos, resultados e lacunas.

## Critérios de aceite

- Critérios funcionais possuem evidência.
- Estados não felizes foram exercitados.
- Acessibilidade crítica foi verificada.
- Resultados são reproduzíveis.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `review-usability-accessibility`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `implementation-quality.md`
