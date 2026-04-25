import { ensureDir } from "std/fs/ensure_dir.ts";

import { type CatppuccinFlavor, flavorEntries } from "@catppuccin/palette";
import { indent } from "./utils.ts";

function getColorsForFlavor(
  flavor: CatppuccinFlavor,
) {
  return flavor.colorEntries
    .map(([key, value]) => {
      return `  "${key}": ${value.hex}`;
    })
    .join(",\n");
}

function getAnsiColorsForFlavor(
  flavor: CatppuccinFlavor,
) {
  return flavor.ansiColorEntries.map(
    ([ansiColorName, { normal, bright }]) => {
      return `  "${ansiColorName}": (
    "normal": ${normal.hex},
    "bright": ${bright.hex},
  )`;
    },
  ).join(",\n");
}

const combined = `$palette: (
${
  flavorEntries.map(([flavorName, flavorPalette]) => {
    return `  "${flavorName}": (\n${
      indent(getColorsForFlavor(flavorPalette), "  ")
    }\n    "ansi": (\n${
      indent(getAnsiColorsForFlavor(flavorPalette), "    ")
    }\n    )\n  )`;
  })
    .join(",\n")
}
);`;

export const compileScss = async (outDir: string) => {
  await ensureDir(`${outDir}/scss`);

  // write each flavor to its own file
  flavorEntries.map(([flavorName, flavorPalette]) => {
    Deno.writeTextFile(
      `${outDir}/scss/_${flavorName}.scss`,
      flavorPalette.colorEntries
        .map(([key, value]) => {
          return `$${key}: ${value.hex};`;
        })
        .join("\n") +
        `\n$ansi: (\n${getAnsiColorsForFlavor(flavorPalette)}\n);\n`,
    );
  });

  // and a combined map of all flavors
  Deno.writeTextFile(`${outDir}/scss/_catppuccin.scss`, combined);
};
