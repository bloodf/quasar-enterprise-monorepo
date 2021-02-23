module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: `${__dirname}`,
  },

  globals: {
    __statics: true,
    process: true
  },

  extends: [
    '@quasar-enterprise-monorepo/eslint-config-monorepo',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-typescript',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-import',
    '@quasar-enterprise-monorepo/eslint-config-monorepo-jest',
  ],
};
