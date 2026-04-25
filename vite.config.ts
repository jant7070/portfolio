import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three")) {
            return "vendor-three";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-motion";
          }
        },
      },
    },
    // vendor-three is ~513 kB minified; default 500 kB would still warn
    chunkSizeWarningLimit: 600,
  },
});

