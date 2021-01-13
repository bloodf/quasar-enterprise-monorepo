import { requiredModules } from 'src/index';

describe('Vuex Utils Test', () => {
  it('Checks if the requiredModules is working', () => {
    expect(typeof requiredModules).toBe('function');
  });
});
