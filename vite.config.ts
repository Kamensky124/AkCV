import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://kamensky124.github.io/AkCV',
  plugins: [react()]
})

// "homepage": "https://kamensky124.github.io/AkCV",