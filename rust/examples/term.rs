use catppuccin::flavours_iter;

fn main() {
    // iterate over the four Catppuccin flavours.
    for flavour in flavours_iter() {
        println!("{}", flavour.name);

        // iterate over the 26 colours in the flavour.
        for (i, colour) in flavour.iter().enumerate() {
            print!("{}", colour.ansi_paint("██"));

            // the 14 analogous colours go on one line,
            // then we break for the 12 monochromatic colours.
            if i > 0 && i % 13 == 0 {
                println!();
            }
        }
        println!();
    }
}
