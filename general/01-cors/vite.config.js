import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        // /api/user -> http://localhost:5000/user
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
