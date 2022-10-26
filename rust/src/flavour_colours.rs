use crate::Colour;

/// Contains the colour options for a flavour of Catppuccin.
#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub struct FlavourColours {
    pub rosewater: Colour,
    pub flamingo: Colour,
    pub pink: Colour,
    pub mauve: Colour,
    pub red: Colour,
    pub maroon: Colour,
    pub peach: Colour,
    pub yellow: Colour,
    pub green: Colour,
    pub teal: Colour,
    pub sky: Colour,
    pub sapphire: Colour,
    pub blue: Colour,
    pub lavender: Colour,
    pub text: Colour,
    pub subtext1: Colour,
    pub subtext0: Colour,
    pub overlay2: Colour,
    pub overlay1: Colour,
    pub overlay0: Colour,
    pub surface2: Colour,
    pub surface1: Colour,
    pub surface0: Colour,
    pub base: Colour,
    pub mantle: Colour,
    pub crust: Colour,
}

impl IntoIterator for FlavourColours {
    type Item = Colour;
    type IntoIter = std::array::IntoIter<Self::Item, 26>;

    /// Returns an iterator over the colours in the flavour.
    fn into_iter(self) -> std::array::IntoIter<Colour, 26> {
        [
            self.rosewater,
            self.flamingo,
            self.pink,
            self.mauve,
            self.red,
            self.maroon,
            self.peach,
            self.yellow,
            self.green,
            self.teal,
            self.sky,
            self.sapphire,
            self.blue,
            self.lavender,
            self.text,
            self.subtext1,
            self.subtext0,
            self.overlay2,
            self.overlay1,
            self.overlay0,
            self.surface2,
            self.surface1,
            self.surface0,
            self.base,
            self.mantle,
            self.crust,
        ]
        .into_iter()
    }
}

/// Given a colour table taken from the main Catppuccin readme, validate each
/// colour in the given flavour implementation.
/// Copy the table in question from the following URL:
/// https://github.com/catppuccin/catppuccin#-palettes
#[cfg(test)]
pub(crate) fn validate_colours(flavour_colours: FlavourColours, colours: &str) {
    fn from_hex(hex: &str) -> Colour {
        let hex = hex.strip_prefix('#').unwrap_or(hex);
        let hex = i32::from_str_radix(hex, 16).expect(&format!(
            "failed to parse hex string: {hex} (check paste format)"
        ));

        Colour(
            ((hex & 0x00FF0000) >> 16) as u8,
            ((hex & 0x0000FF00) >> 8) as u8,
            (hex & 0x000000FF) as u8,
        )
    }

    let mut colours = colours.trim().split('\n').map(|line| -> Colour {
        let hex = line.split('\t').collect::<Vec<_>>()[1].trim();
        from_hex(hex)
    });

    let mut next_colour = || {
        colours
            .next()
            .expect("ran out of colours, check paste format")
    };

    assert_eq!(next_colour(), flavour_colours.rosewater);
    assert_eq!(next_colour(), flavour_colours.flamingo);
    assert_eq!(next_colour(), flavour_colours.pink);
    assert_eq!(next_colour(), flavour_colours.mauve);
    assert_eq!(next_colour(), flavour_colours.red);
    assert_eq!(next_colour(), flavour_colours.maroon);
    assert_eq!(next_colour(), flavour_colours.peach);
    assert_eq!(next_colour(), flavour_colours.yellow);
    assert_eq!(next_colour(), flavour_colours.green);
    assert_eq!(next_colour(), flavour_colours.teal);
    assert_eq!(next_colour(), flavour_colours.sky);
    assert_eq!(next_colour(), flavour_colours.sapphire);
    assert_eq!(next_colour(), flavour_colours.blue);
    assert_eq!(next_colour(), flavour_colours.lavender);
    assert_eq!(next_colour(), flavour_colours.text);
    assert_eq!(next_colour(), flavour_colours.subtext1);
    assert_eq!(next_colour(), flavour_colours.subtext0);
    assert_eq!(next_colour(), flavour_colours.overlay2);
    assert_eq!(next_colour(), flavour_colours.overlay1);
    assert_eq!(next_colour(), flavour_colours.overlay0);
    assert_eq!(next_colour(), flavour_colours.surface2);
    assert_eq!(next_colour(), flavour_colours.surface1);
    assert_eq!(next_colour(), flavour_colours.surface0);
    assert_eq!(next_colour(), flavour_colours.base);
    assert_eq!(next_colour(), flavour_colours.mantle);
    assert_eq!(next_colour(), flavour_colours.crust);
}
