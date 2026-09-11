#!/usr/bin/env node
import { existsSync, lstatSync, realpathSync, renameSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, parse, resolve } from "node:path";
import { fail, parseArgs, required } from "./lib/cli.mjs";

try {
  const args = parseArgs(process.argv.slice(2));
  if (!args.approved) throw new Error("Restore exige --approved.");
  const target = resolve(required(args, "target"));
  if (!existsSync(target) || target === parse(target).root || target === homedir()) {
    throw new Error("Target inválido ou amplo demais.");
  }

  const backup = resolve(required(args, "backup"));
  if (!basename(backup).startsWith(".builder-squad.backup-")) {
    throw new Error("O backup deve seguir .builder-squad.backup-<timestamp>.");
  }
  if (!existsSync(backup) || !lstatSync(backup).isDirectory()) throw new Error("Backup inexistente ou inválido.");
  if (realpathSync(dirname(backup)) !== realpathSync(target)) throw new Error("O backup deve pertencer ao target informado.");

  const current = resolve(target, ".builder-squad");
  if (!existsSync(current)) throw new Error("Instalação atual ausente; restore abortado sem mutação.");
  const displaced = resolve(target, `.builder-squad.displaced-${new Date().toISOString().replace(/[:.]/g, "-")}`);
  renameSync(current, displaced);
  try {
    renameSync(backup, current);
  } catch (error) {
    renameSync(displaced, current);
    throw error;
  }

  process.stdout.write(`Backup restaurado em ${current}\nInstalação substituída preservada em ${displaced}\n`);
} catch (error) {
  fail(error);
}
