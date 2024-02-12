import { copy, emptyDir } from "std/fs/mod.ts";
import { build } from "dnt";

import denoJson from "@/deno.json" with { type: "json" };
import * as builders from "./builders/mod.ts";

const outDir = "./dist/npm";

await emptyDir(outDir);
await build({
  entryPoints: ["./mod.ts"],
  outDir,
  shims: { deno: true },
  importMap: "./import_map.json",
  // declaration: "separate",
  package: {
    name: "@catppuccin/palette",
    version: denoJson.version,
    description: "Soothing pastel themes for the high-spirited!",
    author: "Catppuccin Org",
    license: "MIT",
    homepage: "https://github.com/catppuccin/palette#readme",
    private: false,
    repository: {
      type: "git",
      url: "git+https://github.com/catppuccin/palette.git",
    },
    bugs: {
      url: "https://github.com/catppuccin/palette/issues",
    },
    funding: [
      {
        type: "opencollective",
        url: "https://opencollective.com/catppuccin",
      },
      {
        type: "github",
        url: "https://github.com/sponsors/catppuccin",
      },
    ],
    exports: {
      "./css/*": "./css/*",
      "./less/*": "./less/*",
      "./scss/*": "./scss/*",
    },
  },
  async postBuild() {
    await copy(`./LICENSE`, `${outDir}/LICENSE`);
    await copy(`./README.md`, `${outDir}/README.md`);
    await builders.compileCss(outDir);
    await builders.compileLess(outDir);
    await builders.compileScss(outDir);
  },
}).then(() => Deno.exit());
