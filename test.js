import test from 'ava'
import {variants, labels} from './index.js'

test('Labels', (t) => {
	t.deepEqual(labels.base, {
		latte: {
			hex: '#eff1f5',
			rgb: 'rgb(239, 241, 245)',
			hsl: 'hsl(220, 23%, 95%)',
		},
		frappe: {
			hex: '#303446',
			rgb: 'rgb(48, 52, 70)',
			hsl: 'hsl(229, 19%, 23%)',
		},
		macchiato: {
			hex: '#24273a',
			rgb: 'rgb(36, 39, 58)',
			hsl: 'hsl(232, 23%, 18%)',
		},
		mocha: {
			hex: '#1e1e2e',
			rgb: 'rgb(30, 30, 46)',
			hsl: 'hsl(240, 21%, 15%)',
		},
	})
})

test('Variants', (t) => {
	t.deepEqual(variants.macchiato.rosewater, {
		hex: '#f4dbd6',
		rgb: 'rgb(244, 219, 214)',
		hsl: 'hsl(10, 58%, 90%)',
	})
})
