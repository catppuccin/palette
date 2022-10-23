use crate::{Colour, Flavour};

/// Macchiato flavoured Catppuccin.
pub const MACCHIATO: Flavour = Flavour {
    name: "macchiato",
    rosewater: Colour(244, 219, 214),
    flamingo: Colour(240, 198, 198),
    pink: Colour(245, 189, 230),
    mauve: Colour(198, 160, 246),
    red: Colour(237, 135, 150),
    maroon: Colour(238, 153, 160),
    peach: Colour(245, 169, 127),
    yellow: Colour(238, 212, 159),
    green: Colour(166, 218, 149),
    teal: Colour(139, 213, 202),
    sky: Colour(145, 215, 227),
    sapphire: Colour(125, 196, 228),
    blue: Colour(138, 173, 244),
    lavender: Colour(183, 189, 248),
    text: Colour(202, 211, 245),
    subtext1: Colour(184, 192, 224),
    subtext0: Colour(165, 173, 203),
    overlay2: Colour(147, 154, 183),
    overlay1: Colour(128, 135, 162),
    overlay0: Colour(110, 115, 141),
    surface2: Colour(91, 96, 120),
    surface1: Colour(73, 77, 100),
    surface0: Colour(54, 58, 79),
    base: Colour(36, 39, 58),
    mantle: Colour(30, 32, 48),
    crust: Colour(24, 25, 38),
};

#[cfg(test)]
mod tests {
    use super::MACCHIATO;
    use crate::flavour::validate_colours;
    use indoc::indoc;

    #[test]
    fn validate_macchiato_colours() {
        validate_colours(
            MACCHIATO,
            indoc! {"
                Rosewater 	#f4dbd6 	rgb(244, 219, 214) 	hsl(10, 58%, 90%)
                Flamingo 	#f0c6c6 	rgb(240, 198, 198) 	hsl(0, 58%, 86%)
                Pink 	#f5bde6 	rgb(245, 189, 230) 	hsl(316, 74%, 85%)
                Mauve 	#c6a0f6 	rgb(198, 160, 246) 	hsl(267, 83%, 80%)
                Red 	#ed8796 	rgb(237, 135, 150) 	hsl(351, 74%, 73%)
                Maroon 	#ee99a0 	rgb(238, 153, 160) 	hsl(355, 71%, 77%)
                Peach 	#f5a97f 	rgb(245, 169, 127) 	hsl(21, 86%, 73%)
                Yellow 	#eed49f 	rgb(238, 212, 159) 	hsl(40, 70%, 78%)
                Green 	#a6da95 	rgb(166, 218, 149) 	hsl(105, 48%, 72%)
                Teal 	#8bd5ca 	rgb(139, 213, 202) 	hsl(171, 47%, 69%)
                Sky 	#91d7e3 	rgb(145, 215, 227) 	hsl(189, 59%, 73%)
                Sapphire 	#7dc4e4 	rgb(125, 196, 228) 	hsl(199, 66%, 69%)
                Blue 	#8aadf4 	rgb(138, 173, 244) 	hsl(220, 83%, 75%)
                Lavender 	#b7bdf8 	rgb(183, 189, 248) 	hsl(234, 82%, 85%)
                Text 	#cad3f5 	rgb(202, 211, 245) 	hsl(227, 68%, 88%)
                Subtext1 	#b8c0e0 	rgb(184, 192, 224) 	hsl(228, 39%, 80%)
                Subtext0 	#a5adcb 	rgb(165, 173, 203) 	hsl(227, 27%, 72%)
                Overlay2 	#939ab7 	rgb(147, 154, 183) 	hsl(228, 20%, 65%)
                Overlay1 	#8087a2 	rgb(128, 135, 162) 	hsl(228, 15%, 57%)
                Overlay0 	#6e738d 	rgb(110, 115, 141) 	hsl(230, 12%, 49%)
                Surface2 	#5b6078 	rgb(91, 96, 120) 	hsl(230, 14%, 41%)
                Surface1 	#494d64 	rgb(73, 77, 100) 	hsl(231, 16%, 34%)
                Surface0 	#363a4f 	rgb(54, 58, 79) 	hsl(230, 19%, 26%)
                Base 	#24273a 	rgb(36, 39, 58) 	hsl(232, 23%, 18%)
                Mantle 	#1e2030 	rgb(30, 32, 48) 	hsl(233, 23%, 15%)
                Crust 	#181926 	rgb(24, 25, 38) 	hsl(236, 23%, 12%)
            "},
        );
    }
}
