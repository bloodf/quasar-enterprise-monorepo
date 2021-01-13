export type BaseError = string | null | undefined | Error;

export const baseOmitKeys = [
  'created_at',
  '__typename',
  'typename',
];

export interface BaseStateInterface {
  pending: boolean;
  error?: BaseError;
}

const baseState = {
  pending: false,
  error: null,
};

export default baseState;
