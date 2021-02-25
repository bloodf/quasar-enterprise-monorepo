module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    './rules/env',
    './rules/parser',
    './rules/plugins',
    './rules/extends',
    './rules/rules',
  ].map(require.resolve),
};
