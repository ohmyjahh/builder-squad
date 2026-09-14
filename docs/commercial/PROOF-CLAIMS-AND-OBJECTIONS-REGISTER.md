# Registro de Provas, Claims e Objeções

## Regra

Nenhuma promessa quantitativa, depoimento, comparação, urgência, escassez ou resultado financeiro pode ser publicado sem uma linha `APPROVED` neste registro e um link para a evidência preservada.

## Claims estruturais já sustentados

| Claim | Evidência | Estado | Uso permitido |
|---|---|---|---|
| 16 agentes especialistas | `squad.yaml` e `agents/` | APPROVED | oferta, VSL e checkout |
| 75 tasks | validador e `tasks/` | APPROVED | oferta, VSL e checkout |
| 12 workflows | validador e `workflows/` | APPROVED | oferta e demonstração |
| 36 templates | validador e `templates/` | APPROVED | oferta e FAQ |
| 31 quality gates | validador e `checklists/` | APPROVED | oferta e demonstração |
| 9 automações | validador e `automations/` | APPROVED | oferta com a expressão “declarativas” |
| Codex e Claude Code | adapters e testes | APPROVED | compatibilidade, sem prometer suporte universal |
| 21 testes automatizados | suíte local e CI | APPROVED | bastidores e prova técnica |
| projetos próprios e clientes | licença comercial | APPROVED | condicionado aos limites da licença |
| instalação self-service | scripts, doctor e guides | APPROVED | deve vir acompanhado de “sem suporte individual” |

## Claims que dependem do piloto

| Claim pretendido | Evidência exigida | Estado | Enquanto pendente |
|---|---|---|---|
| instalar em até 15 minutos | amostra, mediana, ambiente e taxa de sucesso | PENDING | tratar como meta interna |
| primeiro brief em 30 minutos | telemetria ou observação consentida | PENDING | não usar como promessa |
| publicar mais rápido | baseline e comparação por perfil | PENDING | dizer “reduz etapas de organização” |
| aumentar margem de projetos | dados de custo e horas por projeto | PENDING | não quantificar |
| concluir incremento em 70% | relatório do piloto | PENDING | meta do piloto apenas |

## Prova social

Para cada depoimento, registrar:

- nome e identificação autorizada;
- texto ou vídeo original sem edição enganosa;
- autorização de uso e prazo;
- produto e versão usados;
- contexto inicial;
- resultado verificável;
- fatores externos e limites;
- canais autorizados.

Até haver prova real, as páginas usarão demonstrações do produto, capturas de artefatos e placeholders explicitamente marcados para remoção antes de publicar.

## Demonstrações recomendadas

1. Fazer o intake perguntar se o projeto é interno, de mercado ou híbrido.
2. Mostrar duas rotas diferentes para a mesma ideia conforme a finalidade.
3. Exibir um handoff entre Produto → Arquitetura → Execução.
4. Tentar saltar um gate e mostrar o bloqueio.
5. Retomar um projeto de referência sem perder decisões.
6. Executar doctor, validate e testes.

## Objeções que exigem evidência visual

| Objeção | Evidência ideal |
|---|---|
| “É só um monte de prompts” | árvore real de agentes, tasks, workflows e gates |
| “Vai se perder entre agentes” | handoff preenchido e state machine |
| “Não serve para meu tipo de projeto” | três exemplos: interno, mercado e híbrido |
| “Tenho medo de quebrar algo” | backup, restore, aprovação e rollback |
| “Não sei instalar” | gravação do fluxo self-service; não prometer atendimento |

## Urgência e escassez permitidas

- horário real da próxima exibição programada;
- fechamento real das inscrições daquela edição;
- encerramento real do carrinho da Comunidade, se o acesso iniciar em uma data comum;
- capacidade real de sessões coletivas, se documentada;
- mudança global de preço com data aprovada.

## Urgência e escassez proibidas

- contador reiniciado por visitante;
- “essa terça é a única chance” quando há nova edição recorrente não informada;
- bots fingindo presença ou mensagens atuais;
- perguntas antigas apresentadas como se fossem feitas naquele momento;
- vagas ou bônus sem limite operacional;
- preço “subindo hoje” repetido toda semana.

## Aprovação de claims novos

`DRAFT → EVIDENCE_ATTACHED → LEGAL_REVIEW_IF_NEEDED → APPROVED → PUBLISHED → RETIRED`

Owner padrão: Growth & Sales Strategist. Aprovador final: titular da oferta. Claims jurídicos, financeiros, comparativos ou de renda exigem revisão especializada antes de `APPROVED`.
