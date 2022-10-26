from typing import cast

from catppuccin import Flavour

from .conftest import ColourJSON, FlavourJSON, PaletteJSON


def validate_flavour(flavour: Flavour, flavour_json: FlavourJSON) -> None:
    for colour_name, colour_json in flavour_json.items():
        colour = getattr(flavour, colour_name)
        assert f"#{colour.hex}" == cast(ColourJSON, colour_json)["hex"], colour_name


def test_latte(palette_json: PaletteJSON) -> None:
    validate_flavour(Flavour.latte(), palette_json["latte"])


def test_frappe(palette_json: PaletteJSON) -> None:
    validate_flavour(Flavour.frappe(), palette_json["frappe"])


def test_macchiato(palette_json: PaletteJSON) -> None:
    validate_flavour(Flavour.macchiato(), palette_json["macchiato"])


def test_mocha(palette_json: PaletteJSON) -> None:
    validate_flavour(Flavour.mocha(), palette_json["mocha"])
