const esbuild = require('esbuild');

const buildCJS = esbuild.build({
    entryPoints: ['./index.js'],
    outfile: './dist/index.cjs',
    format: 'cjs'
})

const buildESM = esbuild.build({
    entryPoints: ['./index.js'],
    outfile: './dist/index.mjs',
    format: 'esm'
})

Promise.all([buildCJS, buildESM]).catch(() => process.exit(1))
