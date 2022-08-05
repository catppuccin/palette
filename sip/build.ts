#!/usr/bin/env deno run --allow-read --allow-write

const dateString = new Date().toISOString().replace(/T/, " ").replace(
  /\..+/,
  "",
);
const library = JSON.parse(await Deno.readTextFile("../palette.json"));

const output = [];

for (const palette in library) {
  const colours = library[palette];
  const name = `Catppuccin ${
    palette.charAt(0).toUpperCase() + palette.slice(1)
  }`;

  const data = {
    cloud: true,
    updatedAt: dateString,
    sip: {
      version: "2.6",
      build: "260",
    },
    id: crypto.randomUUID().toUpperCase(),
    readOnly: false,
    createdAt: dateString,
    dock: false,
    name: name,
    index: 1,
    originalName: name,
    like: false,
    colors: Object.keys(colours).map((key) => {
      const hex = colours[key].hex;
      const r = parseInt(hex.substring(1, 3), 16) / 255;
      const g = parseInt(hex.substring(3, 5), 16) / 255;
      const b = parseInt(hex.substring(5, 7), 16) / 255;

      return {
        alpha: 1,
        red: r,
        green: g,
        blue: b,
        name: key,
        createdAt: dateString,
        id: "CD343FB2-2253-369A-AA19-9AE65B791EC2",
      };
    }),
    lock: true,
  };

  output.push(data);
}

output.map((palette) => {
  Deno.writeTextFile(
    `./${palette.name}.palette`,
    JSON.stringify(palette, null, 2),
  );
});
