#!/usr/bin/env node
import { appendFileSync, existsSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fail, parseArgs, required } from "./lib/cli.mjs";
import { approvalStates, assertTransition } from "./lib/state-machine.mjs";

function field(text, name) {
  return text.match(new RegExp(`^${name}:\\s*["']?([^"'\\n]+)`, "m"))?.[1]?.trim() ?? null;
}

function setField(text, name, value) {
  const line = `${name}: ${value}`;
  const pattern = new RegExp(`^${name}:.*$`, "m");
  return pattern.test(text) ? text.replace(pattern, line) : `${text.trimEnd()}\n${line}\n`;
}

try {
  const args = parseArgs(process.argv.slice(2));
  const project = resolve(String(args.project ?? process.cwd()));
  const statusPath = resolve(project, "status.yaml");
  if (!existsSync(statusPath)) throw new Error(`status.yaml ausente em ${project}`);

  const to = required(args, "to", "Informe --to com o estado alvo.").toUpperCase();
  const text = readFileSync(statusPath, "utf8");
  const from = field(text, "state");
  const approved = Boolean(args.approved);
  if (approvalStates.has(to) && !args.approval_id) {
    throw new Error("Transições de release exigem --approval-id.");
  }
  assertTransition(from, to, approved);

  let retries = Number(field(text, "retry_count") ?? 0);
  if (to === "NEEDS_REVISION") {
    retries += 1;
    if (retries > 2) throw new Error("Limite de dois retries atingido; use BLOCKED e replaneje.");
  }
  if (["READY_FOR_RELEASE", "RELEASED", "COMPLETE"].includes(to)) retries = 0;

  const now = new Date().toISOString();
  let updated = setField(text, "state", to);
  updated = setField(updated, "retry_count", String(retries));
  updated = setField(updated, "updated_at", `"${now}"`);
  if (args.task) updated = setField(updated, "current_task", String(args.task));
  if (args.owner) updated = setField(updated, "current_owner", String(args.owner));
  if (args.phase) updated = setField(updated, "current_phase", String(args.phase));

  const temporary = `${statusPath}.tmp-${process.pid}`;
  writeFileSync(temporary, updated);
  renameSync(temporary, statusPath);

  const record = {
    at: now,
    from,
    to,
    task: args.task ?? null,
    owner: args.owner ?? null,
    approval_id: args.approval_id ?? null,
    reason: args.reason ?? null
  };
  appendFileSync(resolve(project, "reports/state-history.jsonl"), `${JSON.stringify(record)}\n`);
  process.stdout.write(`Transição aplicada: ${from} → ${to}\n`);
} catch (error) {
  fail(error);
}

