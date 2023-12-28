import definitions from "@/palette.json" with { type: "json" };
import type { ColorFormat, Colors, Flavors } from "./types/mod.ts";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const entriesFromObject = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

export type { ColorFormat, Colors, Flavors } from "./types/mod.ts";

export type CatppuccinColors = Colors<ColorFormat>;

export type CatppuccinFlavor = {
  readonly name: string;
  readonly dark: boolean;
  readonly colors: CatppuccinColors;
  readonly colorEntries: Entries<CatppuccinColors>;
};

export type CatppuccinFlavors = Flavors<CatppuccinFlavor>;

export const flavors = entriesFromObject(definitions)
  .reduce((acc, [flavorName, flavor]) => {
    acc[flavorName] = {
      ...flavor,
      colorEntries: entriesFromObject(flavor.colors),
    };
    return acc;
  }, {} as CatppuccinFlavors);

export const flavorEntries = entriesFromObject(flavors);
