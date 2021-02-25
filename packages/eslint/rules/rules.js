module.exports = {
  rules: {
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
    /* 'unicorn/no-new-array': 'off',
     'unicorn/no-array-reduce': 'off',
     'unicorn/catch-error-name': [
       2,
       {
         name: 'error',
         ignore: ['^e(rr)?$'],
       },
     ], */
    indent: 'off',
    'prefer-promise-reject-errors': 'off',
    'no-shadow': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    /* 'unicorn/no-null': 0,
     'unicorn/no-reduce': 0,
     'unicorn/no-array-for-each': 0,
     'unicorn/prevent-abbreviations': 0,
     'unicorn/no-object-as-default-parameter': 0,
     'unicorn/no-abusive-eslint-disable': 0,
     'unicorn/consistent-function-scoping': 0,
     'unicorn/consistent-destructuring': 0,
     'unicorn/filename-case': [
       0,
       {
         cases: {
           kebabCase: false,
           pascalCase: true,
           camelCase: true,
         },
         // ignore UPPER_CASE markdown filenames
         ignore: [/^[A-Z](([\dA-Z]+_)*[\dA-Z]+)?\.(mdx|d\.ts)?$/],
       },
     ],
    */
    quotes: ['warn', 'single'],
    'no-unused-expressions': ['warn', {
      'allowShortCircuit': true,
      'allowTernary': true,
    }],
  },
};
