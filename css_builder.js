import {variants, labels} from './index.js'

for (let label in labels) {
	for (let palette in variants) {
		console.log("--ctp-" + palette + "-" + label + ": " + variants[palette][label]["hex"] + ";")
		console.log("--ctp-" + palette + "-" + label + "-rgb" + ": " + variants[palette][label]["rgb"] + ";")
		console.log("--ctp-" + palette + "-" + label + "-hsl" + ": " + variants[palette][label]["hsl"] + ";")
	}
}
