/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@graphql': path.resolve(__dirname, 'src/graphql'),
      app: path.resolve(__dirname),
      assets: path.resolve(__dirname, 'src/assets'),
      boot: path.resolve(__dirname, 'src/boot'),
      components: path.resolve(__dirname, 'src/components'),
      css: path.resolve(__dirname, 'src/css'),
      drivers: path.resolve(__dirname, 'src/drivers'),
      enums: path.resolve(__dirname, 'src/enums'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      mixins: path.resolve(__dirname, 'src/mixins'),
      pages: path.resolve(__dirname, 'src/pages'),
      services: path.resolve(__dirname, 'src/services'),
      src: path.resolve(__dirname, 'src/'),
      statics: path.resolve(__dirname, 'src/statics'),
      store: path.resolve(__dirname, 'src/store'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
};
