import { createServer, defineConfig, build } from 'vite'
import { writeFileSync } from 'fs'
import { join } from 'path'

export const quickServer = async (entryPoint, options) => {

  writeFileSync('index.html', `<script src="${entryPoint}"></script>`)

  const config = defineConfig({
    configFile: false,
    publicDir: false,
    root: process.cwd(),
    server: {
      port: 9933
      // open: true
    },
    build: {
      rollupOptions: {
        input: entryPoint
      }
    }
  })

  return await createServer(config)
}
