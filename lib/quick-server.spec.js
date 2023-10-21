import test from 'ava'

import { quickServer } from './quick-server.js'

test('should have a dev server handler', async t => {
  t.truthy(quickServer)
  const server = await quickServer('foo.js', {})
  t.truthy(server)
})
