import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: './postcss.config.cjs' // Specify the PostCSS config file if needed
	}
});
