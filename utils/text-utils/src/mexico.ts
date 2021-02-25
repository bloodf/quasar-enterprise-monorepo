import { onlyNumbers } from './numeric';

export const phoneToIntlMX = (phone: string): string => `52${onlyNumbers(phone)}`;
