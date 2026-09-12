#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { extractManifestComponents, filesIn, SQUAD_ROOT, walkFiles } from "./lib/paths.mjs";

const directories = {
  agents: "agents",
  tasks: "tasks",
  workflows: "workflows",
  checklists: "checklists",
  templates: "templates",
  data: "data"
};

function result(name, ok, detail) {
  return { name, status: ok ? "PASS" : "FAIL", detail };
}

function refsFromAgent(text) {
  return [...text.matchAll(/task:\s*([a-z0-9-]+\.md)/g)].map((match) => match[1]);
}

function gateRefsFromTask(text) {
  return [...text.matchAll(/Quality gate:\*\*\s*`?([a-z0-9-]+(?:\.md)?)`?/gi)]
    .map((match) => (match[1].endsWith(".md") ? match[1] : `${match[1]}.md`));
}

export function runValidation(root = SQUAD_ROOT) {
  const results = [];
  const manifestPath = join(root, "squad.yaml");
  if (!existsSync(manifestPath)) return [result("manifest", false, "squad.yaml ausente")];

  const manifest = readFileSync(manifestPath, "utf8");
  const components = extractManifestComponents(manifest);
  const expectedSections = Object.keys(directories);
  const absentSections = expectedSections.filter((section) => !components[section]);
  results.push(result("manifest.sections", absentSections.length === 0, absentSections.length ? `Ausentes: ${absentSections.join(", ")}` : "Seções canônicas presentes"));

  for (const [section, directory] of Object.entries(directories)) {
    const listed = new Set(components[section] ?? []);
    const disk = new Set(filesIn.call(null, directory));
    const missing = [...listed].filter((file) => !disk.has(file));
    const unlisted = [...disk].filter((file) => !listed.has(file));
    results.push(result(
      `manifest.${section}`,
      missing.length === 0 && unlisted.length === 0,
      missing.length || unlisted.length
        ? `Ausentes: ${missing.join(", ") || "-"}; não listados: ${unlisted.join(", ") || "-"}`
        : `${listed.size} componentes sincronizados`
    ));
  }

  const blueprintPath = join(root, "squads/.designs/builder-squad-design.yaml");
  const blueprint = readFileSync(blueprintPath, "utf8");
  const taskPairs = [...blueprint.matchAll(/- \{ name:\s*([a-z0-9-]+),\s*agent:\s*([a-z0-9-]+)/g)]
    .map((match) => ({ name: match[1], agent: match[2] }));
  const blueprintTasks = new Set(taskPairs.map(({ name }) => `${name}.md`));
  const diskTasks = new Set(filesIn.call(null, "tasks", ".md"));
  const missingTasks = [...blueprintTasks].filter((name) => !diskTasks.has(name));
  const extraTasks = [...diskTasks].filter((name) => !blueprintTasks.has(name));
  results.push(result("blueprint.tasks", missingTasks.length === 0 && extraTasks.length === 0 && taskPairs.length === 75, `${taskPairs.length}/75; faltantes ${missingTasks.length}; extras ${extraTasks.length}`));

  const requiredTaskMeta = ["task", "responsavel", "responsavel_type", "atomic_layer", "Entrada", "Saida", "Checklist"];
  const invalidTasks = [];
  for (const file of diskTasks) {
    const text = readFileSync(join(root, "tasks", file), "utf8");
    const frontmatter = text.split(/^---\s*$/m)[1] ?? "";
    const missing = requiredTaskMeta.filter((key) => !new RegExp(`^${key}:`, "m").test(frontmatter));
    const sections = ["# Objetivo", "Critérios de aceite"];
    for (const section of sections) if (!text.includes(section)) missing.push(section);
    if (missing.length) invalidTasks.push(`${file} [${missing.join(", ")}]`);
  }
  results.push(result("tasks.contract", invalidTasks.length === 0, invalidTasks.length ? invalidTasks.join("; ") : `${diskTasks.size}/${diskTasks.size} contratos mínimos válidos`));

  const agents = new Set(filesIn.call(null, "agents", ".md"));
  const missingAgentRefs = [];
  let agentTaskRefCount = 0;
  for (const agentFile of agents) {
    const text = readFileSync(join(root, "agents", agentFile), "utf8");
    for (const ref of refsFromAgent(text)) {
      agentTaskRefCount += 1;
      if (!diskTasks.has(ref)) missingAgentRefs.push(`${agentFile} → ${ref}`);
    }
  }
  results.push(result("agents.task_refs", missingAgentRefs.length === 0 && agentTaskRefCount === 75, missingAgentRefs.length ? missingAgentRefs.join("; ") : `${agentTaskRefCount}/75 referências válidas`));

  const workflowFiles = filesIn.call(null, "workflows", ".yaml");
  const workflowIds = [];
  const missingWorkflowTaskRefs = [];
  const missingWorkflowGateRefs = [];
  for (const file of workflowFiles) {
    const text = readFileSync(join(root, "workflows", file), "utf8");
    const id = text.match(/^\s{2}id:\s*([a-z0-9-]+)\s*$/m)?.[1];
    if (id) workflowIds.push(id);
    for (const ref of [...text.matchAll(/(?:task|tasks):[^\n]*?([a-z][a-z0-9-]+\.md)/g)].map((match) => match[1])) {
      if (!diskTasks.has(ref)) missingWorkflowTaskRefs.push(`${file} → ${ref}`);
    }
    for (const ref of [...text.matchAll(/checklist:\s*([a-z0-9-]+\.md)/g)].map((match) => match[1])) {
      if (!existsSync(join(root, "checklists", ref))) missingWorkflowGateRefs.push(`${file} → ${ref}`);
    }
  }
  results.push(result("workflows.ids", workflowFiles.length === 12 && new Set(workflowIds).size === 12, `${workflowFiles.length}/12 arquivos; ${new Set(workflowIds).size} IDs únicos`));
  results.push(result("workflows.refs", missingWorkflowTaskRefs.length === 0 && missingWorkflowGateRefs.length === 0, [...missingWorkflowTaskRefs, ...missingWorkflowGateRefs].join("; ") || "Referências resolvidas"));

  const missingTaskGates = [];
  for (const file of diskTasks) {
    const text = readFileSync(join(root, "tasks", file), "utf8");
    for (const gate of gateRefsFromTask(text)) {
      if (!existsSync(join(root, "checklists", gate))) missingTaskGates.push(`${file} → ${gate}`);
    }
  }
  results.push(result("tasks.gates", missingTaskGates.length === 0, missingTaskGates.join("; ") || "Todos os gates resolvidos"));

  const automationFiles = filesIn.call(null, "automations", ".yaml");
  const automationIds = [];
  const invalidAutomations = [];
  for (const file of automationFiles) {
    const text = readFileSync(join(root, "automations", file), "utf8");
    const id = text.match(/^\s{2}id:\s*([a-z0-9-]+)\s*$/m)?.[1];
    if (id) automationIds.push(id);
    for (const field of ["automation:", "trigger:", "owner:", "steps:"]) {
      if (!text.includes(field)) invalidAutomations.push(`${file} [${field}]`);
    }
  }
  results.push(result(
    "automations.contract",
    automationFiles.length === 9 && new Set(automationIds).size === 9 && invalidAutomations.length === 0,
    invalidAutomations.length ? invalidAutomations.join("; ") : `${automationFiles.length}/9 automações e ${new Set(automationIds).size} IDs únicos`
  ));

  const adapterRequirements = [
    "adapters/codex/README.md",
    "adapters/codex/AGENTS.builder-squad.md",
    "adapters/claude-code/README.md",
    "adapters/claude-code/CLAUDE.builder-squad.md"
  ];
  const missingAdapters = adapterRequirements.filter((path) => !existsSync(join(root, path)));
  results.push(result("adapters.files", missingAdapters.length === 0, missingAdapters.join(", ") || "Codex e Claude Code completos"));

  const legalRequirements = [
    "LICENSE.md",
    "docs/legal/README.md",
    "docs/legal/LEGAL-DATA-SHEET.md",
    "docs/legal/COMMERCIAL-LICENSE.md",
    "docs/legal/TERMS-OF-USE-AND-SALE.md",
    "docs/legal/PRIVACY-POLICY.md",
    "docs/legal/REFUND-AND-CANCELLATION-POLICY.md",
    "docs/legal/AI-AND-DATA-NOTICE.md",
    "docs/legal/COPYRIGHT-AND-IP-NOTICE.md",
    "docs/legal/THIRD-PARTY-NOTICES.md",
    "docs/legal/IP-CHAIN-OF-TITLE.md",
    "docs/legal/IP-ASSIGNMENT-DECLARATION-TEMPLATE.md",
    "docs/legal/LICENSE-CERTIFICATE-TEMPLATE.md",
    "docs/legal/BUYER-ACCEPTANCE-RECORD-TEMPLATE.md",
    "docs/legal/DATA-PROCESSING-ADDENDUM-TEMPLATE.md",
    "docs/legal/SUBPROCESSOR-REGISTER.md",
    "docs/legal/SOFTWARE-REGISTRATION-DOSSIER.md",
    "docs/legal/TRADEMARK-CLEARANCE-AND-FILING-PLAN.md",
    "docs/legal/EXTERNAL-APPROVALS.md"
  ];
  const missingLegal = legalRequirements.filter((path) => !existsSync(join(root, path)));
  results.push(result("legal.package", missingLegal.length === 0, missingLegal.join(", ") || `${legalRequirements.length}/${legalRequirements.length} documentos presentes`));

  const legalIdentity = "SOW HOUSE PRODUCOES E TREINAMENTOS LTDA";
  const legalDocument = "54.474.144/0001-09";
  const identitySources = [
    "LICENSE.md",
    "docs/legal/LEGAL-DATA-SHEET.md",
    "docs/legal/COMMERCIAL-LICENSE.md",
    "docs/legal/TERMS-OF-USE-AND-SALE.md",
    "docs/legal/PRIVACY-POLICY.md",
    "docs/legal/COPYRIGHT-AND-IP-NOTICE.md"
  ];
  const invalidIdentity = identitySources.filter((path) => {
    const text = readFileSync(join(root, path), "utf8");
    return !text.includes(legalIdentity) || !text.includes(legalDocument);
  });
  results.push(result("legal.identity", invalidIdentity.length === 0, invalidIdentity.join(", ") || "Titular e CNPJ consistentes nas fontes principais"));

  const licenseText = readFileSync(join(root, "docs/legal/COMMERCIAL-LICENSE.md"), "utf8");
  const termsText = readFileSync(join(root, "docs/legal/TERMS-OF-USE-AND-SALE.md"), "utf8");
  const selfServicePolicy = licenseText.includes("Suporte individual de instalação: não incluído")
    && termsText.includes("instalação é self-service");
  results.push(result("legal.self_service", selfServicePolicy, selfServicePolicy ? "Instalação self-service e ausência de suporte individual explícitas" : "Política self-service inconsistente"));

  const packageMetadata = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  const versionFile = readFileSync(join(root, "VERSION"), "utf8").trim();
  const manifestVersion = manifest.match(/^version:\s*["']?([^"'\s]+)["']?\s*$/m)?.[1];
  const releaseNotePath = join(root, "docs/release", `RELEASE-NOTES-${packageMetadata.version}.md`);
  const productDelivery = readFileSync(join(root, "docs/commercial/PRODUCT-DELIVERY-MANIFEST.md"), "utf8");
  const versionAligned = packageMetadata.version === versionFile
    && manifestVersion === versionFile
    && existsSync(releaseNotePath)
    && productDelivery.includes(versionFile);
  results.push(result("release.version", versionAligned, versionAligned ? `${versionFile} alinhada e documentada` : "Versão divergente entre manifest, package, VERSION, release notes ou entrega"));

  const schemaFiles = filesIn.call(null, "schemas", ".json");
  const invalidSchemas = [];
  const schemas = new Map();
  for (const file of schemaFiles) {
    try {
      schemas.set(file, JSON.parse(readFileSync(join(root, "schemas", file), "utf8")));
    } catch (error) {
      invalidSchemas.push(`${file}: ${error.message}`);
    }
  }
  results.push(result("schemas.json", invalidSchemas.length === 0, invalidSchemas.join("; ") || `${schemaFiles.length} schemas JSON parseáveis`));

  const templateContracts = [
    ["task.schema.json", "templates/task-contract.md"],
    ["project.schema.json", "templates/project-manifest.yaml"],
    ["status.schema.json", "templates/project-status.yaml"]
  ];
  const templateSchemaMismatches = [];
  for (const [schemaName, templatePath] of templateContracts) {
    const schema = schemas.get(schemaName);
    const template = readFileSync(join(root, templatePath), "utf8");
    for (const key of schema?.required ?? []) {
      if (!new RegExp(`^${key}:`, "m").test(template)) templateSchemaMismatches.push(`${templatePath} [${key}]`);
    }
  }
  results.push(result("schemas.templates", templateSchemaMismatches.length === 0, templateSchemaMismatches.join("; ") || "Templates principais cobrem campos obrigatórios"));

  const requiredQuestion = "Este projeto é para uso interno, para colocar no mercado ou começa interno com intenção futura de venda?";
  const intakeSources = [
    readFileSync(join(root, "templates/intake-questionnaire.md"), "utf8"),
    readFileSync(join(root, "workflows/wf-intake-and-classify.yaml"), "utf8"),
    readFileSync(join(root, "data/routing-catalog.yaml"), "utf8")
  ];
  results.push(result("intake.purpose", intakeSources.every((text) => text.includes(requiredQuestion)), "Pergunta obrigatória presente nas três fontes"));

  const highConfidenceSecrets = /(ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|sk-[A-Za-z0-9]{30,}|AKIA[A-Z0-9]{16})/;
  const secretHits = [];
  for (const path of walkFiles(".", root)) {
    try {
      if (highConfidenceSecrets.test(readFileSync(path, "utf8"))) secretHits.push(path.slice(root.length + 1));
    } catch {
      // Binários não entram na inspeção textual.
    }
  }
  results.push(result("security.secrets", secretHits.length === 0, secretHits.join(", ") || "Nenhum segredo de alta confiança detectado"));

  const brokenLinks = [];
  const linkSources = [join(root, "README.md"), ...walkFiles("docs/guides", root).filter((path) => path.endsWith(".md"))];
  for (const source of linkSources) {
    const text = readFileSync(source, "utf8");
    for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
      const raw = match[1].replace(/^<|>$/g, "").split("#")[0];
      if (!raw || /^(https?:|mailto:)/.test(raw)) continue;
      if (!existsSync(resolve(dirname(source), raw))) brokenLinks.push(`${source.slice(root.length + 1)} → ${raw}`);
    }
  }
  results.push(result("docs.links", brokenLinks.length === 0, brokenLinks.join("; ") || "Links locais principais resolvidos"));

  return results;
}

export function printValidation(results) {
  for (const item of results) {
    process.stdout.write(`[${item.status}] ${item.name}: ${item.detail}\n`);
  }
  const failed = results.filter((item) => item.status === "FAIL");
  process.stdout.write(`\nResultado: ${failed.length ? "FAIL" : "PASS"} (${results.length - failed.length}/${results.length})\n`);
  return failed.length === 0;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = printValidation(runValidation()) ? 0 : 1;
}
