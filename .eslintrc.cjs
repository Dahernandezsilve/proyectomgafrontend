module.exports = {
  extends: [
    'airbnb',
    'plugin:react-native/all',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    'react-native/react-native': true,
  },
  plugins: [
    'react',
    'react-native',
    'import',
    'jsx-a11y',
    'react-hooks',
    'jest', // Agregar 'jest' a la lista de plugins
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-color-literals': 'off',
    'react-native/split-platform-components': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-single-element-style-arrays': 'warn',

    // Reglas para utilizar arrow functions y evitar punto y coma
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-extra-semi': 'error',
    semi: ['error', 'never'],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs'],
      },
    },
  },
}
