import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Personal_Portfolio/",
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
