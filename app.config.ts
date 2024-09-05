import { defineConfig } from '@solidjs/start/config';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  vite: {
    plugins: [
      {
        // default settings on build (i.e. fail on error)
        ...eslint(),
        apply: 'build',
      },
      {
        // do not fail on serve (i.e. local development)
        ...eslint({
          failOnWarning: false,
          failOnError: false,
        }),
        apply: 'serve',
        enforce: 'post',
      },
    ],
  },
});
