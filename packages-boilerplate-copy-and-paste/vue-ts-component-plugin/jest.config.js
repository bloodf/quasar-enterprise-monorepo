'use strict'
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

const packageName = require('./package.json').name.split('@quasar-enterprise-monorepo/').pop();
const moduleName = (() => {
  const dirArray = __dirname
  .split(/(\/|\\)/i)
  .filter(Boolean)
  .filter((i)=> ![`\\`, `/`].includes(i));

  dirArray.pop();

  return dirArray.pop();
})();

module.exports = {
  name: packageName,
  displayName: `${moduleName}/${packageName}`,
  preset: './jest.config.base.js',
  rootDir: '../..',
  coverageDirectory: `<rootDir>/${moduleName}/${packageName}/coverage`,
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  collectCoverageFrom: [
    `<rootDir>/${moduleName}/${packageName}/src/**/*.{vue,js,jsx,ts,tsx}`,
  ],
  testMatch: [
    `<rootDir>/${moduleName}/${packageName}/src/**/*.jest.(spec|test).+(ts|js)?(x)`,
    `<rootDir>/${moduleName}/${packageName}/tests/unit/**/*.{spec,test}.[jt]s?(x)`,
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'vue',
  ],

  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('jest-transform-stub'),
    '\\.(css|less|scss|sass|styl)$': require.resolve('identity-obj-proxy'),
    '^.+\\.(js|jsx)?$': require.resolve('babel-jest'),
    '.*\\.vue$': require.resolve('vue-jest'),
    '^.+\\.(ts|tsx)$': require.resolve('ts-jest'),
  },

  moduleNameMapper: {
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.js',
    '^test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.js',
    '^~/(.*)$': `<rootDir>/${moduleName}/${packageName}/$1`,
    '^@/(.*)$': `<rootDir>/${moduleName}/${packageName}/$1`,
    '^jest/utils/(.*)$': `<rootDir>/${moduleName}/${packageName}/tests/utils/$1`,
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: `<rootDir>/${moduleName}/${packageName}/` }),
  },

  testURL: 'http://localhost/',

  moduleDirectories: [
    'node_modules',
  ],

  modulePaths: [
    `<rootDir>/${moduleName}/${packageName}/src/`,
  ],

  transformIgnorePatterns: [
    `<rootDir>/${moduleName}/${packageName}/../../node_modules`,
  ],

  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],

  globals: {
    'ts-jest': {
      tsconfig: `<rootDir>/${moduleName}/${packageName}/tsconfig.json`,
      diagnostics: false,
      babelConfig: true,
    },
    'vue-jest': {
      tsconfig: `<rootDir>/${moduleName}/${packageName}/tsconfig.json`,
      experimentalCSSCompile: true,
    },
  },
};
