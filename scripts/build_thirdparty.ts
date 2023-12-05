import { emptyDir, ensureDir } from "std/fs/mod.ts";
import { join } from "std/path/mod.ts";

import { flavors } from "@/mod.ts";
import {
  generateAse,
  generateGimp,
  generatePng,
  generateProcreate,
  generateSip,
} from "./builders/mod.ts";

const ROOT = new URL("../dist/palettes", import.meta.url).pathname;
await emptyDir(ROOT);

await Promise.all(
  ["ase", "gimp", "procreate", "png", "sip"].map((folder) =>
    ensureDir(join(ROOT, folder))
  ),
);

Promise.all(
  Object.entries(flavors).flatMap(async ([name, { colors }]) => {
    const fname = name.charAt(0).toUpperCase() + name.slice(1);

    await Deno.writeFile(
      join(ROOT, `ase/${fname}.ase`),
      generateAse(fname, colors),
    );
    await Deno.writeFile(
      join(ROOT, `png/${fname}.png`),
      generatePng(fname, colors),
    );
    await Deno.writeFile(
      join(ROOT, `procreate/${fname}.swatches`),
      await generateProcreate(fname, colors),
    );
    await Deno.writeTextFile(
      join(ROOT, `gimp/${fname}.gpl`),
      generateGimp(fname, colors),
    );
    await Deno.writeTextFile(
      join(ROOT, `sip/${fname}.palette`),
      generateSip(fname, colors),
    );
  }),
).then(() => Deno.exit());
