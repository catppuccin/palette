from catppuccin import Colour


def test_colour_to_rgb():
    assert Colour(12, 123, 234).rgb == (12, 123, 234)


def test_colour_to_hex():
    assert Colour(0x12, 0xEB, 0x77).hex == "12eb77"
