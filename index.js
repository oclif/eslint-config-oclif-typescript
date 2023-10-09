module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:perfectionist/recommended-natural',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-expressions': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'import/no-unresolved': 'error',
    'valid-jsdoc': ['warn', {requireReturnType: false, requireParamType: false}],
    'perfectionist/sort-classes': [
      'error',
      {
        order: 'asc',
        type: 'alphabetical',
        groups: [
          'index-signature',
          'static-property',
          'property',
          'private-property',
          'constructor',
          'static-method',
          'static-private-method',
          ['get-method', 'set-method'],
          'method',
          'private-method',
          'unknown',
        ],
      },
    ],
  },
}
