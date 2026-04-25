import { ensureDir } from "std/fs/mod.ts";

import { type CatppuccinFlavor, flavorEntries } from "@catppuccin/palette";
import { indent } from "./utils.ts";

function getColorsForFlavor(
  flavor: CatppuccinFlavor,
  inMap: boolean,
) {
  const colors = flavor.colorEntries
    .map(([key, value]) => {
      return `${inMap ? "" : "@"}${key}: ${value.hex};`;
    })
    .join("\n");

  const ansiColors = flavor.ansiColorEntries.map(
    ([ansiColorName, { normal, bright }]) => {
      return `@${ansiColorName}: {
  normal: ${normal.hex};
  bright: ${bright.hex};
};`;
    },
  ).join("\n");

  return `${colors}\n\n@ansi: {\n${indent(ansiColors, "  ")}\n};`;
}

const combined = `@catppuccin: {
${
  flavorEntries
    .map(([flavorName, flavorPalette]) => {
      return `  @${flavorName}: {\n${
        indent(getColorsForFlavor(flavorPalette, true), "    ")
      }\n  }`;
    })
    .join("\n")
}
};`;

const mixins = flavorEntries
  .map(([flavorName, flavorPalette]) => {
    return `#catppuccin(@flavour) when (@flavour = ${flavorName}) {\n${
      indent(getColorsForFlavor(flavorPalette, false), "  ")
    }\n}`;
  })
  .join("\n");

export const compileLess = async (outDir: string) => {
  await ensureDir(`${outDir}/less`);

  // write each flavor to its own file
  flavorEntries.map(([flavorName, flavorPalette]) => {
    Deno.writeTextFile(
      `${outDir}/less/_${flavorName}.less`,
      getColorsForFlavor(flavorPalette, false),
    );
  });

  // and a combined map of all flavors
  Deno.writeTextFile(`${outDir}/less/catppuccin.less`, combined);
  Deno.writeTextFile(`${outDir}/less/catppuccin-mixins.less`, mixins);
};
