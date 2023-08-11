#!/usr/bin/env -S deno run -A
import { fs, path } from "./deps.ts";
import { flavors } from "../mod.ts";
import {
  generateAse,
  generateGimp,
  generateProcreate,
  generateSip,
} from "./builders/mod.ts";

const ROOT = path.resolve(
  new URL(".", import.meta.url).pathname,
  "../dist/palettes",
);
fs.emptyDirSync(ROOT);

Object.entries(flavors).map(async ([name, palette]) => {
  // formatted "pretty" name, Catppuccin <Flavor>
  const pname = `Catppuccin ${name.charAt(0).toUpperCase() + name.slice(1)}`;

  ["ase", "gimp", "procreate", "sip"].map((folder) =>
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
  Deno.writeTextFileSync(
    path.resolve(ROOT, `procreate/${pname}.swatches`),
    await generateProcreate(pname, palette),
  );
  Deno.writeTextFileSync(
    path.resolve(ROOT, `sip/${pname}.palette`),
    generateSip(pname, palette),
  );
});
