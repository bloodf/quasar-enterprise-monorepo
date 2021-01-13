
module.exports = {
  preset: './jest.config.base.js',

  projects: [
    '<rootDir>/applications/*/jest.config.js',
    '<rootDir>/clients/*/jest.config.js',
    '<rootDir>/packages/*/jest.config.js',
    '<rootDir>/utils/*/jest.config.js',
    '<rootDir>/vuex-common-stores/*/jest.config.js',
  ],

  coverageDirectory: '<rootDir>/coverage/',

  collectCoverageFrom: [
    '<rootDir>/applications/*/src/**/*.{ts,tsx,vue,js,jsx}',
    '<rootDir>/clients/*/src/**/*.{ts,tsx,vue,js,jsx}',
    '<rootDir>/packages/*/src/**/*.{ts,tsx,vue,js,jsx}',
    '<rootDir>/utils/*/src/**/*.{ts,tsx,vue,js,jsx}',
    '<rootDir>/vuex-common-stores/*/src/**/*.{ts,tsx,vue,js,jsx}',
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

  reporters: ['jest-silent-reporter'],

  testURL: 'http://localhost/',

  moduleDirectories: [
    'node_modules',
  ],

  watchPlugins: [
    'jest-watch-yarn-workspaces',
    'jest-watch-lerna-packages',
  ],

  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],

  transformIgnorePatterns: [
    `<rootDir>/node_modules`
  ],
};
