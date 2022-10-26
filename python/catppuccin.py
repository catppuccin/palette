"""🐍 Soothing pastel theme for Python."""
from dataclasses import dataclass


@dataclass(frozen=True)
class Colour:
    """A colour with three channels; red, green, and blue."""

    red: int
    green: int
    blue: int

    @property
    def rgb(self) -> tuple[int, int, int]:
        """Get the colour as a 3-tuple of red, green, and blue."""
        return (self.red, self.green, self.blue)

    @property
    def hex(self) -> str:
        """Get the colour as a lowercase hex string."""
        return f"{self.red:02x}{self.green:02x}{self.blue:02x}"


@dataclass(frozen=True)
class Flavour:  # pylint: disable=too-many-instance-attributes
    """All the colours in a flavour of Catppuccin."""

    rosewater: Colour
    flamingo: Colour
    pink: Colour
    mauve: Colour
    red: Colour
    maroon: Colour
    peach: Colour
    yellow: Colour
    green: Colour
    teal: Colour
    sky: Colour
    sapphire: Colour
    blue: Colour
    lavender: Colour
    text: Colour
    subtext1: Colour
    subtext0: Colour
    overlay2: Colour
    overlay1: Colour
    overlay0: Colour
    surface2: Colour
    surface1: Colour
    surface0: Colour
    base: Colour
    mantle: Colour
    crust: Colour

    @staticmethod
    def latte() -> "Flavour":
        """Latte flavoured Catppuccin."""
        return Flavour(
            rosewater=Colour(220, 138, 120),
            flamingo=Colour(221, 120, 120),
            pink=Colour(234, 118, 203),
            mauve=Colour(136, 57, 239),
            red=Colour(210, 15, 57),
            maroon=Colour(230, 69, 83),
            peach=Colour(254, 100, 11),
            yellow=Colour(223, 142, 29),
            green=Colour(64, 160, 43),
            teal=Colour(23, 146, 153),
            sky=Colour(4, 165, 229),
            sapphire=Colour(32, 159, 181),
            blue=Colour(30, 102, 245),
            lavender=Colour(114, 135, 253),
            text=Colour(76, 79, 105),
            subtext1=Colour(92, 95, 119),
            subtext0=Colour(108, 111, 133),
            overlay2=Colour(124, 127, 147),
            overlay1=Colour(140, 143, 161),
            overlay0=Colour(156, 160, 176),
            surface2=Colour(172, 176, 190),
            surface1=Colour(188, 192, 204),
            surface0=Colour(204, 208, 218),
            base=Colour(239, 241, 245),
            mantle=Colour(230, 233, 239),
            crust=Colour(220, 224, 232),
        )

    @staticmethod
    def frappe() -> "Flavour":
        """Frappé flavoured Catppuccin."""
        return Flavour(
            rosewater=Colour(242, 213, 207),
            flamingo=Colour(238, 190, 190),
            pink=Colour(244, 184, 228),
            mauve=Colour(202, 158, 230),
            red=Colour(231, 130, 132),
            maroon=Colour(234, 153, 156),
            peach=Colour(239, 159, 118),
            yellow=Colour(229, 200, 144),
            green=Colour(166, 209, 137),
            teal=Colour(129, 200, 190),
            sky=Colour(153, 209, 219),
            sapphire=Colour(133, 193, 220),
            blue=Colour(140, 170, 238),
            lavender=Colour(186, 187, 241),
            text=Colour(198, 208, 245),
            subtext1=Colour(181, 191, 226),
            subtext0=Colour(165, 173, 206),
            overlay2=Colour(148, 156, 187),
            overlay1=Colour(131, 139, 167),
            overlay0=Colour(115, 121, 148),
            surface2=Colour(98, 104, 128),
            surface1=Colour(81, 87, 109),
            surface0=Colour(65, 69, 89),
            base=Colour(48, 52, 70),
            mantle=Colour(41, 44, 60),
            crust=Colour(35, 38, 52),
        )

    @staticmethod
    def macchiato() -> "Flavour":
        """Macchiato flavoured Catppuccin."""
        return Flavour(
            rosewater=Colour(244, 219, 214),
            flamingo=Colour(240, 198, 198),
            pink=Colour(245, 189, 230),
            mauve=Colour(198, 160, 246),
            red=Colour(237, 135, 150),
            maroon=Colour(238, 153, 160),
            peach=Colour(245, 169, 127),
            yellow=Colour(238, 212, 159),
            green=Colour(166, 218, 149),
            teal=Colour(139, 213, 202),
            sky=Colour(145, 215, 227),
            sapphire=Colour(125, 196, 228),
            blue=Colour(138, 173, 244),
            lavender=Colour(183, 189, 248),
            text=Colour(202, 211, 245),
            subtext1=Colour(184, 192, 224),
            subtext0=Colour(165, 173, 203),
            overlay2=Colour(147, 154, 183),
            overlay1=Colour(128, 135, 162),
            overlay0=Colour(110, 115, 141),
            surface2=Colour(91, 96, 120),
            surface1=Colour(73, 77, 100),
            surface0=Colour(54, 58, 79),
            base=Colour(36, 39, 58),
            mantle=Colour(30, 32, 48),
            crust=Colour(24, 25, 38),
        )

    @staticmethod
    def mocha() -> "Flavour":
        """Mocha flavoured Catppuccin."""
        return Flavour(
            rosewater=Colour(245, 224, 220),
            flamingo=Colour(242, 205, 205),
            pink=Colour(245, 194, 231),
            mauve=Colour(203, 166, 247),
            red=Colour(243, 139, 168),
            maroon=Colour(235, 160, 172),
            peach=Colour(250, 179, 135),
            yellow=Colour(249, 226, 175),
            green=Colour(166, 227, 161),
            teal=Colour(148, 226, 213),
            sky=Colour(137, 220, 235),
            sapphire=Colour(116, 199, 236),
            blue=Colour(137, 180, 250),
            lavender=Colour(180, 190, 254),
            text=Colour(205, 214, 244),
            subtext1=Colour(186, 194, 222),
            subtext0=Colour(166, 173, 200),
            overlay2=Colour(147, 153, 178),
            overlay1=Colour(127, 132, 156),
            overlay0=Colour(108, 112, 134),
            surface2=Colour(88, 91, 112),
            surface1=Colour(69, 71, 90),
            surface0=Colour(49, 50, 68),
            base=Colour(30, 30, 46),
            mantle=Colour(24, 24, 37),
            crust=Colour(17, 17, 27),
        )
