import { defineConfig, envField } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        FOO: envField.string({
          access: 'secret',
          context: 'server',
        }),
      },
      validateSecrets: true,
    },
  },

  output: 'server',
  adapter: netlify(),
});
