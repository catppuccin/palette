#!/usr/bin/env -S deno run -A
import { createSwatchesFile, fs, path } from "./deps.ts";
import { Color, ColorFormats, CtpColors, flavors } from "../mod.ts";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "../dist/");

const generateGimp = (name: string, palette: CtpColors) => {
  const n = Object.keys(palette).length;
  const head = `GIMP Palette\n#Palette Name: ${name}\n#Colors: ${n}\n`;
  const pad = (str: number | string) => str.toString().padStart(3, " ");
  const body = Object.values<ColorFormats>(palette)
    .map((value) => {
      const v = [
        pad(value.rgb.r),
        pad(value.rgb.g),
        pad(value.rgb.b),
        value.hex,
      ];
      return v.join(" ");
    })
    .join("\n");
  return head + body;
};

const generateProcreate = async (
  name: string,
  palette: CtpColors,
) => {
  const rgbValues = Object.values<ColorFormats>(palette).map((color) => [
    [color.rgb.r, color.rgb.g, color.rgb.b],
    "rgb",
  ]);
  return await createSwatchesFile(name, rgbValues);
};

const generateSip = (name: string, palette: Color<ColorFormats>) => {
  const dateString = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");

  const data = {
    cloud: true,
    updatedAt: dateString,
    sip: {
      version: "2.6",
      build: "260",
    },
    id: crypto.randomUUID().toUpperCase(),
    readOnly: false,
    createdAt: dateString,
    dock: false,
    name: name,
    index: 1,
    originalName: name,
    like: false,
    colors: Object.entries<ColorFormats>(palette).map(([key, value]) => {
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

Object.entries(flavors).map(async ([name, palette]) => {
  // formatted "pretty" name, Catppuccin <Flavor>
  const pname = `Catppuccin ${name.charAt(0).toUpperCase() + name.slice(1)}`;

  ["gimp", "procreate", "sip"].map((folder) =>
    fs.ensureDirSync(path.join(ROOT, folder))
  );
  Deno.writeTextFileSync(
    path.resolve(ROOT, `gimp/${pname}.gpl`),
    generateGimp(pname, palette),
  );
  Deno.writeTextFileSync(
    path.resolve(ROOT, `procreate/${pname}.swatches`),
    await generateProcreate(pname, palette),
  );
  Deno.writeTextFileSync(
    path.resolve(ROOT, `sip/${pname}.palette`),
    generateSip(pname, palette),
  );
});
