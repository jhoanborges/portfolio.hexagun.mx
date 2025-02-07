import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Use PORT from environment or default to 3000
    host: true,                      // Allow external access
  },
  preview: {
    port: process.env.PORT || 3000,  // Use PORT for preview as well
    host: true,
  },
});