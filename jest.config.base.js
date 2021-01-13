'use strict'
module.exports = {
  globals: {
    __DEV__: true,
  },
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      //  branches: 50,
      //  functions: 50,
      //  lines: 50,
      //  statements: 50
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '.d.ts$', '/__mocks__/'],
  testEnvironment: 'jest-environment-jsdom-sixteen',

  setupFiles: [
    'jest-date-mock',
    'jest-localstorage-mock'
  ],

  transformIgnorePatterns: [
    'node_modules',
    '<rootDir>/node_modules',
  ],

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    ['jest-watch-toggle-config', { setting: 'verbose' }],
    ['jest-watch-toggle-config', { setting: 'collectCoverage' }],
    ['jest-watch-toggle-config', { setting: 'notify' }],
    ['jest-watch-toggle-config', { setting: 'bail' }],
  ],
};
