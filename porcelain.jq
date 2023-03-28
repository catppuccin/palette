map_values(map_values({
  hex: .hex | ltrimstr("#"),
  rgb: .raw | split(", ") | map(tonumber),
  hsl: .hsl
    | capture("hsl\\((?<h>\\d+),\\s*(?<s>\\d+)%,\\s*(?<l>\\d+)%\\)")
    | map(tonumber)
    | [ .[0], .[1] / 100, .[2] / 100 ]
}))
