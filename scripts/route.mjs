#!/usr/bin/env node
import { fail, parseArgs, printJson } from "./lib/cli.mjs";
import { profileFromArgs, routeProject } from "./lib/router.mjs";

try {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    process.stdout.write("Uso: npm run route -- --purpose internal|market|hybrid [--features ui,data,backend,ai,integrations,payments] [--public-production] [--client-delivery]\n");
  } else {
    printJson(routeProject(profileFromArgs(args)));
  }
} catch (error) {
  fail(error);
}

