export type Flavor = "latte" | "frappe" | "macchiato" | "mocha";

export type Flavors<T> = {
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

export type Color =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender"
  | "text"
  | "subtext1"
  | "subtext0"
  | "overlay2"
  | "overlay1"
  | "overlay0"
  | "surface2"
  | "surface1"
  | "surface0"
  | "base"
  | "mantle"
  | "crust";

export type Colors<T> = Record<Color, T>;

export type ColorFormat = {
  /**
   * String-formatted hex value
   * @example "#babbf1"
   */
  readonly hex: string;

  /**
   * Formatted rgb value
   * @property { number } r - red
   * @property { number } g - green
   * @property { number } b - blue
   * @example { r: 186, g: 187, b: 241}
   */
  readonly rgb: {
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
  readonly hsl: {
    h: number;
    s: number;
    l: number;
  };

  /**
   * Indicates whether the color is intended to be used as an accent color.
   */
  readonly accent: boolean;
};
