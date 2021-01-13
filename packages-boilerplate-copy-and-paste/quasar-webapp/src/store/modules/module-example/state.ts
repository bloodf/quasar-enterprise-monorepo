import BaseState, { BaseStateInterface } from '@quasar-enterprise-monorepo/base-store/src/store/modules/base/state';

export interface ExampleStateInterface extends BaseStateInterface {
  data: {
    example: string;
  };
}

const createBaseState = (): ExampleStateInterface => ({
  ...BaseState,
  data: {
    example: '',
  },
});

const baseState = createBaseState();

export default baseState;
