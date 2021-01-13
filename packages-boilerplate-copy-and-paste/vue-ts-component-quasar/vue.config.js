module.exports = {
  chainWebpack(config) {
    config.resolve
      .plugin('tsconfig-paths')
      .use(require('tsconfig-paths-webpack-plugin'));
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'combined',
      autoImportComponentCase: 'combined',
      rtlSupport: false
    }
  },

  transpileDependencies: [
    'quasar'
  ]
};
