import definitions from "./palette.json" assert { type: "json" };

export type ColorFormat = {
  /**
   * String-formatted hex value
   * @example "#babbf1"
   */
  hex: string;

  /**
   * Formatted rgb value
   * @property { number } r - red
   * @property { number } g - green
   * @property { number } b - blue
   * @example { r: 186, g: 187, b: 241}
   */
  rgb: {
    r: number;
    g: number;
    b: number;
  };

  /**
   * Formatted hsl value
   * @property { number } h - hue
   * @property { number } s - saturation
   * @property { number } l - lightness
   * @example { h: 238.9, s: 12.1, l: 83.5 }
   */
  hsl: {
    h: number;
    s: number;
    l: number;
  };

  /**
   * Indicates whether the color is intended to be used as an accent color.
   */
  accent: boolean;
};

type Flavor<T> = {
  /**
   * Light variant
   */
  latte: T;
  /**
   * Low-saturation, low-contrast dark variant
   */
  frappe: T;
  /**
   * Mid-saturation, mid-contrast dark variant
   */
  macchiato: T;
  /**
   * High-saturation, High-contrast dark variant
   */
  mocha: T;
};

export type Color<T> = {
  rosewater: T;
  flamingo: T;
  pink: T;
  mauve: T;
  red: T;
  maroon: T;
  peach: T;
  yellow: T;
  green: T;
  teal: T;
  sky: T;
  sapphire: T;
  blue: T;
  lavender: T;
  text: T;
  subtext1: T;
  subtext0: T;
  overlay2: T;
  overlay1: T;
  overlay0: T;
  surface2: T;
  surface1: T;
  surface0: T;
  base: T;
  mantle: T;
  crust: T;
};

const typedKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

export const flavorNames = typedKeys(definitions);

export type CtpFlavorName = (typeof flavorNames)[number];

export type CtpColors = Color<ColorFormat>;
export type CtpFlavors = Flavor<ColorFormat>;

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const entriesFromObject = <T extends object>(object: T): Entries<T> => {
  return Object.entries(object) as Entries<T>;
};

export const flavorEntries = entriesFromObject(definitions);
export const flavors: Flavor<CtpColors> = definitions;
