import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import newlineDestructuring from 'eslint-plugin-newline-destructuring';
import importNewlines from 'eslint-plugin-import-newlines';
import js from '@eslint/js';


export default [
  js.configs.recommended,
  stylistic.configs['disable-legacy'],
  {
    plugins: {
      '@stylistic': stylistic,
      'unused-imports': unusedImports,
      'newline-destructuring': newlineDestructuring,
      'import-newlines': importNewlines,
    },
    rules: {
      // <editor-fold desc="stylistics rules">
      '@stylistic/array-bracket-newline': ['error', {multiline: true}],
      '@stylistic/array-bracket-spacing': ['error', 'always',],
      '@stylistic/array-element-newline': ['error', {
        ArrayExpression: 'always',
        ArrayPattern: {minItems: 5, multiline: true,},
      }],
      '@stylistic/arrow-parens': ['error', 'always',],
      '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true,
      },],
      '@stylistic/block-spacing': ['error', 'always',],
      '@stylistic/brace-style': ['error', 'stroustrup', {
        allowSingleLine: false,
      }],
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always',
        objects: 'always',
        imports: 'always-multiline',
        exports: 'always-multiline',
        enums: 'always',
        functions: 'always-multiline',
      },],
      '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true,
      },],
      '@stylistic/comma-style': ['error', 'last',],
      '@stylistic/computed-property-spacing': ['error', 'never',],
      '@stylistic/dot-location': ['error', 'property',],
      '@stylistic/eol-last': ['error', 'always',],
      '@stylistic/function-call-argument-newline': ['error', 'consistent',],
      '@stylistic/function-call-spacing': ['error', 'never',],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments',],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside',],
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        ignoredNodes: ['PropertyDefinition',],
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
      },],
      // indent-binary-ops?
      '@stylistic/key-spacing': ['error', {afterColon: true,},],
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/linebreak-style': ['error', 'unix',],
      '@stylistic/lines-around-comment': ['error', {
        allowObjectStart: true,
        allowArrayStart: true,
        allowClassStart: true,
        allowBlockStart: true,
      },],
      '@stylistic/lines-between-class-members': ['error', 'always',],
      '@stylistic/max-len': ['error', {code: 150,},],
      '@stylistic/max-statements-per-line': ['error', {max: 1,},],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },],
      '@stylistic/multiline-ternary': ['error', 'never',],
      '@stylistic/new-parens': ['error', 'always',],
      '@stylistic/newline-per-chained-call': ['error', {ignoreChainWithDepth: 4,},],
      '@stylistic/no-confusing-arrow': 'error',
      '@stylistic/no-extra-parens': ['error', 'all', {
        nestedBinaryExpressions: false,
        enforceForArrowConditionals: false,
      },],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': 'error',
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/nonblock-statement-body-position': ['error', 'beside',],
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: {
          multiline: true,
          consistent: true,
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
          minProperties: 3,
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {minProperties: 1,},
      },],
      '@stylistic/object-curly-spacing': ['error', 'always',],
      '@stylistic/object-property-newline': ['error', {allowAllPropertiesOnSameLine: false,},],
      '@stylistic/one-var-declaration-per-line': ['error', 'initializations',],
      '@stylistic/operator-linebreak': ['error', 'after',],
      '@stylistic/padded-blocks': ['error', 'never',],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let',],
          next: 'return',
        },
      ],
      '@stylistic/quote-props': ['error', 'as-needed',],
      '@stylistic/quotes': ['error', 'single',],
      '@stylistic/rest-spread-spacing': ['error', 'never',],
      '@stylistic/semi': ['error', 'always',],
      '@stylistic/semi-spacing': ['error', {
        before: false,
        after: true,
      },],
      '@stylistic/semi-style': ['error', 'last',],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': ['error', 'never',],
      '@stylistic/space-in-parens': ['error', 'never',],
      '@stylistic/space-infix-ops': ['error', {int32Hint: false,},],
      '@stylistic/space-unary-ops': 'error',
      '@stylistic/spaced-comment': ['error', 'always', {
        line: {
          markers: ['#region', '#endregion',],
        },
      },],
      '@stylistic/switch-colon-spacing': ['error', {
        before: false,
        after: true,
      },],
      '@stylistic/template-curly-spacing': ['error', 'never',],
      '@stylistic/template-tag-spacing': ['error', 'never',],
      '@stylistic/type-annotation-spacing': ['error', {
        before: false,
        after: true,
        overrides: {arrow: {before: true,},},
      },],
      '@stylistic/type-generic-spacing': ['error',],
      '@stylistic/type-named-tuple-spacing': ['error',],
      '@stylistic/wrap-iife': ['error', 'inside',],
      '@stylistic/wrap-regex': 0,
      // </editor-fold>

      // <editor-fold desc="eslint rules">
      curly: 'error',
      eqeqeq: ['error', 'always'],
      'no-template-curly-in-string': 'error',
      'no-const-assign': 'error',
      'max-statements-per-line': ['error', {max: 1}],
      'prefer-arrow-callback': 'error',
      'default-param-last': 'error',
      'no-promise-executor-return': 'error',
      'dot-notation': 'error',
      'no-unreachable-loop': 'error',
      'no-var': 'error',
      'prefer-rest-params': 'error',
      'no-nested-ternary': 'error',
      'max-depth': ['error', 4,],
      // </editor-fold>

      // <editor-fold desc="other plugins">
      'newline-destructuring/newline': 'error',
      'unused-imports/no-unused-imports': 'error',
      'import-newlines/enforce': [ 'error', {
        items: 4,
        'max-len': 150,
      }, ],
      // </editor-fold>
    }
  },
];