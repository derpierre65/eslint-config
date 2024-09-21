module.exports = {
  extends: [
    require.resolve('./base.js'),
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
  },
  rules: {
    '@typescript-eslint/array-type': [ 'error', {
      default: 'array-simple',
      readonly: 'array-simple',
    }, ],
    '@typescript-eslint/ban-ts-comment': [ 'error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': 'allow-with-description',
    }, ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/consistent-type-definitions': [ 'error', 'type', ],
  },
  // @see https://github.com/vuejs/vue-eslint-parser/issues/99
  // @see https://github.com/typescript-eslint/typescript-eslint/blob/dec6cbe/packages/eslint-plugin/src/configs/eslint-recommended.ts
  overrides: [
    {
      files: [
        'src/**/*.vue',
      ],
      rules: {
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2630)
        'no-import-assign': 'off', // ts(2632) & ts(2540)
        'no-new-symbol': 'off', // ts(7009)
        'no-obj-calls': 'off', // ts(2349)
        'no-redeclare': 'off', // ts(2451)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376) & ts(17009)
        'no-undef': 'off', // ts(2304) & ts(2552)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
        'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
        'prefer-const': 'error', // ts provides better types with const
        'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
        'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
      },
    },
  ],
};