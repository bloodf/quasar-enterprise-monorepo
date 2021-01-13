import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from 'src/i18n';
import { boot } from 'quasar/wrappers';
import { StoreInterface } from 'src/store';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pt-br',
  fallbackLocale: 'pt-br',
  messages,
});

export default boot<StoreInterface>(({ app }) => {
  Object.assign(app, { i18n });
});

export { i18n };
