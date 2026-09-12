# Checklist de Release Candidate

## Identidade

- [x] VERSION, package.json e squad.yaml usam 0.9.0-rc.3.
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
- [x] Pacote 0.9.0-rc.3 gerado.
- [x] SHA256SUMS verificado.
- [x] CI definida.
- [x] Repositório privado criado.
- [ ] Branch protection configurada.
- [x] Release privada criada.

## Piloto

- [x] Plano de piloto documentado.
- [ ] Compradores-piloto selecionados.
- [ ] Métricas de ativação coletadas.
- [ ] Achados impeditivos corrigidos.
- [ ] Go/no-go da 1.0.0 aprovado.
