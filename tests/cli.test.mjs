import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { SQUAD_ROOT } from "../scripts/lib/paths.mjs";

function run(script, args, cwd = SQUAD_ROOT) {
  return spawnSync(process.execPath, [resolve(SQUAD_ROOT, "scripts", script), ...args], {
    cwd,
    encoding: "utf8"
  });
}

test("CLI inicializa, transiciona e cria handoff", () => {
  const temp = mkdtempSync(resolve(tmpdir(), "builder-squad-test-"));
  const project = resolve(temp, "acme-ops");

  try {
    const initialized = run("init-project.mjs", [
      "--name", "Acme Ops",
      "--purpose", "internal",
      "--features", "ui,data,backend",
      "--target", project,
      "--request", "Reduzir retrabalho operacional."
    ]);
    assert.equal(initialized.status, 0, initialized.stderr);
    assert.ok(existsSync(resolve(project, "project.yaml")));
    assert.match(readFileSync(resolve(project, "brief.md"), "utf8"), /Finalidade: internal/);

    const transitioned = run("transition.mjs", [
      "--project", project,
      "--to", "CLASSIFIED",
      "--task", "create-canonical-brief",
      "--owner", "builder-chief"
    ]);
    assert.equal(transitioned.status, 0, transitioned.stderr);
    assert.match(readFileSync(resolve(project, "status.yaml"), "utf8"), /^state: CLASSIFIED$/m);

    const handoff = run("create-handoff.mjs", [
      "--project", project,
      "--from", "builder-chief",
      "--to", "process-analyst",
      "--task", "map-current-process",
      "--request", "Mapear processo e estabelecer baseline.",
      "--outputs", "as_is_process,baseline",
      "--criteria", "owner identificado,baseline mensurável"
    ]);
    assert.equal(handoff.status, 0, handoff.stderr);
    assert.ok(existsSync(resolve(project, "handoffs")));
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});

test("instalador cria sidecar sem alterar instruções do projeto", () => {
  const target = mkdtempSync(resolve(tmpdir(), "builder-squad-install-"));
  const version = readFileSync(resolve(SQUAD_ROOT, "VERSION"), "utf8").trim();
  try {
    const installed = run("install.mjs", ["--adapter", "codex", "--target", target]);
    assert.equal(installed.status, 0, installed.stderr);
    assert.ok(existsSync(resolve(target, ".builder-squad", "agents", "builder-chief.md")));
    assert.ok(existsSync(resolve(target, ".builder-squad", "adapter", "AGENTS.builder-squad.md")));
    assert.ok(existsSync(resolve(target, ".builder-squad", "scripts", "validate.mjs")));
    assert.ok(existsSync(resolve(target, ".builder-squad", "docs", "release", `RELEASE-NOTES-${version}.md`)));
    assert.ok(existsSync(resolve(target, ".builder-squad", "docs", "legal", "COMMERCIAL-LICENSE.md")));
    assert.ok(existsSync(resolve(target, ".builder-squad", "docs", "legal", "PRIVACY-POLICY.md")));
    assert.ok(existsSync(resolve(target, ".builder-squad", "docs", "commercial", "PRODUCT-DELIVERY-MANIFEST.md")));
    assert.ok(!existsSync(resolve(target, ".builder-squad", "docs", "commercial", "CAMPAIGN-BRIEF.md")));
    assert.ok(!existsSync(resolve(target, ".builder-squad", "docs", "copy")));
    assert.ok(!existsSync(resolve(target, ".builder-squad", "docs", "funnel")));
    assert.ok(!existsSync(resolve(target, ".builder-squad", "docs", "operations")));
    assert.ok(!existsSync(resolve(target, ".builder-squad", "tests", "commercial-funnel.test.mjs")));
    assert.ok(!existsSync(resolve(target, "AGENTS.md")));

    const validated = spawnSync(process.execPath, [resolve(target, ".builder-squad", "scripts", "validate.mjs")], { encoding: "utf8" });
    assert.equal(validated.status, 0, validated.stderr || validated.stdout);
    assert.match(validated.stdout, /Resultado: PASS \(32\/32\)/);
  } finally {
    rmSync(target, { recursive: true, force: true });
  }
});

test("update preserva backup e restore recupera a instalação anterior", () => {
  const target = mkdtempSync(resolve(tmpdir(), "builder-squad-update-"));
  try {
    assert.equal(run("install.mjs", ["--adapter", "codex", "--target", target]).status, 0);
    const marker = resolve(target, ".builder-squad", "local-marker.txt");
    writeFileSync(marker, "versao anterior\n");

    const updated = run("update.mjs", ["--adapter", "codex", "--target", target]);
    assert.equal(updated.status, 0, updated.stderr);
    assert.ok(!existsSync(marker));
    const backupName = readdirSync(target).find((name) => name.startsWith(".builder-squad.backup-"));
    assert.ok(backupName);
    const backup = resolve(target, backupName);
    assert.ok(existsSync(resolve(backup, "local-marker.txt")));

    const restored = run("restore.mjs", ["--target", target, "--backup", backup, "--approved"]);
    assert.equal(restored.status, 0, restored.stderr);
    assert.ok(existsSync(resolve(target, ".builder-squad", "local-marker.txt")));
    assert.ok(readdirSync(target).some((name) => name.startsWith(".builder-squad.displaced-")));
  } finally {
    rmSync(target, { recursive: true, force: true });
  }
});

test("uninstall remove apenas a posição ativa e preserva arquivo recuperável", () => {
  const target = mkdtempSync(resolve(tmpdir(), "builder-squad-uninstall-"));
  try {
    assert.equal(run("install.mjs", ["--adapter", "claude-code", "--target", target]).status, 0);
    const uninstalled = run("uninstall.mjs", ["--target", target, "--approved"]);
    assert.equal(uninstalled.status, 0, uninstalled.stderr);
    assert.ok(!existsSync(resolve(target, ".builder-squad")));
    assert.ok(readdirSync(target).some((name) => name.startsWith(".builder-squad.uninstalled-")));
  } finally {
    rmSync(target, { recursive: true, force: true });
  }
});
