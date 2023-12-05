import definitions from "@/palette.json" assert { type: "json" };
import type { ColorFormat, Colors, Flavors } from "./types/mod.ts";

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const entriesFromObject = <T extends object>(obj: T): Entries<T> => {
  return Object.entries(obj) as Entries<T>;
};

export type CtpColors = Colors<ColorFormat>;

export type CtpFlavors = Flavors<{
  readonly name: string;
  readonly dark: boolean;
  readonly colors: CtpColors;
  readonly colorEntries: Entries<CtpColors>;
}>;

export const flavors = entriesFromObject(definitions)
  .reduce((acc, [flavorName, flavor]) => {
    acc[flavorName] = {
      ...flavor,
      colorEntries: entriesFromObject(flavor.colors),
    };
    return acc;
  }, {} as CtpFlavors);

export const flavorEntries = entriesFromObject(flavors);
