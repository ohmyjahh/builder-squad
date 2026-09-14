# Checklist de Release Candidate

## Identidade

- [x] VERSION, package.json e squad.yaml usam 0.10.0-rc.1.
- [x] Changelog e release notes existem.
- [x] Licença proprietária está presente.
- [x] Titular jurídico identificado e minutas comerciais criadas.
- [ ] Minutas foram revisadas e aprovadas por advogado.
- [ ] Adequação fiscal e CNAE foram confirmados por contador.

## Qualidade

- [x] npm run validate.
- [x] npm test.
- [x] npm run doctor.
- [x] JavaScript syntax check.
- [x] YAML e JSON parseiam.
- [x] Links locais válidos.
- [x] Segredos de alta confiança ausentes.

## Portabilidade

- [x] Adapter Codex.
- [x] Adapter Claude Code.
- [x] Instalação sidecar testada.
- [x] Update, restore e uninstall testados.
- [x] Fallback sequencial documentado.

## Distribuição

- [x] Script de pacote.
- [ ] Pacote 0.10.0-rc.1 gerado.
- [ ] SHA256SUMS verificado.
- [x] CI definida.
- [x] Repositório privado criado.
- [ ] Branch protection configurada — bloqueada pelo plano atual do GitHub para este repositório privado (HTTP 403 em 2026-09-12).
- [ ] Release privada 0.10.0-rc.1 criada.

### Limite da plataforma

A proteção da `main` foi tentada após a publicação. O GitHub informou que o recurso exige upgrade do plano ou que o repositório seja público. Manter o código privado tem prioridade; nenhuma dessas mudanças foi feita automaticamente.

## Piloto

- [x] Plano de piloto documentado.
- [ ] Compradores-piloto selecionados.
- [ ] Métricas de ativação coletadas.
- [ ] Achados impeditivos corrigidos.
- [ ] Go/no-go da 1.0.0 aprovado.
