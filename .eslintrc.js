module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		'no-trailing-spaces': ['error'],
		'object-curly-spacing': ['error', 'always'],
		'keyword-spacing': 'error',
		'space-infix-ops': ['error', { int32Hint: false }],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: 'block-like', next: '*' },
		],
		'comma-spacing': ['error', { before: false, after: true }],
		'no-multi-spaces': 'error',
		'arrow-spacing': 'error',
	},
};
