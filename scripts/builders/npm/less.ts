import { ensureDir } from "std/fs/mod.ts";

import { flavorEntries } from "@catppuccin/palette";

const combined = `@catppuccin: {
${
  flavorEntries
    .map(([flavorName, palette]) => {
      const color = Object.entries(palette.colors)
        .map(([key, value]) => {
          return `    ${key}: ${value.hex}`;
        })
        .join(";\n");
      return `  @${flavorName}: {\n${color}\n  }`;
    })
    .join("\n")
}
};`;

const mixins = flavorEntries
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
  flavorEntries.map(([flavorName, palette]) => {
    Deno.writeTextFile(
      `${outDir}/less/_${flavorName}.less`,
      Object.entries(palette.colors)
        .map(([key, value]) => {
          return `@${key}: ${value.hex};`;
        })
        .join("\n"),
    );
  });

  // and a combined map of all flavors
  Deno.writeTextFile(`${outDir}/less/catppuccin.less`, combined);
  Deno.writeTextFile(`${outDir}/less/catppuccin-mixins.less`, mixins);
};
