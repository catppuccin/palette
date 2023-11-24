import { createCanvas } from "canvas";

import type { Color, ColorFormat } from "@/mod.ts";

export const generatePng = (
  _name: string,
  palette: Color<ColorFormat>
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
