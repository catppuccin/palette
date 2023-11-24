import { flavors, flavorEntries } from "@/mod.ts";

console.log(flavors.macchiato.green.rgb);
// -> { r: 166, g: 218, b: 149 }

console.log(flavors.mocha.blue.hsl);
// -> { h: 217.168, s: 91.87, l: 75.882 }

// get typesafe iterator, unlike Object.entries
flavorEntries.map(([flavorName, palette]) => {
  console.log("red", flavorName, palette.red.hex);
});
