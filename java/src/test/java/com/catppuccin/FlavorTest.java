package com.catppuccin;

import com.catppuccin.flavor.Flavor;
import com.catppuccin.flavor.Mocha;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class FlavorTest {

    @Test
    void shouldReturnHSB() {
        Flavor mocha = new Mocha();
        float[] expectedHSB = new float[3];
        expectedHSB[0] = 240.0F / 360.0F;
        expectedHSB[1] = 0.3478261F;
        expectedHSB[2] = 0.18039216F;

        assertThat(mocha.getBase().getHSB(), is(expectedHSB));
    }

    @Test
    void shouldReturnHSBWhenGivenArray() {
        Flavor mocha = new Mocha();
        float[] actualHSB = new float[3];

        mocha.getBase().getHSB(actualHSB);

        assertThat(actualHSB[0], is(240.0F / 360.F));
        assertThat(actualHSB[1], is(0.3478261F));
        assertThat(actualHSB[2], is(0.18039216F));
    }
}
