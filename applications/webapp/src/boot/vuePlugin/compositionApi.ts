import VueCompositionApi from '@vue/composition-api';
import { boot } from 'quasar/wrappers';
import { StoreInterface } from 'src/store';

export default boot<StoreInterface>(({ Vue }) => {
  Vue.use(VueCompositionApi);
});
