import { lazyValidate } from 'src/index';

describe('Vuelidate Utils Test', () => {
  it('Checks if the lazyValidate is working', () => {
    expect(typeof lazyValidate).toBe('function');
  });
});
