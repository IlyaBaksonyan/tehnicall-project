/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'vue/multi-word-component-names': 0,
		'vue/no-reserved-component-names': 0,
		'no-unused-labels': 1,
		'vue/attributes-order': 1,
		'no-console': 1
	}
}
