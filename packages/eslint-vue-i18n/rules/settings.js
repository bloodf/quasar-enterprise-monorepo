module.exports = {
  settings: {
    'vue-i18n': {
      localeDir: './src/i18n/**/*.{json, json5, yml, yaml}',
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      extends: ['plugin:@intlify/vue-i18n/base'],
    },
    {
      files: ['*.yaml', '*.yml'],
      extends: ['plugin:@intlify/vue-i18n/base'],
    },
  ],
};
