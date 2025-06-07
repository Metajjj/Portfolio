import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 64460,
    },
    logLevel: 'warn',

    base:'/Portfolio/', //base name of url for gh-pages to work?
    //base:'localhost:3000', //for local dev test
    build: {
        outDir: 'docs' //Set npm run build path for gh-pages
    }
})
