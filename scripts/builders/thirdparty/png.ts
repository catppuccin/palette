import { Color, ColorFormats } from "catppuccin/mod.ts";
import { createCanvas } from "scripts/deps.ts";

export const generatePng = (
  _name: string,
  palette: Color<ColorFormats>,
): Uint8Array => {
  const colors = Object.values(palette).map((el) => el.hex);

  const size = 25;
  const width = size * colors.length;

  const canvas = createCanvas(width, size * 2);
  const ctx = canvas.getContext("2d");

  for (let x = 0; x < width; x += size) {
    const index = (x / size) % colors.length;
    ctx.fillStyle = colors[index];
    ctx.fillRect(x, 0, size, size * 2);
  }

  return canvas.toBuffer("image/png");
};
