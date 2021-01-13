import BaseTypes from '@quasar-enterprise-monorepo/base-store/src/store/modules/base/types';

export enum Mutations {
  EXAMPLE = 'EXAMPLE',
}

const mutations = {
  ...BaseTypes,
  ...Mutations,
};

export default mutations;
