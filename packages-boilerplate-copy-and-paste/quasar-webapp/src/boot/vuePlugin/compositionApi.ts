/* istanbul ignore file */
import { boot } from 'quasar/wrappers';
import VueCompositionApi from '@vue/composition-api';
import { StoreInterface } from 'src/store';

export default boot<StoreInterface>(({ Vue }) => {
  Vue.use(VueCompositionApi);
});
