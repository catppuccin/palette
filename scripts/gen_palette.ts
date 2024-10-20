import { join } from "std/path/join.ts";
import tinycolor from "tinycolor2";
import Color from "colorjs";

import meta from "../deno.json" with { type: "json" };

import type {
  CatppuccinAnsiColors,
  CatppuccinColors,
  CatppuccinFlavor,
  Flavors,
} from "@catppuccin/palette";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const entriesFromObject = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

const prettyNames = [
  "Rosewater",
  "Flamingo",
  "Pink",
  "Mauve",
  "Red",
  "Maroon",
  "Peach",
  "Yellow",
  "Green",
  "Teal",
  "Sky",
  "Sapphire",
  "Blue",
  "Lavender",
  "Text",
  "Subtext 1",
  "Subtext 0",
  "Overlay 2",
  "Overlay 1",
  "Overlay 0",
  "Surface 2",
  "Surface 1",
  "Surface 0",
  "Base",
  "Mantle",
  "Crust",
] as const;

const definitions = {
  latte: {
    name: "Latte",
    emoji: "🌻",
    dark: false,
    colors: {
      rosewater: "#dc8a78",
      flamingo: "#dd7878",
      pink: "#ea76cb",
      mauve: "#8839ef",
      red: "#d20f39",
      maroon: "#e64553",
      peach: "#fe640b",
      yellow: "#df8e1d",
      green: "#40a02b",
      teal: "#179299",
      sky: "#04a5e5",
      sapphire: "#209fb5",
      blue: "#1e66f5",
      lavender: "#7287fd",
      text: "#4c4f69",
      subtext1: "#5c5f77",
      subtext0: "#6c6f85",
      overlay2: "#7c7f93",
      overlay1: "#8c8fa1",
      overlay0: "#9ca0b0",
      surface2: "#acb0be",
      surface1: "#bcc0cc",
      surface0: "#ccd0da",
      base: "#eff1f5",
      mantle: "#e6e9ef",
      crust: "#dce0e8",
    },
  },
  frappe: {
    name: "Frappé",
    emoji: "🪴",
    dark: true,
    colors: {
      rosewater: "#f2d5cf",
      flamingo: "#eebebe",
      pink: "#f4b8e4",
      mauve: "#ca9ee6",
      red: "#e78284",
      maroon: "#ea999c",
      peach: "#ef9f76",
      yellow: "#e5c890",
      green: "#a6d189",
      teal: "#81c8be",
      sky: "#99d1db",
      sapphire: "#85c1dc",
      blue: "#8caaee",
      lavender: "#babbf1",
      text: "#c6d0f5",
      subtext1: "#b5bfe2",
      subtext0: "#a5adce",
      overlay2: "#949cbb",
      overlay1: "#838ba7",
      overlay0: "#737994",
      surface2: "#626880",
      surface1: "#51576d",
      surface0: "#414559",
      base: "#303446",
      mantle: "#292c3c",
      crust: "#232634",
    },
  },
  macchiato: {
    name: "Macchiato",
    emoji: "🌺",
    dark: true,
    colors: {
      rosewater: "#f4dbd6",
      flamingo: "#f0c6c6",
      pink: "#f5bde6",
      mauve: "#c6a0f6",
      red: "#ed8796",
      maroon: "#ee99a0",
      peach: "#f5a97f",
      yellow: "#eed49f",
      green: "#a6da95",
      teal: "#8bd5ca",
      sky: "#91d7e3",
      sapphire: "#7dc4e4",
      blue: "#8aadf4",
      lavender: "#b7bdf8",
      text: "#cad3f5",
      subtext1: "#b8c0e0",
      subtext0: "#a5adcb",
      overlay2: "#939ab7",
      overlay1: "#8087a2",
      overlay0: "#6e738d",
      surface2: "#5b6078",
      surface1: "#494d64",
      surface0: "#363a4f",
      base: "#24273a",
      mantle: "#1e2030",
      crust: "#181926",
    },
  },
  mocha: {
    name: "Mocha",
    emoji: "🌿",
    dark: true,
    colors: {
      rosewater: "#f5e0dc",
      flamingo: "#f2cdcd",
      pink: "#f5c2e7",
      mauve: "#cba6f7",
      red: "#f38ba8",
      maroon: "#eba0ac",
      peach: "#fab387",
      yellow: "#f9e2af",
      green: "#a6e3a1",
      teal: "#94e2d5",
      sky: "#89dceb",
      sapphire: "#74c7ec",
      blue: "#89b4fa",
      lavender: "#b4befe",
      text: "#cdd6f4",
      subtext1: "#bac2de",
      subtext0: "#a6adc8",
      overlay2: "#9399b2",
      overlay1: "#7f849c",
      overlay0: "#6c7086",
      surface2: "#585b70",
      surface1: "#45475a",
      surface0: "#313244",
      base: "#1e1e2e",
      mantle: "#181825",
      crust: "#11111b",
    },
  },
};

const accents = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender",
];

const ansi_mappings = {
  black: {
    colorName: "surface2",
    normal: {
      code: 0,
    },
    bright: {
      code: 8,
    },
  },
  red: {
    colorName: "red",
    normal: {
      code: 1,
    },
    bright: {
      code: 9,
    },
  },
  green: {
    colorName: "green",
    normal: {
      code: 2,
    },
    bright: {
      code: 10,
    },
  },
  yellow: {
    colorName: "yellow",
    normal: {
      code: 3,
    },
    bright: {
      code: 11,
    },
  },
  blue: {
    colorName: "blue",
    normal: {
      code: 4,
    },
    bright: {
      code: 12,
    },
  },
  purple: {
    colorName: "pink",
    normal: {
      code: 5,
    },
    bright: {
      code: 13,
    },
  },
  cyan: {
    colorName: "teal",
    normal: {
      code: 6,
    },
    bright: {
      code: 14,
    },
  },
  white: {
    colorName: "subtext1",
    normal: {
      code: 7,
    },
    bright: {
      code: 15,
    },
  },
};

const formatted = entriesFromObject(definitions).reduce(
  (acc, [flavorName, flavor], currentIndex) => {
    acc[flavorName] = {
      name: flavor.name,
      emoji: flavor.emoji,
      order: currentIndex,
      dark: flavor.dark,
      colors: entriesFromObject(flavor.colors).reduce(
        (acc, [colorName, color], currentIndex) => {
          const { r, g, b } = tinycolor(color).toRgb();
          const { h, s, l } = tinycolor(color).toHsl();
          acc[colorName] = {
            name: prettyNames[currentIndex],
            order: currentIndex,
            hex: color,
            rgb: { r, g, b },
            hsl: { h, s, l },
            accent: accents.includes(colorName),
          };
          return acc;
        },
        {} as Writeable<CatppuccinColors>,
      ),
      ansi: entriesFromObject(ansi_mappings).reduce(
        (acc, [name, props]) => {
          const color =
            flavor.colors[props.colorName as keyof CatppuccinColors];
          const ansiBrights = new Color(color);
          const lightnessShift = flavor.dark ? 0.96 : 1.04;
          const chromaShift = flavor.dark ? 8 : 0;
          const hueShift = flavor.dark ? 2 : -2;
          ansiBrights.lch.l *= lightnessShift;
          ansiBrights.lch.c += chromaShift;
          ansiBrights.lch.h += hueShift;
          acc[name] = {
            mapping: props.colorName,
            normal: {
              hex: color,
              code: props.normal.code,
            },
            bright: {
              hex: ansiBrights.toString({ format: "hex" }),
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
