module.exports = {
	extends: [
		'eslint:recommended',
	],
	plugins: [
		'vue',
	],
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		semi: ['error', 'always'],
		curly: 'error',
		eqeqeq: ['error', 'always'],
		quotes: ['error', 'single',],
		indent: ['error', 'tab'],
		'array-bracket-spacing': ['error', 'always'],
		'block-spacing': ['error'],
		'no-trailing-spaces': ['error'],
		'no-const-assign': ['error'],
		'no-mixed-spaces-and-tabs': ['error'],
		'comma-dangle': ['error', 'always-multiline'], // always
		'max-statements-per-line': ['error', { max: 1 }],
		'prefer-arrow-callback': ['error'],
		'default-param-last': ['error'],
		'dot-notation': 'error',
		'brace-style': ['error', 'stroustrup', {
			allowSingleLine: false,
		}],
		'no-unreachable-loop': 'error',
		'newline-per-chained-call': 'error',
		'eol-last': ['error', 'never',],
		'no-var': 2,
		'no-tabs': 0,
		'no-promise-executor-return': 2,
	}
}
