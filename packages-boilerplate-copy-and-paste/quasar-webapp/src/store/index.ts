/* istanbul ignore file */
import Vuex, { Store } from 'vuex';
import { store } from 'quasar/wrappers';
import requiredModules from '@quasar-enterprise-monorepo/vuex-utils/src/requiredModules';
import { RootState } from 'store/rootState';

export type StoreInterface = Store<RootState>

export default store(({ Vue }) => {
  Vue.use(Vuex);

  return new Vuex.Store({
    modules: requiredModules(require.context(
      './modules',
      true,
      /index+\.(?:js|jsx|ts|tsx)$/i,
      'sync',
    )),
    strict: !!process.env.DEV, // enable strict mode (adds overhead!) for dev mode only
  });
});
