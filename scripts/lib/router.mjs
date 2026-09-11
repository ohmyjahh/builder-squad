const PURPOSES = new Set(["internal", "market", "hybrid"]);

const baseRoutes = {
  internal: {
    workflow: "wf-internal-tool",
    agents: [
      "builder-chief",
      "process-analyst",
      "project-manager",
      "qa-engineer",
      "documentation-handoff-specialist"
    ],
    requiredArtifacts: ["as-is-process", "baseline", "to-be-process", "adoption-plan"]
  },
  market: {
    workflow: "wf-market-product",
    agents: [
      "builder-chief",
      "product-strategist",
      "project-manager",
      "qa-engineer",
      "security-reviewer",
      "devops-release-engineer",
      "growth-sales-strategist",
      "documentation-handoff-specialist"
    ],
    requiredArtifacts: ["problem-evidence", "icp", "mvp-scope", "analytics-plan", "gtm-plan"]
  },
  hybrid: {
    workflow: "wf-hybrid-evolution",
    agents: [
      "builder-chief",
      "process-analyst",
      "product-strategist",
      "solution-architect",
      "project-manager",
      "qa-engineer",
      "security-reviewer",
      "documentation-handoff-specialist"
    ],
    requiredArtifacts: ["internal-baseline", "market-evidence", "portability-adr"]
  }
};

const featureRules = {
  ui: ["ux-ui-designer", "frontend-engineer"],
  data: ["data-architect"],
  backend: ["backend-engineer", "solution-architect"],
  ai: ["agent-architect"],
  integrations: ["automation-integration-engineer"],
  payments: ["backend-engineer", "security-reviewer", "devops-release-engineer"]
};

export function complexityScore(profile) {
  let score = 0;
  if (profile.audience === "team") score += 1;
  if (profile.audience === "external") score += 2;
  if (profile.multiTenant) score += 3;
  if (profile.features.has("data")) score += 1;
  if (profile.sensitiveData) score += 3;
  score += profile.integrationCount ?? (profile.features.has("integrations") ? 1 : 0);
  if (profile.features.has("payments")) score += 3;
  if (profile.autonomousActions) score += 3;
  if (profile.businessCritical) score += 3;
  return score;
}

export function complexityLevel(score) {
  if (score <= 3) return "simple";
  if (score <= 8) return "standard";
  if (score <= 14) return "complex";
  return "critical";
}

export function routeProject(profile) {
  if (!PURPOSES.has(profile.purpose)) {
    throw new Error("A finalidade deve ser internal, market ou hybrid.");
  }

  const base = baseRoutes[profile.purpose];
  const agents = new Set(base.agents);
  const artifacts = new Set(base.requiredArtifacts);
  const gates = new Set(["intake-completeness", "orchestration-quality"]);
  const approvals = new Set();

  for (const feature of profile.features) {
    for (const agent of featureRules[feature] ?? []) agents.add(agent);
  }

  if (profile.features.has("ai")) {
    artifacts.add("agent-specification");
    artifacts.add("agent-evaluation-suite");
    gates.add("agent-safety");
  }
  if (profile.features.has("integrations")) {
    artifacts.add("integration-map");
    artifacts.add("resilience-evidence");
    gates.add("integration-readiness");
  }
  if (profile.features.has("payments")) {
    gates.add("payment-readiness");
    approvals.add("commercial-and-production-approval");
  }
  if (profile.sensitiveData) {
    agents.add("security-reviewer");
    agents.add("data-architect");
    gates.add("data-and-privacy");
  }
  if (profile.publicProduction) {
    agents.add("security-reviewer");
    agents.add("devops-release-engineer");
    gates.add("security-readiness");
    gates.add("release-readiness");
    approvals.add("production-deploy");
    approvals.add("public-release");
  }
  if (profile.clientDelivery) {
    agents.add("documentation-handoff-specialist");
    artifacts.add("scope-baseline");
    artifacts.add("acceptance-record");
    artifacts.add("handoff-package");
    gates.add("client-delivery");
  }

  const score = complexityScore(profile);
  return {
    purpose: profile.purpose,
    workflow: profile.clientDelivery ? "wf-client-delivery" : base.workflow,
    wrappedWorkflow: profile.clientDelivery ? base.workflow : null,
    complexity: { score, level: complexityLevel(score) },
    agents: [...agents],
    requiredArtifacts: [...artifacts],
    gates: [...gates],
    approvals: [...approvals]
  };
}

export function profileFromArgs(args) {
  const features = new Set(
    String(args.features ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  );
  const known = new Set(Object.keys(featureRules));
  for (const feature of features) {
    if (!known.has(feature)) throw new Error(`Feature desconhecida: ${feature}`);
  }

  return {
    purpose: String(args.purpose ?? ""),
    features,
    audience: String(args.audience ?? "single"),
    multiTenant: Boolean(args.multi_tenant),
    sensitiveData: Boolean(args.sensitive_data),
    integrationCount: Number(args.integration_count ?? (features.has("integrations") ? 1 : 0)),
    autonomousActions: Boolean(args.autonomous_actions),
    businessCritical: Boolean(args.business_critical),
    publicProduction: Boolean(args.public_production),
    clientDelivery: Boolean(args.client_delivery)
  };
}

