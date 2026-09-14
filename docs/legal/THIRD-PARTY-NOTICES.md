# Avisos de Terceiros

**Auditoria documental:** 2026-09-12
**Versão-alvo:** 0.10.0-rc.1

## Core distribuído

Na data da auditoria, o `package-lock.json` do core não declara dependência npm de produção. O Builder Squad utiliza APIs nativas do Node.js e executáveis que o usuário instala separadamente.

Essa constatação vale apenas para o core e para a versão indicada. Projetos gerados, adapters, exemplos adaptados e integrações podem introduzir suas próprias dependências e exigem nova auditoria.

## Ferramentas e nomes citados

- Node.js e npm: runtime e gerenciador externos.
- Git e GitHub: versionamento e hospedagem externos.
- Codex e OpenAI: ambiente e serviços externos.
- Claude e Anthropic: ambiente e serviços externos.
- Outros bancos, nuvens, modelos e integrações: escolhidos pelo comprador.

Nomes, marcas e serviços pertencem a seus respectivos titulares. Referência de compatibilidade não representa afiliação, patrocínio, certificação ou endosso.

## O que não é redistribuído pelo pacote

O pacote não incorpora executáveis do Node.js, Git, Codex, Claude, GitHub ou provedores de infraestrutura. O comprador obtém essas ferramentas por seus canais oficiais e aceita seus termos separadamente.

## Obrigações do mantenedor

Antes de cada release:

1. revisar `package-lock.json` e novos arquivos binários;
2. identificar licença e fonte de cada componente incluído;
3. preservar avisos exigidos;
4. bloquear componente com origem ou permissão incerta;
5. atualizar este documento quando houver nova dependência;
6. revisar assets, exemplos, trechos e contribuições externas.

## Obrigações do comprador

O comprador deve auditar dependências dos projetos que produzir, inclusive código sugerido por IA. A licença do Builder Squad não concede direito sobre biblioteca, API, dataset, marca ou conteúdo de terceiro.

## Pendência de provenance

A origem e permissão de qualquer material trazido de outro projeto devem ser registradas no `IP-CHAIN-OF-TITLE.md`. Ausência de dependência npm não prova, por si só, ausência de obrigação autoral em textos, exemplos ou conceitos expressos.
