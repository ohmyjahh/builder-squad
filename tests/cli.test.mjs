import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
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
  try {
    const installed = run("install.mjs", ["--adapter", "codex", "--target", target]);
    assert.equal(installed.status, 0, installed.stderr);
    assert.ok(existsSync(resolve(target, ".builder-squad", "agents", "builder-chief.md")));
    assert.ok(existsSync(resolve(target, ".builder-squad", "adapter", "AGENTS.builder-squad.md")));
    assert.ok(!existsSync(resolve(target, "AGENTS.md")));
  } finally {
    rmSync(target, { recursive: true, force: true });
  }
});

