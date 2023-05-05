<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin Lookup Tables (Hald-CLUT)
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<img src="examples/preview.png"/>
</p>

## Previews

> Generated using `noise_2` variant

<details>
<summary>🌻 Latte</summary>
<img src="examples/simon-berger-unsplash-latte.png"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="examples/simon-berger-unsplash-frappe.png"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="examples/simon-berger-unsplash-macchiato.png"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="examples/simon-berger-unsplash-mocha.png"/>
</details>
<details>
<summary>⚫ Oled</summary>
<img src="examples/simon-berger-unsplash-oled.png"/>
</details>

## Usage

Images:

```bash
magick input.png src/noise_2/mocha.png -hald-clut output.png
```

Videos:

```bash
ffmpeg -i input.mkv -i src/noise_2/mocha.png -filter_complex '[0][1] haldclut' output.mp4
```

### Example script

`apply.sh` is an example script that uses the LUTs provided in `src` to theme an image with each of the flavors. Multiple images and flavors at a time are supported.

```bash
bash examples/apply.sh -i examples/simon-berger-unsplash.png [-n noise] [-f flavors]
```

### (Re)generating LUTs

Requirements: [cargo-play](https://crates.io/crates/cargo-play), [imagemagick](https://imagemagick.org)

```bash
# Clone the repo
git clone https://github.com/catppuccin/palette
cd palette 

# Install deps
yarn install # or npm i

# Run the script
node src/scripts/build_luts.mjs
```

## 💝 Thanks to

- Gingeh for pioneering the process :)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
