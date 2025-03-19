import { ensureDir } from "std/fs/ensure_dir.ts";

import { type CatppuccinFlavor, flavorEntries } from "@catppuccin/palette";

const combined = `$palette: (
${
  flavorEntries.map(([flavorName, { colorEntries }]) => {
    const color = colorEntries
      .map(([key, value]) => {
        return `    "${key}": ${value.hex}`;
      })
      .join(",\n");
    return `  "${flavorName}": (\n${color}\n  )`;
  })
    .join(",\n")
}
);`;

const individualFile = (flavor: CatppuccinFlavor) => {
  const accentLines = flavor.accentColorEntries.reduce(
    (acc, [accentName, accentColor]) => {
      const tintColor = flavor.tints[accentName];
      const shadeColor = flavor.shades[accentName];

      for (const [name, { hex }] of Object.entries(tintColor).reverse()) {
        acc += `$${accentName}-${name}: ${hex};\n`;
      }
      acc += `$${accentName}: ${accentColor.hex};\n`;
      for (const [name, { hex }] of Object.entries(shadeColor)) {
        acc += `$${accentName}-${name}: ${hex};\n`;
      }

      return acc;
    },
    "",
  );
  const monochromaticLines = flavor.monochromaticColorEntries.reduce(
    (acc, [colorName, color]) => {
      acc += `$${colorName}: ${color.hex};\n`;
      return acc;
    },
    "",
  );
  return accentLines + monochromaticLines;
};

export const compileScss = async (outDir: string) => {
  await ensureDir(`${outDir}/scss`);

  // write each flavor to its own file
  flavorEntries.map(([flavorName, flavor]) =>
    Deno.writeTextFile(
      `${outDir}/scss/_${flavorName}.scss`,
      individualFile(flavor),
    )
  );

  // and a combined map of all flavors
  Deno.writeTextFile(`${outDir}/scss/_catppuccin.scss`, combined);
};
