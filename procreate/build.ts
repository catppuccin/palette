#!/usr/bin/env deno run --allow-read --allow-write --allow-env
import { createSwatchesFile } from "npm:procreate-swatches";

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

type Color = {
  hex: string;
  rgb: string;
  hsl: string;
};
type Palette = Record<string, Color>;

const library: Palette[] = JSON.parse(
  await Deno.readTextFile("../palette.json"),
);

for (const palette in library) {
  const colours: Palette = library[palette];

  const rgbValues = Object.values(colours).map((colour) => [
    colour.rgb.match(/\d+/g),
    "rgb",
  ]);

  const name = `Catppuccin ${capitalize(palette)}`;
  const data: ArrayBuffer = await createSwatchesFile(name, rgbValues);

  Deno.writeFileSync(`./${name}.swatches`, new Uint8Array(data));
}
