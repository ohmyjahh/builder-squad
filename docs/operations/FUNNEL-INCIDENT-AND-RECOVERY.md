# Incidentes e Recuperação do Funil

## Severidade

| Nível | Exemplos | Resposta inicial |
|---|---|---:|
| S1 | envio sem consentimento em massa, vazamento, cobrança duplicada, checkout após fechamento, fake live publicado | 15 min |
| S2 | acesso bloqueado, evento indisponível, webhook parado, segmentação ampla incorreta | 30 min |
| S3 | link secundário quebrado, mensagem atrasada isolada, renderização ruim | 4 h |
| S4 | erro cosmético ou melhoria | próximo ciclo |

Os tempos são objetivos internos de triagem, não SLA contratual.

## Primeiros passos

1. parar a fonte do dano;
2. congelar filas relacionadas;
3. preservar logs e `edition_id`;
4. identificar escopo e contatos afetados;
5. corrigir estado canônico antes de reenviar;
6. comunicar apenas fatos confirmados;
7. validar recuperação;
8. registrar causa, impacto e prevenção.

## Playbooks

### Mensagem enviada sem consentimento

- pausar campanha e número/template;
- suprimir afetados;
- não enviar desculpa promocional;
- avaliar comunicação de correção com Legal/Privacidade;
- revisar origem, versão e sincronização do consent ledger;
- reativar apenas após teste end-to-end.

### Comprador recebeu abandono

- cancelar filas por produto;
- confirmar se webhook chegou e foi deduplicado;
- pedir desculpas de forma objetiva se necessário;
- não oferecer desconto compensatório automaticamente;
- criar teste de corrida compra × fila.

### Checkout aceitou após fechamento

- fechar imediatamente;
- listar pedidos posteriores;
- honrar ou reembolsar de forma uniforme conforme decisão jurídica/comercial;
- comunicar a todos os afetados com a mesma regra;
- não ocultar o incidente nem reescrever timestamp.

### Evento indisponível

- trocar para URL de contingência previamente testada;
- suspender lembretes que apontam para link quebrado;
- comunicar status no grupo/e-mail;
- se remarcado, informar data completa e manter opt-out;
- qualquer extensão de replay/carrinho vale para todos os afetados e tem justificativa pública.

### Vídeo ou cue incorreto

- pausar exibição;
- remover card que simula informação atual;
- preservar captura e versão;
- se a transparência foi comprometida, comunicar correção antes de continuar;
- bloquear nova edição até gate ético aprovado.

### Link ou data errada

- cancelar filas futuras;
- atualizar fonte da edição, não cada template manualmente;
- enviar correção somente aos afetados;
- título começa com `CORREÇÃO:`;
- não misturar oferta à correção.

### Vazamento ou dado pessoal em log/chat

- restringir acesso e preservar evidência;
- remover exposição pública de forma controlada;
- acionar Security e responsável por privacidade;
- avaliar obrigações de comunicação conforme risco e orientação profissional;
- não copiar o dado para tickets adicionais.

## Mensagens de contingência

### Correção de data

> CORREÇÃO — Sessão Builder. A mensagem anterior apresentou uma data incorreta. A data válida é [DATA COMPLETA], às 19h, horário de Fortaleza/Brasília. Detalhes: [URL]. Desculpe pelo erro. Esta comunicação não altera suas preferências.

### Evento indisponível

> A Sessão Builder está temporariamente indisponível por uma falha técnica. Interrompemos a exibição e enviaremos uma atualização objetiva até [HORÁRIO]. Não é necessário atualizar a página repetidamente.

### Pagamento duplicado

> Identificamos uma possível duplicidade no pedido [ID]. A cobrança está em análise e nenhuma nova compra é necessária. Atualizaremos o status até [PRAZO]. Não envie dados de cartão por mensagem.

## Pós-incidente

- timeline em UTC e horário local;
- causa raiz e fatores contribuintes;
- eventos e contatos afetados;
- impacto financeiro, de privacidade e reputação;
- comunicação enviada;
- recuperação verificada;
- teste de regressão;
- owner e prazo da ação preventiva;
- decisão de retomar ou cancelar edição.

Incidente S1 ou S2 exige revisão antes da próxima edição.
