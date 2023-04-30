import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  minify: false,
  target: "node16",
  clean: true,
  format: ["cjs", "esm"],
});
