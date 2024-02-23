import { defineConfig } from 'astro/config'
import AstroPWA from '@vite-pwa/astro'

const base = '/css-triggers/'

// https://astro.build/config
export default defineConfig({
	site: 'https://firestorm.github.io',
	base,
	vite: {
		define: {
			__DATE__: `'${new Date().toISOString()}'`,
		},
	},
	integrations: [
		AstroPWA({
			base,
			manifest: {
				name: 'CSS Triggers',
				short_name: 'CSS Triggers',
				theme_color: '#ffffff',
				background_color: "#ffffff",
		    	display: "standalone",
				description: 'A reference for the render impact of mutating CSS properties.',
				icons: [
					{
						src: `assets/images/favicons/android-chrome-192x192.png`,
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: `assets/images/favicons/android-chrome-512x512.png`,
						sizes: "512x512",
						type: "image/png"
					}
				],
			},
			workbox: {
			  navigateFallback: `/`,
			  globPatterns: ['**/*.{css,js,html,svg,png,ico}'],
			},
			devOptions: {
			  enabled: true,
			  navigateFallbackAllowlist: [/^\/$/],
			},
		})
	]
});
