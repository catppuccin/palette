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
  Object.entries(flavors).flatMap(
    async ([identifier, { name: nameWithAccent, colors }]) => {
      const nameWithoutAccent = identifier.charAt(0).toUpperCase() +
        identifier.slice(1);

      await Deno.writeFile(
        join(ROOT, `ase/Catppuccin ${nameWithoutAccent}.ase`),
        generateAse(nameWithoutAccent, colors),
      );
      await Deno.writeFile(
        join(ROOT, `png/Catppuccin ${nameWithoutAccent}.png`),
        generatePng(nameWithoutAccent, colors),
      );
      await Deno.writeFile(
        join(ROOT, `procreate/Catppuccin ${nameWithoutAccent}.swatches`),
        await generateProcreate(nameWithoutAccent, colors),
      );
      await Deno.writeTextFile(
        join(ROOT, `gimp/Catppuccin ${nameWithoutAccent}.gpl`),
        generateGimp(nameWithoutAccent, colors),
      );
      await Deno.writeTextFile(
        join(ROOT, `sip/Catppuccin ${nameWithoutAccent}.palette`),
        generateSip(nameWithoutAccent, colors),
      );

      if (Deno.env.get("COMPILE_APPLE_COLOR_LIST") === "1") {
        const clrJson = join(ROOT, `clr/${nameWithoutAccent}.json`);
        await Deno.writeTextFile(
          clrJson,
          generateClrJson(nameWithoutAccent, colors),
        );

        const cmd = new Deno.Command("swift", {
          args: [
            join(import.meta.dirname!, "./builders/palettes/json-to-clr.swift"),
            clrJson,
            join(ROOT, `clr/Catppuccin ${nameWithAccent}.clr`),
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
    },
  ),
).then(() => Deno.exit(0));
