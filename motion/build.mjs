// Inlines clips/_kit.css into each clip so standalone `-c` renders are
// fully self-contained (the external relative <link> is unreliable under the
// renderer's bundler). Authoring stays DRY in clips/; renders run from build/.
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";

const kit = readFileSync("clips/_kit.css", "utf8");
mkdirSync("build", { recursive: true });

let n = 0;
for (const f of readdirSync("clips")) {
  if (!f.endsWith(".html")) continue;
  let html = readFileSync(`clips/${f}`, "utf8");
  html = html.replace(
    /<link rel="stylesheet" href="_kit\.css"\s*\/>/,
    `<style>\n${kit}\n</style>`,
  );
  writeFileSync(`build/${f}`, html);
  n++;
}
console.log(`inlined kit into ${n} clip(s) → build/`);
