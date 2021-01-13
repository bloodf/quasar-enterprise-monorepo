---
to: src/store/modules/<%= h.changeCase.camel(name) %>/state.ts
---
import BaseState, { BaseStateInterface } from '@quasar-enterprise-monorepo/base-store/src/store/modules/base/state';

export interface <%= h.changeCase.pascal(name) %>StateInterface extends BaseStateInterface {
  data: object;
}

const baseState: <%= h.changeCase.pascal(name) %>StateInterface = {
  ...BaseState,
  data: {},
};

export default baseState;
