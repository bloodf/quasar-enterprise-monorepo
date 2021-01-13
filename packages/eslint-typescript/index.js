module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    './rules/plugins',
    './rules/typescript',
    './rules/env',
    './rules/errors',
  ].map(require.resolve),
};
