# Calendário da Edição Semanal

## Âncora

Todas as edições usam `America/Fortaleza`. A sessão começa terça-feira às 19h. A linguagem pode ser relativa, mas a automação sempre resolve e registra data/hora absolutas antes do envio.

## Ciclo operacional

| Dia/hora | Ação | Canal | Owner |
|---|---|---|---|
| quarta 09h | criar `edition_id`, grupo e URLs da próxima terça | operação | Funnel Operator |
| quarta 10h | QA de página, vídeo, chat histórico rotulado e checkout | interno | QA + Owner |
| quarta a domingo | convite “nesta terça-feira” | e-mail/WA consentido | automação |
| domingo 09h | conteúdo: o custo de usar IA sem processo | e-mail/grupo | automação |
| segunda 09h | lembrete “amanhã” + exercício de briefing | e-mail/grupo | automação |
| terça 09h | lembrete “hoje” + agenda | e-mail/grupo | automação |
| terça 15h | corte para atribuição à edição corrente | sistema | orquestrador |
| terça 16h | checagem técnica e contingência | interno | operador |
| terça 18h | link da sala e regras | grupo/e-mail | automação |
| terça 18h45 | lembrete final solicitado | WA consentido/grupo | automação |
| terça 19h | abrir exibição programada | evento | operador |
| terça 20h15 | oferta Comunidade e checkout | evento/e-mail | owner |
| terça 20h45 | classificar presença/no-show | sistema | analytics |
| terça 21h | resumo para presentes; replay para no-show | e-mail | automação |
| quarta 09h | objeção: execução e cadência | e-mail/grupo | automação |
| quarta 23h59 | encerrar replay da edição | sistema | operador |
| quinta 09h | dia final do carrinho | e-mail/grupo | automação |
| quinta 20h | lembrete real de 4 horas | WA consentido | automação |
| quinta 23h | lembrete final por e-mail | e-mail | automação |
| quinta 23h59 | fechar checkout da edição | sistema | operador |
| sexta 09h | onboarding dos novos membros | e-mail/comunidade | automação |
| sexta 18h | arquivar grupo de aquecimento | grupo | operador |

## Regras de texto relativo

- Não armazenar “hoje”, “amanhã” ou “nesta terça” como data do evento.
- Resolver `edition_start_at` antes da renderização.
- Se o envio atrasar e mudar de janela, recalcular o template.
- Se o horário já passou, cancelar; nunca enviar lembrete atrasado.
- Exibir a data completa em confirmação, página e calendário, mesmo quando o título usa linguagem relativa.

## Nomenclatura

- `edition_id`: `CBR-AAAA-SNN`, usando ano e semana ISO.
- grupo: `Sessão Builder | DD/MM`.
- campanha: `builder-session-{edition_id}`.
- carrinho: `community-{edition_id}`.

## Capacidade e continuidade

O grupo semanal é uma unidade de aquecimento, não uma alegação de turma única. A copy pode dizer “grupo desta edição” e “inscrições desta edição”, mas não “última chance da vida”. Se uma edição for cancelada, comunicar antes e transferir o consentimento apenas para a remarcação relacionada.

## Checklist de virada

- edição anterior fechada e mensagens canceladas;
- compradores importados e suprimidos das vendas correspondentes;
- novo grupo criado com descrição correta;
- link testado em sessão anônima;
- data/hora e timezone conferidos;
- sala e replay carregados;
- checkout abre e fecha nos horários reais;
- templates aprovados no WhatsApp;
- links com UTM e `edition_id`;
- owner e substituto confirmados.
