import { assertEquals } from "std/assert/assert_equals.ts";
import {
  type AccentName,
  type AnsiName,
  flavorEntries,
  flavors,
  version,
} from "@catppuccin/palette";
import palette from "@/palette.json" with { type: "json" };

Deno.test("flavorEntries", () => {
  flavorEntries.forEach(([flavorName]) => {
    assertEquals(flavors[flavorName].name, palette[flavorName].name);
  });
});

Deno.test("colorEntries", () => {
  flavorEntries.forEach(([flavorName, flavor]) => {
    flavor.colorEntries.forEach(([colorName, color]) =>
      assertEquals(color.hex, palette[flavorName].colors[colorName].hex)
    );
  });
});

Deno.test("tintEntries", () => {
  flavorEntries.forEach(([_, flavor]) => {
    flavor.tintEntries.forEach(([colorName, color]) => {
      console.log(colorName);
      Object.entries(color).forEach(([tintName, tint]) => {
        console.log(`${tintName}: ${tint.hex}`);
      });
    });
  });
});

Deno.test("ansiEntries - black and white are on-palette colors", () => {
  flavorEntries.forEach(([flavorName, flavor]) => {
    flavor.ansiColorEntries.filter(([ansiColorName, _]) =>
      ansiColorName === "black" || ansiColorName === "white"
    ).forEach(([ansiColorName, ansiColor]) => {
      assertEquals(
        ansiColor.normal.name,
        ansiColor.name,
      );
      assertEquals(
        ansiColor.bright.name,
        `Bright ${ansiColor.name}`,
      );
      assertEquals(
        ansiColor.normal.hex,
        palette[flavorName].ansiColors[ansiColorName].normal.hex,
      );

      if (ansiColorName == "black") {
        if (flavorName == "latte") {
          assertEquals(
            ansiColor.normal.hex,
            palette[flavorName].colors.subtext1.hex,
          );
          assertEquals(
            ansiColor.bright.hex,
            palette[flavorName].colors.subtext0.hex,
          );
        } else {
          assertEquals(
            ansiColor.normal.hex,
            palette[flavorName].colors.surface1.hex,
          );
          assertEquals(
            ansiColor.bright.hex,
            palette[flavorName].colors.surface2.hex,
          );
        }
      }

      if (ansiColorName == "white") {
        if (flavorName == "latte") {
          assertEquals(
            ansiColor.normal.hex,
            palette[flavorName].colors.surface2.hex,
          );
          assertEquals(
            ansiColor.bright.hex,
            palette[flavorName].colors.surface1.hex,
          );
        } else {
          assertEquals(
            ansiColor.normal.hex,
            palette[flavorName].colors.subtext0.hex,
          );
          assertEquals(
            ansiColor.bright.hex,
            palette[flavorName].colors.subtext1.hex,
          );
        }
      }
    });
  });
});

Deno.test("ansiEntries - accent colors are all equivalent to tint2", () => {
  const mappings: Record<Exclude<AnsiName, "black" | "white">, AccentName> = {
    red: "red",
    green: "green",
    yellow: "yellow",
    blue: "blue",
    magenta: "pink",
    cyan: "teal",
  };

  flavorEntries.forEach(([flavorName, flavor]) => {
    flavor.ansiColorEntries.filter(([ansiColorName, _]) =>
      ansiColorName !== "black" && ansiColorName !== "white"
    ).forEach(([ansiColorName, ansiColor]) => {
      assertEquals(
        ansiColor.normal.name,
        ansiColor.name,
      );
      assertEquals(
        ansiColor.bright.name,
        `Bright ${ansiColor.name}`,
      );
      assertEquals(
        ansiColor.normal.hex,
        palette[flavorName].ansiColors[ansiColorName].normal.hex,
      );
      assertEquals(
        ansiColor.bright.hex,
        palette[flavorName]
          .tints[
            mappings[ansiColorName as Exclude<AnsiName, "black" | "white">]
          ].tint2.hex,
      );
    });
  });
});

Deno.test("version", () => {
  assertEquals(version, "1.7.1"); // x-release-please-version
});
