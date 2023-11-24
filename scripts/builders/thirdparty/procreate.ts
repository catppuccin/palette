//@deno-types="@/types/procreate-swatches.d.ts";
import { createSwatchesFile } from "procreate-swatches";

import type { CtpColors } from "@/mod.ts";

export const generateProcreate = (name: string, palette: CtpColors) => {
  return createSwatchesFile(
    name,
    Object.values(palette).map((color) => [Object.values(color.rgb), "rgb"])
  );
};
