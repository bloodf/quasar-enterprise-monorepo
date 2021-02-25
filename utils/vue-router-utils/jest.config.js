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
  setupFilesAfterEnv: [`<rootDir>/${moduleName}/${packageName}/test/jest/jest.setup.js`],
  // noStackTrace: true,
  // bail: true,
  // cache: false,
  // verbose: true,
  // watch: true,

  moduleNameMapper: {
    '^~/(.*)$': `<rootDir>/${moduleName}/${packageName}/$1`,
    '^src/(.*)$': `<rootDir>/${moduleName}/${packageName}/src/$1`,
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: `<rootDir>/${moduleName}/${packageName}` }),
  },

  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('jest-transform-stub'),
    '\\.(css|less|scss|sass|styl)$': require.resolve('identity-obj-proxy'),
    '^.+\\.(js|jsx)?$': require.resolve('babel-jest'),
    '^.+\\.(ts|tsx)$': require.resolve('ts-jest'),
  },

  collectCoverageFrom: [
    `<rootDir>/${moduleName}/${packageName}/src/**/*.[jt]s?(x)`,
  ],
  testMatch: [
    `<rootDir>/${moduleName}/${packageName}/src/**/*.jest.(spec|test).+(ts|js)?(x)`,
    `<rootDir>/${moduleName}/${packageName}/test/unit/**/*.(spec|test).+(ts|js)?(x)`,
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
  ],

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

  globals: {
    'ts-jest': {
      tsconfig: `<rootDir>/${moduleName}/${packageName}/tsconfig.json`,
      diagnostics: false,
    },
  },
};
