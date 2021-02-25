import {
  phoneToIntlMX,
} from 'src/mexico';

describe('Text Utils Mexico Tests', () => {
  it('Check if phoneToIntlMX Works', () => {
    expect(phoneToIntlMX('(11) 99999-9999')).toBe('5211999999999');
  });
});
