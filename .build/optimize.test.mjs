import { test } from 'node:test'
import assert from 'node:assert/strict'
import { optimizeSvgContent } from './optimize.mjs'

const svg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  ${body}
</svg>`

test('rect with x/y/rx/width/height attribute order keeps its width', () => {
  // regression for the bug that squared the ear cups of `headphones` and
  // `headset` (issue #482): width was replaced by the height capture
  const result = optimizeSvgContent(svg('<rect x="4" y="13" rx="2" width="5" height="7" />'), 'outline')

  assert.match(result, /<path d="M4 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3" \/>/)
})

test('rect with width/height/x/y attribute order keeps its width', () => {
  const result = optimizeSvgContent(svg('<rect width="5" height="7" x="4" y="13" rx="2" />'), 'outline')

  assert.match(result, /<path d="M4 15a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3" \/>/)
})

test('rect without rx becomes an unclosed rectangle path', () => {
  const result = optimizeSvgContent(svg('<rect x="4" y="13" width="5" height="7" />'), 'outline')

  assert.match(result, /<path d="M4 13h5v7h-5v-7" \/>/)
})
