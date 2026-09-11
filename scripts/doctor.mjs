#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { SQUAD_ROOT } from "./lib/paths.mjs";
import { printValidation, runValidation } from "./validate.mjs";

const nodeMajor = Number(process.versions.node.split(".")[0]);
const git = spawnSync("git", ["--version"], { encoding: "utf8" });
const repo = spawnSync("git", ["rev-parse", "--is-inside-work-tree"], { cwd: SQUAD_ROOT, encoding: "utf8" });

const checks = [
  ["Node >= 18", nodeMajor >= 18, process.versions.node],
  ["Git disponível", git.status === 0, git.stdout.trim() || git.stderr.trim()],
  ["Repositório Git", repo.status === 0 && repo.stdout.trim() === "true", SQUAD_ROOT],
  ["Manifest", existsSync(join(SQUAD_ROOT, "squad.yaml")), "squad.yaml"],
  ["Licença proprietária", existsSync(join(SQUAD_ROOT, "LICENSE.md")), "LICENSE.md"]
];

for (const [name, ok, detail] of checks) {
  process.stdout.write(`[${ok ? "PASS" : "FAIL"}] ${name}: ${detail}\n`);
}

process.stdout.write("\nValidação estrutural\n");
const structural = printValidation(runValidation());
process.exitCode = checks.every(([, ok]) => ok) && structural ? 0 : 1;

