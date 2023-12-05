import { assertEquals } from "std/assert/mod.ts";

import { flavorEntries } from "@/mod.ts";
import palette from "@/palette.json" assert { type: "json" };

Deno.test("flavorEntries", () => {
  flavorEntries
    .map(([flavorName, flavor]) =>
      flavor.colorEntries
        .map(([colorName, color]) =>
          assertEquals(palette[flavorName].colors[colorName].hex, color.hex)
        )
    );
});
