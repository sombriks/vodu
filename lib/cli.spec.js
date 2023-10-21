import test from 'ava'

import cli from './cli.js'

test('should have a CLI handler', async t => {
  t.truthy(cli.program)
})
