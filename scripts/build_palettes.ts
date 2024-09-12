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
    const safeName = identifier.charAt(0).toUpperCase() + identifier.slice(1);

    await Deno.writeFile(
      join(ROOT, `ase/Catppuccin ${safeName}.ase`),
      generateAse(safeName, colors),
    );
    await Deno.writeFile(
      join(ROOT, `png/Catppuccin ${safeName}.png`),
      generatePng(safeName, colors),
    );
    await Deno.writeFile(
      join(ROOT, `procreate/Catppuccin ${safeName}.swatches`),
      await generateProcreate(safeName, colors),
    );
    await Deno.writeTextFile(
      join(ROOT, `gimp/Catppuccin ${safeName}.gpl`),
      generateGimp(safeName, colors),
    );
    await Deno.writeTextFile(
      join(ROOT, `sip/Catppuccin ${safeName}.palette`),
      generateSip(safeName, colors),
    );

    if (Deno.env.get("COMPILE_APPLE_COLOR_LIST") === "1") {
      const clrJson = join(ROOT, `clr/${safeName}.json`);
      await Deno.writeTextFile(
        clrJson,
        generateClrJson(safeName, colors),
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
    }
  }),
).then(() => Deno.exit(0));
