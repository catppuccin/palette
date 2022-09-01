package com.catppuccin.flavor;

import com.catppuccin.flavor.domain.Variant;

public non-sealed class Mocha extends Flavor {
    public Mocha() {
        super(
            new Color(245, 224, 220),   // Colour rosewater,
            new Color(242, 205, 205),   // Colour flamingo,
            new Color(245, 194, 231),   // Colour pink,
            new Color(203, 166, 247),   // Colour mauve,
            new Color(243, 139, 168),   // Colour red,
            new Color(235, 160, 172),   // maroon,
            new Color(250, 179, 135),   // peach,
            new Color(249, 226, 175),   // yellow,
            new Color(166, 227, 161),   // green,
            new Color(148, 226, 213),   // teal,
            new Color(137, 220, 235),   // sky,
            new Color(116, 199, 236),   // sapphire,
            new Color(137, 180, 250),   // blue,
            new Color(180, 190, 254),   // lavender,
            new Color(205, 214, 244),   // text,
            new Color(186, 194, 222),   // subtext1,
            new Color(166, 173, 200),   // subtext0,
            new Color(147, 153, 178),   // overlay2,
            new Color(127, 132, 156),   // overlay1,
            new Color(108, 112, 134),   // overlay0,
            new Color(88, 91, 112),     // surface2,
            new Color(69, 71, 90),      // surface1,
            new Color(49, 50, 68),      // surface0,
            new Color(30, 30, 46),      // base,
            new Color(24, 24, 37),      // mantle,
            new Color(17, 17, 27),      // crust
            Variant.MOCHA
        );
    }
}
