#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fail, parseArgs } from "./lib/cli.mjs";

function field(text, name) {
  return text.match(new RegExp(`^${name}:\\s*["']?([^"'\\n]+)`, "m"))?.[1]?.trim() ?? null;
}

try {
  const args = parseArgs(process.argv.slice(2));
  const project = resolve(String(args.project ?? process.cwd()));
  const text = readFileSync(resolve(project, "status.yaml"), "utf8");
  const summary = {
    project_id: field(text, "project_id"),
    state: field(text, "state"),
    current_phase: field(text, "current_phase"),
    current_task: field(text, "current_task"),
    current_owner: field(text, "current_owner"),
    retry_count: Number(field(text, "retry_count") ?? 0),
    updated_at: field(text, "updated_at")
  };
  process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
} catch (error) {
  fail(error);
}

