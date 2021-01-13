import Vuelidate from 'vuelidate';
import { boot } from 'quasar/wrappers';
import { StoreInterface } from 'src/store';

export default boot<StoreInterface>(({ Vue }) => {
  Vue.use(Vuelidate);
});
