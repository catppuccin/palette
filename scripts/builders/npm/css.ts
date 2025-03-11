import { sprintf } from "std/fmt/printf.ts";
import { ensureDir } from "std/fs/mod.ts";

import {
  type AccentName,
  type BlendedColorFormat,
  type CatppuccinShadeColors,
  type CatppuccinTintColors,
  type ColorFormat,
  flavorEntries,
} from "@catppuccin/palette";

const cssColorLines = (
  name: string,
  color: ColorFormat | BlendedColorFormat,
) => {
  return [
    sprintf("  %s: %s;", name, color.hex),
    sprintf("  %s-rgb: %d %d %d;", name, ...Object.values(color.rgb)),
    sprintf(
      "  %s-hsl: %.3f %.3f%% %.3f%%;",
      name,
      color.hsl.h,
      color.hsl.s * 100,
      color.hsl.l * 100,
    ),
  ];
};

const cssTintShadesLines = (
  prefix: string,
  accent: AccentName,
  tintShades: CatppuccinTintColors | CatppuccinShadeColors,
) => {
  return Object.entries(tintShades[accent]).map(
    ([colorName, color]) =>
      cssColorLines(`${prefix}-${colorName}`, color).join("\n"),
  );
};

const template = flavorEntries.map(([flavorName, flavor]) => {
  const accentColors = flavor.accentColorEntries.map(
    ([colorName, color]) => {
      const name = `--ctp-${flavorName}-${colorName}`;
      return [
        ...cssTintShadesLines(name, colorName, flavor.tints).reverse(),
        ...cssColorLines(name, color),
        ...cssTintShadesLines(name, colorName, flavor.shades),
      ].join("\n");
    },
  );
  const monochromaticColors = flavor.monochromaticColorEntries.map(
    ([colorName, color]) => {
      const name = `--ctp-${flavorName}-${colorName}`;
      return cssColorLines(name, color).join("\n");
    },
  );

  const colors = [
    ...accentColors,
    ...monochromaticColors,
  ].join("\n");

  return `:root {\n${colors}\n}`;
})
  .join("\n\n");

export const compileCss = async (outDir: string) => {
  await ensureDir(`${outDir}/css`);

  Deno.writeTextFile(`${outDir}/css/catppuccin.css`, template);
};
