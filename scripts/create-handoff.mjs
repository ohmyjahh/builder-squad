#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fail, listArg, parseArgs, required } from "./lib/cli.mjs";
import { SQUAD_ROOT } from "./lib/paths.mjs";

function safe(value) {
  const text = String(value ?? "").trim();
  const secret = /(ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|sk-[A-Za-z0-9]{30,}|AKIA[A-Z0-9]{16})/;
  if (secret.test(text)) throw new Error("O handoff parece conter uma credencial. Remova o segredo e referencie o cofre.");
  return text;
}

try {
  const args = parseArgs(process.argv.slice(2));
  const project = resolve(String(args.project ?? process.cwd()));
  const from = required(args, "from");
  const to = required(args, "to");
  const task = required(args, "task");
  const request = safe(required(args, "request"));
  const outputs = listArg(required(args, "outputs", "Informe --outputs item1,item2."));
  const criteria = listArg(required(args, "criteria", "Informe --criteria criterio1,criterio2."));

  if (!existsSync(resolve(SQUAD_ROOT, "agents", `${from}.md`))) throw new Error(`Agente de origem desconhecido: ${from}`);
  if (!existsSync(resolve(SQUAD_ROOT, "agents", `${to}.md`))) throw new Error(`Agente de destino desconhecido: ${to}`);
  if (!existsSync(resolve(SQUAD_ROOT, "tasks", task.endsWith(".md") ? task : `${task}.md`))) throw new Error(`Task desconhecida: ${task}`);
  if (!existsSync(resolve(project, "project.yaml"))) throw new Error("project.yaml ausente no projeto.");

  const now = new Date();
  const stamp = now.toISOString().replace(/[:.]/g, "-");
  const id = `HO-${stamp}-${from}-to-${to}`;
  const directory = resolve(project, "handoffs");
  mkdirSync(directory, { recursive: true });
  const path = resolve(directory, `${id}.md`);

  const bullets = (items) => items.length ? items.map((item) => `- ${safe(item)}`).join("\n") : "- Nenhum.";
  const content = `# Handoff — ${id}

**Contrato:** handoff.v1
**Origem:** ${from}
**Destino:** ${to}
**Task concluída:** ${task.replace(/\.md$/, "")}
**Criado em:** ${now.toISOString()}
**Consumido:** false

## Demanda objetiva

${request}

## Fatos conhecidos

${bullets(listArg(args.facts))}

## Hipóteses

${bullets(listArg(args.assumptions))}

## Decisões vigentes

${bullets(listArg(args.decisions))}

## Artefatos de entrada

${bullets(listArg(args.inputs))}

## Saídas esperadas

${bullets(outputs)}

## Critérios de aceite

${bullets(criteria)}

## Riscos

${bullets(listArg(args.risks))}

## Questões abertas

${bullets(listArg(args.questions))}

## Próximo gate

${safe(args.gate ?? "A definir pela task de destino.")}
`;

  writeFileSync(path, content);
  process.stdout.write(`Handoff criado: ${path}\n`);
} catch (error) {
  fail(error);
}

