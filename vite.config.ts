import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        host: true
    },
    // Explicitly set root to current directory
    root: process.cwd(),
    // Disable PostCSS config search in parent directories
    css: {
        postcss: {}
    }
})