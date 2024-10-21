import { assertEquals } from "std/assert/assert_equals.ts";

import { flavorEntries, flavors, version } from "@catppuccin/palette";
import palette from "@/palette.json" with { type: "json" };

Deno.test("flavorEntries", () => {
  flavorEntries
    .map(([flavorName, flavor]) => {
      flavor.colorEntries
        .map(([colorName, color]) =>
          assertEquals(color.hex, palette[flavorName].colors[colorName].hex)
        );
    });
});

Deno.test("flavors", () => {
  flavorEntries.map(([flavorName]) => {
    assertEquals(
      flavors[flavorName].name,
      palette[flavorName].name,
    );
  });
});

Deno.test("ansiEntries", () => {
  flavorEntries.map(([flavorName, flavor]) => {
    flavor.ansiColorEntries.map(([ansiColorName, ansiColor]) => {
      assertEquals(
        ansiColor.normal.hex,
        palette[flavorName].ansi[ansiColorName].normal.hex,
      );
      if (ansiColorName == "black") {
        assertEquals(
          ansiColor.bright.hex,
          palette[flavorName].colors.surface1.hex,
        );
      }
      if (ansiColorName == "white") {
        assertEquals(
          ansiColor.bright.hex,
          palette[flavorName].colors.subtext0.hex,
        );
      }
    });
  });
});

Deno.test("version", () => {
  assertEquals(version, "1.4.0"); // x-release-please-version
});
