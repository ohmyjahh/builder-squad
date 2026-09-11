#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { basename, join, resolve } from "node:path";
import { parseArgs } from "./lib/cli.mjs";
import { SQUAD_ROOT } from "./lib/paths.mjs";

const include = [
  "agents", "tasks", "workflows", "templates", "checklists", "data", "schemas",
  "config", "automations", "adapters", "scripts", "squads", "tests", "docs/guides", "docs/release", "docs/commercial", "examples",
  "squad.yaml", "package.json", "package-lock.json", "VERSION", "README.md", "AGENTS.md", "LICENSE.md",
  "CHANGELOG.md", "SECURITY.md", "SUPPORT.md", "CONTRIBUTING.md", ".gitattributes"
];

function filesRecursively(path) {
  const result = [];
  if (!existsSync(path)) return result;
  if (statSync(path).isFile()) return [path];
  for (const item of readdirSync(path).sort()) result.push(...filesRecursively(join(path, item)));
  return result;
}

try {
  const args = parseArgs(process.argv.slice(2));
  const packageJson = JSON.parse(readFileSync(resolve(SQUAD_ROOT, "package.json"), "utf8"));
  const distRoot = resolve(SQUAD_ROOT, "dist");
  mkdirSync(distRoot, { recursive: true });
  const target = resolve(distRoot, `builder-squad-v${packageJson.version}`);

  if (existsSync(target)) {
    const backup = `${target}.backup-${new Date().toISOString().replace(/[:.]/g, "-")}`;
    renameSync(target, backup);
    process.stdout.write(`Pacote anterior preservado em ${backup}\n`);
  }
  mkdirSync(target, { recursive: true });

  for (const entry of include) {
    const source = resolve(SQUAD_ROOT, entry);
    if (!existsSync(source)) continue;
    cpSync(source, resolve(target, entry), { recursive: true, errorOnExist: true });
  }

  const git = spawnSync("git", ["rev-parse", "HEAD"], { cwd: SQUAD_ROOT, encoding: "utf8" });
  const releaseManifest = {
    product: "Builder Squad",
    version: packageJson.version,
    generated_at: new Date().toISOString(),
    source_commit: git.status === 0 ? git.stdout.trim() : null,
    runtime: `node ${process.versions.node}`,
    checksum_algorithm: "SHA-256",
    distribution: "private-commercial-release-candidate"
  };
  writeFileSync(resolve(target, "RELEASE-MANIFEST.json"), `${JSON.stringify(releaseManifest, null, 2)}\n`);

  const checksumFile = resolve(target, "SHA256SUMS");
  const lines = filesRecursively(target)
    .filter((path) => path !== checksumFile)
    .map((path) => {
      const hash = createHash("sha256").update(readFileSync(path)).digest("hex");
      return `${hash}  ${path.slice(target.length + 1)}`;
    });
  writeFileSync(checksumFile, `${lines.join("\n")}\n`);
  process.stdout.write(`Pacote criado: ${target}\nArquivos verificados: ${lines.length}\n`);
} catch (error) {
  process.stderr.write(`Erro: ${error.message}\n`);
  process.exitCode = 1;
}
