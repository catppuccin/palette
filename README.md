<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/> Catppuccin Palettes
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/palette/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/palette?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/palette/issues"><img src="https://img.shields.io/github/issues/catppuccin/palette?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/palette/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/palette?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

## Usage

### Node

Get the [NPM package](https://www.npmjs.org/package/@catppuccin/palette):

```console
npm install @catppuccin/palette
```

```ts
import { flavors, flavorEntries } from "@catppuccin/palette";
import chalk from "chalk";

// an object containing all catppuccin flavors
console.log(flavors);

// typed helper when iterating flavors
flavorEntries.map(([_, flavor]) => {
  console.log(`${flavor.name} is a ${flavor.dark ? "dark" : "light"} theme.`);
  console.log(`It has ${flavor.colorEntries.length} colors:`);

  // same for the colors
  flavor.colorEntries.map(([colorName, { hex, rgb, accent }]) => {
    console.log(
      chalk.bgRgb(rgb.r, rgb.b, rgb.g)(` ${hex} `),
      colorName,
      accent
    );
  });
  console.log("\n");
});
```

### Deno

The library gets published to [`deno.land/x/catppuccin`](https://deno.land/x/catppuccin).

```ts
import { flavors, flavorEntries } from "https://deno.land/x/catppuccin/mod.ts";
import { bgRgb24 } from "https://deno.land/std/fmt/colors.ts";

// an object containing all catppuccin flavors
console.log(flavors);

// typed helper when iterating flavors
flavorEntries.map(([_, flavor]) => {
  console.log(`${flavor.name} is a ${flavor.dark ? "dark" : "light"} theme.`);
  console.log(`It has ${flavor.colorEntries.length} colors:`);

  // same for the colors
  flavor.colorEntries.map(([colorName, { hex, rgb, accent }]) => {
    console.log(bgRgb24(`  ${hex}  `, { ...rgb }), colorName, accent);
  });
  console.log("\n");
});
```

## Other available formats

- Web development
  - [CSS](docs/css.md)
  - [Sass](docs/sass.md)
- Ports of this library
  - [Flutter](https://github.com/catppuccin/flutter)
  - [Go](https://github.com/catppuccin/go)
  - [Java](https://github.com/catppuccin/java)
  - [Lua](https://github.com/catppuccin/lua)
  - [Nim](https://github.com/catppuccin/nim)
  - [Python](https://github.com/catppuccin/python)
  - [Rust](https://github.com/catppuccin/rust)
  - [Tailwind CSS](https://github.com/catppuccin/tailwindcss)
  - [V](https://github.com/catppuccin/v)

## Graphics editors

Please use the respective files in [the latest GitHub Release](https://github.com/catppuccin/palette/releases/latest):

| Programs                         | Directory    |
| -------------------------------- | ------------ |
| Adobe Suite, Affinity Suite, Sip | `ase/`       |
| Aseprite, Gimp, Inkscape, Krita  | `gimp/`      |
| Procreate                        | `procreate/` |

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
