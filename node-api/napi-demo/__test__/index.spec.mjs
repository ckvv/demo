import test from 'node:test'
import assert from 'node:assert'

import { sum } from '../index.js'

test('sum from native', (t) => {
  assert.equal(sum(1, 2), 2)
})
