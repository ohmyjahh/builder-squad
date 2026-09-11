#!/usr/bin/env node
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, parse, resolve } from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fail, parseArgs, required } from "./lib/cli.mjs";
import { routeProject, profileFromArgs } from "./lib/router.mjs";

function slugify(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
}

function safeTarget(target) {
  const absolute = resolve(target);
  const parsed = parse(absolute);
  if (absolute === parsed.root || absolute === homedir()) {
    throw new Error("O alvo não pode ser a raiz do sistema nem o diretório pessoal.");
  }
  if (existsSync(absolute)) throw new Error(`O diretório já existe: ${absolute}`);
  return absolute;
}

async function purposeFrom(args) {
  if (args.purpose) return String(args.purpose);
  if (!process.stdin.isTTY) {
    throw new Error("Informe --purpose internal|market|hybrid.");
  }
  const rl = createInterface({ input, output });
  const answer = await rl.question("Este projeto é para uso interno, para colocar no mercado ou começa interno com intenção futura de venda? [internal/market/hybrid] ");
  rl.close();
  return answer.trim();
}

try {
  const args = parseArgs(process.argv.slice(2));
  const name = required(args, "name", "Informe --name com o nome do projeto.");
  args.purpose = await purposeFrom(args);
  const profile = profileFromArgs(args);
  const route = routeProject(profile);
  const slug = slugify(name);
  if (!slug) throw new Error("O nome não gerou um identificador válido.");
  const target = safeTarget(args.target ?? resolve(process.cwd(), "projects", slug));
  const now = new Date().toISOString();
  const projectId = `BS-${slug.toUpperCase()}`;

  for (const directory of ["decisions", "handoffs", "tasks", "evidence", "reports"]) {
    mkdirSync(resolve(target, directory), { recursive: true });
  }

  const featureLines = ["ui", "data", "backend", "ai", "integrations", "payments"]
    .map((feature) => `    ${feature}: ${profile.features.has(feature)}`).join("\n");

  writeFileSync(resolve(target, "project.yaml"), `schema_version: "1.0.0"
project_id: "${projectId}"
name: "${name.replaceAll('"', "'")}"
purpose: ${profile.purpose}
delivery_context: ${profile.clientDelivery ? "client_project" : "own_project"}
primary_workflow: ${route.workflow}
created_at: "${now}"
updated_at: "${now}"
complexity:
  score: ${route.complexity.score}
  level: ${route.complexity.level}
features:
${featureLines}
risk:
  sensitive_data: ${profile.sensitiveData}
  business_critical: ${profile.businessCritical}
  public_production: ${profile.publicProduction}
\n`);

  writeFileSync(resolve(target, "status.yaml"), `schema_version: "1.0.0"
project_id: "${projectId}"
state: DISCOVERY
current_phase: intake
current_task: classify-project
current_owner: builder-chief
retry_count: 0
updated_at: "${now}"
\n`);

  writeFileSync(resolve(target, "original-request.md"), `# Solicitação original

**Registrada em:** ${now}

${String(args.request ?? "A preencher sem alterar o sentido da solicitação do usuário.")}
\n`);

  writeFileSync(resolve(target, "brief.md"), `# Brief Canônico — ${name}

**Contrato:** canonical-brief.v1
**Projeto:** ${projectId}
**Status:** draft

## Classificação

- Finalidade: ${profile.purpose}
- Workflow: ${route.workflow}
- Complexidade: ${route.complexity.level} (${route.complexity.score})
- Agentes previstos: ${route.agents.join(", ")}

## Resultado desejado

## Fatos confirmados

## Hipóteses

## Questões abertas

## Aprovações necessárias

${route.approvals.map((item) => `- ${item}`).join("\n") || "- Nenhuma identificada no intake inicial."}
\n`);

  writeFileSync(resolve(target, "route.json"), `${JSON.stringify(route, null, 2)}\n`);
  process.stdout.write(`Projeto inicializado em ${target}\nPróxima task: classify-project\n`);
} catch (error) {
  fail(error);
}

