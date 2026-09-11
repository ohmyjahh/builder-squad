#!/usr/bin/env node
import { existsSync, renameSync } from "node:fs";
import { homedir } from "node:os";
import { parse, resolve } from "node:path";
import { fail, parseArgs, required } from "./lib/cli.mjs";

try {
  const args = parseArgs(process.argv.slice(2));
  if (!args.approved) throw new Error("Desinstalação exige --approved.");
  const target = resolve(required(args, "target"));
  if (!existsSync(target) || target === parse(target).root || target === homedir()) {
    throw new Error("Target inválido ou amplo demais.");
  }

  const current = resolve(target, ".builder-squad");
  if (!existsSync(current)) throw new Error("Nenhuma instalação .builder-squad encontrada.");
  const archived = resolve(target, `.builder-squad.uninstalled-${new Date().toISOString().replace(/[:.]/g, "-")}`);
  renameSync(current, archived);
  process.stdout.write(`Builder Squad removido da posição ativa.\nArquivo recuperável: ${archived}\n`);
} catch (error) {
  fail(error);
}
