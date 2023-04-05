import path from "path";
import { defineConfig } from "vitest/config";

const baseFolder = path.resolve(__dirname);

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(baseFolder, "./src"),
    },
  },
  test: {
    globals: true,
    dir: "src",
    coverage: {
      provider: "c8",
      reportsDirectory: "./tests/coverage",
    },
  },
});
