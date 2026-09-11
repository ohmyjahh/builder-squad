import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { routeProject } from "../scripts/lib/router.mjs";
import { SQUAD_ROOT } from "../scripts/lib/paths.mjs";

function parseExample(name) {
  const directory = resolve(SQUAD_ROOT, "examples", name);
  const text = readFileSync(resolve(directory, "project.yaml"), "utf8");
  const value = (key) => text.match(new RegExp(`^\\s*${key}:\\s*([^\\n]+)$`, "m"))?.[1]?.trim();
  const featureBlock = text.match(/^features:\n([\s\S]*?)^risk:/m)?.[1] ?? "";
  const enabled = [...featureBlock.matchAll(/^\s{2}([a-z_]+):\s*true$/gm)].map((match) => match[1]);
  const aliases = {
    user_interface: "ui",
    persistent_data: "data",
    backend_logic: "backend",
    generative_ai: "ai",
    external_integrations: "integrations",
    payments: "payments"
  };
  const riskBlock = text.match(/^risk:\n([\s\S]*?)^primary_workflow:/m)?.[1] ?? "";
  const riskValue = (key) => riskBlock.match(new RegExp(`^\\s{2}${key}:\\s*(true|false)$`, "m"))?.[1] === "true";
  const delivery = text.match(/^delivery:\n([\s\S]*?)^features:/m)?.[1] ?? "";

  return routeProject({
    purpose: value("purpose"),
    features: new Set(enabled.map((item) => aliases[item])),
    audience: name === "market-micro-saas" ? "external" : "team",
    multiTenant: name === "market-micro-saas",
    sensitiveData: riskValue("sensitive_data"),
    integrationCount: enabled.includes("external_integrations") ? 1 : 0,
    autonomousActions: false,
    businessCritical: riskValue("business_critical"),
    publicProduction: /public_production:\s*true/.test(delivery),
    clientDelivery: false
  });
}

for (const example of ["internal-ops", "market-micro-saas", "hybrid-agency-platform"]) {
  test(`rota do exemplo ${example} permanece coerente`, () => {
    const actual = parseExample(example);
    const expected = JSON.parse(readFileSync(resolve(SQUAD_ROOT, "examples", example, "expected-route.json"), "utf8"));
    assert.equal(actual.purpose, expected.purpose);
    assert.equal(actual.workflow, expected.workflow);
    assert.deepEqual(actual.complexity, expected.complexity);
    const expectedAgents = expected.agents ?? expected.requiredAgents ?? [];
    for (const agent of expectedAgents) assert.ok(actual.agents.includes(agent), `Agente ausente: ${agent}`);
    for (const artifact of expected.requiredArtifacts ?? []) assert.ok(actual.requiredArtifacts.includes(artifact), `Artefato ausente: ${artifact}`);
  });
}

