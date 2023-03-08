rec {
  flavours = [ "latte" "frappe" "macchiato" "mocha" ];
  accents = [
    "rosewater"
    "flamingo"
    "pink"
    "mauve"
    "red"
    "maroon"
    "peach"
    "yellow"
    "green"
    "teal"
    "sky"
    "sapphire"
    "blue"
    "lavender"
  ];
  colours = accents ++ [
    "text"
    "subtext1"
    "subtext0"
    "overlay2"
    "overlay1"
    "overlay0"
    "surface2"
    "surface1"
    "surface0"
    "base"
    "mantle"
    "crust"
  ];
  latte = import ./latte.nix;
  frappe = import ./frappe.nix;
  macchiato = import ./macchiato.nix;
  mocha = import ./mocha.nix;
}
