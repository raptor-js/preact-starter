import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  publicDir: false,
  build: {
    outDir: "public",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: "./resources/js/index.tsx",
        style: "./resources/css/index.css",
      },
      output: {
        manualChunks: undefined,
        entryFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "css/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
  css: {
    postcss: "./postcss.config.ts",
  },
});
