import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Cloud Run will pass the PORT environment variable
    host: true,                      // Allow the server to be accessed externally
  }
})
