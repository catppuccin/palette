# Catppuccin Sass

There are two ways of using these Sass files:

## Import one-by-one

The easiest way to import a single flavour, is to use one of these 4 files:\
`_latte.scss`, `_frappe.scss`, `_macchiato.scss`, `_mocha.scss`

Input:
```scss
@import "mocha";

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

Another way to create all four flavours, in a single file, from a single file,
is to use `_catppuccin.scss`.

Input:

```scss
@use "catppuccin";

@each $flavour, $colour in catppuccin.$palette {
    .my-#{flavour}-class {
        background: map-get($colour, base);
        color: map-get($colour, text);
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
