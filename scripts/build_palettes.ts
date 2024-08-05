import { emptyDir, ensureDir } from "std/fs/mod.ts";
import { join } from "std/path/mod.ts";

import { flavors } from "@catppuccin/palette";
import {
  generateAse,
  generateClrJson,
  generateGimp,
  generatePng,
  generateProcreate,
  generateSip,
} from "./builders/mod.ts";

const ROOT = new URL("../dist/palettes", import.meta.url).pathname;
await emptyDir(ROOT);

await Promise.all(
  ["ase", "gimp", "procreate", "png", "sip", "clr"].map((folder) =>
    ensureDir(join(ROOT, folder))
  ),
);

Promise.all(
  Object.entries(flavors).flatMap(async ([identifier, { name, colors }]) => {
    const fname = identifier.charAt(0).toUpperCase() + identifier.slice(1);

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

    const clrJson = join(ROOT, `clr/${fname}.json`);
    await Deno.writeTextFile(
      clrJson,
      generateClrJson(fname, colors),
    );
    const cmd = new Deno.Command("swift", {
      args: [
        join(import.meta.dirname!, "./builders/palettes/json-to-clr.swift"),
        clrJson,
        join(ROOT, `clr/Catppuccin ${name}.clr`),
      ],
    });
    const { code, stderr, stdout } = await cmd.output();
    const td = new TextDecoder();
    if (code === 0) {
      console.log(td.decode(stdout).trim());
    } else {
      throw new Error(td.decode(stderr));
    }
    await Deno.remove(clrJson);
  }),
).then(() => Deno.exit(0));
