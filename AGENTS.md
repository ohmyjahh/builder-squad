# Regras de Desenvolvimento do Builder Squad

## Idioma

Toda documentação, mensagem de agente e interação com o usuário deve ser escrita em português do Brasil. Identificadores técnicos e nomes de arquivos permanecem em inglês quando isso melhorar interoperabilidade.

## Arquitetura

1. O squad é task-first: agentes existem para executar tasks definidas.
2. O `Builder Chief` diagnostica, roteia e governa; não substitui especialistas.
3. Toda informação durável deve ser registrada nos artefatos do projeto.
4. Fatos, hipóteses, decisões e pendências devem permanecer separados.
5. Nenhum handoff pode depender apenas do histórico da conversa.
6. Todo workflow possui entradas, saídas, gates, caminhos de correção e condição de conclusão.
7. A rota `internal` e a rota `market` nunca devem ser tratadas como equivalentes.

## Desenvolvimento orientado por stories

1. Toda implementação começa em `docs/stories/`.
2. Atualize os checkboxes durante a execução.
3. Mantenha a seção `File List` da story sincronizada.
4. Implemente apenas o que os critérios de aceite autorizam.
5. Não marque uma story como concluída sem validação proporcional ao risco.

## Qualidade

- Preserve o trabalho existente.
- Prefira mudanças pequenas, reversíveis e auditáveis.
- Não exponha segredos, tokens, credenciais ou dados pessoais.
- Ações destrutivas, publicação, pagamentos e mudanças de produção exigem aprovação humana.
- Todo artefato gerado deve informar origem, responsável, status e versão do contrato.
- Falha em um quality gate retorna à task responsável; não segue adiante por conveniência.

## Portabilidade

O núcleo deve ser independente do provedor. Adaptadores específicos para Codex, Claude Code ou outros ambientes não podem contaminar os contratos canônicos do squad.
