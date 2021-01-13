const normalizeWhiteSpaces = (
  value: string,
): string => value.trim().replace(/\s+/g, ' ');

export const getAllWords = (input: string): string => {
  const match = input.match(/\w/g);
  if (match) {
    return match.join('');
  }
  return '';
};

export const normalizeString:
(s: string) => string = (s: string):
string => normalizeWhiteSpaces(s)
  .normalize('NFC')
  .replace(/[\u0300-\u036F]/g, '')
  .replace(/[^\w-]+/gi, '');

export const fixStrings:
(s: string) => string = normalizeString;

export const cleanSpecialChars:
(s: string) => string = (s: string):
string => normalizeString(s)
  .replace(/[^\w-]+/g, ' ');

export const toCamel = (s: string):
string => fixStrings(s.replace(/([_-][a-z])/gi, (c) => c.toUpperCase()
  .replace(/[_-]/g, '')));

export const toSnakeCase = (s: string):
string => s.replace(/\W+/g, ' ')
  .split(/ |\B(?=[A-Z])/)
  .map((w: string) => w.toLowerCase())
  .join('_');

export const toUnderscore = (s: string):
string => fixStrings(s.split(/(?=[A-Z])/).join('_').toLocaleLowerCase());

export const cleanGraphQLError = (e: string | Error | undefined): string => {
  const graphQLErrorString = 'GraphQL error: ';
  const cleanMessage = (str: string) => (str.includes(graphQLErrorString) ? str.replace(graphQLErrorString, '') : str);

  if (e instanceof Error) {
    return cleanMessage(e.message);
  }
  return e ? cleanMessage(e) : (e || '');
};

export const toCapitalize = (s: string, lower = false) => (lower ? s.toLowerCase() : s).replace(/(?:^|\s|['([{])+\S/g,
  (match) => match.toUpperCase());

export const formatLocale = (locale: string) => {
  const [lang, country] = locale.split('-');

  return country ? `${lang}-${country.toUpperCase()}` : lang;
};

export const reticulatingSplines = (s: string[]): string => {
  const msgIndex: number = Math.floor((Math.random() * s.length));

  return s[msgIndex];
};
