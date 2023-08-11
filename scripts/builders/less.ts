import { fs } from "../deps.ts";
import { flavors } from "../../mod.ts";

const combined = `@catppuccin: {
${
  Object.entries(flavors).map(([flavorName, palette]) => {
    const color = Object.entries(palette)
      .map(([key, value]) => {
        return `    ${key}: ${value.hex}`;
      }).join(";\n");
    return `  @${flavorName}: {\n${color}\n  }`;
  }).join("\n")
}
};`;

const mixins = Object.entries(flavors).map(([flavorName, palette]) => {
  const color = Object.entries(palette)
    .map(([key, value]) => {
      return `  ${key}: ${value.hex}`;
    }).join(";\n");
  return `#catppuccin(@flavour) when (@flavour = ${flavorName}) {\n${color}\n}`;
}).join("\n");

export const compileLess = (outDir: string) => {
  fs.ensureDirSync(`${outDir}/less`);

  // write each flavor to its own file
  Object.entries(flavors).map(([flavorName, palette]) => {
    Deno.writeTextFileSync(
      `${outDir}/less/_${flavorName}.less`,
      Object.entries(palette)
        .map(([key, value]) => {
          return `@${key}: ${value.hex};`;
        }).join("\n"),
    );
  });

  // and a combined map of all flavors
  Deno.writeTextFileSync(`${outDir}/less/catppuccin.less`, combined);
  Deno.writeTextFileSync(`${outDir}/less/catppuccin-mixins.less`, mixins);
};
