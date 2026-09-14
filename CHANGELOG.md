# Changelog

Todas as mudanças relevantes do Builder Squad são documentadas aqui. O projeto segue Semantic Versioning.

## [0.10.0-rc.1] — 2026-09-14

### Adicionado

- Arquitetura completa da escada Builder IA → Builder Squad → Comunidade Builder.
- Campaign brief, posicionamento, mecanismo, message house e registro de claims.
- VSL de aquisição, VSL de upsell e roteiro da sessão programada com pitch.
- Copy de páginas, checkouts, 28 e-mails, 10 templates privados de WhatsApp e 13 mensagens de grupo.
- Máquina comercial com 17 estados, 23 transições, 37 eventos, 11 flows e 36 envios referenciados.
- Calendário semanal, cue sheet, consentimento, suppressions, tracking e experimentos.
- Onboarding self-service, playbook operacional, QA e recuperação de incidentes.
- Sete testes do funil e oito validações comerciais.

### Alterado

- Instalador e empacotador incluem apenas o manifesto comercial destinado ao comprador.
- Estratégia, copy, automações de marketing e operação interna ficam fora do pacote distribuído.
- Validação passa a conferir preço, referências de mensagens, opt-in do WhatsApp, disclosure do evento e ausência de suporte individual de instalação.
- Validador diferencia o repositório interno completo do pacote do comprador e valida os dois formatos sem exigir ativos deliberadamente privados.

### Estado

Arquitetura e copy vendor-neutral preparadas. Implantação depende de módulos e agenda reais, seleção da stack, gravações, revisão profissional e QA end-to-end.

## [0.9.0-rc.3] — 2026-09-12

### Adicionado

- Pacote jurídico com licença comercial, termos de uso e venda, privacidade, reembolso, IA/dados e DPA.
- Aviso de copyright, inventário de terceiros e cadeia de titularidade.
- Certificado de licença e registro de aceite do comprador.
- Dossiê preparatório para registro de software e plano de clearance de marca no INPI.
- Validações automatizadas de presença e consistência da identidade jurídica.

### Alterado

- Titular definido como SOW HOUSE PRODUCOES E TREINAMENTOS LTDA, CNPJ 54.474.144/0001-09.
- Instalação definida como self-service, sem suporte individual incluído.
- Instalador e pacote passam a incluir documentação jurídica e comercial.

### Estado

Release candidate apta para revisão jurídica externa e piloto privado. A versão 1.0.0 continua condicionada às evidências externas registradas.

## [0.9.0-rc.2] — 2026-09-11

### Corrigido

- O instalador sidecar agora inclui `docs/release`, preservando todos os links locais do README em uma instalação limpa.
- O teste do instalador verifica explicitamente a presença das notas da versão instalada.

### Estado

Release candidate que substitui a 0.9.0-rc.1 para o piloto fechado. A RC anterior permanece registrada como histórico do primeiro ciclo de CI.

## [0.9.0-rc.1] — 2026-09-11

### Adicionado

- Builder Chief e 15 especialistas.
- 75 tasks task-first e 12 workflows condicionais.
- Rotas internal, market e hybrid com pergunta obrigatória no intake.
- 36 templates e 31 quality gates.
- 9 automações declarativas.
- CLI para validate, doctor, route, init, status, transition, handoff e package.
- Install, update, restore e uninstall recuperáveis.
- Adapters sidecar para Codex e Claude Code.
- 5 projetos de referência.
- 5 schemas e memória canônica baseada em arquivos.
- CI e checks de segurança estrutural.

### Segurança

- Aprovação humana vinculada a produção, publicação, destruição, gasto, segredos e mudança material.
- Limite de dois retries automáticos.
- Verificação de padrões de credenciais.
- Gate de ética comercial contra prova, urgência ou presença ao vivo fabricadas.

### Estado

Release candidate para piloto fechado. A versão 1.0.0 depende de validação externa, correções do piloto e revisão jurídica final.
