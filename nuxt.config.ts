// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	css: ['~/assets/styles/main.scss'],
	// My Nuxt config

	app: {
		baseURL: '/tehnicall-project/',
		buildAssetsDir: 'assets',
		head: {
			meta: [
				// <meta name="viewport" content="width=device-width, initial-scale=1">
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
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
	ssr: false
})
