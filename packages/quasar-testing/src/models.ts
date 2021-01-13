/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue, { PluginFunction, PluginObject } from 'vue';
import {
  ActionTree,
  GetterTree,
  ModuleTree,
  MutationTree,
} from 'vuex';
import { mount } from '@vue/test-utils';

export type VueMountOptions = Parameters<typeof mount>[1];

export type VueClass<V extends Vue> = (new (...args: any[]) => V) & typeof Vue;

// `PluginFunction<any | never>` won't work either because it get swallowed by the `any` part
type VuePlugin =
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  | PluginObject<any>
  | PluginObject<never>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | PluginFunction<any>
  | PluginFunction<never>;

type VuePluginOptions = any[];

interface Module<S, R> {
  namespaced?: boolean;
  state?: S | (() => S);
  getters?: GetterTree<S, R>;
  actions?: ActionTree<S, R>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<R>;
}

export interface VuexModule<S, R> {
  name: string;
  module: Module<S, R>
}

export interface QuasarMountOptions {
  mount?: {
    type?: 'full' | 'shallow';
  } & VueMountOptions;
  lang?: string;
  ssr?: boolean;
  cookies?: Record<string, any>;
  propsData?: Record<string, any>;
}

export interface MountQuasarOptions extends QuasarMountOptions{
  i18n?: any;
  store?: any;
  disableRouter?: boolean;
  router?: any;
  layout?: boolean;
  mocks?: Record<string, any>;
  plugins?: (VuePlugin | [VuePlugin, ...VuePluginOptions])[];
  components?: ([string, any])[];
  vuexModule?: VuexModule<any, any>[];
}
