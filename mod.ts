import definitions from "@/palette.json" with { type: "json" };
import type { CatppuccinFlavors, Entries } from "./types/mod.ts";

const entriesFromObject = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

export type {
  CatppuccinColors,
  CatppuccinFlavor,
  CatppuccinFlavors,
  ColorFormat,
  ColorName,
  Colors,
  Flavors,
} from "./types/mod.ts";

/**
 * All flavors of Catppuccin
 */
export const flavors = entriesFromObject(definitions)
  .reduce((acc, [flavorName, flavor]) => {
    acc[flavorName] = {
      ...flavor,
      colorEntries: entriesFromObject(flavor.colors),
    };
    return acc;
  }, {} as CatppuccinFlavors);

/**
 * A typed Object.entries iterable of all Catppuccin flavors
 */
export const flavorEntries = entriesFromObject(flavors);
