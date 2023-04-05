import path from "path";
import { defineConfig } from "vite";

const baseFolder = path.resolve(__dirname);

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(baseFolder, "./src"),
    },
  },
  build: {
    outDir: "dist",
    copyPublicDir: false,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src"),
      name: "index",
      formats: ["es"],
      fileName: (format) => `${format}-index.js`,
    },
  },
  server: {
    cors: true,
    host: "0.0.0.0",
    port: 8080,
    hmr: true,
  },
});
