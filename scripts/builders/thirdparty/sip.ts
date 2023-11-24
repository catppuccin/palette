import type { Color, ColorFormat } from "@/mod.ts";

export const generateSip = (
  name: string,
  palette: Color<ColorFormat>,
): string => {
  const dateString = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");

  const data = {
    // cloud: true,
    // updatedAt: dateString,
    sip: {
      version: "2.6",
      build: "260",
    },
    id: crypto.randomUUID().toUpperCase(),
    readOnly: true,
    createdAt: dateString,
    dock: false,
    name: name,
    index: 1,
    originalName: name,
    like: false,
    colors: Object.entries(palette).map(([key, value]) => {
      return {
        alpha: 1,
        red: value.rgb.r / 255,
        green: value.rgb.g / 255,
        blue: value.rgb.b / 255,
        name: key,
        createdAt: dateString,
        id: crypto.randomUUID().toUpperCase(),
      };
    }),
    lock: true,
  };

  return JSON.stringify(data, null, 2);
};
