module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@looko-corp/eslint-config-acloset-react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/extensions': ['error', 'never', { svg: 'always' }],

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-nocheck': 'allow-with-description',
      },
    ],

    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
      },
    ],
  },
};
