import { ensureDir } from "std/fs/mod.ts";

import { type CatppuccinFlavor, flavorEntries } from "@catppuccin/palette";

const combinedFile = () => {
  const flavors = flavorEntries.map(([flavorName, flavor]) => {
    const accents = flavor.accentColorEntries.map(
      ([accentName, accentColor]) => {
        const tints = Object.entries(flavor.tints[accentName]).map((
          [name, color],
        ) => `      @${name}: ${color.hex};`).join("\n");
        const shades = Object.entries(flavor.shades[accentName]).map((
          [name, color],
        ) => `      @${name}: ${color.hex};`).join("\n");
        return [
          `    @${accentName}: {`,
          tints,
          shades,
          `      @default: ${accentColor.hex};`,
          `    };`,
        ].join("\n");
      },
    ).join("\n");

    const monochromaticColors = flavor.monochromaticColorEntries.map(
      ([colorName, color]) => `    @${colorName}: ${color.hex};`,
    ).join("\n");

    return [
      `  @${flavorName}: {`,
      accents,
      monochromaticColors,
      `  };`,
    ].join("\n");
  }).join("\n");

  return `@catppuccin: {
${flavors}
};`;
};

const individualFile = (flavor: CatppuccinFlavor) => {
  const accentLines = flavor.accentColorEntries.reduce(
    (acc, [accentName, accentColor]) => {
      const tintColor = flavor.tints[accentName];
      const shadeColor = flavor.shades[accentName];

      for (const [name, { hex }] of Object.entries(tintColor).reverse()) {
        acc += `@${accentName}-${name}: ${hex};\n`;
      }
      acc += `@${accentName}: ${accentColor.hex};\n`;
      for (const [name, { hex }] of Object.entries(shadeColor)) {
        acc += `@${accentName}-${name}: ${hex};\n`;
      }

      return acc;
    },
    "",
  );
  const monochromaticLines = flavor.monochromaticColorEntries.reduce(
    (acc, [colorName, color]) => {
      acc += `@${colorName}: ${color.hex};\n`;
      return acc;
    },
    "",
  );
  return accentLines + monochromaticLines;
};

const mixinsFile = () =>
  flavorEntries
    .map(([flavorName, { colorEntries }]) => {
      const color = colorEntries
        .map(([key, value]) => {
          return `  ${key}: ${value.hex}`;
        })
        .join(";\n");
      return `#catppuccin(@flavour) when (@flavour = ${flavorName}) {\n${color}\n}`;
    })
    .join("\n");

export const compileLess = async (outDir: string) => {
  await ensureDir(`${outDir}/less`);

  // write each flavor to its own file
  flavorEntries.forEach(([flavorName, flavor]) => {
    Deno.writeTextFile(
      `${outDir}/less/_${flavorName}.less`,
      individualFile(flavor),
    );
  });

  // and a combined map of all flavors
  Deno.writeTextFile(`${outDir}/less/catppuccin.less`, combinedFile());
  Deno.writeTextFile(`${outDir}/less/catppuccin-mixins.less`, mixinsFile());
};
