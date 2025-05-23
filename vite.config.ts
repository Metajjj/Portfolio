import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(),react()],
    server: {
        port: 64460,
    },
    logLevel: 'warn',

    base:'/Portfolio/', //base name of url for gh-pages to work?
    build: {
        outDir: 'docs' //Set npm run build path for gh-pages
    }
})
