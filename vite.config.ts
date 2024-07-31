import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3002,
  },
  resolve: {
    alias: {
      src: "/src",
      api: "/src/api",
      assets: "/src/assets",
      components: "/src/components",
      layout: "/src/layout",
      pages: "/src/pages",
      providers: "/src/providers",
      store: "/src/store",
      styles: "/src/styles",
      utils: "/src/utils",
      hooks: "/src/hooks",
      models: "/src/models",
      helpers: "/src/helpers",
    },
  },
});
