
use crate::{Colour, Palette};

#[derive(Debug, PartialEq, Eq, Clone, Copy)]
pub enum Flavour {
    Latte,
    Frappe,
    Macchiato,
    Mocha,
}

impl Flavour {
    pub fn name(self) -> &'static str {
        match self {
            Self::Latte => "latte",
            Self::Frappe => "frappe",
            Self::Macchiato => "macchiato",
            Self::Mocha => "mocha",
        }
    }

    pub fn palette(self) -> Palette {
        match self {
            Self::Latte => Palette {
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
            },
            Self::Frappe => Palette {
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
            },
            Self::Macchiato => Palette {
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
            },
            Self::Mocha => Palette {
                rosewater: Colour(245, 224, 220),
                flamingo: Colour(242, 205, 205),
                pink: Colour(245, 194, 231),
                mauve: Colour(203, 166, 247),
                red: Colour(243, 139, 168),
                maroon: Colour(235, 160, 172),
                peach: Colour(250, 179, 135),
                yellow: Colour(249, 226, 175),
                green: Colour(166, 227, 161),
                teal: Colour(148, 226, 213),
                sky: Colour(137, 220, 235),
                sapphire: Colour(116, 199, 236),
                blue: Colour(137, 180, 250),
                lavender: Colour(180, 190, 254),
                text: Colour(205, 214, 244),
                subtext1: Colour(186, 194, 222),
                subtext0: Colour(166, 173, 200),
                overlay2: Colour(147, 153, 178),
                overlay1: Colour(127, 132, 156),
                overlay0: Colour(108, 112, 134),
                surface2: Colour(88, 91, 112),
                surface1: Colour(69, 71, 90),
                surface0: Colour(49, 50, 68),
                base: Colour(30, 30, 46),
                mantle: Colour(24, 24, 37),
                crust: Colour(17, 17, 27),
            }
        }
    }
}
#[cfg(test)]
mod tests {
    use super::Flavour;
    use crate::palette::validate_colours;
    use indoc::indoc;

    #[test]
    fn validate_latte_colours() {
        validate_colours(
            Flavour::Latte.palette(),
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

    #[test]
    fn validate_frappe_colours() {
        validate_colours(
            Flavour::Frappe.palette(),
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

    #[test]
    fn validate_macchiato_colours() {
        validate_colours(
            Flavour::Macchiato.palette(),
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

    #[test]
    fn validate_mocha_colours() {
        validate_colours(
            Flavour::Mocha.palette(),
            indoc! {"
                Rosewater 	#f5e0dc 	rgb(245, 224, 220) 	hsl(10, 56%, 91%)
                Flamingo 	#f2cdcd 	rgb(242, 205, 205) 	hsl(0, 59%, 88%)
                Pink 	#f5c2e7 	rgb(245, 194, 231) 	hsl(316, 72%, 86%)
                Mauve 	#cba6f7 	rgb(203, 166, 247) 	hsl(267, 84%, 81%)
                Red 	#f38ba8 	rgb(243, 139, 168) 	hsl(343, 81%, 75%)
                Maroon 	#eba0ac 	rgb(235, 160, 172) 	hsl(350, 65%, 77%)
                Peach 	#fab387 	rgb(250, 179, 135) 	hsl(23, 92%, 75%)
                Yellow 	#f9e2af 	rgb(249, 226, 175) 	hsl(41, 86%, 83%)
                Green 	#a6e3a1 	rgb(166, 227, 161) 	hsl(115, 54%, 76%)
                Teal 	#94e2d5 	rgb(148, 226, 213) 	hsl(170, 57%, 73%)
                Sky 	#89dceb 	rgb(137, 220, 235) 	hsl(189, 71%, 73%)
                Sapphire 	#74c7ec 	rgb(116, 199, 236) 	hsl(199, 76%, 69%)
                Blue 	#89b4fa 	rgb(137, 180, 250) 	hsl(217, 92%, 76%)
                Lavender 	#b4befe 	rgb(180, 190, 254) 	hsl(232, 97%, 85%)
                Text 	#cdd6f4 	rgb(205, 214, 244) 	hsl(226, 64%, 88%)
                Subtext1 	#bac2de 	rgb(186, 194, 222) 	hsl(227, 35%, 80%)
                Subtext0 	#a6adc8 	rgb(166, 173, 200) 	hsl(228, 24%, 72%)
                Overlay2 	#9399b2 	rgb(147, 153, 178) 	hsl(228, 17%, 64%)
                Overlay1 	#7f849c 	rgb(127, 132, 156) 	hsl(230, 13%, 55%)
                Overlay0 	#6c7086 	rgb(108, 112, 134) 	hsl(231, 11%, 47%)
                Surface2 	#585b70 	rgb(88, 91, 112) 	hsl(233, 12%, 39%)
                Surface1 	#45475a 	rgb(69, 71, 90) 	hsl(234, 13%, 31%)
                Surface0 	#313244 	rgb(49, 50, 68) 	hsl(237, 16%, 23%)
                Base 	#1e1e2e 	rgb(30, 30, 46) 	hsl(240, 21%, 15%)
                Mantle 	#181825 	rgb(24, 24, 37) 	hsl(240, 21%, 12%)
                Crust 	#11111b 	rgb(17, 17, 27) 	hsl(240, 23%, 9%)
            "},
        );
    }
}
