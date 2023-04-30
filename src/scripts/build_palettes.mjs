import fs from "fs";
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
const dateString = new Date()
  .toISOString()
  .replace(/T/, " ")
  .replace(/\..+/, "");

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

const generateSip = (name, palette) => {
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

const generateProcreate = async (name, palette) => {
  const rgbValues = Object.values(palette).map((colour) => [
    [colour.rgb.r, colour.rgb.g, colour.rgb.b],
    "rgb",
  ]);
  return await createSwatchesFile(name, rgbValues);
};

Object.entries(variants).map(async ([name, palette]) => {
  name = `Catppuccin ${name.charAt(0).toUpperCase() + name.slice(1)}`;

  ["gimp", "sip", "procreate"].map((folder) =>
    fs.mkdirSync(path.join(root, folder), { recursive: true })
  );
  fs.writeFileSync(
    path.resolve(root, `sip/${name}.palette`),
    generateSip(name, palette)
  );
  fs.writeFileSync(
    path.resolve(root, `gimp/${name}.gpl`),
    generateGimp(name, palette)
  );
  fs.writeFileSync(
    path.resolve(root, `procreate/${name}.swatches`),
    await generateProcreate(name, palette)
  );
});
