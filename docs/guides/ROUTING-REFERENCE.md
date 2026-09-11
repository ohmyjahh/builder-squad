# Referência de Roteamento

## Rota interna

Use quando o beneficiário primário é a própria operação.

Obrigatórios: Builder Chief, Process Analyst, Project Manager, QA e Documentation/Handoff. Arquitetura e implementação entram conforme features.

Antes do build devem existir processo atual, baseline, processo futuro, hipótese de ROI e adoção. A conclusão exige owner operacional e medição de benefício realizado.

## Rota de mercado

Use quando usuários ou clientes externos receberão ou comprarão o produto.

Obrigatórios: Builder Chief, Product Strategist, Project Manager, QA, Security, DevOps/Release, Growth/Sales e Documentation/Handoff.

Antes do build devem existir evidência do problema, ICP, proposta e MVP. Antes do lançamento devem existir segurança, analytics, suporte, GTM e aprovação.

## Rota híbrida

Use quando o produto resolve primeiro uma dor interna, mas existe intenção real de vendê-lo.

A rota mantém dois horizontes:

1. provar valor interno;
2. preservar opção de mercado.

Ela não obriga arquitetura SaaS completa cedo demais. Exige, porém, uma decisão explícita sobre identidade, tenancy, dados, configuração, licenciamento, billing e custo de migração.

## Condições técnicas

| Sinal | Especialistas/gates ativados |
|---|---|
| Interface | UX/UI + Frontend |
| Dados persistentes | Data Architect |
| Backend | Solution Architect + Backend |
| IA generativa | Agent Architect + evals + agent-safety |
| Integrações | Automation/Integration + resiliência |
| Dados sensíveis | Data + Security + privacy |
| Pagamentos | Backend + Security + Release + payment-readiness |
| Produção pública | Security + Release + aprovação humana |
| Cliente | Scope baseline + aceite + handoff |

## Complexidade

O score soma usuários externos, multi-tenancy, dados, sensibilidade, integrações, pagamentos, autonomia de IA e criticidade operacional.

- 0–3: simples;
- 4–8: padrão;
- 9–14: complexo;
- 15+: crítico.

Complexidade não decide sozinha a rota; ela aumenta profundidade, gates e aprovações dentro da finalidade confirmada.

## Simulador

```bash
npm run route -- \
  --purpose hybrid \
  --features ui,data,backend,ai,integrations \
  --multi-tenant \
  --sensitive-data \
  --public-production
```

