import { toCamel } from '@quasar-enterprise-monorepo/text-utils/src/string';
import { ModuleTree } from 'vuex';

interface RequireContext {
  keys(): string[];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  id: string;
}

export function requiredModules<S>(requireModule: RequireContext): ModuleTree<S> {
  const modules: ModuleTree<S> = {};

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

  return modules;
}

export default requiredModules;
