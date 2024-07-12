import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss'

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
        // port: 9000,
        // strictPort: true,
        // cors: false,
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.ts'],
            refresh: true,
        }),
    ]
});
