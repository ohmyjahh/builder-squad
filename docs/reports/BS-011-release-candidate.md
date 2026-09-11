# Relatório BS-011 — Release Candidate

**Versão:** 0.9.0-rc.2
**Data:** 2026-09-11  
**Veredito técnico:** PASS  
**Veredito de distribuição remota:** PASS

## Evidências locais

- npm test: PASS 21/21.
- npm run validate: PASS 20/20.
- npm run doctor: PASS.
- YAML: PASS 39/39.
- JSON: PASS 10/10.
- JavaScript syntax: PASS.
- Git fsck: sem erro.
- SHA256SUMS: verificado.
- Arquivos no pacote: 270.

## Pacote

- Caminho: dist/builder-squad-v0.9.0-rc.2
- Formato: diretório portátil.
- Manifesto: RELEASE-MANIFEST.json.
- Integridade: SHA-256 por arquivo.
- Visibilidade pretendida: privada.

## Distribuição privada

- Repositório: https://github.com/ohmyjahh/builder-squad.
- Remote: `origin`.
- Branch: `main`.
- Tag: `v0.9.0-rc.2`.

## Histórico de CI

- A 0.9.0-rc.1 revelou que `docs/release` não era copiado pelo instalador sidecar em ambiente limpo.
- A 0.9.0-rc.2 inclui a pasta, adiciona a regressão correspondente e mantém a RC anterior como histórico imutável.

## CI

A esteira roda em Node 18.x e 24.x, executa instalação reprodutível, validação, testes, syntax check e geração do pacote.

## Pendências para 1.0.0

- configurar proteção da branch se o plano da conta permitir;
- executar piloto fechado;
- concluir revisão jurídica;
- corrigir eventuais achados impeditivos do piloto.
