import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
		base: '/',
		server: {
			host: true,
			port: 8080,
		},
		resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
        },
        plugins: [
            react(),
            checker({
                typescript: true,
                overlay: true,
                eslint: {
                    lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
					useFlatConfig: true,
                },
            }),
        ],

    };
});
