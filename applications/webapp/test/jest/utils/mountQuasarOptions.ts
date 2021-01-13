/* eslint-disable @typescript-eslint/no-explicit-any */
import * as All from 'quasar';
import dateTimeFormats from 'src/i18n/dateTimeFormats';
import messages from 'src/i18n';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { MountQuasarOptions } from '@quasar-enterprise-monorepo/quasar-testing/src/models';
import { createI18n, mountQuasarOptions } from '@quasar-enterprise-monorepo/quasar-testing/src';
import QuasarConfig from '@quasar-enterprise-monorepo/quasar-testing/src/quasar';

const { Quasar } = All;

Vue.use(Quasar, QuasarConfig);

Vue.use(VueI18n);

export default (options: MountQuasarOptions = {}) => {
  const newOptions: MountQuasarOptions = {
    ...options,
    i18n: createI18n({
      lang: 'pt-br',
      messages,
      dateTimeFormats,
    }),
  };

  return mountQuasarOptions(newOptions);
};
