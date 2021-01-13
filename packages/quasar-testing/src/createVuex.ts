import Vue from 'vue';
import Vuex from 'vuex';
import { VuexModule } from './models';

export const createVuex = (vuexModules: VuexModule<any, any>[] = [{ name: '', module: {} }]) => {
  Vue.use(Vuex);
  const modules = {};

  vuexModules
    .filter((m) => m.name)
    .forEach((m): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
      modules[m.name] = {
        namespaced: true,
        ...m.module,
      };
    });

  return new Vuex.Store({
    modules,
  });
};
