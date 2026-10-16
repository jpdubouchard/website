// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jpdubouchard.ca',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      // The root page stays the 2019 site until launch; the CloudFront Function will pick the language then
      redirectToDefaultLocale: false,
    },
  },
});
