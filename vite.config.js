import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({})],
  publicDir: false,
  root: resolve(process.cwd(), "frontend"),
  build: {
    outDir: resolve(process.cwd(), "public"),
  },
  server: {
    host: true,
    cors: {
      origin: "*",
    },
    open: true,
  },
  envDir: process.cwd(),
});
