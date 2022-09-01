package com.catppuccin.flavor;

import com.catppuccin.flavor.domain.Variant;

public non-sealed class Frappe extends Flavor {
    public Frappe() {
        super(
            new Color(242, 213, 207),   // Colour rosewater,
            new Color(238, 190, 190),   // Colour flamingo,
            new Color(244, 184, 228),   // Colour pink,
            new Color(202, 158, 230),   // Colour mauve,
            new Color(231, 130, 132),   // Colour red,
            new Color(234, 153, 156),   // maroon,
            new Color(239, 159, 118),   // peach,
            new Color(229, 200, 144),   // yellow,
            new Color(166, 209, 137),   // green,
            new Color(129, 200, 190),   // teal,
            new Color(153, 209, 219),   // sky,
            new Color(133, 193, 220),   // sapphire,
            new Color(140, 170, 238),   // blue,
            new Color(186, 187, 241),   // lavender,
            new Color(198, 208, 245),   // text,
            new Color(181, 191, 226),   // subtext1,
            new Color(165, 173, 206),   // subtext0,
            new Color(148, 156, 187),   // overlay2,
            new Color(131, 139, 167),   // overlay1,
            new Color(115, 121, 148),   // overlay0,
            new Color(98, 104, 128),    // surface2,
            new Color(81, 87, 109),     // surface1,
            new Color(65, 69, 89),      // surface0,
            new Color(48, 52, 70),      // base,
            new Color(41, 44, 60),      // mantle,
            new Color(35, 38, 52),      // crust
            Variant.FRAPPE
        );
    }
}
