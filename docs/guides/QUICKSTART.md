# Quickstart do Builder Squad

## 1. Diagnostique a instalação

Na raiz do Builder Squad:

```bash
npm run doctor
npm test
```

O primeiro comando deve terminar em `PASS`; o segundo deve concluir sem testes falhos.

## 2. Instale como sidecar

Codex:

```bash
node scripts/install.mjs --adapter codex --target /caminho/do/projeto
```

Claude Code:

```bash
node scripts/install.mjs --adapter claude-code --target /caminho/do/projeto
```

Leia o `README.md` do adapter instalado em `.builder-squad/adapter/`. Acrescente apenas a referência sugerida às instruções existentes do projeto.

## 3. Ative o Builder Chief

Use:

```text
@builder-chief *start-project
```

O primeiro briefing deve perguntar se o projeto é interno, mercado ou híbrido. Se não perguntar, interrompa: o workflow ainda não foi iniciado corretamente.

## 4. Responda por resultado, não por tecnologia

Informe:

- o que precisa mudar;
- quem usa, beneficia, paga e aprova;
- como o sucesso será medido;
- o que já existe;
- prazo e restrições reais;
- dados sensíveis, pagamentos, integrações e produção;
- ações que a IA pode ou não executar.

O Builder Chief deve perguntar em blocos curtos, atualizar o brief e escolher a próxima pergunta com maior ganho de informação.

## 5. Aprove o brief e acompanhe por estado

```bash
node .builder-squad/scripts/status.mjs --project /caminho/da/memoria
```

Os estados e próximos owners ficam em `status.yaml`. Decisões ficam em `decisions/`; handoffs ficam em `handoffs/`; evidências ficam em `evidence/`.

## 6. Entenda os gates

- `PASS`: avança.
- `CONCERNS`: só avança após aceite explícito do risco.
- `FAIL`: retorna ao owner da causa.
- `BLOCKED`: depende de informação, autoridade ou condição externa.

Nunca force uma transição editando o status para contornar um gate.

## 7. Retome sem perder contexto

Use `@builder-chief *resume-project`. O squad lê a memória, verifica mudanças e aprovações vencidas, preserva trabalho concluído e cria o próximo handoff.

