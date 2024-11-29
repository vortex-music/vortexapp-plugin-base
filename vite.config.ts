import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            name: 'vortexapp-plugin-base',
            entry: './src/index.ts',
            fileName: 'index',
        },
        rollupOptions: {
            // List external dependencies you don’t want bundled
            external: [],
            output: {
                globals: {},
            },
        },
    },
});