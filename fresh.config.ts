import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
  router: {
    ignoreFilePattern:
      /(?:[^/]*_|[^/]*\.|)(test|state)\.(?:ts|tsx|mts|js|mjs|jsx|)\/*$/,
  },
});
