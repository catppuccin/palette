package com.catppuccin.flavor;

import com.catppuccin.flavor.domain.Variant;

public non-sealed class Macchiato extends Flavor {
    public Macchiato() {
        super(
            new Color(244, 219, 214),   // Colour rosewater,
            new Color(240, 198, 198),   // Colour flamingo,
            new Color(245, 189, 230),   // Colour pink,
            new Color(198, 160, 246),   // Colour mauve,
            new Color(237, 135, 150),   // Colour red,
            new Color(238, 153, 160),   // maroon,
            new Color(245, 169, 127),   // peach,
            new Color(238, 212, 159),   // yellow,
            new Color(166, 218, 149),   // green,
            new Color(139, 213, 202),   // teal,
            new Color(145, 215, 227),   // sky,
            new Color(125, 196, 228),   // sapphire,
            new Color(138, 173, 244),   // blue,
            new Color(183, 189, 248),   // lavender,
            new Color(202, 211, 245),   // text,
            new Color(184, 192, 224),   // subtext1,
            new Color(165, 173, 203),   // subtext0,
            new Color(147, 154, 183),   // overlay2,
            new Color(128, 135, 162),   // overlay1,
            new Color(110, 115, 141),   // overlay0,
            new Color(91, 96, 120),     // surface2,
            new Color(73, 77, 100),     // surface1,
            new Color(54, 58, 79),      // surface0,
            new Color(36, 39, 58),      // base,
            new Color(30, 32, 48),      // mantle,
            new Color(24, 25, 38),      // crust
            Variant.MACCHIATO
        );
    }
}
