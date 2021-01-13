import { GetterTree } from 'vuex';
import { BaseStateInterface } from './state';

export type BaseGetterError = Error | null | string;

export type BaseGetterPending = boolean;

export interface BaseGettersInterface {
  pending: BaseGetterPending;
  error?: BaseGetterError;
}

const getters: GetterTree<BaseStateInterface, BaseStateInterface> = {
  pending: (state: BaseStateInterface) => state.pending,
  error: (state: BaseStateInterface) => state.error,
};

export default getters;
