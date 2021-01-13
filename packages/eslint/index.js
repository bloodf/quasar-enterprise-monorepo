module.exports = {
  extends: [
    './rules/extends',
    './rules/errors',
    './rules/warn',
    './rules/off',
    './rules/env',
    './rules/globals',
  ].map(require.resolve),
};
