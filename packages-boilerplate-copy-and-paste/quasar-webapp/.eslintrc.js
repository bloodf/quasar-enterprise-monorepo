module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    extraFileExtensions: ['.vue']
  },

  globals: {
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true
  },

  extends: [
    '@quasar-enterprise-monorepo/eslint-config-monorepo',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-typescript',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-import',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-vue',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-vue-i18n',
  ],

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
