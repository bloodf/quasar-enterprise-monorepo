import { i18n } from 'boot/vuePlugin/i18n';
import { formatLocale } from '@quasar-enterprise-monorepo/text-utils/src/string';

export function getLocale() {
  return formatLocale(i18n.locale);
}

export function setLocale(locale: string) {
  i18n.locale = locale;
}

export default i18n;
