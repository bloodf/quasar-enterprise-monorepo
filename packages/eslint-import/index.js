module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    './rules/extends',
    './rules/plugins',
    './rules/rules',
    './rules/settings',
  ].map(require.resolve),
};
