import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SQUAD_ROOT } from "../scripts/lib/paths.mjs";

function read(path) {
  return readFileSync(resolve(SQUAD_ROOT, path), "utf8");
}

test("todos os envios automatizados resolvem para templates únicos", () => {
  const blueprint = read("docs/funnel/AUTOMATION-BLUEPRINT.yaml");
  const catalog = read("docs/funnel/MESSAGE-CATALOG.yaml");
  const sends = [...blueprint.matchAll(/send:\s*([a-z0-9_.]+)/g)].map((match) => match[1]);
  const ids = [...catalog.matchAll(/- id:\s*([a-z0-9_.]+)/g)].map((match) => match[1]);
  const catalogSet = new Set(ids);

  assert.equal(sends.length, 36);
  assert.equal(new Set(sends).size, sends.length);
  assert.equal(catalogSet.size, ids.length);
  assert.deepEqual(sends.filter((id) => !catalogSet.has(id)), []);
});

test("WhatsApp promocional exige opt-in explícito e saída", () => {
  const catalog = read("docs/funnel/MESSAGE-CATALOG.yaml");
  const copy = read("docs/copy/whatsapp/PRIVATE-MESSAGES.md");
  const marketingIds = [
    "whatsapp.entry_abandonment_01",
    "whatsapp.workshop_invite_01",
    "whatsapp.squad_abandonment_01",
    "whatsapp.workshop_replay_01",
    "whatsapp.community_closing_4h",
    "whatsapp.community_checkout_abandonment"
  ];

  for (const id of marketingIds) {
    const start = catalog.indexOf(`- id: ${id}`);
    const next = catalog.indexOf("\n    - id:", start + 1);
    const block = catalog.slice(start, next === -1 ? undefined : next);
    assert.match(block, /requires_explicit_opt_in: true/);
    assert.match(copy, new RegExp(`## ${id.replaceAll(".", "\\.")}`));
  }
  assert.match(copy, /responda SAIR/i);
});

test("evento programado tem disclosure e não permite bot-persona", () => {
  const sources = [
    "docs/funnel/ETHICAL-EVENT-AND-MESSAGING-POLICY.md",
    "docs/funnel/WORKSHOP-INTERACTION-CUE-SHEET.md",
    "docs/copy/vsl/WORKSHOP-SESSION-AND-PITCH.md",
    "docs/copy/pages/PAGES-AND-CHECKOUT-COPY.md",
    "docs/copy/whatsapp/GROUP-WARMUP-AND-CART.md"
  ].map(read);
  const catalog = read("docs/funnel/MESSAGE-CATALOG.yaml");

  for (const source of sources) {
    assert.match(source, /previamente gravado/i);
    assert.match(source, /programad[ao]/i);
  }
  assert.match(catalog, /bot_personas_allowed: false/);
  assert.match(sources[0], /não pode fingir transmissão ao vivo/i);
  assert.match(sources[1], /não gerar presença, cidade, dúvida, aplauso, compra ou depoimento por bot/i);
});

test("escada tem uma oferta por degrau e preços coerentes", () => {
  const ladder = read("docs/commercial/PRODUCT-LADDER-AND-OFFER.md");
  const page = read("docs/copy/pages/PAGES-AND-CHECKOUT-COPY.md");
  const workshop = read("docs/copy/vsl/WORKSHOP-SESSION-AND-PITCH.md");

  assert.match(ladder, /Builder IA \| R\$297/);
  assert.match(ladder, /Builder Squad \| R\$497/);
  assert.match(ladder, /Comunidade Builder \| R\$997\/12 meses/);
  assert.match(ladder, /um único plano de 12 meses/);
  assert.match(page, /Sem renovação automática no piloto/);
  assert.match(workshop, /Não há renovação automática neste piloto/);
});

test("onboarding do Squad permanece self-service sem suporte individual", () => {
  const onboarding = read("docs/operations/SELF-SERVICE-ONBOARDING.md");
  const upsell = read("docs/copy/vsl/BUILDER-SQUAD-UPSELL-VSL.md");
  const states = read("docs/funnel/LIFECYCLE-STATE-MACHINE.yaml");

  assert.match(onboarding, /Não há suporte individual de instalação/);
  assert.match(upsell, /não vem com suporte individual de instalação/);
  assert.match(states, /no_installation_support_is_promised/);
});

test("ativos internos do funil não entram na entrega do comprador", () => {
  const packaging = read("scripts/package.mjs");
  const installation = read("scripts/install.mjs");

  for (const source of [packaging, installation]) {
    assert.doesNotMatch(source, /"docs\/copy"/);
    assert.doesNotMatch(source, /"docs\/funnel"/);
    assert.doesNotMatch(source, /"docs\/operations"/);
    assert.doesNotMatch(source, /"docs\/commercial"/);
    assert.match(source, /docs\/commercial\/PRODUCT-DELIVERY-MANIFEST\.md/);
    assert.match(source, /tests\/commercial-funnel\.test\.mjs/);
  }
});

test("edição semanal tem corte, replay e fechamento reais", () => {
  const automation = read("docs/funnel/AUTOMATION-BLUEPRINT.yaml");
  const calendar = read("docs/funnel/WEEKLY-EDITION-CALENDAR.md");

  assert.match(automation, /same_day_assignment_cutoff: Tuesday 15:00/);
  assert.match(automation, /event_start: Tuesday 19:00/);
  assert.match(automation, /replay_close: Wednesday 23:59/);
  assert.match(automation, /community_cart_close: Thursday 23:59/);
  assert.match(calendar, /nunca enviar lembrete atrasado/i);
});
