//! 🦀 Soothing pastel theme for Rust.
//!
//! # Usage
//!
//! Add Catppuccin to your project's `Cargo.toml`:
//!
//! ```toml
//! [dependencies]
#![doc = concat!("catppuccin = \"", env!("CARGO_PKG_VERSION"), "\"")]
//! ```
//!
//! # Example
//!
//! ```rust
//! use catppuccin::Flavour;
//!
//! struct Button {
//!     text: String,
//!     background_colour: String,
//! };
//!
//! fn confirm(text: String) -> Button {
//!     Button {
//!         text,
//!         background_colour: Flavour::Mocha.palette().green.hex(),
//!     }
//! }
//! ```
//!
//! More examples can be found
//! [here](https://github.com/catppuccin/palette/tree/main/rust/examples).
//!
//! Clone the repository to run them locally:
//!
//! ```bash
//! $ cargo run --example simple
//! ```
//!
//! ![Output from simple example](https://raw.githubusercontent.com/catppuccin/palette/main/rust/assets/simple-example.png)
//!
//! ```bash
//! $ cargo run --features ansi --example term
//! ```
//!
//! ![Output from term example](https://raw.githubusercontent.com/catppuccin/palette/main/rust/assets/term-example.png)
//!
//! # Optional Features
//!
//! ## ANSI string painting
//!
//! Enable the `ansi` feature to add the
//! [`Colour::ansi_paint`](crate::Colour::ansi_paint) method.
//! This adds [ansi-term](https://crates.io/crates/ansi_term) as a dependency.

mod colour;
pub use colour::Colour;

mod palette;
pub use palette::Palette;

mod flavour;
pub use flavour::Flavour;

#[cfg(test)]
mod tests {
    use super::Flavour;

    /// Ensures flavours are iterated in the correct order.
    #[test]
    fn test_flavours_iter() {
        let mut flavours = Flavour::into_iter();
        assert_eq!(flavours.next(), Some(Flavour::Latte));
        assert_eq!(flavours.next(), Some(Flavour::Frappe));
        assert_eq!(flavours.next(), Some(Flavour::Macchiato));
        assert_eq!(flavours.next(), Some(Flavour::Mocha));
        assert_eq!(flavours.next(), None);
    }

    /// Ensures colours within each flavour are iterated in the correct order.
    #[test]
    fn test_colours_iter() {
        for flavour in Flavour::into_iter() {
            let palette = flavour.palette();
            let mut colours = palette.into_iter();
            assert_eq!(colours.next(), Some(&palette.rosewater));
            assert_eq!(colours.next(), Some(&palette.flamingo));
            assert_eq!(colours.next(), Some(&palette.pink));
            assert_eq!(colours.next(), Some(&palette.mauve));
            assert_eq!(colours.next(), Some(&palette.red));
            assert_eq!(colours.next(), Some(&palette.maroon));
            assert_eq!(colours.next(), Some(&palette.peach));
            assert_eq!(colours.next(), Some(&palette.yellow));
            assert_eq!(colours.next(), Some(&palette.green));
            assert_eq!(colours.next(), Some(&palette.teal));
            assert_eq!(colours.next(), Some(&palette.sky));
            assert_eq!(colours.next(), Some(&palette.sapphire));
            assert_eq!(colours.next(), Some(&palette.blue));
            assert_eq!(colours.next(), Some(&palette.lavender));
            assert_eq!(colours.next(), Some(&palette.text));
            assert_eq!(colours.next(), Some(&palette.subtext1));
            assert_eq!(colours.next(), Some(&palette.subtext0));
            assert_eq!(colours.next(), Some(&palette.overlay2));
            assert_eq!(colours.next(), Some(&palette.overlay1));
            assert_eq!(colours.next(), Some(&palette.overlay0));
            assert_eq!(colours.next(), Some(&palette.surface2));
            assert_eq!(colours.next(), Some(&palette.surface1));
            assert_eq!(colours.next(), Some(&palette.surface0));
            assert_eq!(colours.next(), Some(&palette.base));
            assert_eq!(colours.next(), Some(&palette.mantle));
            assert_eq!(colours.next(), Some(&palette.crust));
        }
    }
}
