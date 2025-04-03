import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({

  compressHTML: true,
  site: 'https://mikel-diez.github.io',
  base: '/ai.somorrostro.com',
  integrations: [
    mdx(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],
  output: 'server',
  adapter: vercelServerless(),
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
  },
})
