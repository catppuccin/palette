import { join } from "std/path/join.ts";
import tinycolor from "tinycolor2";
import Color from "colorjs";

import meta from "../deno.json" with { type: "json" };

import type {
  CatppuccinAnsiColors,
  CatppuccinColors,
  CatppuccinFlavor,
  ColorName,
  Flavors,
} from "@catppuccin/palette";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const entriesFromObject = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

const intensities = [75, 60, 45, 30, 15];

const blendColor = (
  intensity: number,
  accentColor: Color,
  blendingColor: Color,
): Color => {
  return accentColor.mix(blendingColor, intensity / 100, {
    space: "oklab",
    outputSpace: "srgb",
  });
};

const definitions = {
  latte: {
    name: "Latte",
    emoji: "🌻",
    dark: false,
    tints: {
      blendingColor: "#eff1f5",
    },
    shades: {
      blendingColor: "#000000",
    },
    colors: {
      rosewater: {
        name: "Rosewater",
        object: new Color("#dc8a78"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#dd7878"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#ea76cb"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#8839ef"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#d20f39"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#e64553"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#fe640b"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#df8e1d"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#40a02b"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#179299"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#04a5e5"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#209fb5"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#1e66f5"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#7287fd"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#4c4f69"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#5c5f77"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#6c6f85"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#7c7f93"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#8c8fa1"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#9ca0b0"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#acb0be"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#bcc0cc"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#ccd0da"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#eff1f5"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#e6e9ef"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#dce0e8"),
        accent: false,
      },
    },
  },
  frappe: {
    name: "Frappé",
    emoji: "🪴",
    dark: true,
    tints: {
      blendingColor: "#FFFFFF",
    },
    shades: {
      blendingColor: "#303446",
    },
    colors: {
      rosewater: {
        name: "Rosewater",
        object: new Color("#f2d5cf"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#eebebe"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#f4b8e4"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#ca9ee6"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#e78284"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#ea999c"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#ef9f76"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#e5c890"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#a6d189"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#81c8be"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#99d1db"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#85c1dc"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#8caaee"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#babbf1"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#c6d0f5"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#b5bfe2"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a5adce"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#949cbb"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#838ba7"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#737994"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#626880"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#51576d"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#414559"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#303446"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#292c3c"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#232634"),
        accent: false,
      },
    },
  },
  macchiato: {
    name: "Macchiato",
    emoji: "🌺",
    dark: true,
    tints: {
      blendingColor: "#FFFFFF",
    },
    shades: {
      blendingColor: "#24273a",
    },
    colors: {
      rosewater: {
        name: "Rosewater",
        object: new Color("#f4dbd6"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#f0c6c6"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#f5bde6"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#c6a0f6"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#ed8796"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#ee99a0"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#f5a97f"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#eed49f"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#a6da95"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#8bd5ca"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#91d7e3"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#7dc4e4"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#8aadf4"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#b7bdf8"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#cad3f5"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#b8c0e0"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a5adcb"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#939ab7"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#8087a2"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#6e738d"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#5b6078"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#494d64"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#363a4f"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#24273a"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#1e2030"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#181926"),
        accent: false,
      },
    },
  },
  mocha: {
    name: "Mocha",
    emoji: "🌿",
    dark: true,
    tints: {
      blendingColor: "#FFFFFF",
    },
    shades: {
      blendingColor: "#1e1e2e",
    },
    colors: {
      rosewater: {
        name: "Rosewater",
        object: new Color("#f5e0dc"),
        accent: true,
      },
      flamingo: {
        name: "Flamingo",
        object: new Color("#f2cdcd"),
        accent: true,
      },
      pink: {
        name: "Pink",
        object: new Color("#f5c2e7"),
        accent: true,
      },
      mauve: {
        name: "Mauve",
        object: new Color("#cba6f7"),
        accent: true,
      },
      red: {
        name: "Red",
        object: new Color("#f38ba8"),
        accent: true,
      },
      maroon: {
        name: "Maroon",
        object: new Color("#eba0ac"),
        accent: true,
      },
      peach: {
        name: "Peach",
        object: new Color("#fab387"),
        accent: true,
      },
      yellow: {
        name: "Yellow",
        object: new Color("#f9e2af"),
        accent: true,
      },
      green: {
        name: "Green",
        object: new Color("#a6e3a1"),
        accent: true,
      },
      teal: {
        name: "Teal",
        object: new Color("#94e2d5"),
        accent: true,
      },
      sky: {
        name: "Sky",
        object: new Color("#89dceb"),
        accent: true,
      },
      sapphire: {
        name: "Sapphire",
        object: new Color("#74c7ec"),
        accent: true,
      },
      blue: {
        name: "Blue",
        object: new Color("#89b4fa"),
        accent: true,
      },
      lavender: {
        name: "Lavender",
        object: new Color("#b4befe"),
        accent: true,
      },
      text: {
        name: "Text",
        object: new Color("#cdd6f4"),
        accent: false,
      },
      subtext1: {
        name: "Subtext 1",
        object: new Color("#bac2de"),
        accent: false,
      },
      subtext0: {
        name: "Subtext 0",
        object: new Color("#a6adc8"),
        accent: false,
      },
      overlay2: {
        name: "Overlay 2",
        object: new Color("#9399b2"),
        accent: false,
      },
      overlay1: {
        name: "Overlay 1",
        object: new Color("#7f849c"),
        accent: false,
      },
      overlay0: {
        name: "Overlay 0",
        object: new Color("#6c7086"),
        accent: false,
      },
      surface2: {
        name: "Surface 2",
        object: new Color("#585b70"),
        accent: false,
      },
      surface1: {
        name: "Surface 1",
        object: new Color("#45475a"),
        accent: false,
      },
      surface0: {
        name: "Surface 0",
        object: new Color("#313244"),
        accent: false,
      },
      base: {
        name: "Base",
        object: new Color("#1e1e2e"),
        accent: false,
      },
      mantle: {
        name: "Mantle",
        object: new Color("#181825"),
        accent: false,
      },
      crust: {
        name: "Crust",
        object: new Color("#11111b"),
        accent: false,
      },
    },
  },
};

const ansiMappings = {
  black: {
    normal: {
      mapping: "", // superfluous, exists to make TypeScript happy
      code: 0,
    },
    bright: {
      code: 8,
    },
  },
  red: {
    normal: {
      mapping: "red",
      code: 1,
    },
    bright: {
      code: 9,
    },
  },
  green: {
    normal: {
      mapping: "green",
      code: 2,
    },
    bright: {
      code: 10,
    },
  },
  yellow: {
    normal: {
      mapping: "yellow",
      code: 3,
    },
    bright: {
      code: 11,
    },
  },
  blue: {
    normal: {
      mapping: "blue",
      code: 4,
    },
    bright: {
      code: 12,
    },
  },
  magenta: {
    normal: {
      mapping: "pink",
      code: 5,
    },
    bright: {
      code: 13,
    },
  },
  cyan: {
    normal: {
      mapping: "teal",
      code: 6,
    },
    bright: {
      code: 14,
    },
  },
  white: {
    normal: {
      mapping: "", // superfluous, exists to make TypeScript happy
      code: 7,
    },
    bright: {
      code: 15,
    },
  },
};

const toHex = (color: Color): string => {
  return color.toString({ format: "hex" });
};

const toRgb = (color: Color): { r: number; g: number; b: number } => {
  const coords = color.to("srgb").toGamut().coords.map((i) =>
    Math.round(i * 255)
  );
  return {
    r: coords[0],
    g: coords[1],
    b: coords[2],
  };
};

const toHsl = (hex: string): { h: number; s: number; l: number } => {
  const { h, s, l } = tinycolor(hex).toHsl();
  return {
    h,
    s,
    l,
  };
};

const formatted = entriesFromObject(definitions).reduce(
  (acc, [flavorName, flavor], currentIndex) => {
    acc[flavorName] = {
      name: flavor.name,
      emoji: flavor.emoji,
      order: currentIndex,
      dark: flavor.dark,
      tints: entriesFromObject(flavor.colors).filter(([_, color]) =>
        color.accent
      ).reduce(
        (acc, [name, color], currentIndex) => {
          acc[name] = {
            name: color.name,
            order: currentIndex,
            colors: intensities.reduce(
              (acc, intensity, intensityIndex) => {
                const accentColor = flavor.colors[name as ColorName].object;
                const blendingColor = new Color(flavor.tints.blendingColor);
                const blendedColor = blendColor(
                  intensity,
                  accentColor,
                  blendingColor,
                );
                acc[intensityIndex] = {
                  name: color.name + " Tint " + intensityIndex,
                  order: intensityIndex,
                  hex: toHex(blendedColor),
                  rgb: toRgb(blendedColor),
                  hsl: toHsl(toHex(blendedColor)),
                };
                return acc;
              },
              [],
            ),
            accent: true,
          };
          return acc;
        },
        {},
      ),
      colors: entriesFromObject(flavor.colors).reduce(
        (acc, [colorName, color], currentIndex) => {
          acc[colorName] = {
            name: color.name,
            order: currentIndex,
            hex: toHex(color.object),
            rgb: toRgb(color.object),
            hsl: toHsl(toHex(color.object)),
            accent: color.accent,
          };
          return acc;
        },
        {} as Writeable<CatppuccinColors>,
      ),
      ansiColors: entriesFromObject(ansiMappings).reduce(
        (acc, [name, props], currentIndex) => {
          const mapping = props.normal.mapping as ColorName;
          const normalName = name[0].toUpperCase() +
            name.substring(1).toLowerCase();
          const brightName = `Bright ${normalName}`;
          let normalColor: Color;
          let brightColor: Color;

          if (name == "black") {
            normalColor = flavor.dark
              ? flavor.colors["surface1"].object
              : flavor.colors["subtext1"].object;
            brightColor = flavor.dark
              ? flavor.colors["surface2"].object
              : flavor.colors["subtext0"].object;
          } else if (name == "white") {
            normalColor = flavor.dark
              ? flavor.colors["subtext0"].object
              : flavor.colors["surface2"].object;
            brightColor = flavor.dark
              ? flavor.colors["subtext1"].object
              : flavor.colors["surface1"].object;
          } else {
            normalColor = flavor.colors[mapping].object;
            brightColor = new Color(normalColor);
            brightColor.lch.l *= flavor.dark ? 0.94 : 1.09;
            brightColor.lch.c += flavor.dark ? 8 : 0;
            brightColor.lch.h += 2;
          }

          acc[name] = {
            name: normalName,
            order: currentIndex,
            normal: {
              name: normalName,
              hex: toHex(normalColor),
              rgb: toRgb(normalColor),
              hsl: toHsl(toHex(normalColor)),
              code: props.normal.code,
            },
            bright: {
              name: brightName,
              hex: toHex(brightColor),
              rgb: toRgb(brightColor),
              hsl: toHsl(toHex(brightColor)),
              code: props.bright.code,
            },
          };

          return acc;
        },
        {} as Writeable<CatppuccinAnsiColors>,
      ),
    };
    return acc;
  },
  {} as Flavors<Omit<CatppuccinFlavor, "colorEntries" | "ansiColorEntries">>,
);

const __dirname = new URL(".", import.meta.url).pathname;

const result = {
  version: meta.version,
  ...formatted,
};

Deno.writeTextFileSync(
  join(__dirname, "../palette.json"),
  JSON.stringify(result, null, 2),
);
