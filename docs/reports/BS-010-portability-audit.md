# Relatório BS-010 — Auditoria de Portabilidade

**Data:** 2026-09-11  
**Veredito:** PASS para release candidate

## Inventário auditado

- 16 agentes.
- 75 tasks.
- 12 workflows.
- 36 templates.
- 31 quality gates.
- 9 automações.
- 5 schemas.
- 2 adapters.
- 5 projetos de referência.
- 12 comandos de runtime.

## Evidências

| Verificação | Resultado |
|---|---|
| Testes Node | PASS 21/21 |
| Validação estrutural | PASS 20/20 |
| YAML estrito | PASS 35/35 |
| JSON estrito | PASS 9/9 |
| JavaScript syntax check | PASS |
| Agent → task | PASS 75/75 |
| Workflow IDs | PASS 12/12 |
| Manifest templates | PASS 36/36 |
| Segredos de alta confiança | 0 achados |
| Links locais principais | 0 quebrados |
| Git fsck | sem erro |

## Portabilidade

- Core não depende de API ou provedor específico.
- Runtime requer apenas Node 18+ e Git.
- Adapters ficam fora do núcleo.
- Instalação sidecar não edita instruções do host.
- O pacote instalado passa pelo mesmo validador estrutural.
- Fallback sequencial é documentado quando o host não oferece multiagente.

## Recuperação

- update move instalação anterior para backup datado;
- restore exige aprovação e preserva a versão substituída;
- uninstall arquiva a instalação em vez de apagá-la;
- transição de estado usa escrita atômica;
- deploy e rollback exigem approval ID.

## Riscos residuais e dependências externas

1. Licença e termos precisam de revisão jurídica antes da venda em escala.
2. O repositório remoto depende de autenticação válida do GitHub CLI.
3. A versão 1.0.0 depende de piloto fechado com compradores reais.
4. Integrações específicas de modelos, banco e deploy pertencem ao projeto do comprador, não ao core.

## Decisão

O sistema está tecnicamente apto a ser empacotado como versão 0.9.0-rc.1. A designação 1.0.0 permanece bloqueada até piloto e aceite.

