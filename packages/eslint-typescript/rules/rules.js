module.exports = {
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'ignoreRestSiblings': true,
      'argsIgnorePattern': '^_',
      'caughtErrorsIgnorePattern': '^ignore'
    }],
    'max-len': ['error', {
      code: 150,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
    }],
    'class-methods-use-this': 'off',
    'no-console': (process.env.APPLICATION_ENV === 'production' || !!process.env.DEV) ? 'error' : 'off',
    'no-debugger': (process.env.APPLICATION_ENV === 'production' || !!process.env.DEV) ? 'error' : 'off',
  },
};
