const path = require('path');
const { name } = require('./package.json');

module.exports = {
  title: name,
  components: 'src/components/**/[A-Z]*.vue',
  require: [path.join(__dirname, 'styleguide/global.requires.js')],
  renderRootJsx: path.join(__dirname, 'styleguide/styleguide.root.js'),
  usageMode: 'expand',
  exampleMode: 'expand',
  styleguideDir: 'dist',
  // defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // },
};
