import { ValidationRule } from 'vuelidate/lib/validators';

type ValidatorBase = ((value: string) => boolean) | ValidationRule | (() => ValidationRule);

export function lazyValidate(validator: ValidatorBase, delay: number) {
  let currentTimer: number | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let currentPromiseReject: null | ((reason?: any) => void) = null;

  const debounce = () => new Promise((resolve, reject) => {
    currentTimer = window.setTimeout(() => {
      currentTimer = null;
      currentPromiseReject = null;
      resolve(false);
    }, delay);
    currentPromiseReject = reject;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (value: any) => {
    if (currentTimer && currentPromiseReject !== null) {
      currentPromiseReject(new Error('replaced'));
      clearTimeout(currentTimer);
      currentTimer = null;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return validator.call(this, value, debounce);
  };
}

export default lazyValidate;
