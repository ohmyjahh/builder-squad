# Referência de Comandos

## CLI

Todos os comandos podem ser chamados por `node scripts/builder-squad.mjs <comando>`.

### validate

Verifica manifest, cobertura do blueprint, contratos de tasks, referências, workflows, gates, automações, adapters, schemas, intake e padrões de segredo.

### doctor

Verifica Node, Git, repositório, licença e executa o validador completo.

### route

Argumentos principais:

- `--purpose internal|market|hybrid`;
- `--features ui,data,backend,ai,integrations,payments`;
- `--audience single|team|external`;
- `--multi-tenant`;
- `--sensitive-data`;
- `--autonomous-actions`;
- `--business-critical`;
- `--public-production`;
- `--client-delivery`.

### init

Exige `--name` e finalidade. Aceita `--target` e `--request`. Se a finalidade for omitida em terminal interativo, faz a pergunta obrigatória.

### status

```bash
node scripts/status.mjs --project /caminho/do/projeto
```

### transition

```bash
node scripts/transition.mjs \
  --project /caminho/do/projeto \
  --to CLASSIFIED \
  --task create-canonical-brief \
  --owner builder-chief
```

`RELEASING` e `ROLLING_BACK` exigem `--approved --approval-id ID`.

### handoff

```bash
node scripts/create-handoff.mjs \
  --project /caminho/do/projeto \
  --from builder-chief \
  --to process-analyst \
  --task map-current-process \
  --request "Mapear processo e baseline" \
  --outputs "as_is_process,baseline" \
  --criteria "owner identificado,baseline mensurável"
```

### install

Cria `.builder-squad/` dentro de um projeto existente. `--force` move a instalação atual para backup datado antes de instalar.

### package

Cria `dist/builder-squad-v<VERSÃO>/` e `SHA256SUMS`. Pacote anterior também é preservado como backup.

## Comandos do Builder Chief

- `*start-project`
- `*diagnose`
- `*route`
- `*status`
- `*resume`
- `*correct-course`
- `*close-project`

Os comandos de cada especialista ficam declarados no respectivo arquivo em `agents/`.

