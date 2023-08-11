import { fs } from "../deps.ts";
import { flavors } from "../../mod.ts";

const template = Object.entries(flavors).map(([flavorName, palette]) => {
  const colors = Object.entries(palette)
    .map(([colorName, value]) => {
      const baseName = `--ctp-${flavorName}-${colorName}`;
      return [
        `${baseName}-hex: ${value.hex}`,
        `${baseName}-hsl: ${Object.values(value.hsl).join(" ")}`,
        `${baseName}-rgb: ${Object.values(value.rgb).join(" ")}`,
      ].map((e) => `  ${e}`).join(";\n");
    }).join(";\n");
  return `:root {\n${colors}\n}`;
}).join("\n\n");

export const compileCss = (outDir: string) => {
  fs.ensureDirSync(`${outDir}/css`);
  Deno.writeTextFileSync(`${outDir}/css/catppuccin.css`, template);
};
