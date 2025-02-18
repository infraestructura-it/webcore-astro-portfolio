// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site:'https://github.io/infraestructura-it/webcore-astro-portfolio',
    vite: {
        ssr: {
            noExternal: ['webcoreui']
        }
    }
})
