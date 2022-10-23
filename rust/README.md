# catppuccin

🦀 Soothing pastel theme for Rust.

## Usage

Add Catppuccin to your project's `Cargo.toml`:

```toml
[dependencies]
catppuccin = "1.0.2"
```

## Example

```rust
use catppuccin::MOCHA;

struct Button {
    text: String,
    background_colour: String,
};

fn confirm(text: String) -> Button {
    Button {
        text,
        background_colour: MOCHA.green.hex(),
    }
}
```

More examples can be found
[here](https://github.com/catppuccin/palette/tree/main/rust/examples).

Clone the repository to run them locally:

```bash
$ cargo run --example simple
```

![Output from simple example](https://raw.githubusercontent.com/catppuccin/palette/main/rust/assets/simple-example.png)

```bash
$ cargo run --features ansi --example term
```

![Output from term example](https://raw.githubusercontent.com/catppuccin/palette/main/rust/assets/term-example.png)

## Optional Features

### ANSI string painting

Enable the `ansi` feature to add the
[`Colour::ansi_paint`](crate::Colour::ansi_paint) method.
This adds [ansi-term](https://crates.io/crates/ansi_term) as a dependency.

License: MIT
