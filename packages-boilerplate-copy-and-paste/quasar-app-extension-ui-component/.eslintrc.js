const { resolve } = require('path');

module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2021,
    sourceType: 'module',
  },

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },


  extends: [
    '@quasar-enterprise-monorepo/eslint-config-monorepo',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-typescript',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-import',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-vue',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-vue-i18n',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-jest',
  ],
};
