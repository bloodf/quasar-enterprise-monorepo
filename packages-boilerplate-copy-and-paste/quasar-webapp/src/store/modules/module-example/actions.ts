import { RootState } from 'store/rootState';
import { ActionContext, ActionTree } from 'vuex';
import { ExampleStateInterface } from './state';
import TYPE from './types';
import { DefineExampleMutation } from './mutations';

export type ActionExampleAction = (payload: string) => Promise<string>;

async function exampleAction(
  { commit }: ActionContext<ExampleStateInterface, RootState>,
  payload: string,
): Promise<string> {
  try {
    commit(TYPE.LOADING);

    commit <DefineExampleMutation>({
      type: TYPE.EXAMPLE,
      example: payload,
    });

    return Promise.resolve(payload);
  } catch (error) {
    commit(TYPE.ERROR, error);
    return Promise.reject(error);
  }
}

const actions: ActionTree<ExampleStateInterface, RootState> = {
  exampleAction,
};

export default actions;
