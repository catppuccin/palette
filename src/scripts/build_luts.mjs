import { exec } from "child_process";
import url from "url";
import path from "path";
import fs from "fs";
import util from "util";
import { variants } from "@catppuccin/palette";

const root = path.resolve(
  url.fileURLToPath(new URL(".", import.meta.url)),
  "..",
  "..",
  "dist"
);

const generateLut = async (name, out) => {
  for (let i = 0; i <= 4; i++) {
    fs.mkdirSync(path.join(root, `lut/noise_${i}`), { recursive: true });
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(`${name}: [${i + 1}/5]`);

    const cmd = `convert HALD:8 -duplicate 512 -attenuate ${i} +noise Gaussian -quantize LAB +dither -remap "${root}/png/${name}.png" -evaluate-sequence Mean "${root}/../lut/noise_${i}/${name}.png"`;

    await util.promisify(exec)(cmd);
  }

  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  console.log(`${name}: done`);
};


console.log("Generating Hald CLUTs...")
const flavors = Object.keys(variants);
for (let i = 0; i < flavors.length; i++) {
  const name = flavors[i];
  // formatted "pretty" name, Catppuccin <Flavor>
  const pname = `Catppuccin ${name.charAt(0).toUpperCase() + name.slice(1)}`;

  await generateLut(pname);
}

