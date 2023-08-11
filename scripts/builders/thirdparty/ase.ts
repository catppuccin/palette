import { Color, ColorFormats } from "catppuccin/mod.ts";
import { aseutils } from "scripts/deps.ts";

export const generateAse = (
  _name: string,
  palette: Color<ColorFormats>,
): Uint8Array => {
  const data = {
    version: "1.0",
    colors: Object.entries(palette).map(([colorName, value]) => {
      return {
        name: colorName,
        model: "RGB",
        color: Object.values(value.rgb).map((v) => v / 255),
        type: "normal",
      };
    }).reverse(),
    groups: [],
  };

  return Uint8Array.from(aseutils.encode(data));
};
