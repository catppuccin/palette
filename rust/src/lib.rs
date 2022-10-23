//! 🦀 Soothing pastel theme for Rust.
//!
//! # Usage
//!
//! Add Catppuccin to your project's `Cargo.toml`:
//!
//! ```toml
//! [dependencies]
//! catppuccin = "1.0.0"
//! ```
//!
//! # Example
//!
//! ```rust
//! use catppuccin::MOCHA;
//!
//! struct Button {
//!     text: String,
//!     background_colour: String,
//! };
//!
//! fn confirm(text: String) -> Button {
//!     Button {
//!         text,
//!         background_colour: MOCHA.green.hex(),
//!     }
//! }
//! ```
//!
//! More examples can be found
//! [here](https://github.com/catppuccin/palette/tree/main/rust/examples).
//!
//! Clone the repository to run them locally:
//!
//! ```shell
//! $ cargo run --example simple
//! $ cargo run --features ansi --example term
//! ```
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

mod flavour;
pub use flavour::Flavour;

mod latte;
pub use latte::LATTE;

mod frappe;
pub use frappe::FRAPPE;

mod macchiato;
pub use macchiato::MACCHIATO;

mod mocha;
pub use mocha::MOCHA;

/// Returns an iterator over the four delicious Catppuccin flavours.
pub fn flavours_iter() -> std::array::IntoIter<Flavour, 4> {
    [LATTE, FRAPPE, MACCHIATO, MOCHA].into_iter()
}

#[cfg(test)]
mod tests {
    use super::{flavours_iter, FRAPPE, LATTE, MACCHIATO, MOCHA};

    /// Ensures flavours are iterated in the correct order.
    #[test]
    fn test_flavours_iter() {
        let mut flavours = flavours_iter();
        assert_eq!(flavours.next(), Some(LATTE));
        assert_eq!(flavours.next(), Some(FRAPPE));
        assert_eq!(flavours.next(), Some(MACCHIATO));
        assert_eq!(flavours.next(), Some(MOCHA));
        assert_eq!(flavours.next(), None);
    }

    /// Ensures colours within each flavour are iterated in the correct order.
    #[test]
    fn test_colours_iter() {
        for flavour in flavours_iter() {
            let mut colours = flavour.iter();
            assert_eq!(colours.next(), Some(&flavour.rosewater));
            assert_eq!(colours.next(), Some(&flavour.flamingo));
            assert_eq!(colours.next(), Some(&flavour.pink));
            assert_eq!(colours.next(), Some(&flavour.mauve));
            assert_eq!(colours.next(), Some(&flavour.red));
            assert_eq!(colours.next(), Some(&flavour.maroon));
            assert_eq!(colours.next(), Some(&flavour.peach));
            assert_eq!(colours.next(), Some(&flavour.yellow));
            assert_eq!(colours.next(), Some(&flavour.green));
            assert_eq!(colours.next(), Some(&flavour.teal));
            assert_eq!(colours.next(), Some(&flavour.sky));
            assert_eq!(colours.next(), Some(&flavour.sapphire));
            assert_eq!(colours.next(), Some(&flavour.blue));
            assert_eq!(colours.next(), Some(&flavour.lavender));
            assert_eq!(colours.next(), Some(&flavour.text));
            assert_eq!(colours.next(), Some(&flavour.subtext1));
            assert_eq!(colours.next(), Some(&flavour.subtext0));
            assert_eq!(colours.next(), Some(&flavour.overlay2));
            assert_eq!(colours.next(), Some(&flavour.overlay1));
            assert_eq!(colours.next(), Some(&flavour.overlay0));
            assert_eq!(colours.next(), Some(&flavour.surface2));
            assert_eq!(colours.next(), Some(&flavour.surface1));
            assert_eq!(colours.next(), Some(&flavour.surface0));
            assert_eq!(colours.next(), Some(&flavour.base));
            assert_eq!(colours.next(), Some(&flavour.mantle));
            assert_eq!(colours.next(), Some(&flavour.crust));
        }
    }
}
