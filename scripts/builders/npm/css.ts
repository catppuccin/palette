import { sprintf } from "std/fmt/printf.ts";
import { ensureDir } from "std/fs/mod.ts";

import {
  type AccentName,
  type CatppuccinShadeColors,
  type CatppuccinTintColors,
  flavorEntries,
} from "@catppuccin/palette";

const blendedColors = (
  blended: CatppuccinTintColors | CatppuccinShadeColors,
  prefix: string,
  accent: AccentName,
) => {
  return Object.entries(blended[accent]).flatMap(
    ([colorName, color]) => [
      sprintf("  %s-%s: %s;", prefix, colorName, color.hex),
      sprintf(
        "  %s-%s-rgb: %d %d %d;",
        prefix,
        colorName,
        ...Object.values(color.rgb),
      ),
      sprintf(
        "  %s-%s-hsl: %.3f %.3f%% %.3f%%;",
        prefix,
        colorName,
        color.hsl.h,
        color.hsl.s * 100,
        color.hsl.l * 100,
      ),
    ],
  );
};

const template = flavorEntries
  .map(([flavorName, { tints, shades, colorEntries }]) => {
    const colors = colorEntries
      .map(([colorName, { accent, hex, rgb, hsl: { h, s, l } }]) => {
        const name = `--ctp-${flavorName}-${colorName}`;
        const cssColors = [
          sprintf("  %s: %s;", name, hex),
          sprintf("  %s-rgb: %d %d %d;", name, ...Object.values(rgb)),
          sprintf("  %s-hsl: %.3f %.3f%% %.3f%%;", name, h, s * 100, l * 100),
        ];
        const cssTints = accent
          ? blendedColors(tints, name, colorName as AccentName)
          : [];
        const cssShades = accent
          ? blendedColors(shades, name, colorName as AccentName)
          : [];

        return [
          ...cssTints.reverse(),
          ...cssColors,
          ...cssShades,
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
