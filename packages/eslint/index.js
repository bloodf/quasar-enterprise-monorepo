module.exports = {
  extends: [
    './rules/parser',
    './rules/plugins',
    './rules/extends',
    './rules/errors',
    './rules/warn',
    './rules/off',
    './rules/env',
    './rules/globals',
  ].map(require.resolve),
};
