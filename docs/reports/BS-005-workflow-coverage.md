# Relatório BS-005 — Cobertura de Workflows

**Data:** 2026-09-11  
**Veredito:** PASS

## Inventário

| Workflow | Finalidade | Padrão principal |
|---|---|---|
| wf-intake-and-classify | Todos | Intake progressivo e roteamento |
| wf-internal-tool | Interno | Baseline → valor → adoção |
| wf-market-product | Mercado | Evidência → produto → GTM |
| wf-hybrid-evolution | Híbrido | Valor interno + opção de mercado |
| wf-client-delivery | Cliente | Escopo, marcos, aceite e handoff |
| wf-agent-and-automation | IA/automação | Autoridade, evals e resiliência |
| wf-brownfield-improvement | Projeto existente | Baseline e impacto antes da mudança |
| wf-bug-and-recovery | Incidente | Estabilização, recuperação e aprendizado |
| wf-security-review | Segurança | Revisão independente e veredito |
| wf-release | Release | Aprovação, deploy, observação e rollback |
| wf-growth-iteration | Growth | Hipótese, experimento e decisão |
| wf-project-resume | Retomada | Reconstrução por memória canônica |

## Validações

- YAML válido: 12/12.
- IDs únicos: 12/12.
- Workflows previstos no blueprint: 12/12.
- Tasks referenciadas: existentes.
- Quality gates referenciados: declarados para implementação na BS-007.
- Rotas de aprovação humana: presentes nos pontos de alto impacto.

## Diferenciação da bifurcação inicial

- **Interno:** process owner, baseline, ROI, adoção e operação.
- **Mercado:** evidência do problema, ICP, monetização, segurança, analytics e GTM.
- **Híbrido:** duas evidências em paralelo e checkpoint de portabilidade antes da arquitetura.
