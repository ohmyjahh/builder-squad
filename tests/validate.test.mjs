import test from "node:test";
import assert from "node:assert/strict";
import { runValidation } from "../scripts/validate.mjs";

test("repositório completo passa em todos os validadores estruturais", () => {
  const results = runValidation();
  const failures = results.filter((item) => item.status !== "PASS");
  assert.deepEqual(failures, []);
  assert.ok(results.length >= 18);
});

