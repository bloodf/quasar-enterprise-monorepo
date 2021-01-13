import { requiredRoutes } from 'src/index';

describe('Vue Router Utils Test', () => {
  it('Checks if the requiredRoutes is working', () => {
    expect(typeof requiredRoutes).toBe('function');
  });
});
