import { CtpColors } from "../../../mod.ts";
import { createSwatchesFile } from "../../deps.ts";

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
