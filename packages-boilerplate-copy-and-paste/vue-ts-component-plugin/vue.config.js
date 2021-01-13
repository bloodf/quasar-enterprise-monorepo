module.exports = {
  chainWebpack(config) {
    config.resolve
      .plugin('tsconfig-paths')
      .use(require('tsconfig-paths-webpack-plugin'));
  }
};
