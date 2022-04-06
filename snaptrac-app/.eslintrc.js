module.exports = {
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'import/extensions': ['error', 'never'],
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        endOfLine: 'auto',
        printWidth: 100,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/style-prop-object': 'off',
  },
};
