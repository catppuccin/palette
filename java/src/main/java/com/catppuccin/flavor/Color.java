package com.catppuccin.flavor;

public class Color extends java.awt.Color {

    /**
     * @see java.awt.Color#Color(int, int, int)
     */
    Color(int r, int g, int b) {
        super(r, g, b);
    }

    /**
     * Converts the components of the chosen colour, as specified by the default RGB
     * model, to an equivalent hexadecimal representation.
     *
     * @return A {@link String} containing the hex value of the chosen colour, e.g "#1e1e2e"
     */
    public String getHex() {
        return String.format("#%02x%02x%02x", this.getRed(), this.getGreen(), this.getBlue());
    }

    /**
     * Converts the components of the chosen colour, as specified by the default RGB
     * model, to an equivalent set of values for hue, saturation, and
     * brightness that are the three components of the HSB model.
     *
     * @return an array of three elements containing the hue, saturation,
     * and brightness (in that order), of the colour with
     * the indicated red, green, and blue components.
     * @see java.awt.Color#getRGB()
     * @see java.awt.Color#Color(int)
     * @see java.awt.image.ColorModel#getRGBdefault()
     */
    public float[] getHSB() {
        return java.awt.Color.RGBtoHSB(this.getRed(), this.getGreen(), this.getBlue(), null);
    }

    /**
     * Converts the components of the chosen colour, as specified by the default RGB
     * model, to an equivalent set of values for hue, saturation, and
     * brightness that are the three components of the HSB model.
     *
     * @param values the array used to return the
     *               three HSB values
     * @see java.awt.Color#getRGB()
     * @see java.awt.Color#Color(int)
     * @see java.awt.image.ColorModel#getRGBdefault()
     */
    public void getHSB(float[] values) {
        java.awt.Color.RGBtoHSB(this.getRed(), this.getGreen(), this.getBlue(), values);
    }
}
