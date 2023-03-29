map_values(map_values({
  hex: .hex | ltrimstr("#"),
  rgb: .raw | split(", ") | map(tonumber),
  hsl: .hsl
    | ltrimstr("hsl(")
    | rtrimstr(")")
    | split(", ")
    | map(rtrimstr("%") | tonumber)
    | [ .[0], .[1] / 100, .[2] / 100 ]
}))
