/* istanbul ignore file */
import { boot } from 'quasar/wrappers';
import Loadable from 'vue-loadable';
import { StoreInterface } from 'src/store';

export default boot<StoreInterface>(({ Vue }) => {
  Vue.use(Loadable);
});
