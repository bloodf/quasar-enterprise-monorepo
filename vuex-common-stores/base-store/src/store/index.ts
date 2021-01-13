import { LooseDictionary } from 'quasar';
import { VueConstructor } from 'vue';
import Vuex from 'vuex';
import modules from './requiredModules';

type StoreBootParams = {
  Vue: VueConstructor;
} & LooseDictionary;

export default ({ Vue }: StoreBootParams) => {
  Vue.use(Vuex);

  return new Vuex.Store({
    modules,
    strict: !!process.env.DEV, // enable strict mode (adds overhead!) for dev mode only
  });
};
