/* istanbul ignore file */
import { boot } from 'quasar/wrappers';
import Vuelidate from 'vuelidate';
import { StoreInterface } from 'src/store';

export default boot<StoreInterface>(({ Vue }) => {
  Vue.use(Vuelidate);
});
