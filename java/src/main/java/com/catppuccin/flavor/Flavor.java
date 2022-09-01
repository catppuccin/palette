package com.catppuccin.flavor;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import com.catppuccin.flavor.domain.Variant;

public abstract sealed class Flavor permits Latte, Frappe, Macchiato, Mocha {
    private final Color rosewater;
    private final Color flamingo;
    private final Color pink;
    private final Color mauve;
    private final Color red;
    private final Color maroon;
    private final Color peach;
    private final Color yellow;
    private final Color green;
    private final Color teal;
    private final Color sky;
    private final Color sapphire;
    private final Color blue;
    private final Color lavender;
    private final Color text;
    private final Color subtext1;
    private final Color subtext0;
    private final Color overlay2;
    private final Color overlay1;
    private final Color overlay0;
    private final Color surface2;
    private final Color surface1;
    private final Color surface0;
    private final Color base;
    private final Color mantle;
    private final Color crust;
    private final Variant variant;

    Flavor(Color rosewater, Color flamingo, Color pink, Color mauve, Color red, Color maroon, Color peach, Color yellow, Color green, Color teal, Color sky, Color sapphire, Color blue, Color lavender, Color text, Color subtext1, Color subtext0, Color overlay2, Color overlay1, Color overlay0, Color surface2, Color surface1, Color surface0, Color base, Color mantle, Color crust, Variant variant) {
        this.rosewater = rosewater;
        this.flamingo = flamingo;
        this.pink = pink;
        this.mauve = mauve;
        this.red = red;
        this.maroon = maroon;
        this.peach = peach;
        this.yellow = yellow;
        this.green = green;
        this.teal = teal;
        this.sky = sky;
        this.sapphire = sapphire;
        this.blue = blue;
        this.lavender = lavender;
        this.text = text;
        this.subtext1 = subtext1;
        this.subtext0 = subtext0;
        this.overlay2 = overlay2;
        this.overlay1 = overlay1;
        this.overlay0 = overlay0;
        this.surface2 = surface2;
        this.surface1 = surface1;
        this.surface0 = surface0;
        this.base = base;
        this.mantle = mantle;
        this.crust = crust;
        this.variant = variant;
    }

    public List<Color> asList() {
        return Arrays.asList(
            rosewater,
            flamingo,
            pink,
            mauve,
            red,
            maroon,
            peach,
            yellow,
            green,
            teal,
            sky,
            sapphire,
            blue,
            lavender,
            text,
            subtext1,
            subtext0,
            overlay2,
            overlay1,
            overlay0,
            surface2,
            surface1,
            surface0,
            base,
            mantle,
            crust
        );
    }

    public Color getRosewater() {
        return rosewater;
    }

    public Color getFlamingo() {
        return flamingo;
    }

    public Color getPink() {
        return pink;
    }

    public Color getMauve() {
        return mauve;
    }

    public Color getRed() {
        return red;
    }

    public Color getMaroon() {
        return maroon;
    }

    public Color getPeach() {
        return peach;
    }

    public Color getYellow() {
        return yellow;
    }

    public Color getGreen() {
        return green;
    }

    public Color getTeal() {
        return teal;
    }

    public Color getSky() {
        return sky;
    }

    public Color getSapphire() {
        return sapphire;
    }

    public Color getBlue() {
        return blue;
    }

    public Color getLavender() {
        return lavender;
    }

    public Color getText() {
        return text;
    }

    public Color getSubtext1() {
        return subtext1;
    }

    public Color getSubtext0() {
        return subtext0;
    }

    public Color getOverlay2() {
        return overlay2;
    }

    public Color getOverlay1() {
        return overlay1;
    }

    public Color getOverlay0() {
        return overlay0;
    }

    public Color getSurface2() {
        return surface2;
    }

    public Color getSurface1() {
        return surface1;
    }

    public Color getSurface0() {
        return surface0;
    }

    public Color getBase() {
        return base;
    }

    public Color getMantle() {
        return mantle;
    }

    public Color getCrust() {
        return crust;
    }

    public Variant getVariant() {
        return variant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Flavor flavor = (Flavor) o;
        return Objects.equals(rosewater, flavor.rosewater) && Objects.equals(flamingo, flavor.flamingo) && Objects.equals(pink, flavor.pink) && Objects.equals(mauve, flavor.mauve) && Objects.equals(red, flavor.red) && Objects.equals(maroon, flavor.maroon) && Objects.equals(peach, flavor.peach) && Objects.equals(yellow, flavor.yellow) && Objects.equals(green, flavor.green) && Objects.equals(teal, flavor.teal) && Objects.equals(sky, flavor.sky) && Objects.equals(sapphire, flavor.sapphire) && Objects.equals(blue, flavor.blue) && Objects.equals(lavender, flavor.lavender) && Objects.equals(text, flavor.text) && Objects.equals(subtext1, flavor.subtext1) && Objects.equals(subtext0, flavor.subtext0) && Objects.equals(overlay2, flavor.overlay2) && Objects.equals(overlay1, flavor.overlay1) && Objects.equals(overlay0, flavor.overlay0) && Objects.equals(surface2, flavor.surface2) && Objects.equals(surface1, flavor.surface1) && Objects.equals(surface0, flavor.surface0) && Objects.equals(base, flavor.base) && Objects.equals(mantle, flavor.mantle) && Objects.equals(crust, flavor.crust) && variant == flavor.variant;
    }

    @Override
    public int hashCode() {
        return Objects.hash(rosewater, flamingo, pink, mauve, red, maroon, peach, yellow, green, teal, sky, sapphire, blue, lavender, text, subtext1, subtext0, overlay2, overlay1, overlay0, surface2, surface1, surface0, base, mantle, crust, variant);
    }

    @Override
    public String toString() {
        return "Flavor{" +
            "rosewater=" + rosewater +
            ", flamingo=" + flamingo +
            ", pink=" + pink +
            ", mauve=" + mauve +
            ", red=" + red +
            ", maroon=" + maroon +
            ", peach=" + peach +
            ", yellow=" + yellow +
            ", green=" + green +
            ", teal=" + teal +
            ", sky=" + sky +
            ", sapphire=" + sapphire +
            ", blue=" + blue +
            ", lavender=" + lavender +
            ", text=" + text +
            ", subtext1=" + subtext1 +
            ", subtext0=" + subtext0 +
            ", overlay2=" + overlay2 +
            ", overlay1=" + overlay1 +
            ", overlay0=" + overlay0 +
            ", surface2=" + surface2 +
            ", surface1=" + surface1 +
            ", surface0=" + surface0 +
            ", base=" + base +
            ", mantle=" + mantle +
            ", crust=" + crust +
            ", variant=" + variant +
            '}';
    }
}
