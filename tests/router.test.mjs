import test from "node:test";
import assert from "node:assert/strict";
import { complexityLevel, complexityScore, routeProject } from "../scripts/lib/router.mjs";

function profile(overrides = {}) {
  return {
    purpose: "internal",
    features: new Set(),
    audience: "single",
    multiTenant: false,
    sensitiveData: false,
    integrationCount: 0,
    autonomousActions: false,
    businessCritical: false,
    publicProduction: false,
    clientDelivery: false,
    ...overrides
  };
}

test("rota interna exige processo e não força estratégia de mercado", () => {
  const route = routeProject(profile());
  assert.equal(route.workflow, "wf-internal-tool");
  assert.ok(route.agents.includes("process-analyst"));
  assert.ok(!route.agents.includes("product-strategist"));
  assert.ok(route.requiredArtifacts.includes("baseline"));
});

test("rota de mercado inclui produto, growth, segurança e release", () => {
  const route = routeProject(profile({ purpose: "market", publicProduction: true }));
  for (const agent of ["product-strategist", "growth-sales-strategist", "security-reviewer", "devops-release-engineer"]) {
    assert.ok(route.agents.includes(agent));
  }
  assert.ok(route.approvals.includes("production-deploy"));
  assert.ok(route.gates.includes("release-readiness"));
});

test("rota híbrida preserva decisão de portabilidade", () => {
  const route = routeProject(profile({ purpose: "hybrid" }));
  assert.equal(route.workflow, "wf-hybrid-evolution");
  assert.ok(route.requiredArtifacts.includes("portability-adr"));
  assert.ok(route.agents.includes("process-analyst"));
  assert.ok(route.agents.includes("product-strategist"));
});

test("entrega para cliente envolve o workflow primário", () => {
  const route = routeProject(profile({ purpose: "market", clientDelivery: true }));
  assert.equal(route.workflow, "wf-client-delivery");
  assert.equal(route.wrappedWorkflow, "wf-market-product");
  assert.ok(route.requiredArtifacts.includes("acceptance-record"));
});

test("features ativam especialistas e gates", () => {
  const route = routeProject(profile({
    purpose: "market",
    features: new Set(["ui", "data", "backend", "ai", "integrations", "payments"]),
    sensitiveData: true,
    autonomousActions: true,
    publicProduction: true,
    multiTenant: true,
    audience: "external",
    integrationCount: 3
  }));
  for (const agent of ["ux-ui-designer", "frontend-engineer", "data-architect", "backend-engineer", "agent-architect", "automation-integration-engineer"]) {
    assert.ok(route.agents.includes(agent));
  }
  assert.equal(route.complexity.level, "critical");
  assert.ok(route.gates.includes("agent-safety"));
  assert.ok(route.gates.includes("payment-readiness"));
});

test("complexidade segue os limites canônicos", () => {
  assert.equal(complexityLevel(3), "simple");
  assert.equal(complexityLevel(4), "standard");
  assert.equal(complexityLevel(9), "complex");
  assert.equal(complexityLevel(15), "critical");
  assert.equal(complexityScore(profile({ audience: "external", multiTenant: true, sensitiveData: true })), 8);
});

test("finalidade inválida é rejeitada", () => {
  assert.throws(() => routeProject(profile({ purpose: "unknown" })), /internal, market ou hybrid/);
});

