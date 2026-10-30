// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  // Redirect bare /admin to the Sveltia CMS entry point (public/admin/index.html),
  // which is served at its exact path in dev and on GitHub Pages.
  redirects: {
    "/admin": "/admin/index.html"
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname
      }
    }
  }
});
