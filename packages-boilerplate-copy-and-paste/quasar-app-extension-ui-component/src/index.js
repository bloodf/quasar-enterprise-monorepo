function extendConf(conf) {
  conf.boot.push('~@quasar-enterprise-monorepo/quasar-app-extension-validated-inputs/component/boot/register.ts');
  conf.build.transpileDependencies.push(/quasar-app-extension-validated-inputs[\\/]component/);
}

module.exports = (api) => {
  api.compatibleWith('quasar', '^1.0.0');
  api.compatibleWith('@quasar/app', '^1.0.0');
  api.extendQuasarConf(extendConf);
};
