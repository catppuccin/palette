/**
 * Catppuccin variants
 */
export namespace variants {
	/**
	 * Light variant
	 */
	const latte: Labels<Color, AlphaColor>

	/**
	 * Low-saturation, low-contrast dark variant
	 */
	const frappe: Labels<Color, AlphaColor>

	/**
	 * Mid-saturation, mid-contrast dark variant
	 */
	const macchiato: Labels<Color, AlphaColor>

	/**
	 * High-saturation, High-contrast dark variant
	 */
	const mocha: Labels<Color, AlphaColor>
}

/**
 * Palette labels
 */
export namespace labels {
	const rosewater: Variants<Color>
	const flamingo: Variants<Color>
	const pink: Variants<Color>
	const mauve: Variants<Color>
	const red: Variants<Color>
	const maroon: Variants<Color>
	const peach: Variants<Color>
	const yellow: Variants<Color>
	const green: Variants<Color>
	const teal: Variants<Color>
	const sky: Variants<Color>
	const sapphire: Variants<Color>
	const blue: Variants<Color>
	const lavender: Variants<Color>

	const surface2: Variants<AlphaColor>
	const subtext0: Variants<AlphaColor>
	const subtext1: Variants<AlphaColor>
	const overlay0: Variants<AlphaColor>
	const overlay2: Variants<AlphaColor>
	const surface0: Variants<AlphaColor>
	const text: Variants<AlphaColor>
	const overlay1: Variants<AlphaColor>
	const surface1: Variants<AlphaColor>

	const base: Variants<AlphaColor>
	const mantle: Variants<AlphaColor>
	const crust: Variants<AlphaColor>
}
export default palette

export interface Color {
	/**
	 * Formatted hex value
	 * @example #babbf1
	 */
	hex: string
	/**
	 * Formatted rgb value
	 * @example rgb(186, 187, 241)
	 */
	rgb: string
	/**
	 * Formatted hsl value
	 * @example hsl(239, 66%, 84%)
	 */
	hsl: string
}

export interface AlphaColor extends Color {
	alpha: Color
}

export interface Labels<T, U> {

	rosewater: T
	flamingo: T
	pink: T
	mauve: T
	red: T
	maroon: T
	peach: T
	yellow: T
	green: T
	teal: T
	sky: T
	sapphire: T
	blue: T
	lavender: T

	text: U
	subtext1: U
	subtext0: U
	overlay2: U
	overlay1: U
	overlay0: U
	surface2: U
	surface1: U
	surface0: U

	base: U
	mantle: U
	crust: U
}

export interface Variants<T> {
	/**
	 * Light variant
	 */
	latte: T
	/**
	 * Low-saturation, low-contrast dark variant
	 */
	frappe: T
	/**
	 * Mid-saturation, mid-contrast dark variant
	 */
	macchiato: T
	/**
	 * High-saturation, High-contrast dark variant
	 */
	mocha: T
}

declare namespace palette {
	/**
	 * Palette variants
	 */
	const variants: Variants<Labels<Color, AlphaColor>>
	/**
	 * Palette labels
	 */
	const labels: Labels<Variants<Color>, Variants<Color>>
}
