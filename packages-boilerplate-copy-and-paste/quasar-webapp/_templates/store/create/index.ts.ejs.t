---
to: src/store/modules/<%= h.changeCase.camel(name) %>/index.ts
---
import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';

export default {
  state,
  actions,
  mutations,
  getters,
};
