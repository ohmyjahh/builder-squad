import test from "node:test";
import assert from "node:assert/strict";
import { assertTransition, canTransition } from "../scripts/lib/state-machine.mjs";

test("permite transição prevista", () => {
  assert.equal(canTransition("DISCOVERY", "CLASSIFIED"), true);
  assert.doesNotThrow(() => assertTransition("DISCOVERY", "CLASSIFIED"));
});

test("rejeita salto de estado", () => {
  assert.equal(canTransition("DISCOVERY", "RELEASED"), false);
  assert.throws(() => assertTransition("DISCOVERY", "RELEASED"), /Transição inválida/);
});

test("release exige aprovação", () => {
  assert.throws(() => assertTransition("READY_FOR_RELEASE", "RELEASING", false), /exige --approved/);
  assert.doesNotThrow(() => assertTransition("READY_FOR_RELEASE", "RELEASING", true));
});

test("estado terminal não avança", () => {
  assert.throws(() => assertTransition("COMPLETE", "IN_EXECUTION"), /Transição inválida/);
});

