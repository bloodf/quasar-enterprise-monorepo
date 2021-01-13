module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {
      'ignoreRestSiblings': true,
      'argsIgnorePattern': '^_',
      'caughtErrorsIgnorePattern': '^ignore'
    }],
  },
}
