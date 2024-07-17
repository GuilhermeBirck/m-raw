import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: true, //true
        hmr: {
            host: 'localhost', //localhost
            protocol: 'ws',
        },
        watch: {
            usePolling: true,
        },
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.ts'],
            refresh: true,
        }),
    ],
});
