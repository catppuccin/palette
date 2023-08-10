<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://nodejs.org">Node</a> & <a href="https://deno.land">Deno</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/palette/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/palette?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/palette/issues"><img src="https://img.shields.io/github/issues/catppuccin/palette?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/palette/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/palette?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

## Usage

```bash
# npm
npm install @catppuccin/palette
```

Example: `test.js`

```js
import { colors, flavors } from "@catppuccin/palette"

console.log(colors.red.latte.hex); // #d20f39
console.log(flavors.macchiato.green.rgb); // { r: 166, g: 218, b: 149 }
console.log(flavors.mocha.blue.hsl); // { h: 217.2, s: 28.5, l: 75.9 }

// iterate over all flavors
Object.entries(flavors).map(([flavorName, palette]) => {
  // and each of their colors
  Object.entries(palette).map(([colorName, color]) => {
    console.log(`${flavorName}'s ${colorName} is: ${color.hex}`);
  });
});
```

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
