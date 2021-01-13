module.exports = {
  rules: {
    'import/named': 'off',
    'import/export': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
};
