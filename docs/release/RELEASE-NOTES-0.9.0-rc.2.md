# Builder Squad 0.9.0-rc.2

## Resultado

Release candidate corrigida do Builder Squad: um sistema de agentes task-first com intake, roteamento, execução, gates, memória, instalação e recuperação.

## Destaques

- A primeira decisão separa projeto interno, mercado e híbrido.
- Builder Chief coordena 15 especialistas.
- 75 tasks cobrem do problema ao encerramento.
- 12 workflows tratam construção, cliente, IA, brownfield, incidente, segurança, release, growth e retomada.
- Instalação sidecar funciona em Codex e Claude Code.
- Update, restore e uninstall preservam versões anteriores.
- 21 testes e 20 validações estruturais cobrem o produto.

## Correção desde a RC.1

- O instalador passou a incluir `docs/release`, mantendo válidos os links do README após uma instalação limpa.
- Uma regressão automatizada confirma que as notas da versão instalada existem no sidecar.

## Instalação

1. Execute `npm run doctor`.
2. Execute `npm test`.
3. Instale o adapter no projeto.
4. Acrescente a referência sugerida às instruções existentes.
5. Inicie com `@builder-chief *start-project`.

## Limitações conhecidas

- Release candidate ainda não passou por piloto com compradores.
- Licença comercial precisa da identificação jurídica do titular e revisão final.
- Integrações específicas dependem do ambiente de cada comprador.
- O runtime exige Node 18+.

## Upgrade

Use `update` para preservar a instalação anterior. Consulte `docs/guides/VERSIONING.md`.

## Aceite da RC

A RC está tecnicamente pronta quando CI, testes, validação, pacote e checksums passarem. Ela não deve ser rotulada como 1.0.0 antes do piloto.
