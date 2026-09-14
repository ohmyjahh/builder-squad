# Cue Sheet — Interação da Sessão Programada

## Objetivo

Sincronizar vídeo, interface e interações sem representar automações como pessoas atuais. O player pode exibir cards, enquetes reais e perguntas históricas rotuladas.

| Tempo | Fala/ação do vídeo | Elemento na interface | Fonte | Regra |
|---:|---|---|---|---|
| 00:10 | boas-vindas | badge `EXIBIÇÃO PROGRAMADA` | sistema | nunca usar `AO VIVO` |
| 00:40 | explica formato | card de transparência | sistema | conteúdo previamente gravado |
| 03:30 | “como você usa IA?” | enquete atual | participantes reais | mostrar volume real ou ocultar |
| 06:00 | comenta respostas | resultado real se houver | sessão atual | se vazio, vídeo não finge resultado |
| 11:30 | “de onde você participa?” | campo opcional atual | participantes reais | consentimento e sem obrigatoriedade |
| 12:30 | mostra alcance anterior | mosaico `Cidades de edições anteriores` | histórico autorizado | não usar avatar/nome sem autorização |
| 19:00 | interno vs. mercado | enquete atual | participantes reais | terceira opção híbrido |
| 25:30 | introduz Builder OS | diagrama animado | sistema | sem contador de usuários |
| 32:00 | fala de banco de dados | `Pergunta de edição anterior` | pergunta real autorizada | texto anonimizado |
| 38:30 | começa construção | checklist sincronizado | sistema | marca passos, não pessoas |
| 46:00 | validação | quiz de uma pergunta | participantes reais | resposta não vira claim |
| 54:00 | transição | card “conteúdo → cadência” | sistema | sem notificação falsa de compra |
| 58:00 | entregáveis | calendário real 90 dias | operação | bloqueia publicação se vazio |
| 65:00 | preço | card R$997/12 meses | checkout | fonte única de preço |
| 67:00 | fechamento | contador da edição | backend | data absoluta; não reinicia |
| 72:00 | objeções | perguntas históricas rotuladas | histórico autorizado | sem simular envio atual |
| fim | próximos passos | CTA + replay + pergunta | sistema | registrar cliques reais |

## Comportamento quando há pouca interação

- manter enquete aberta e mostrar “respostas recebidas: N” apenas se `N` for real;
- se `N < 5`, omitir gráfico e seguir a aula;
- nunca preencher a distribuição com dados históricos sem rotular;
- a gravação deve funcionar mesmo com zero participantes;
- perguntas atuais entram numa fila real e não alteram o vídeo gravado.

## Perguntas históricas

Estrutura visual obrigatória:

`PERGUNTA DE UMA EDIÇÃO ANTERIOR · identidade anonimizada/autorizada`

Campos internos:

- `question_id`;
- origem e data;
- texto original;
- versão editada;
- fundamento de uso/autorização;
- aprovador;
- expiração da autorização.

## Chat atual

- se habilitado, usuários reais escrevem como si mesmos;
- contas da equipe exibem selo `EQUIPE` ou `MODERAÇÃO`;
- mensagens automáticas exibem selo `SISTEMA`;
- não gerar presença, cidade, dúvida, aplauso, compra ou depoimento por bot;
- qualquer número de pessoas online vem da telemetria real do player.

## QA de sincronização

- conferir cue em 0.75x, 1x e 1.25x;
- pausar cues quando o vídeo pausa;
- impedir disparo duplicado ao atualizar a página;
- persistir respostas atuais por `session_id`;
- testar zero participantes;
- testar atraso de rede;
- testar replay: remover chat atual e manter apenas cards históricos rotulados;
- garantir que contador e checkout usem o mesmo `edition_id`.
