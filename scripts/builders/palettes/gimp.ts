import type { CatppuccinColors } from "@catppuccin/palette";

const header = (name: string, count: number) =>
  `GIMP Palette
Name: ${name}
#Colors: ${count}
`;

export const generateGimp = (name: string, palette: CatppuccinColors) => {
  const n = Object.keys(palette).length;
  const head = header(name, n);

  const body = Object.values(palette)
    .map((value) => {
      const v = [
        ...Object.values(value.rgb).map((v) => v.toString().padStart(3, " ")),
        value.hex.replace("#", ""),
      ];
      return v.join(" ");
    })
    .join("\n");
  return head + body;
};
