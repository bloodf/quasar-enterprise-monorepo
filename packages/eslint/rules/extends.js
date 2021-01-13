module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',

    //Unicorn Promise
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
