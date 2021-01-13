import Loadable from 'vue-loadable';
import { boot } from 'quasar/wrappers';
import { StoreInterface } from 'src/store';

export default boot<StoreInterface>(({ Vue }) => {
  Vue.use(Loadable);
});
