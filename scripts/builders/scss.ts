import { fs } from "../deps.ts";
import { ColorFormats, flavors } from "../../mod.ts";

const combined = `$palette: (
${
  Object.entries(flavors).map(([flavorName, palette]) => {
    const color = Object.entries<ColorFormats>(palette)
      .map(([key, value]) => {
        return `    "${key}": ${value.hex}`;
      }).join(",\n");
    return `  "${flavorName}": (\n${color}\n  )`;
  }).join(",\n")
}
);`;

export const compileScss = (outDir: string) => {
  fs.ensureDirSync(`${outDir}/scss`);

  // write each flavor to its own file
  Object.entries(flavors).map(([flavorName, palette]) => {
    Deno.writeTextFileSync(
      `${outDir}/scss/_${flavorName}.scss`,
      Object.entries<ColorFormats>(palette)
        .map(([key, value]) => {
          return `$${key}: ${value.hex};`;
        }).join("\n"),
    );
  });

  // and a combined map of all flavors
  Deno.writeTextFileSync(`${outDir}/scss/_catppuccin.scss`, combined);
};
