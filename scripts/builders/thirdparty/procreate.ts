import { CtpColors } from "catppuccin/mod.ts";
import { createSwatchesFile } from "scripts/deps.ts";

export const generateProcreate = async (
  name: string,
  palette: CtpColors,
) => {
  const rgbValues = Object.values(palette).map((color) => [
    Object.values(color.rgb),
    "rgb",
  ]);
  return await createSwatchesFile(name, rgbValues);
};
