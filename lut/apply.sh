#!/bin/bash

set -e
# ensure src is where the script is located, even if symlinked
src="$( cd -- "$( dirname -- "$(readlink -f "${BASH_SOURCE[0]}" || ${BASH_SOURCE[0]})" )" &> /dev/null && pwd )/src"

print_usage() {
  name=`basename $0`
  cat <<EOF
Usage: $name -i <image1> ... [args]
    -i image  :  Image to apply LUT to, can be repeated
    -f flavor :  Flavor to apply, can be repeated. Defaults to all
    -n noise  :  LUT Noise level (0-4). Defaults to 2
EOF
}

noise="2"
images=""
flavors=""

while getopts ':f:i:n:' flag; do
  case "$flag" in
    n)
      if [[ $OPTARG -gt 4 ]]; then
        echo "Invalid noise level (0-4)"
        exit 1
      else
        noise=$OPTARG
      fi
      ;;
    f) flavors="$flavors $OPTARG" ;;
    i) images="$images `realpath $OPTARG`" ;;
    *) print_usage
       exit 1 ;;
  esac
done

if [[ "$images" == "" ]]; then
  print_usage
fi

if [[ "$flavors" == "" ]]; then
  flavors="Oled Mocha Macchiato Frappe Latte"
fi

for file in $images; do
  echo "Performing magick on `basename $file` (noise: $noise)"
  for flavor in $flavors; do
    printf "$flavor ..."
    out="${file%%.*}-${flavor}.png"
    magick $file "$src/noise_$noise/Catppuccin ${flavor}.png" -hald-clut "$out"
    printf "\r$flavor ✓ ($out)\n"
  done
done

