import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
   root: "src/",

  build: {
    outDir: "./dist",
    rollupOptions: {
      input: {
        supportme: resolve(__dirname, "supportme/index.html"),
        blog: resolve(__dirname, "blog/index.html"),
        gallery: resolve(__dirname, "gallery/index.html"),
        socialnetworks: resolve(__dirname, "socialnetworks/index.html"),
      },
    },
  },
});
