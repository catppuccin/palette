<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin Palettes
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/palette/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/palette?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/palette/issues"><img src="https://img.shields.io/github/issues/catppuccin/palette?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/palette/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/palette?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/sample.png"/>
</p>

## Available formats

- Development
    - [Node Package](#node-package)
    - [CSS](#css)
    - [Sass](#sass)
    - [Tailwind CSS](https://github.com/catppuccin/tailwindcss) (separate repository)
    - [Rust](https://github.com/catppuccin/rust) (separate repository)
    - [Python](https://github.com/catppuccin/python) (separate repository)
    - [Go](https://github.com/catppuccin/go) (separate repository)
    - [Java](https://github.com/catppuccin/java) (separate repository)
- Design
    - [Affinity](#affinity)
    - [Aseprite / LibreSprite](#aseprite--libresprite)
    - [Gimp](#gimp)
    - [Inkscape](#inkscape)
    - [Krita](#krita)
- Colour pickers
    - [macOS Color Picker](#macos-color-picker)
    - [Sip](#sip)
- Reference
    - [PNG](#png)

## Usage

### Node Package

```bash
# npm
npm install @catppuccin/palette
# yarn
yarn add @catppuccin/palette
```

Example: `test.js`

```js
import {variants, labels} from '@catppuccin/palette'

console.log(variants.latte.lavender.hex) // #7287FD
console.log(labels.base.macchiato.hex) // #24273A
```

### CSS

Import the palettes:

```css
/* directly from the file */
@import "@catppuccin/palette/style";
/* or using unpkg.com */
@import url('https://unpkg.com/@catppuccin/palette/css/catppuccin.css');
```

Then use them:

```css
body {
	color: var(--ctp-mocha-text);
	background: var(--ctp-frappe-base);
}
```

### Sass

The usage instructions for Sass are documented [here](https://github.com/catppuccin/palette/tree/main/scss), in the `scss` folder.

### Affinity

1. Clone this repository locally
2. Open a file in the `afpalette` folder. If you have multiple Affinity products
   installed, you can choose to import it as a System palette

### Aseprite / LibreSprite

1. Clone this repository locally
2. Open Palette Options
3. Select "Load Palette" from the menu
4. Open a file in `gpl/` in the dialog that appears

### Gimp

1. Clone this repository locally
2. Navigate to Edit > Preferences > Folders > Palettes in GIMP
3. Select the folder with the 'x' and press "Show file location in the file manager" (the rightmost button)
4. Copy the files in `gpl/` to this folder

### Inkscape

1. Clone this repository locally
2. Navigate to Edit > Preferences > System > User palettes in Inkscape
3. Press the "Open" button next to the folder path
4. Copy the files in `gpl/` to this folder

### Krita

1. Clone this repository locally
2. Navigate to Settings > Dockers > Palette in Krita
3. Open the "Choose Palette" button in the bottom left corner of Palette docker
4. Select "Import a new palette from file"
5. Open a file in `gpl/` in the dialog that appears

### macOS Color Picker
1. Clone this repository locally
2. `cd` into the repo directory
3. Run the following command in terminal, to copy the files into the library:
```bash
cp -r clr/* ~/Library/Colors
```

### Sip
1. Clone this repository locally
2. Open the `sip/` folder
3. Open the `.palette` files, and Sip will import the palettes

## 💝 Thanks to

- [Gingeh](https://github.com/gingeh)
- [TheExistingOne](https://github.com/TheExistingOne)
- [Andreas Grafen](https://github.com/andreasgrafen)
- [Pocco81](https://github.com/Pocco81)
- [winston](https://github.com/nekowinston)

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
