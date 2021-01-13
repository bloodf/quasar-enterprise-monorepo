const fs = require('fs-extra');

let extend;

if (fs.existsSync('./.babelrc')) {
  extend = './.babelrc';
}

module.exports = {
  presets: [
    ['@quasar/babel-preset-app', {
      presetEnv: { corejs: 3 }
    }]
  ],
  extends: extend,
};
