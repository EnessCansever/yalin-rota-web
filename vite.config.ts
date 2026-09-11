import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      input: ['index.html', 'kurumsal-web-sitesi.html', 'web-sitesi-yenileme.html'],
    },
  },
})
