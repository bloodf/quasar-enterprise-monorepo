import { mountQuasarOptions as mQO } from './mountQuasarOptions';
import { mountFactory as mF } from './mountFactory';
import { mountWrapper as mW } from './mountWrapper';
import { createI18n as cI18n } from './createI18n';
import { createVuex as cVuex } from './createVuex';

export const mountQuasarOptions = mQO;
export const mountFactory = mF;
export const mountWrapper = mW;
export const createI18n = cI18n;
export const createVuex = cVuex;

export default {
  mountQuasarOptions,
  mountFactory,
  mountWrapper,
  createI18n,
  createVuex,
};
