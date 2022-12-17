module.exports = {
	extends: [
		require.resolve('./base.js'),
		'plugin:vue/strongly-recommended',
		require.resolve('./vue-base.js'),
	],
	rules: {
		'vue/custom-event-name-casing': ['error', 'kebab-case'],
	},
};