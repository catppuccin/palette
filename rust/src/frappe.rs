use crate::{Colour, Flavour};

/// Frappe flavoured Catppuccin.
pub const FRAPPE: Flavour = Flavour {
    name: "frappe",
    rosewater: Colour(242, 213, 207),
    flamingo: Colour(238, 190, 190),
    pink: Colour(244, 184, 228),
    mauve: Colour(202, 158, 230),
    red: Colour(231, 130, 132),
    maroon: Colour(234, 153, 156),
    peach: Colour(239, 159, 118),
    yellow: Colour(229, 200, 144),
    green: Colour(166, 209, 137),
    teal: Colour(129, 200, 190),
    sky: Colour(153, 209, 219),
    sapphire: Colour(133, 193, 220),
    blue: Colour(140, 170, 238),
    lavender: Colour(186, 187, 241),
    text: Colour(198, 208, 245),
    subtext1: Colour(181, 191, 226),
    subtext0: Colour(165, 173, 206),
    overlay2: Colour(148, 156, 187),
    overlay1: Colour(131, 139, 167),
    overlay0: Colour(115, 121, 148),
    surface2: Colour(98, 104, 128),
    surface1: Colour(81, 87, 109),
    surface0: Colour(65, 69, 89),
    base: Colour(48, 52, 70),
    mantle: Colour(41, 44, 60),
    crust: Colour(35, 38, 52),
};

#[cfg(test)]
mod tests {
    use super::FRAPPE;
    use crate::flavour::validate_colours;
    use indoc::indoc;

    #[test]
    fn validate_frappe_colours() {
        validate_colours(
            FRAPPE,
            indoc! {"
                Rosewater 	#f2d5cf 	rgb(242, 213, 207) 	hsl(10, 57%, 88%)
                Flamingo 	#eebebe 	rgb(238, 190, 190) 	hsl(0, 59%, 84%)
                Pink 	#f4b8e4 	rgb(244, 184, 228) 	hsl(316, 73%, 84%)
                Mauve 	#ca9ee6 	rgb(202, 158, 230) 	hsl(277, 59%, 76%)
                Red 	#e78284 	rgb(231, 130, 132) 	hsl(359, 68%, 71%)
                Maroon 	#ea999c 	rgb(234, 153, 156) 	hsl(358, 66%, 76%)
                Peach 	#ef9f76 	rgb(239, 159, 118) 	hsl(20, 79%, 70%)
                Yellow 	#e5c890 	rgb(229, 200, 144) 	hsl(40, 62%, 73%)
                Green 	#a6d189 	rgb(166, 209, 137) 	hsl(96, 44%, 68%)
                Teal 	#81c8be 	rgb(129, 200, 190) 	hsl(172, 39%, 65%)
                Sky 	#99d1db 	rgb(153, 209, 219) 	hsl(189, 48%, 73%)
                Sapphire 	#85c1dc 	rgb(133, 193, 220) 	hsl(199, 55%, 69%)
                Blue 	#8caaee 	rgb(140, 170, 238) 	hsl(222, 74%, 74%)
                Lavender 	#babbf1 	rgb(186, 187, 241) 	hsl(239, 66%, 84%)
                Text 	#c6d0f5 	rgb(198, 208, 245) 	hsl(227, 70%, 87%)
                Subtext1 	#b5bfe2 	rgb(181, 191, 226) 	hsl(227, 44%, 80%)
                Subtext0 	#a5adce 	rgb(165, 173, 206) 	hsl(228, 29%, 73%)
                Overlay2 	#949cbb 	rgb(148, 156, 187) 	hsl(228, 22%, 66%)
                Overlay1 	#838ba7 	rgb(131, 139, 167) 	hsl(227, 17%, 58%)
                Overlay0 	#737994 	rgb(115, 121, 148) 	hsl(229, 13%, 52%)
                Surface2 	#626880 	rgb(98, 104, 128) 	hsl(228, 13%, 44%)
                Surface1 	#51576d 	rgb(81, 87, 109) 	hsl(227, 15%, 37%)
                Surface0 	#414559 	rgb(65, 69, 89) 	hsl(230, 16%, 30%)
                Base 	#303446 	rgb(48, 52, 70) 	hsl(229, 19%, 23%)
                Mantle 	#292c3c 	rgb(41, 44, 60) 	hsl(231, 19%, 20%)
                Crust 	#232634 	rgb(35, 38, 52) 	hsl(229, 20%, 17%)
            "},
        );
    }
}
