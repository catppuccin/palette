package com.catppuccin.flavor;

import com.catppuccin.flavor.domain.Variant;

public non-sealed class Latte extends Flavor {
    public Latte() {
        super(
            new Color(220, 138, 120),   // Colour rosewater,
            new Color(221, 120, 120),   // Colour flamingo,
            new Color(234, 118, 203),   // Colour pink,
            new Color(136, 57, 239),    // Colour mauve,
            new Color(210, 15, 57),     // Colour red,
            new Color(230, 69, 83),     // maroon,
            new Color(254, 100, 11),    // peach,
            new Color(223, 142, 29),    // yellow,
            new Color(64, 160, 43),     // green,
            new Color(23, 146, 153),    // teal,
            new Color(4, 165, 229),     // sky,
            new Color(32, 159, 181),    // sapphire,
            new Color(30, 102, 245),    // blue,
            new Color(114, 135, 253),   // lavender,
            new Color(76, 79, 105),     // text,
            new Color(92, 95, 119),     // subtext1,
            new Color(108, 111, 133),   // subtext0,
            new Color(124, 127, 147),   // overlay2,
            new Color(140, 143, 161),   // overlay1,
            new Color(156, 160, 176),   // overlay0,
            new Color(172, 176, 190),   // surface2,
            new Color(188, 192, 204),   // surface1,
            new Color(204, 208, 218),   // surface0,
            new Color(239, 241, 245),   // base,
            new Color(230, 233, 239),   // mantle,
            new Color(220, 224, 232),   // crust
            Variant.LATTE
        );
    }
}
