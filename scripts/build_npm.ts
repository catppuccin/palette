#!/usr/bin/env -S deno run -A
import { dnt, fs } from "./deps.ts";
import * as builders from "./builders/mod.ts";

const outDir = "./dist/npm";

await dnt.emptyDir(outDir);
await dnt.build({
  entryPoints: ["./mod.ts"],
  outDir,
  // no need for the Deno shim
  shims: { deno: false },
  // disable testing since the generation is done via JSON
  test: false,
  package: {
    name: "@catppuccin/palette",
    version: Deno.readTextFileSync("./version.txt").trim(),
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
      "./css": "./css/catppuccin.css",
      "./less/*": "./less/*",
      "./scss/*": "./scss/*",
    },
  },
  postBuild() {
    fs.copySync(`./LICENSE`, `${outDir}/LICENSE`);
    fs.copySync(`./docs/node.md`, `${outDir}/README.md`);
    builders.compileCss(outDir);
    builders.compileLess(outDir);
    builders.compileScss(outDir);
  },
});
