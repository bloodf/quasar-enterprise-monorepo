module.exports = {
  extends: [
    './rules/extends',
    './rules/errors',
    './rules/warn',
    './rules/env',
  ].map(require.resolve),
};
