---
to: src/store/modules/<%= h.changeCase.camel(name) %>/mutations.ts
---
import { MutationTree } from 'vuex';
import BaseMutation from '@quasar-enterprise-monorepo/base-store/src/store/modules/base/mutations';
import { <%= h.changeCase.pascal(name) %>StateInterface } from './state';
import TYPE from './types';

const mutations: MutationTree<<%= h.changeCase.pascal(name) %>StateInterface> = {
  ...BaseMutation,
};

export default mutations;
