import TextUtils from 'src/index';

const {
  phoneToIntlMX,
  phoneToIntlBR,
  formatToCEP,
  cleanGraphQLError,
  cleanSpecialChars,
  clearPhoneBR,
  fixStrings,
  formatLocale,
  formatToPhoneBr,
  getAllWords,
  normalizeString,
  onlyNumbers,
  reticulatingSplines,
  toCamel,
  toCapitalize,
  toSnakeCase,
  toUnderscore,
} = TextUtils;

describe('Text Utils Index Tests', () => {
  it('Check if phoneToIntlMX is a function', () => {
    expect(typeof phoneToIntlMX).toBe('function');
  });

  it('Check if phoneToIntlBR is a function', () => {
    expect(typeof phoneToIntlBR).toBe('function');
  });

  it('Check if formatToCEP is a function', () => {
    expect(typeof formatToCEP).toBe('function');
  });

  it('Check if cleanGraphQLError is a function', () => {
    expect(typeof cleanGraphQLError).toBe('function');
  });

  it('Check if cleanSpecialChars is a function', () => {
    expect(typeof cleanSpecialChars).toBe('function');
  });

  it('Check if clearPhoneBR is a function', () => {
    expect(typeof clearPhoneBR).toBe('function');
  });

  it('Check if fixStrings is a function', () => {
    expect(typeof fixStrings).toBe('function');
  });

  it('Check if formatLocale is a function', () => {
    expect(typeof formatLocale).toBe('function');
  });

  it('Check if formatToPhoneBr is a function', () => {
    expect(typeof formatToPhoneBr).toBe('function');
  });

  it('Check if getAllWords is a function', () => {
    expect(typeof getAllWords).toBe('function');
  });

  it('Check if normalizeString is a function', () => {
    expect(typeof normalizeString).toBe('function');
  });

  it('Check if onlyNumbers is a function', () => {
    expect(typeof onlyNumbers).toBe('function');
  });

  it('Check if reticulatingSplines is a function', () => {
    expect(typeof reticulatingSplines).toBe('function');
  });

  it('Check if toCamel is a function', () => {
    expect(typeof toCamel).toBe('function');
  });

  it('Check if toCapitalize is a function', () => {
    expect(typeof toCapitalize).toBe('function');
  });

  it('Check if toSnakeCase is a function', () => {
    expect(typeof toSnakeCase).toBe('function');
  });

  it('Check if toUnderscore is a function', () => {
    expect(typeof toUnderscore).toBe('function');
  });
});
