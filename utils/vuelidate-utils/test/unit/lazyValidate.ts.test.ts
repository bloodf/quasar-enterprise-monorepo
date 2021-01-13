import { lazyValidate } from 'src/lazyValidate';

describe('lazyValidate Test', () => {
  it('Checks if the lazyValidate is returning', () => {
    expect(lazyValidate(() => true, 100)).toBeTruthy();
  });
});
