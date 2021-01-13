import { MutationTree } from 'vuex';
import BaseMutation from '@quasar-enterprise-monorepo/base-store/src/store/modules/base/mutations';
import { ExampleStateInterface } from './state';
import TYPE from './types';

export interface DefineExampleMutation {
  type: string;
  example: string;
}
function defineExample(
  state: ExampleStateInterface,
  payload: DefineExampleMutation,
) {
  state.data.example = payload.example;
}

const mutations: MutationTree<ExampleStateInterface> = {
  ...BaseMutation,
  [TYPE.EXAMPLE]: defineExample,
};

export default mutations;
