declare const _default: {
    getAllWords: (input: string) => string;
    normalizeString: (s: string) => string;
    fixStrings: (s: string) => string;
    cleanSpecialChars: (s: string) => string;
    toCamel: (s: string) => string;
    toSnakeCase: (s: string) => string;
    toUnderscore: (s: string) => string;
    cleanGraphQLError: (e: string | Error | undefined) => string;
    toCapitalize: (s: string, lower?: boolean) => string;
    formatLocale: (locale: string) => string;
    reticulatingSplines: (s: string[]) => string;
    onlyNumbers: (s: string) => string;
};
export default _default;
