//@deno-types="@/types/procreate-swatches.d.ts";
import { createSwatchesFile } from "procreate-swatches";

import type { CatppuccinColors } from "@/mod.ts";

export const generateProcreate = (name: string, palette: CatppuccinColors) => {
  return createSwatchesFile(
    name,
    Object.values(palette).map((color) => [Object.values(color.rgb), "rgb"]),
  );
};
