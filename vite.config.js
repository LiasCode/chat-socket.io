import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: false,
  root: resolve(process.cwd(), "frontend"),
  build: {
    outDir: resolve(process.cwd(), "public"),
    emptyOutDir : true
  },
  server: {
    host: true,
    cors: {
      origin: "*",
    },
    port: 8080,
    open: true,
  },
  envDir: process.cwd(),
});
