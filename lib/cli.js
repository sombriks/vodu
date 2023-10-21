import { Command } from 'commander'
import { createRequire } from 'module'

import { quickServer } from './quick-server.js'

const pkg = createRequire(import.meta.url)('../package.json')

const program = new Command()

program
  .name('vodu')
  .version(pkg.version)
  .description('simple runner for fast frontend prototyping')
  .argument('<script.{js|vue|jsx|svelte}>', 'the script you want to test')
  .action(async (entryPoint, options, command) => {
    const server = await quickServer(entryPoint, options)
    await server.listen()
    server.printUrls()
  })

export default { program }
