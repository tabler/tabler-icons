import assert from 'node:assert/strict'
import fs from 'node:fs'

const horizontal = fs.readFileSync('icons/outline/flip-horizontal.svg', 'utf8')
const vertical = fs.readFileSync('icons/outline/flip-vertical.svg', 'utf8')

assert.match(
  horizontal,
  /<path d="M12 3l0 18" \/>/,
  'flip-horizontal should use a vertical mirror axis for left-right flipping',
)
assert.match(
  vertical,
  /<path d="M3 12l18 0" \/>/,
  'flip-vertical should use a horizontal mirror axis for up-down flipping',
)
