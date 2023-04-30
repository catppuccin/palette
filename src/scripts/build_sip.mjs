import fs from "fs/promises";
import crypto from "crypto";
import { variants } from "@catppuccin/palette";
import url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const dateString = new Date()
  .toISOString()
  .replace(/T/, " ")
  .replace(/\..+/, "");

Object.entries(variants).map(([name, palette]) => {
  name = `Catppuccin ${name.charAt(0).toUpperCase() + name.slice(1)}`;

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
      const hex = palette[key].hex;
      const r = parseInt(hex.substring(1, 3), 16) / 255;
      const g = parseInt(hex.substring(3, 5), 16) / 255;
      const b = parseInt(hex.substring(5, 7), 16) / 255;

      return {
        alpha: 1,
        red: r,
        green: g,
        blue: b,
        name: key,
        createdAt: dateString,
        id: crypto.randomUUID().toUpperCase(),
      };
    }),
    lock: true,
  };

  const outFile = path.resolve(__dirname, `../../sip/${name}.palette`);
  fs.writeFile(outFile, JSON.stringify(data, null, 2));
});
