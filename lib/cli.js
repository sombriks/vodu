import { Command } from 'commander'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

const program = new Command()

program
  .name('vodu')
  .version(pkg.version)
  .description('simple runner for fast frontend prototyping')
  .argument('<script.{js|vue|jsx|svelte}>', 'the script you want to test')

const usage = () => 'print usage'

export default { usage, program }
