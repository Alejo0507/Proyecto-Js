import { defineConfig } from 'vite';
import { resolve } from 'path';
import lit from '@vitejs/plugin-lit';

export default defineConfig({
    plugins: [lit()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
});

