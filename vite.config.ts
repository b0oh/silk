import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            output:  {
                manualChunks: {
                    react: ["react", "react-dom"],
                }
            }
        }
    },
    plugins: [react()]
})
