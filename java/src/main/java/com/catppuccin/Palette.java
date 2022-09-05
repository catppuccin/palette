package com.catppuccin;

import com.catppuccin.flavor.Flavor;
import com.catppuccin.flavor.Frappe;
import com.catppuccin.flavor.Macchiato;
import com.catppuccin.flavor.Mocha;
import java.util.List;
import java.util.Objects;
import com.catppuccin.flavor.Latte;

public class Palette {
    private final Flavor latte = new Latte();
    private final Flavor frappe = new Frappe();
    private final Flavor macchiato = new Macchiato();
    private final Flavor mocha = new Mocha();

    /**
     * Retrieve all the flavours of the palette in the
     * following order: Latte, Frappé, Macchiato and Mocha
     *
     * @return {@link List} of {@link Flavor}
     */
    public List<Flavor> asList() {
        return List.of(latte, frappe, macchiato, mocha);
    }

    public Flavor getLatte() {
        return latte;
    }

    public Flavor getFrappe() {
        return frappe;
    }

    public Flavor getMacchiato() {
        return macchiato;
    }

    public Flavor getMocha() {
        return mocha;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Palette palette = (Palette) o;
        return Objects.equals(latte, palette.latte) && Objects.equals(frappe, palette.frappe) && Objects.equals(macchiato, palette.macchiato) && Objects.equals(mocha, palette.mocha);
    }

    @Override
    public int hashCode() {
        return Objects.hash(latte, frappe, macchiato, mocha);
    }

    @Override
    public String toString() {
        return "Palette{" +
            "latte=" + latte +
            ", frappe=" + frappe +
            ", macchiato=" + macchiato +
            ", mocha=" + mocha +
            '}';
    }
}
