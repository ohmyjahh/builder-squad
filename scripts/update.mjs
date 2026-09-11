#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const script = resolve(dirname(fileURLToPath(import.meta.url)), "install.mjs");
const args = process.argv.slice(2).filter((value) => value !== "--force");
const result = spawnSync(process.execPath, [script, ...args, "--force"], { stdio: "inherit" });
process.exit(result.status ?? 1);
