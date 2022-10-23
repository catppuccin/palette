use crate::{flavour::Flavour, Colour};

/// Latte flavoured Catppuccin.
pub const LATTE: Flavour = Flavour {
    name: "latte",
    rosewater: Colour(220, 138, 120),
    flamingo: Colour(221, 120, 120),
    pink: Colour(234, 118, 203),
    mauve: Colour(136, 57, 239),
    red: Colour(210, 15, 57),
    maroon: Colour(230, 69, 83),
    peach: Colour(254, 100, 11),
    yellow: Colour(223, 142, 29),
    green: Colour(64, 160, 43),
    teal: Colour(23, 146, 153),
    sky: Colour(4, 165, 229),
    sapphire: Colour(32, 159, 181),
    blue: Colour(30, 102, 245),
    lavender: Colour(114, 135, 253),
    text: Colour(76, 79, 105),
    subtext1: Colour(92, 95, 119),
    subtext0: Colour(108, 111, 133),
    overlay2: Colour(124, 127, 147),
    overlay1: Colour(140, 143, 161),
    overlay0: Colour(156, 160, 176),
    surface2: Colour(172, 176, 190),
    surface1: Colour(188, 192, 204),
    surface0: Colour(204, 208, 218),
    base: Colour(239, 241, 245),
    mantle: Colour(230, 233, 239),
    crust: Colour(220, 224, 232),
};

#[cfg(test)]
mod tests {
    use super::LATTE;
    use crate::flavour::validate_colours;
    use indoc::indoc;

    #[test]
    fn validate_latte_colours() {
        validate_colours(
            LATTE,
            indoc! {"
                Rosewater 	#dc8a78 	rgb(220, 138, 120) 	hsl(11, 59%, 67%)
                Flamingo 	#dd7878 	rgb(221, 120, 120) 	hsl(0, 60%, 67%)
                Pink 	#ea76cb 	rgb(234, 118, 203) 	hsl(316, 73%, 69%)
                Mauve 	#8839ef 	rgb(136, 57, 239) 	hsl(266, 85%, 58%)
                Red 	#d20f39 	rgb(210, 15, 57) 	hsl(347, 87%, 44%)
                Maroon 	#e64553 	rgb(230, 69, 83) 	hsl(355, 76%, 59%)
                Peach 	#fe640b 	rgb(254, 100, 11) 	hsl(22, 99%, 52%)
                Yellow 	#df8e1d 	rgb(223, 142, 29) 	hsl(35, 77%, 49%)
                Green 	#40a02b 	rgb(64, 160, 43) 	hsl(109, 58%, 40%)
                Teal 	#179299 	rgb(23, 146, 153) 	hsl(183, 74%, 35%)
                Sky 	#04a5e5 	rgb(4, 165, 229) 	hsl(197, 97%, 46%)
                Sapphire 	#209fb5 	rgb(32, 159, 181) 	hsl(189, 70%, 42%)
                Blue 	#1e66f5 	rgb(30, 102, 245) 	hsl(220, 91%, 54%)
                Lavender 	#7287fd 	rgb(114, 135, 253) 	hsl(231, 97%, 72%)
                Text 	#4c4f69 	rgb(76, 79, 105) 	hsl(234, 16%, 35%)
                Subtext1 	#5c5f77 	rgb(92, 95, 119) 	hsl(233, 13%, 41%)
                Subtext0 	#6c6f85 	rgb(108, 111, 133) 	hsl(233, 10%, 47%)
                Overlay2 	#7c7f93 	rgb(124, 127, 147) 	hsl(232, 10%, 53%)
                Overlay1 	#8c8fa1 	rgb(140, 143, 161) 	hsl(231, 10%, 59%)
                Overlay0 	#9ca0b0 	rgb(156, 160, 176) 	hsl(228, 11%, 65%)
                Surface2 	#acb0be 	rgb(172, 176, 190) 	hsl(227, 12%, 71%)
                Surface1 	#bcc0cc 	rgb(188, 192, 204) 	hsl(225, 14%, 77%)
                Surface0 	#ccd0da 	rgb(204, 208, 218) 	hsl(223, 16%, 83%)
                Base 	#eff1f5 	rgb(239, 241, 245) 	hsl(220, 23%, 95%)
                Mantle 	#e6e9ef 	rgb(230, 233, 239) 	hsl(220, 22%, 92%)
                Crust 	#dce0e8 	rgb(220, 224, 232) 	hsl(220, 21%, 89%)
            "},
        );
    }
}
