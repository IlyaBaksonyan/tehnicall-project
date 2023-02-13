// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	css: ['~/assets/styles/main.scss'],
	// My Nuxt config
	app: {
		baseURL: '/tehnicall-project/',
		buildAssetsDir: 'assets'
	},

	components: {
		dirs: ['~/components']
	},
	dir: {
		static: 'static'
	},
	ssr: false
})
