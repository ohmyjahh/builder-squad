---
task: Execute Quality Gate
responsavel: "@qa-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - artifacts
  - acceptance_criteria
  - test_strategy
  - applicable_checklist
Saida: |
  - qa_report
  - evidence_index
  - defect_register
  - verdict
Checklist:
  - "[ ] Verificar rastreabilidade dos critérios"
  - "[ ] Reproduzir evidências críticas"
  - "[ ] Classificar defeitos por severidade"
  - "[ ] Emitir PASS, CONCERNS, FAIL ou BLOCKED"
  - "[ ] Definir retorno responsável"
---

# Objetivo

Tomar uma decisão de qualidade reproduzível, baseada em evidência e independente de quem produziu a entrega.

## Procedimento

1. Congelar a versão dos artefatos sob revisão.
2. Mapear cada critério de aceite para ao menos uma evidência verificável.
3. Executar ou revisar testes funcionais, negativos, limites e regressão aplicáveis.
4. Separar falha do produto, falha do teste, limitação do ambiente e ausência de evidência.
5. Registrar defeitos com impacto, severidade, reprodução e ownership.
6. Comparar riscos residuais com o perfil e a finalidade do projeto.
7. Emitir exatamente um veredito: `PASS`, `CONCERNS`, `FAIL` ou `BLOCKED`.
8. Definir a próxima transição, o responsável e as condições de nova avaliação.

## Semântica do veredito

- `PASS`: todos os critérios obrigatórios têm evidência e nenhum defeito impeditivo permanece.
- `CONCERNS`: objetivo atingido, com risco residual explícito que requer aceite do aprovador.
- `FAIL`: há defeito ou lacuna controlável; retorna ao owner da origem.
- `BLOCKED`: não é possível decidir por dependência externa, acesso ou ambiente indisponível.

## Vetos

- Aprovar com base apenas na declaração do implementador.
- Ocultar teste não executado ou marcar evidência presumida.
- Converter defeito crítico em pendência sem aceite humano.
- Alterar a implementação durante a revisão independente.

## Transição

- PASS → próxima fase do workflow
- CONCERNS → aprovação humana de risco ou correção
- FAIL → task proprietária da causa
- BLOCKED → `builder-chief` resolve dependência

**Quality gate:** `quality-verdict.md`
