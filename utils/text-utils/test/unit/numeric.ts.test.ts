import {
  onlyNumbers,
} from '../../src/numeric';

describe('Text Utils Numeric Tests', () => {
  it('Check if onlyNumbers Works', () => {
    expect(onlyNumbers('Teste_do_Camel_Case 12345')).toEqual('12345');
  });
});
