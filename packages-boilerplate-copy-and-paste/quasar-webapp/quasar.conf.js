/* eslint-disable */
const Dotenv = require('dotenv-webpack');
const packageJson = require('./package');
const webpack = require('webpack');
const webpackConf = require('./webpack.conf');
const { configure } = require('quasar/wrappers');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const frameworkLang = 'en-us';

module.exports.frameworkLang = frameworkLang;

module.exports = configure(function (ctx) {
  return {
    supportTS: {
      tsLoaderConfig: {
        allowTsInNodeModules: true,
      },
      tsCheckerConfig: {
        eslint: true,
        vue: true,
      },
    },
    boot: [
      'vuePlugin/i18n',
      'vuePlugin/vuelidate',
      'vuePlugin/compositionApi',
      'routeGuards/routerHooks',
      'service/vuex',
      'vuePlugin/i18n',
      'vuePlugin/compositionApi',
      'vuePlugin/vuelidate',
      'vuePlugin/vueLoadable',
    ],

    css: [
      'app.styl',
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v4',
      'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      // 'roboto-font', // optional, you are not bound to it
      // 'material-icons', // optional, you are not bound to it
    ],

    framework: {
      iconSet: 'material-icons',
      lang: frameworkLang,
      plugins: [],
      importStrategy: 'auto',
      autoImportComponentCase: 'combined',
    },
    build: {
      distDir: 'dist',
      devtool: ctx.dev ? 'inline-source-map' : 'source-map',
      sourceMap: true,
      scopeHoisting: true,
      vueRouterMode: 'history',
      showProgress: true,
      gzip: true,
      analyze: false,
      extractCSS: true,
      env: {
        DEV: !!ctx.dev,
        PROD: !ctx.dev,
      },
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            formatter: require('eslint').CLIEngine.getFormatter('stylish'),
          },
        });

        cfg.module.rules.push({
          test: /\.(graphql|gql)$/,
          exclude: /node_modules(?!\/@quasar-enterprise-monorepo)/,
          loader: 'graphql-tag/loader',
        });

        cfg.plugins.push(new Dotenv({
          systemvars: true,
        }));

        if (ctx.prod) {
          cfg.optimization.mergeDuplicateChunks = true;
          cfg.optimization.splitChunks.chunks = 'all';
          cfg.optimization.splitChunks.maxInitialRequests = Infinity;
          cfg.optimization.splitChunks.minSize = 0;
          cfg.optimization.splitChunks.maxAsyncRequests = 10;
          cfg.optimization.splitChunks.cacheGroups = {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: (module) => `${module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1].replace(
                /[@\._]/gm,
                '')}`,
            },
            graphql: {
              test: /[\\/]node_modules[\\/](apollo-cache-inmemory|apollo-client|graphql|apollo-link|apollo-link-context|apollo-link-http|apollo-link-ws|apollo-utilities)[\\/]/,
              name: 'graphql',
              reuseExistingChunk: true,
            },
            vue: {
              test: /[\\/]node_modules[\\/](@vue|vue-class-component|vue-property-decorator)[\\/]/,
              name: 'vue',
              reuseExistingChunk: true,
            },
            vuex: {
              test: /[\\/]node_modules[\\/](vuex|vuex-class)[\\/]/,
              name: 'vuex',
              reuseExistingChunk: true,
            },
            vueRouter: {
              test: /[\\/]node_modules[\\/]vue-router[\\/]/,
              name: 'vueRouter',
              reuseExistingChunk: true,
            },
            sentry: {
              test: /[\\/]node_modules[\\/]@sentry[\\/]/,
              name: 'sentry',
              reuseExistingChunk: true,
            },
          };

          cfg.plugins.push(new WebpackManifestPlugin());

          cfg.plugins.push(new webpack.ContextReplacementPlugin(/quasar-framework[\/\\]i18n/,
            /en|pt-br|us|uk|es-mx/));
        }

        cfg.resolve.alias = {
          ...cfg.resolve.alias,
          ...webpackConf.resolve.alias,
        };
      },
    },

    devServer: {
      https: false,
      port: 8080,
      open: true,
    },

    animations: [],

    ssr: {
      pwa: false,
    },

    pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {},
      manifest: {
        name: packageJson.productName,
        short_name: packageJson.shortProductName,
        description: packageJson.description,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      },
    },

    cordova: {
      id: packageJson.cordovaId,
    },

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      bundler: 'packager',

      packager: {},

      builder: {
        appId: 'quasar',
      },

      nodeIntegration: true,
    },
    chainWebpack(chain, { isServer, isClient }) {
    },
    extendWebpack(cfg) {
    },
  };
});
