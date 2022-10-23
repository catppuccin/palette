# catppuccin

🦀 Soothing pastel theme for Rust.

## Usage

Add Catppuccin to your project's `Cargo.toml`:

```toml
[dependencies]
catppuccin = "1.0.0"
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

```shell
$ cargo run --example simple
$ cargo run --features ansi --example term
```

## Optional Features

### ANSI string painting

Enable the `ansi` feature to add the
[`Colour::ansi_paint`](crate::Colour::ansi_paint) method.
This adds [ansi-term](https://crates.io/crates/ansi_term) as a dependency.

License: MIT
