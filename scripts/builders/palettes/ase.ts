import * as aseutils from "ase-utils";

import type { CatppuccinColors } from "@catppuccin/palette";

export const generateAse = (
  _name: string,
  palette: CatppuccinColors,
): Uint8Array => {
  const data = {
    version: "1.0",
    colors: Object.entries(palette)
      .map(([colorName, value]) => {
        return {
          name: colorName,
          model: "RGB",
          color: Object.values(value.rgb).map((v) => v / 255),
          type: "normal",
        };
      })
      .reverse(),
    groups: [],
  };

  return new Uint8Array(aseutils.encode(data));
};
