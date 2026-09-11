import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const SQUAD_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

export function absoluteFromRoot(...parts) {
  return resolve(SQUAD_ROOT, ...parts);
}

export function readUtf8(path) {
  return readFileSync(path, "utf8");
}

export function filesIn(relativeDirectory, extension = null) {
  const directory = absoluteFromRoot(relativeDirectory);
  if (!existsSync(directory)) return [];
  return readdirSync(directory)
    .filter((name) => !name.startsWith("."))
    .filter((name) => !extension || name.endsWith(extension))
    .sort();
}

export function extractManifestComponents(text) {
  const sections = {};
  let inComponents = false;
  let current = null;

  for (const line of text.split(/\r?\n/)) {
    if (line === "components:") {
      inComponents = true;
      continue;
    }
    if (inComponents && /^\S/.test(line)) break;
    if (!inComponents) continue;

    const section = line.match(/^  ([a-z]+):\s*$/);
    if (section) {
      current = section[1];
      sections[current] = [];
      continue;
    }

    const item = line.match(/^    -\s+(.+)\s*$/);
    if (item && current) sections[current].push(item[1].replace(/^["']|["']$/g, ""));
  }

  return sections;
}

