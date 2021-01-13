module.exports = {
  rules: {
    indent: 'off',
    'class-methods-use-this': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-shadow': 'off',
    'no-redeclare': 'off',
    'unicorn/no-null': 0,
    'unicorn/no-reduce': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-object-as-default-parameter': 0,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/consistent-function-scoping': 0,
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
  },
};
