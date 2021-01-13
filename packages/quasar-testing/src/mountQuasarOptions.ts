/* eslint-disable @typescript-eslint/no-explicit-any */
import * as All from 'quasar';
import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueI18n from 'vue-i18n';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { Cookies } from 'quasar';
import { createLocalVue } from '@vue/test-utils';
import { qLayoutInjections } from '@quasar/quasar-app-extension-testing-unit-jest';
import QuasarConfig from './quasar';
import { MountQuasarOptions } from './models';
import { createVuex } from './createVuex';
import { createI18n } from './createI18n';

const { Quasar } = All;

Vue.use(Quasar, QuasarConfig);

Vue.use(VueI18n);

const mockSsrContext = () => ({
  req: {
    headers: {},
  },
  res: {
    setHeader: () => null,
  },
  url: '',
});

export function mountQuasarOptions(options: MountQuasarOptions = {}) {
  const localVue = () => {
    const localInstance = createLocalVue();

    localInstance.use(VueCompositionApi);

    localInstance.use(Vuex);

    if (!options.disableRouter) {
      localInstance.use(VueRouter);
    }

    localInstance.use(Vuelidate);

    (options.plugins ?? []).forEach((pluginDescriptor) => {
      if (!Array.isArray(pluginDescriptor)) {
        // eslint-disable-next-line no-param-reassign
        pluginDescriptor = [pluginDescriptor];
      }

      const [plugin, ...pluginOptions] = pluginDescriptor;

      localInstance.use(plugin, ...pluginOptions);
    });

    (options.components ?? []).forEach((componentDescriptor) => {
      const [componentName, componentFile] = componentDescriptor;

      localInstance.component(componentName, componentFile);
    });

    return localInstance;
  };

  if (options) {
    const ssrContext = options.ssr ? mockSsrContext() : null;

    if (options.cookies) {
      const cookieStorage = ssrContext ? Cookies.parseSSR(ssrContext) : Cookies;
      const { cookies } = options;
      Object.entries(cookies).forEach(([key, value]) => {
        cookieStorage.set(key, value);
      });
    }
  }

  const jestFn = () => jest.fn();

  const baseOptions = {
    mount: {
      type: 'shallow',
      propsData: {},
      ...options.mount,
    },
    propsData: {
      ...options.propsData,
    },
    localVue: localVue(),
    store: options.store ?? createVuex(options.vuexModule),
    router: options.disableRouter ? undefined : (options.router ?? (() => new VueRouter())()),
    i18n: options.i18n ?? createI18n({ lang: options.lang || 'pt-br' }),
    mocks: {
      ...(options.mocks ?? {}),
      $segment: {
        page: jestFn,
        track: jestFn,
        identify: jestFn,
      },
    },
  };

  if (options.layout) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    baseOptions.provide = qLayoutInjections();
  }
  return baseOptions;
}
