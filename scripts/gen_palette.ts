import { join } from "std/path/join.ts";
import tinycolor from "tinycolor2";
import Color from "colorjs";

import meta from "../deno.json" with { type: "json" };

import type {
  AccentName,
  AnsiName,
  BlendedColorFormat,
  CatppuccinAnsiColors,
  CatppuccinColors,
  CatppuccinFlavor,
  CatppuccinShadeColors,
  CatppuccinTintColors,
  ColorName,
  FlavorName,
  Flavors,
  TintName,
} from "@catppuccin/palette";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

type Definition = {
  [key in FlavorName]: {
    name: string;
    emoji: string;
    dark: boolean;
    tints: {
      blendingColor: Color;
    };
    shades: {
      blendingColor: Color;
    };
    colors: DefinitionColors;
    ansiColors: DefinitionAnsiColors;
  };
};

type DefinitionColors = {
  [key in ColorName]: DefinitionColor;
};

type DefinitionColor = {
  name: string;
  object: Color;
  accent: boolean;
};

type DefinitionAnsiColors = {
  [key in AnsiName]: {
    normal: {
      mapping: string;
      code: number;
    };
    bright: {
      mapping?: string;
      code: number;
    };
  };
};

const entriesFromObject = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

const ansiColors = (flavor: FlavorName): DefinitionAnsiColors => {
  let blackNormalMapping: string;
  let blackBrightMapping: string;
  let whiteNormalMapping: string;
  let whiteBrightMapping: string;

  if (flavor === "latte") {
    blackNormalMapping = "subtext1";
    blackBrightMapping = "subtext0";
    whiteNormalMapping = "surface2";
    whiteBrightMapping = "surface1";
  } else {
    blackNormalMapping = "surface1";
    blackBrightMapping = "surface2";
    whiteNormalMapping = "subtext0";
    whiteBrightMapping = "subtext1";
  }

  return {
    black: {
      normal: {
        mapping: blackNormalMapping,
        code: 0,
      },
      bright: {
        mapping: blackBrightMapping,
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
        mapping: whiteNormalMapping,
        code: 7,
      },
      bright: {
        mapping: whiteBrightMapping,
        code: 15,
      },
    },
  };
};

const definitions: Definition = {
  latte: {
    name: "Latte",
    emoji: "🌻",
    dark: false,
    tints: {
      blendingColor: new Color("#eff1f5"),
    },
    shades: {
      blendingColor: new Color("#000000"),
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
    ansiColors: ansiColors("latte"),
  },
  frappe: {
    name: "Frappé",
    emoji: "🪴",
    dark: true,
    tints: {
      blendingColor: new Color("#FFFFFF"),
    },
    shades: {
      blendingColor: new Color("#303446"),
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
    ansiColors: ansiColors("frappe"),
  },
  macchiato: {
    name: "Macchiato",
    emoji: "🌺",
    dark: true,
    tints: {
      blendingColor: new Color("#FFFFFF"),
    },
    shades: {
      blendingColor: new Color("#24273a"),
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
    ansiColors: ansiColors("macchiato"),
  },
  mocha: {
    name: "Mocha",
    emoji: "🌿",
    dark: true,
    tints: {
      blendingColor: new Color("#FFFFFF"),
    },
    shades: {
      blendingColor: new Color("#1e1e2e"),
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
    ansiColors: ansiColors("mocha"),
  },
};

const intensities = [15, 30, 45, 60, 75];

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

const blendColor = (
  intensity: number,
  accentColor: Color,
  blendingColor: Color,
): Color => {
  return accentColor.toGamut().mix(blendingColor, intensity / 100, {
    space: "srgb",
    outputSpace: "srgb",
  });
};

const blendedColors = <T extends CatppuccinTintColors | CatppuccinShadeColors>(
  type: "Tint" | "Shade",
  colors: DefinitionColors,
  blendingColor: Color,
) => {
  return entriesFromObject(colors).filter(([_, color]) => color.accent)
    .reduce(
      (acc, [name, color]) => {
        acc[name as AccentName] = intensities.reduce(
          (acc, intensity, intensityIndex) => {
            const accentColor = colors[name].object;
            const blendedColor = blendColor(
              intensity,
              accentColor,
              blendingColor,
            );
            acc[`${type.toLowerCase()}${intensityIndex + 1}` as TintName] = {
              name: `${color.name} ${type} ${intensityIndex + 1}`,
              order: intensityIndex,
              hex: toHex(blendedColor),
              rgb: toRgb(blendedColor),
              hsl: toHsl(toHex(blendedColor)),
            };
            return acc;
          },
          {} as Writeable<Record<TintName, BlendedColorFormat>>,
        );
        return acc;
      },
      {} as Writeable<T>,
    );
};

const formatted = entriesFromObject(definitions).reduce(
  (acc, [flavorName, flavor], currentIndex) => {
    acc[flavorName] = {
      name: flavor.name,
      emoji: flavor.emoji,
      order: currentIndex,
      dark: flavor.dark,
      tints: blendedColors(
        "Tint",
        flavor.colors,
        flavor.tints.blendingColor,
      ),
      shades: blendedColors(
        "Shade",
        flavor.colors,
        flavor.shades.blendingColor,
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
      ansiColors: entriesFromObject(flavor.ansiColors).reduce(
        (acc, [name, props], currentIndex) => {
          const normalMapping = props.normal.mapping as ColorName;
          const normalColor = flavor.colors[normalMapping].object;
          const normalName = `${name[0].toUpperCase()}${
            name.substring(1).toLowerCase()
          }`;
          const brightName = `Bright ${normalName}`;
          let brightColor: Color;

          if (props.bright.mapping) {
            brightColor =
              flavor.colors[props.bright.mapping as ColorName].object;
          } else {
            brightColor = blendColor(
              30,
              normalColor,
              flavor.tints.blendingColor,
            );
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
  {} as Flavors<
    Omit<
      CatppuccinFlavor,
      "colorEntries" | "tintEntries" | "shadeEntries" | "ansiColorEntries"
    >
  >,
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
