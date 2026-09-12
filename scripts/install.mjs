#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, renameSync, statSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { parse, resolve } from "node:path";
import { fail, parseArgs, required } from "./lib/cli.mjs";
import { SQUAD_ROOT } from "./lib/paths.mjs";

const coreEntries = ["agents", "tasks", "workflows", "templates", "checklists", "data", "schemas", "config", "automations", "adapters", "scripts", "squads", "docs/guides", "docs/release", "docs/commercial", "docs/legal", "squad.yaml", "package.json", "package-lock.json", "VERSION", "AGENTS.md", "README.md", "LICENSE.md", "CHANGELOG.md", "SECURITY.md", "SUPPORT.md"];
const adapters = new Set(["codex", "claude-code"]);

function validateTarget(value) {
  const target = resolve(value);
  if (!existsSync(target) || !statSync(target).isDirectory()) throw new Error("O target deve ser um diretório de projeto existente.");
  if (target === parse(target).root || target === homedir()) throw new Error("Não instale na raiz do sistema nem no diretório pessoal.");
  return target;
}

try {
  const args = parseArgs(process.argv.slice(2));
  const adapter = required(args, "adapter", "Informe --adapter codex|claude-code.");
  if (!adapters.has(adapter)) throw new Error(`Adapter inválido: ${adapter}`);
  const target = validateTarget(required(args, "target"));
  const installRoot = resolve(target, ".builder-squad");

  if (existsSync(installRoot)) {
    if (!args.force) throw new Error(".builder-squad já existe. Use --force para preservar a instalação atual como backup.");
    const backup = `${installRoot}.backup-${new Date().toISOString().replace(/[:.]/g, "-")}`;
    renameSync(installRoot, backup);
    process.stdout.write(`Instalação anterior preservada em ${backup}\n`);
  }
  mkdirSync(installRoot, { recursive: true });

  for (const entry of coreEntries) {
    const source = resolve(SQUAD_ROOT, entry);
    if (existsSync(source)) cpSync(source, resolve(installRoot, entry), { recursive: true });
  }

  const adapterSource = resolve(SQUAD_ROOT, "adapters", adapter);
  if (!existsSync(adapterSource)) throw new Error(`Arquivos do adapter ainda não existem: ${adapter}`);
  cpSync(adapterSource, resolve(installRoot, "adapter"), { recursive: true });

  writeFileSync(resolve(installRoot, "INSTALLATION.md"), `# Builder Squad instalado

- Adapter: ${adapter}
- Instalado em: ${new Date().toISOString()}
- Core: .builder-squad/
- Entrada: builder-chief
- Primeiro comando: *start-project

Consulte .builder-squad/adapter/README.md para conectar as instruções ao ambiente sem sobrescrever configurações existentes.
`);

  process.stdout.write(`Builder Squad instalado em ${installRoot}\n`);
} catch (error) {
  fail(error);
}
