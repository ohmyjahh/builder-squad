export function parseArgs(argv) {
  const result = { _: [] };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith("--")) {
      result._.push(token);
      continue;
    }

    const [rawKey, inlineValue] = token.slice(2).split("=", 2);
    const key = rawKey.replaceAll("-", "_");
    if (inlineValue !== undefined) {
      result[key] = inlineValue;
      continue;
    }

    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      result[key] = next;
      index += 1;
    } else {
      result[key] = true;
    }
  }
  return result;
}

export function listArg(value) {
  if (!value) return [];
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function required(args, key, message) {
  const value = args[key];
  if (value === undefined || value === true || String(value).trim() === "") {
    throw new Error(message ?? `Argumento obrigatório ausente: --${key.replaceAll("_", "-")}`);
  }
  return String(value).trim();
}

export function printJson(value) {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

export function fail(error) {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`Erro: ${message}\n`);
  process.exitCode = 1;
}

