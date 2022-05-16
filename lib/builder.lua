local color_palette = {
	rosewater = "#F5E0DC",
	flamingo = "#F2CDCD",
	pink = "#F5C2E7",
	mauve = "#CBA6F7",
	red = "#F38BA8",
	maroon = "#EBA0AC",
	peach = "#FAB387",
	yellow = "#F9E2AF",
	green = "#A6E3A1",
	teal = "#94E2D5",
	sky = "#89DCEB",
	blue = "#90C1FB",
	sapphire = "#74C7EC",
	lavender = "#B4BEFE",
	text = "#C6D0F5",
	overlay2 = "#AEB7D9",
	overlay1 = "#969DBC",
	overlay0 = "#7E84A0",
	surface2 = "#666A83",
	surface1 = "#4E5167",
	surface0 = "#36374A",
	base2 = "#1E1E2E",
	base1 = "#12121C",
	base0 = "#07070A",
}

-- https://stackoverflow.com/questions/24714253/how-to-loop-through-the-table-and-keep-the-order
function sorted_iter(t)
  local i = {}
  for k in next, t do
    table.insert(i, k)
  end
  table.sort(i)
  return function()
    local k = table.remove(i)
    if k ~= nil then
      return k, t[k]
    end
  end
end

local function hex2rgb(hex)
    hex = hex:gsub("#","")
    return tonumber("0x"..hex:sub(1,2)), tonumber("0x"..hex:sub(3,4)), tonumber("0x"..hex:sub(5,6))
end

local function rgb2hsl(r, g, b)
    local max, min = math.max(r, g, b), math.min(r, g, b)
    local b = max + min
    local h = b / 2
    if max == min then return 0, 0, h end
    local s, l = h, h
    local d = max - min
    s = l > .5 and d / (2 - b) or d / b
    if max == r then h = (g - b) / d + (g < b and 6 or 0)
    elseif max == g then h = (b - r) / d + 2
    elseif max == b then h = (r - g) / d + 4
    end
    return h * .16667, s, l
end

for color in sorted_iter(color_palette) do
	print(color..": {")
	print("\thex: '" .. string.lower(color_palette[color]) .."',")
	local r, g, b = hex2rgb(color_palette[color])
	print("\trgb: 'rgb(" .. r .. ", " .. g .. ", ".. b .. ")',")
	local h, s, l = rgb2hsl(r, g, b)
	print("\thsl: '',")
	print("},")
end
