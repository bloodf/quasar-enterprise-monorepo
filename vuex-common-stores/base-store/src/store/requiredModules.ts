import { toCamel } from '@quasar-enterprise-monorepo/text-utils/src/string';

const requireModule = require.context('./modules', true, /index+\.(?:js|jsx|ts|tsx)$/i, 'sync');
const modules = {};

requireModule.keys().forEach((fileName: string) => {
  const moduleName: string = toCamel(fileName.replace(/index+\.(?:js|jsx|ts|tsx)$/gi, ''));
  if (moduleName) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    modules[moduleName] = {
      namespaced: true,
      ...requireModule(fileName).default,
    };
  }
});

export default modules;
