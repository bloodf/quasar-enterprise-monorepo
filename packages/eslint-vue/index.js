module.exports = {
  extends: [
    './rules/extends',
    './rules/plugins',
    './rules/error',
  ].map(require.resolve),
};
