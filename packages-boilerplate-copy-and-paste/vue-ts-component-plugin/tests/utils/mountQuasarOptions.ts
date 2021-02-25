/* eslint-disable @typescript-eslint/no-explicit-any */
import * as All from 'quasar';
import Vue from 'vue';
import { MountQuasarOptions } from '@quasar-enterprise-monorepo/quasar-testing/src/models';
import { mountQuasarOptions } from '@quasar-enterprise-monorepo/quasar-testing/src';
import QuasarConfig from '@quasar-enterprise-monorepo/quasar-testing/src/quasar';

const { Quasar } = All;

Vue.use(Quasar, QuasarConfig);

export default (options: MountQuasarOptions = {}) => {
  const newOptions: MountQuasarOptions = {
    ...options,
  };

  return mountQuasarOptions(newOptions);
};
