<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://sass-lang.com">Sass</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/palette/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/palette?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/palette/issues"><img src="https://img.shields.io/github/issues/catppuccin/palette?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/palette/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/palette?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

There are two ways of using these Sass files:

## Import one-by-one

The easiest way to import a single flavor, is to use one of these 4 files:\
`_latte.scss`, `_frappe.scss`, `_macchiato.scss`, `_mocha.scss`

Input:
```scss
@use "mocha";
// sass is also part of the npm package:
// @use "~@catppuccin/palette/scss/catppuccin/mocha";

.my-mocha-class {
    background: $base;
    color: $text;
}
```

Output:
```css
.my-mocha-class {
  background: #1e1e2e;
  color: #cdd6f4;
}
```

## Import the single-map file

Another way to create all four flavors, in a single file, from a single file,
is to use `_catppuccin.scss`.

**NB**: Due to web safe colors being predefined in CSS, colors like `red`, `green`, `blue` will **not** be generated with this method, **when they are not** explicitly cast as a string. To ensure proper generation, wrap your values with `'`. 

In short:\
❌ Don't do this:
`#{map.get($color, blue)}`\
✅ Do this:
`#{map.get($color, 'blue')}`

Input:

```scss
@use "sass:map";
@use "catppuccin";
// sass is also part of the npm package:
// @use "~@catppuccin/palette/scss/catppuccin";

@each $flavor, $color in catppuccin.$palette {
    .my-#{$flavor}-class {
        // you need surround the catppuccin color names with quotes
        background: map.get($color, 'base');
        color: map.get($color, 'blue');
    }
}
```

Output:

```css
.my-mocha-class {
  background: #1e1e2e;
  color: #cdd6f4;
}

.my-macchiato-class {
  background: #24273a;
  color: #cad3f5;
}

.my-frappe-class {
  background: #303446;
  color: #c6d0f5;
}

.my-latte-class {
  background: #eff1f5;
  color: #4c4f69;
}
```

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
