---
to: src/store/modules/<%= h.changeCase.camel(name) %>/actions.ts
---
import { RootState } from 'store/rootState';
import { ActionContext, ActionTree } from 'vuex';
import { <%= h.changeCase.pascal(name) %>StateInterface } from './state';
import TYPE from './types';

async function exampleAction(
  { commit }: ActionContext<<%= h.changeCase.pascal(name) %>StateInterface, RootState>,
  payload: string,
): Promise<any> {
  try {
    commit(TYPE.LOADING);

    return Promise.resolve('example');
  } catch (error) {
    commit(TYPE.ERROR, error);
    return Promise.reject(new Error('error'));
  }
}

const actions: ActionTree<<%= h.changeCase.pascal(name) %>StateInterface, RootState> = {
  exampleAction,
};

export default actions;
