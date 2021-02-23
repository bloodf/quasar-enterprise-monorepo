module.exports = {
  rules: {
    'max-len': ['error', {
      code: 150,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
    }],
    'prefer-const': 2,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': (process.env.APPLICATION_ENV === 'production' || !!process.env.DEV) ? 'error' : 'off',
    'no-debugger': (process.env.APPLICATION_ENV === 'production' || !!process.env.DEV) ? 'error' : 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
  },
};
