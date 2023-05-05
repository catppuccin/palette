import fs from "fs";
import { createCanvas } from "canvas";
import crypto from "crypto";
import { variants } from "@catppuccin/palette";
import url from "url";
import path from "path";
import { createSwatchesFile } from "procreate-swatches";

const root = path.resolve(
  url.fileURLToPath(new URL(".", import.meta.url)),
  "..",
  "..",
  "dist"
);

const generateGimp = (name, palette) => {
  const n = Object.keys(palette).length;
  const head = `GIMP Palette\n#Palette Name: ${name}\n#Colors: ${n}\n`;
  const pad = (str) => str.toString().padStart(3, " ");
  const body = Object.values(palette)
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

const generateProcreate = async (name, palette) => {
  const rgbValues = Object.values(palette).map((color) => [
    [color.rgb.r, color.rgb.g, color.rgb.b],
    "rgb",
  ]);
  return await createSwatchesFile(name, rgbValues);
};

const generateSip = (name, palette) => {
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

const generatePng = (name, palette) => {
  const colors = Object.entries(palette).map(([key, value]) => value.hex);
  const size = 25;
  const width = size * colors.length;
  const canvas = createCanvas(width, size * 2);
  const ctx = canvas.getContext("2d");

  for (let x = 0; x < width; x += size) {
    const index = (x / size) % colors.length;
    ctx.fillStyle = `#${colors[index]}`;
    ctx.fillRect(x, 0, size, size * 2);
  }

  return canvas.toBuffer("image/png");
};

Object.entries(variants).map(async ([name, palette]) => {
  // formatted "pretty" name, Catppuccin <Flavor>
  const pname = `Catppuccin ${name.charAt(0).toUpperCase() + name.slice(1)}`;

  ["gimp", "procreate", "sip", "png"].map((folder) =>
    fs.mkdirSync(path.join(root, folder), { recursive: true })
  );
  fs.writeFileSync(
    path.resolve(root, `gimp/${pname}.gpl`),
    generateGimp(pname, palette)
  );
  fs.writeFileSync(
    path.resolve(root, `procreate/${pname}.swatches`),
    await generateProcreate(pname, palette)
  );
  fs.writeFileSync(
    path.resolve(root, `sip/${pname}.palette`),
    generateSip(pname, palette)
  );
  fs.writeFileSync(
    path.resolve(root, `png/${pname}.png`),
    generatePng(pname, palette)
  );
});
