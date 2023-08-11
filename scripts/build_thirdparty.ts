#!/usr/bin/env -S deno run -A
import { fs, path } from "./deps.ts";
import { flavors } from "../mod.ts";
import {
  generateAse,
  generateGimp,
  generatePng,
  generateProcreate,
  generateSip,
} from "./builders/mod.ts";

const ROOT = path.resolve(
  new URL(".", import.meta.url).pathname,
  "../dist/palettes",
);
fs.emptyDirSync(ROOT);

Object.entries(flavors).map(async ([name, palette]) => {
  const pname = name.charAt(0).toUpperCase() + name.slice(1);

  ["ase", "gimp", "procreate", "png", "sip"].map((folder) =>
    fs.ensureDirSync(path.join(ROOT, folder))
  );

  Deno.writeFileSync(
    path.resolve(ROOT, `ase/${pname}.ase`),
    generateAse(pname, palette),
  );
  Deno.writeTextFileSync(
    path.resolve(ROOT, `gimp/${pname}.gpl`),
    generateGimp(pname, palette),
  );
  Deno.writeFileSync(
    path.resolve(ROOT, `png/${pname}.png`),
    generatePng(pname, palette),
  );
  Deno.writeTextFileSync(
    path.resolve(ROOT, `procreate/${pname}.swatches`),
    await generateProcreate(pname, palette),
  );
  Deno.writeTextFileSync(
    path.resolve(ROOT, `sip/${pname}.palette`),
    generateSip(pname, palette),
  );
});
