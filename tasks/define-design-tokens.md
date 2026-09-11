---
task: Define Design Tokens
responsavel: "@ux-ui-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - brand_context
  - accessibility_target
  - platforms
Saida: |
  - design_tokens
  - semantic_token_map
  - usage_rules
Checklist:
  - "[ ] Tokens semânticos cobrem os principais estados."
  - "[ ] Contraste atende ao alvo de acessibilidade."
  - "[ ] Nomes permanecem válidos em novos temas."
  - "[ ] O formato pode ser consumido pela implementação."
---

# Objetivo

Criar uma linguagem visual semântica, acessível e implementável entre telas e plataformas.

## Procedimento

1. Inventariar cores, tipografia, espaço, forma, elevação e movimento.
2. Separar valores primitivos de tokens semânticos.
3. Definir estados interativos, feedback e contraste.
4. Nomear por intenção de uso, não por aparência.
5. Documentar aplicação, exceções e estratégia de tema.

## Critérios de aceite

- Tokens semânticos cobrem os principais estados.
- Contraste atende ao alvo de acessibilidade.
- Nomes permanecem válidos em novos temas.
- O formato pode ser consumido pela implementação.

## Vetos

- Entrada obrigatória ausente ou não versionada.
- Desvio silencioso de contrato ou escopo.
- Evidência presumida ou resultado não reproduzível.
- Ação externa, destrutiva ou de produção sem aprovação explícita.

## Recuperação e transição

- PASS → `implement-user-interface`.
- CONCERNS → registrar risco residual e solicitar aceite.
- FAIL → retornar ao owner do artefato de origem.
- BLOCKED → escalar ao `builder-chief` com dependência identificada.

**Quality gate:** `ux-readiness.md`
