import { RootState } from 'store/rootState';
import { GetterTree } from 'vuex';
import BaseGetters, { BaseGettersInterface } from '@quasar-enterprise-monorepo/base-store/src/store/modules/base/getters';
import { ExampleStateInterface } from './state';

type ExampleStringGetter = string;

export interface ExampleGetters extends BaseGettersInterface {
  example: ExampleStringGetter;
}

const getters: GetterTree<ExampleStateInterface, RootState> = {
  ...BaseGetters,
  example: (state: ExampleStateInterface): ExampleStringGetter => state.data.example,
};

export default getters;
