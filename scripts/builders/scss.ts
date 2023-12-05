import { ensureDir } from "std/fs/ensure_dir.ts";

import { flavorEntries } from "@/mod.ts";

const combined = `$palette: (
${
  flavorEntries.map(([flavorName, { colorEntries }]) => {
    const color = colorEntries
      .map(([key, value]) => {
        return `    "${key}": ${value.hex}`;
      })
      .join(",\n");
    return `  "${flavorName}": (\n${color}\n  )`;
  })
    .join(",\n")
}
);`;

export const compileScss = async (outDir: string) => {
  await ensureDir(`${outDir}/scss`);

  // write each flavor to its own file
  flavorEntries.map(([flavorName, { colorEntries }]) => {
    Deno.writeTextFile(
      `${outDir}/scss/_${flavorName}.scss`,
      colorEntries
        .map(([key, value]) => {
          return `$${key}: ${value.hex};`;
        })
        .join("\n"),
    );
  });

  // and a combined map of all flavors
  Deno.writeTextFile(`${outDir}/scss/_catppuccin.scss`, combined);
};
