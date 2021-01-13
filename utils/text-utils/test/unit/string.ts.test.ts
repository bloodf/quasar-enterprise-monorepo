import {
  getAllWords,
  fixStrings,
  toCamel,
  toSnakeCase,
  toUnderscore,
  toCapitalize,
  formatLocale,
  reticulatingSplines,
  cleanGraphQLError,
  cleanSpecialChars,
  normalizeString,
} from 'src/string';

describe('Text Utils Tests', () => {
  it('Check if getAllWords Works', () => {
    expect(getAllWords('Teste do Get All Words')).toEqual('TestedoGetAllWords');
    expect(getAllWords(';')).toEqual('');
  });

  it('Check if CameCase Works', () => {
    expect(toCamel('Teste_do_Camel_Case')).toEqual('TesteDoCamelCase');
  });

  it('Check if SnakeCase Works', () => {
    expect(toSnakeCase('Teste do snake case')).toEqual('teste_do_snake_case');
  });

  it('Check if UnderScore Works', () => {
    expect(toUnderscore('TesteDoUnderScore')).toEqual('teste_do_under_score');
  });

  it('Check if toCapitalize Works', () => {
    expect(toCapitalize('teste do capitalize', true)).toEqual('Teste Do Capitalize');
  });

  it('Check if fixStrings Works', () => {
    expect(fixStrings('teste    do fíx      strîñgs works')).toEqual('testedofxstrgsworks');
  });

  it('Check if formatLocale Works', () => {
    expect(formatLocale('pt-br')).toEqual('pt-BR');
  });

  it('Check if normalizeString Works', () => {
    expect(normalizeString('çã')).toEqual('');
  });

  it('Check if cleanSpecialChars Works', () => {
    expect(cleanSpecialChars('ção')).toEqual('o');
  });

  it('Check if cleanGraphQLError Works', () => {
    expect(cleanGraphQLError('GraphQL error: test')).toEqual('test');
    expect(cleanGraphQLError(new Error('GraphQL error: test'))).toEqual('test');
    const a = undefined;
    expect(cleanGraphQLError(a)).toEqual('');
  });

  it('Check if reticulatingSplines Works', () => {
    const messages = ['a', 'b', 'c'];
    const message = reticulatingSplines(messages);
    expect(messages.includes(message)).toBeTruthy();
  });
});
