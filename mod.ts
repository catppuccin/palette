import definitions from "./palette.json" assert { type: "json" };

export type ColorFormats = {
  /**
   * String-formatted hex value
   * @example "#babbf1"
   */
  hex: string;
  /**
   * Formatted rgb value
   *  @property { number } r - red
   *  @property { number } g - green
   *  @property { number } b - blue
   * @example { r: 186, g: 187, b: 241}
   */
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  /**
   * Formatted hsl value
   *  @property { number } h - hue
   *  @property { number } s - saturation
   *  @property { number } l - lightness
   * @example { h: 238.9, s: 12.1, l: 83.5 }
   */
  hsl: {
    h: number;
    s: number;
    l: number;
  };
};

export type Flavor<T> = {
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

export type CtpColors = Color<ColorFormats>;
export type CtpFlavors = Flavor<ColorFormats>;

export const flavors: Flavor<CtpColors> = definitions.flavors;
export const colors: Color<CtpFlavors> = definitions.colors;
