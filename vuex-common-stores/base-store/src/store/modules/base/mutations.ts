import { MutationTree } from 'vuex';
import { BaseError, BaseStateInterface } from './state';
import TYPE from './types';

const mutateError = (state: BaseStateInterface, payload: BaseError) => {
  switch (typeof payload) {
    case 'string':
      state.error = payload;
      break;
    case 'object':
      if (payload instanceof Error) {
        state.error = payload;
      }
      break;
    default:
      state.error = payload;
      break;
  }
  state.pending = !state.pending;
};

const mutateLoading = (state: BaseStateInterface) => {
  state.pending = !state.pending;
};

const mutateLoaded = (state: BaseStateInterface) => {
  state.pending = false;
};

const mutations: MutationTree<BaseStateInterface> = {
  [TYPE.ERROR]: mutateError,
  [TYPE.LOADING]: mutateLoading,
  [TYPE.LOADED]: mutateLoaded,
};

export default mutations;
