import Vue from 'vue';
import VueI18n from 'vue-i18n';

export const createI18n = ({ lang = 'pt-br', messages = {}, dateTimeFormats = {} }) => {
  Vue.use(VueI18n);

  return new VueI18n({
    locale: lang,
    fallbackLocale: lang,
    messages,
    dateTimeFormats,
  });
};
