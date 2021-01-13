---
to: src/store/modules/<%= h.changeCase.camel(name) %>/getters.ts
---
import { RootState } from 'store/rootState';
import { GetterTree } from 'vuex';
import BaseGetters, { BaseGettersInterface } from '@quasar-enterprise-monorepo/base-store/src/store/modules/base/getters';
import { <%= h.changeCase.pascal(name) %>StateInterface } from './state';

export interface <%= h.changeCase.pascal(name) %>Getters extends BaseGettersInterface {
  example: object;
}

const getters: GetterTree<<%= h.changeCase.pascal(name) %>StateInterface, RootState> = {
  ...BaseGetters,
  example: (state: <%= h.changeCase.pascal(name) %>StateInterface): object => state.data,
};

export default getters;
