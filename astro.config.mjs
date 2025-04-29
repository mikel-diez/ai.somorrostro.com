import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({

  compressHTML: true,
  site: 'https://aisomorrostro.vercel.app/',
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false,
  }), compress(), preact()],
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