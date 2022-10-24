use catppuccin::Flavour;

fn main() {
    let (r, g, b) = Flavour::Latte.palette().teal.into();
    println!(
        "Latte's teal is #{}, which is rgb({r}, {g}, {b})",
        Flavour::Latte.palette().teal.hex()
    );

    let (r, g, b) = Flavour::Mocha.palette().teal.into();
    println!(
        "Mocha's teal is #{}, which is rgb({r}, {g}, {b})",
        Flavour::Mocha.palette().teal.hex()
    );
}
