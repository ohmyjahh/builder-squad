# Checklist de QA do Funil

## Oferta e copy

- [ ] preço idêntico em VSL, página, e-mail, WhatsApp e checkout;
- [ ] prazo de acesso e renovação claros;
- [ ] entregáveis existem hoje ou estão datados como futuros;
- [ ] ausência de promessa de renda;
- [ ] números do Squad conferem com o manifest;
- [ ] instalação self-service e ausência de suporte individual visíveis;
- [ ] depoimentos têm autorização e contexto;
- [ ] nenhuma vaga, contador, bônus ou preço fictício;
- [ ] gravação não é chamada de live.

## Páginas

- [ ] zero placeholder entre colchetes;
- [ ] mobile, desktop, teclado e leitor de tela testados;
- [ ] vídeo com legenda, transcrição e fallback;
- [ ] CTA leva ao produto correto;
- [ ] recusa do upsell é visível;
- [ ] identidade, CNPJ e contato presentes;
- [ ] termos, privacidade e reembolso abrem;
- [ ] data completa aparece além do texto relativo;
- [ ] timezone exibido.

## Checkout

- [ ] ambiente de produção separado do teste;
- [ ] preço total e parcelamento corretos;
- [ ] aceite contratual desmarcado;
- [ ] consentimentos de e-mail e WhatsApp separados e desmarcados;
- [ ] versões de documentos persistidas;
- [ ] pagamento aprovado/reprovado/pendente testado;
- [ ] webhook assinado e idempotente;
- [ ] duplicata não gera dois acessos;
- [ ] reembolso e chargeback alteram estado;
- [ ] cartão completo não aparece em logs;
- [ ] checkout da edição fecha no backend.

## E-mail

- [ ] domínio autenticado com SPF, DKIM e DMARC;
- [ ] remetente e reply-to reais;
- [ ] links HTTPS e rastreáveis;
- [ ] descadastro em uma etapa;
- [ ] hard bounce suprimido;
- [ ] compra cancela abandono;
- [ ] template transacional não carrega promoção indevida;
- [ ] tokens têm fallback;
- [ ] frequência global aplicada;
- [ ] render em clientes principais conferido.

## WhatsApp

- [ ] opt-in explícito com texto e versão;
- [ ] templates aprovados;
- [ ] categoria compatível;
- [ ] nome SOW HOUSE visível;
- [ ] SAIR e sinônimos testados;
- [ ] bloqueio/denúncia suprime;
- [ ] frequência aplicada;
- [ ] data e link pertencem à edição;
- [ ] compra cancela venda;
- [ ] nenhuma mensagem para telefone sem consentimento.

## Grupo

- [ ] grupo correto por edição;
- [ ] descrição informa formato gravado;
- [ ] admins identificados;
- [ ] automação identificada como sistema;
- [ ] zero bot-persona;
- [ ] perguntas históricas rotuladas;
- [ ] privacidade e convivência publicadas;
- [ ] arquivamento agendado;
- [ ] no-show individual não é exposto no grupo.

## Evento

- [ ] vídeo, áudio, legenda e transcrição;
- [ ] badge “exibição programada”;
- [ ] data/hora pelo servidor;
- [ ] telemetria de presença real;
- [ ] cues pausam junto com o vídeo;
- [ ] teste com zero participantes;
- [ ] teste com rede lenta e refresh;
- [ ] replay sem chat atual fictício;
- [ ] CTA e checkout usam `edition_id`;
- [ ] formulário de pergunta funcional.

## Automação e dados

- [ ] todos os eventos obrigatórios chegam;
- [ ] eventos duplicados são ignorados;
- [ ] contato tem uma edição ativa;
- [ ] atraso recalcula texto relativo;
- [ ] mensagem atrasada é cancelada;
- [ ] opt-out sincroniza em até 15 minutos;
- [ ] PII não entra no analytics;
- [ ] retenção e acesso configurados;
- [ ] dead-letter queue monitorada;
- [ ] dashboard reconcilia checkout.

## Cenários end-to-end

- [ ] compra curso sem opt-in;
- [ ] compra curso com opt-in WhatsApp;
- [ ] abandono do curso e compra após E2;
- [ ] compra curso + Squad;
- [ ] recusa Squad;
- [ ] abandono Squad e compra posterior;
- [ ] inscrição sem grupo;
- [ ] inscrito presente;
- [ ] inscrito no-show;
- [ ] replay concluído;
- [ ] checkout Comunidade abandonado;
- [ ] compra Comunidade no prazo;
- [ ] tentativa após fechamento;
- [ ] opt-out em cada canal;
- [ ] reembolso em cada produto;
- [ ] edição cancelada.

## Decisão

- **PASS:** todos os críticos aprovados e riscos residuais aceitos.
- **CONCERNS:** falha não crítica com owner e prazo.
- **FAIL:** função central incorreta; corrigir antes de campanha.
- **NO-GO:** consentimento, preço, checkout, acesso, fake live, dados ou prazo real falhou.

Registrar evidência, ambiente, data, executor e aprovador.
