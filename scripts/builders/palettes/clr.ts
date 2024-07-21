import type { CatppuccinColors } from "@catppuccin/palette";

export const generateClrJson = (
  _name: string,
  palette: CatppuccinColors,
): string => {
  const data: Record<string, { hex: string; order: number }> = Object
    .fromEntries(
      Object.entries(palette).map(([_, { name, hex, order }]) => {
        return [name, { hex, order }];
      }),
    );

  return JSON.stringify(data);
};
