#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptsRoot = dirname(fileURLToPath(import.meta.url));
const [command = "help", ...args] = process.argv.slice(2);
const commands = {
  validate: "validate.mjs",
  doctor: "doctor.mjs",
  route: "route.mjs",
  init: "init-project.mjs",
  status: "status.mjs",
  transition: "transition.mjs",
  handoff: "create-handoff.mjs",
  package: "package.mjs",
  install: "install.mjs"
};

if (command === "help" || !commands[command]) {
  process.stdout.write(`Builder Squad CLI

Comandos:
  validate     Valida estrutura, cobertura e referências
  doctor       Diagnostica runtime e integridade
  route        Simula classificação e rota
  init         Inicializa memória canônica de um projeto
  status       Exibe estado resumido
  transition   Executa transição legal de estado
  handoff      Cria handoff autocontido
  package      Gera pacote com checksums
  install      Instala sidecar Codex ou Claude Code
`);
  process.exit(command === "help" ? 0 : 1);
}

const result = spawnSync(process.execPath, [resolve(scriptsRoot, commands[command]), ...args], {
  stdio: "inherit"
});
process.exit(result.status ?? 1);

