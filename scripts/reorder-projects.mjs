import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const ORDER = [
  "Sabeel Ecosystem",
  "Sendit",
  "PrimeProfs",
  "Pulpe Tech · Flexy Bank",
  "GainUP",
  "Kurubis Uniforme",
  "GoTogether",
  "SafeSiteConnect",
  "MedisApp",
];

const locales = ["en.ts", "fr.ts", "de.ts"];

for (const file of locales) {
  const path = join(root, "src/i18n/locales", file);
  let content = readFileSync(path, "utf8");

  const start = content.indexOf("    data: [");
  const end = content.indexOf("\n    ],\n  },\n  experience:");
  if (start === -1 || end === -1) throw new Error(`Could not find projects.data in ${file}`);

  const block = content.slice(start, end);
  const projects = [];
  const re = /\n      \{\n        id: \d+,/g;
  const indices = [...block.matchAll(re)].map((m) => m.index);

  for (let i = 0; i < indices.length; i++) {
    const from = indices[i];
    const to = i + 1 < indices.length ? indices[i + 1] : block.length;
    projects.push(block.slice(from, to).trimEnd());
  }

  const byTitle = new Map();
  for (const p of projects) {
    const m = p.match(/title: "([^"]+)"/);
    if (!m) throw new Error(`No title in project block in ${file}`);
    byTitle.set(m[1], p);
  }

  const reordered = ORDER.map((title, i) => {
    const p = byTitle.get(title);
    if (!p) throw new Error(`Missing project "${title}" in ${file}`);
    return p.replace(/id: \d+,/, `id: ${i + 1},`);
  });

  const newBlock = `    data: [\n${reordered.join("\n")},\n    ]`;
  content = content.slice(0, start) + newBlock + content.slice(end + "\n    ],".length);
  writeFileSync(path, content);
  console.log(`Reordered ${file}`);
}
