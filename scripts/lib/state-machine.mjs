export const transitions = {
  NEW: ["DISCOVERY", "CANCELLED"],
  DISCOVERY: ["CLASSIFIED", "BLOCKED", "CANCELLED"],
  CLASSIFIED: ["BRIEFED", "DISCOVERY", "BLOCKED", "CANCELLED"],
  BRIEFED: ["VALIDATING", "PLANNED", "DISCOVERY", "BLOCKED", "CANCELLED"],
  VALIDATING: ["PLANNED", "BRIEFED", "BLOCKED", "CANCELLED"],
  PLANNED: ["READY_FOR_EXECUTION", "BRIEFED", "BLOCKED", "CANCELLED"],
  READY_FOR_EXECUTION: ["IN_EXECUTION", "PLANNED", "BLOCKED", "CANCELLED"],
  IN_EXECUTION: ["IN_REVIEW", "NEEDS_REVISION", "BLOCKED", "CANCELLED"],
  IN_REVIEW: ["NEEDS_REVISION", "READY_FOR_RELEASE", "IN_EXECUTION", "BLOCKED", "CANCELLED"],
  NEEDS_REVISION: ["IN_EXECUTION", "BLOCKED", "CANCELLED"],
  READY_FOR_RELEASE: ["RELEASING", "IN_EXECUTION", "BLOCKED", "CANCELLED"],
  RELEASING: ["RELEASED", "ROLLING_BACK", "BLOCKED"],
  ROLLING_BACK: ["IN_EXECUTION", "BLOCKED", "CANCELLED"],
  RELEASED: ["MEASURING", "COMPLETE", "IN_EXECUTION", "BLOCKED"],
  MEASURING: ["COMPLETE", "IN_EXECUTION", "BLOCKED", "CANCELLED"],
  BLOCKED: ["DISCOVERY", "BRIEFED", "PLANNED", "IN_EXECUTION", "IN_REVIEW", "READY_FOR_RELEASE", "CANCELLED"],
  COMPLETE: [],
  CANCELLED: []
};

export const approvalStates = new Set(["RELEASING", "ROLLING_BACK"]);

export function canTransition(from, to) {
  return Boolean(transitions[from]?.includes(to));
}

export function assertTransition(from, to, approved = false) {
  if (!Object.hasOwn(transitions, from)) throw new Error(`Estado atual desconhecido: ${from}`);
  if (!Object.hasOwn(transitions, to)) throw new Error(`Estado alvo desconhecido: ${to}`);
  if (!canTransition(from, to)) throw new Error(`Transição inválida: ${from} → ${to}`);
  if (approvalStates.has(to) && !approved) {
    throw new Error(`A transição para ${to} exige --approved e um registro de aprovação.`);
  }
}

