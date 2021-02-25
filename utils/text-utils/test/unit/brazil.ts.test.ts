import {
  clearPhoneBR,
  formatToPhoneBr,
  phoneToIntlBR,
  formatToCEP,
} from 'src/brazil';

describe('Text Utils Brazil Tests', () => {
  it('Check if clearPhoneBR Works', () => {
    expect(clearPhoneBR('5561999999999')).toEqual('61999999999');

    expect(clearPhoneBR('5561999999999', true)).toEqual('(61) 99999-9999');

    expect(clearPhoneBR('556199999999')).toEqual('6199999999');

    expect(clearPhoneBR('556199999999', true)).toEqual('(61) 9999-9999');

    expect(clearPhoneBR('6199999999')).toEqual('6199999999');

    expect(clearPhoneBR('61999999999', true)).toEqual('(61) 99999-9999');
  });

  it('Check if formatToPhoneBr Works', () => {
    expect(formatToPhoneBr('6199999999')).toEqual('(61) 9999-9999');

    expect(formatToPhoneBr('61999999999')).toEqual('(61) 99999-9999');
  });

  it('Check if phoneToIntlBR Works', () => {
    expect(phoneToIntlBR('(11) 99999-9999')).toBe('5511999999999');
  });

  it('Check if formatToCEP Works', () => {
    expect(formatToCEP('12345123')).toBe('12345-123');
  });
});
