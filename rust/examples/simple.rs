use catppuccin::Flavour;

fn main() {
    let (r, g, b) = Flavour::Latte.colours().teal.into();
    println!(
        "Latte's teal is #{}, which is rgb({r}, {g}, {b})",
        Flavour::Latte.colours().teal.hex()
    );

    let (r, g, b) = Flavour::Mocha.colours().teal.into();
    println!(
        "Mocha's teal is #{}, which is rgb({r}, {g}, {b})",
        Flavour::Mocha.colours().teal.hex()
    );
}
