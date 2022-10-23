use catppuccin::{LATTE, MOCHA};

fn main() {
    let (r, g, b) = LATTE.teal.into();
    println!(
        "Latte's teal is #{}, which is rgb({r}, {g}, {b})",
        LATTE.teal.hex()
    );

    let (r, g, b) = MOCHA.teal.into();
    println!(
        "Mocha's teal is #{}, which is rgb({r}, {g}, {b})",
        MOCHA.teal.hex()
    );
}
