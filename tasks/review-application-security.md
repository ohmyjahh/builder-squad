---
task: Review Application Security
responsavel: "@security-reviewer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - implementation
  - architecture
  - threat_model
  - data_access_matrix
  - deployment_profile
Saida: |
  - security_report
  - vulnerability_register
  - remediation_route
Checklist:
  - "[ ] Revisar autenticação e autorização"
  - "[ ] Revisar entradas, saídas e exposição de dados"
  - "[ ] Verificar segredos e dependências"
  - "[ ] Testar cenários de abuso prioritários"
  - "[ ] Registrar risco residual"
---

# Objetivo

Avaliar se a implementação respeita suas fronteiras de confiança e reduz os riscos materiais antes de uso real ou publicação.

## Procedimento

1. Fixar commit, ambiente e configuração revisados.
2. Comparar a implementação com o modelo de ameaças.
3. Revisar autenticação, autorização por objeto, sessões e elevação de privilégio.
4. Revisar validação de entradas, serialização, arquivos, URLs e execução indireta.
5. Verificar isolamento, minimização, criptografia e exposição de dados sensíveis.
6. Detectar segredos no código, logs, histórico e configuração.
7. Avaliar dependências, integrações, webhooks, CORS, headers e rate limits.
8. Para agentes, testar prompt injection, exfiltração, abuso de ferramentas e excesso de autoridade.
9. Classificar achados por probabilidade, impacto, explorabilidade e alcance.
10. Definir correção, compensação ou aceite humano para cada risco.

## Critérios de aceite

- Nenhum achado crítico ou alto permanece sem remediação ou aceite formal.
- Autorizações são verificadas no lado confiável, por ação e recurso.
- Dados e segredos não aparecem em logs ou artefatos públicos.
- Agentes não recebem ferramentas ou escopos além do necessário.
- A versão revisada é rastreável.

## Vetos

- Publicação com segredo exposto.
- Controles de acesso apenas na interface.
- Agente capaz de executar ação destrutiva sem confirmação.
- Achado crítico tratado como dívida técnica comum.

## Transição

- Sem impeditivos → `issue-security-verdict`
- Falha implementacional → responsável técnico da origem
- Falha arquitetural → `design-system-architecture`
- Escopo de dados incerto → `review-privacy-and-data`

**Quality gate:** `security-readiness.md`
