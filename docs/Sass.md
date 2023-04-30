# Catppuccin Sass

There are two ways of using these Sass files:

## Import one-by-one

The easiest way to import a single flavor, is to use one of these 4 files:\
`_latte.scss`, `_frappe.scss`, `_macchiato.scss`, `_mocha.scss`

Input:
```scss
@import "mocha";
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
`#{map-get($color, blue)}`\
✅ Do this:
`#{map-get($color, 'blue')}`

Input:

```scss
@use "catppuccin";
// sass is also part of the npm package:
// @use "~@catppuccin/palette/scss/catppuccin";

@each $flavor, $color in catppuccin.$palette {
    .my-#{flavor}-class {
        // you need surround the catppuccin color names with quotes
        background: map-get($color, 'base');
        color: map-get($color, 'blue');
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
