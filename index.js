module.exports = {
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'eslint:recommended',
		'plugin:nuxt/recommended',
	],
	plugins: [
		'vue',
	],
	rules: {
		// vue rules
		'vue/order-in-components': 'error',
		'vue/this-in-template': 'error',
		'vue/require-prop-types': 'error',
		'vue/component-tags-order': 'error',
		'vue/no-lone-template': 'error',
		'vue/attributes-order': 'error',
		'vue/component-name-in-template-casing': ['error', 'kebab-case'],
		'vue/no-empty-component-block': 'error',
		'vue/component-definition-name-casing': 'error',
		'vue/no-boolean-default': ['error', 'default-false'],
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never',
		}],
		'vue/attribute-hyphenation': ['error', 'always'],
		'vue/no-multiple-slot-args': 'error',
		'vue/v-on-event-hyphenation': ['error', 'always', {
			autofix: false, // recommended to disable the autofix
		}],
		'vue/v-on-function-call': ['error'],
		'vue/custom-event-name-casing': 'error',
		'vue/no-restricted-v-bind': ['error', '/^v-/'],
	},
};