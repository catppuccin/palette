import { sprintf } from "std/fmt/printf.ts";
import { ensureDir } from "std/fs/mod.ts";

import { flavorEntries } from "@catppuccin/palette";

const template = flavorEntries
  .map(([flavorName, { colorEntries }]) => {
    const colors = colorEntries
      .map(([colorName, { hex, rgb, hsl: { h, s, l } }]) => {
        const name = `--ctp-${flavorName}-${colorName}`;

        return [
          sprintf("  %s: %s;", name, hex),
          sprintf("  %s-rgb: %d, %d, %d;", name, ...Object.values(rgb)),
          sprintf("  %s-hsl: %.3f, %.3f%%, %.3f%%;", name, h, s * 100, l * 100),
        ].join("\n");
      })
      .join("\n");
    return `:root {\n${colors}\n}`;
  })
  .join("\n\n");

export const compileCss = async (outDir: string) => {
  await ensureDir(`${outDir}/css`);

  Deno.writeTextFile(`${outDir}/css/catppuccin.css`, template);
};
