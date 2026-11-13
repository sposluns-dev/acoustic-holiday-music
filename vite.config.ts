import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base = repo name, because GitHub Pages serves this at /acoustic-holiday-music/
export default defineConfig({
  base: '/acoustic-holiday-music/',
  plugins: [react()],
})
