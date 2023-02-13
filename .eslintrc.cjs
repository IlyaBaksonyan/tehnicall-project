module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		parser: '@typescript-eslint/parser'
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:nuxt/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended'
	],
	plugins: ['@typescript-eslint'],
	rules: {
		'vue/multi-word-component-names': 0,
		'vue/no-reserved-component-names': 0,
		'no-unused-labels': 1,
		'@typescript-eslint/no-explicit-any': 0,
		'no-console': 2,
		'vue/prop-name-casing': 0,
		'vue/attribute-hyphenation': 0,
		'vue/attributes-order': 0,
		'prettier/prettier': 1
	}
}
