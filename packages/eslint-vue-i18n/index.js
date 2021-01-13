module.exports = {
  extends: [
    './rules/extends',
    './rules/settings',
    './rules/errors',
  ].map(require.resolve),
};
