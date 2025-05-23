import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 64460,
    },
    logLevel: 'warn',
    build: {
        outDir: 'docs' //Set npm run build path for gh-pages
    }
})
