// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	css: ['~/assets/styles/main.scss'],
	// My Nuxt config

	app: {
		baseURL: '/tehnicall-project/',
		buildAssetsDir: 'assets',
		head: {
			htmlAttrs: { lang: 'ru' },
			viewport: 'width=device-width, initial-scale=1.0',
			title: 'tehnicall-project',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Martian+Mono:wdth,wght@90.4,447&family=Roboto+Mono:wght@400;500;600;700&display=swap',
					crossorigin: ''
				}
			]
		}
	},

	components: {
		dirs: ['~/components']
	},
	dir: {
		static: 'static'
	},
	ssr: false,
	build: {
		transpile: ['gsap', 'three']
	}
})
