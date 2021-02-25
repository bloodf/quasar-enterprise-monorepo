module.exports = {
  rules: {
    '@intlify/vue-i18n/no-dynamic-keys': 'off',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.vue', '.ts'],
      },
    ],
  },
};
