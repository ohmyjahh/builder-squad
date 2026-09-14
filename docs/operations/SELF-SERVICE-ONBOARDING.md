# Onboarding Self-Service

## Princípio

O onboarding orienta, mede e recupera o usuário sem prometer instalação assistida. Mensagens de ativação devem apontar para documentação e diagnóstico. Relato de defeito reproduzível pode ser recebido; configuração individual não faz parte da oferta.

**Não há suporte individual de instalação.**

## Builder IA

### Momento 0 — Compra aprovada

- confirmar compra e acesso;
- mostrar por onde começar;
- pedir que escolha um problema pequeno;
- apresentar a sessão semanal como opcional;
- não bloquear o acesso por falta de consentimento de marketing.

### Primeira vitória

Criar uma frase no formato:

`Quero transformar [problema] em [app/sistema/automação] para [usuário], começando por [menor fluxo útil].`

### Ativação medida

- acesso à primeira aula;
- primeiro exercício salvo;
- primeiro projeto iniciado;
- primeira versão testada.

## Builder Squad

### Etapa 1 — Preparar

1. confirmar Node 18+;
2. confirmar Git;
3. escolher Codex ou Claude Code;
4. verificar espaço e permissões no diretório do projeto;
5. ler licença e limites.

### Etapa 2 — Obter e verificar

1. baixar o pacote da versão licenciada;
2. baixar o `.sha256`;
3. comparar checksum;
4. manter o pacote original para recuperação.

### Etapa 3 — Instalar

Seguir `docs/guides/QUICKSTART.md`. A instalação usa sidecar e não deve sobrescrever instruções existentes do projeto.

### Etapa 4 — Diagnosticar

Executar doctor. Se falhar:

1. localizar o item `FAIL`;
2. abrir a seção correspondente do troubleshooting;
3. corrigir runtime, permissão ou caminho;
4. executar doctor novamente;
5. registrar defeito apenas se o comportamento divergir da documentação em ambiente compatível.

### Etapa 5 — Primeiro brief

Começar com:

> Quero iniciar um projeto. Primeiro, pergunte se ele é interno, para colocar no mercado ou híbrido. Depois conduza o briefing e proponha a rota, sem implementar antes da minha aprovação.

### Etapa 6 — Primeiro gate

- revisar finalidade;
- confirmar escopo;
- verificar riscos e permissões;
- aprovar explicitamente a primeira execução.

### Eventos de ativação

- `squad_package_downloaded`;
- `squad_doctor_passed`;
- `squad_first_brief_created`;
- `squad_route_approved`;
- `squad_first_gate_passed`.

### Recuperação sem suporte individual

| Sintoma | Recurso |
|---|---|
| runtime incompatível | compatibility + doctor |
| instalação interrompida | quickstart + restore |
| instrução existente conflita | sidecar adapter |
| rota parece errada | routing reference + exemplos |
| contexto perdido | project resume |
| atualização problemática | backup + restore |

As mensagens nunca dizem “responda que instalamos para você”. Podem dizer “consulte o diagnóstico” e “envie um relato reproduzível de defeito pelo canal informado”.

## Comunidade Builder

### Dia 0

- confirmar 12 meses de acesso;
- mostrar calendário real dos próximos 90 dias;
- explicar regras e limites coletivos;
- pedir escolha do projeto principal;
- registrar objetivo e estágio.

### Dia 1

- preencher o Canvas do Primeiro Incremento;
- escolher sessão coletiva;
- publicar compromisso no canal adequado, de forma opcional.

### Dia 7

- verificar onboarding concluído;
- lembrar primeiro encontro;
- pedir bloqueio principal;
- encaminhar para recurso ou pauta coletiva, não consultoria individual implícita.

### Ativação da Comunidade

Considerar ativado quem, em até 7 dias:

1. acessa a plataforma;
2. escolhe um projeto;
3. preenche o primeiro incremento;
4. agenda ou participa de uma sessão.

## Cancelamento e reembolso

- pedido interrompe promoções e inicia fluxo transacional;
- não usar sequência de retenção agressiva durante exercício de direito;
- confirmar recebimento, prazo e consequência de acesso;
- preservar apenas registros necessários;
- após conclusão, atualizar entitlement e suppressions.
