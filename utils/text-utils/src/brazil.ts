import { onlyNumbers } from './numeric';

export const formatToPhoneBr = (
  value: string,
): string => (
  onlyNumbers(value).replace(/(\d{1,2})/, '($1')
    .replace(/(\(\d{2})(\d{1,4})/, '$1) $2')
    .replace(/( \d{4})(\d{1,4})/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
);

export const clearPhoneBR = (sN: string | number, formatted = false): string => {
  const basePhone = onlyNumbers(`${sN}`);
  const phone = ((basePhone.length >= 12) ? basePhone.slice(2) : basePhone);

  return formatted ? formatToPhoneBr(phone) : phone;
};

export const formatToCEP = (value: string): string => (onlyNumbers(value).replace(/(\d{5})(\d{1,3})/, '$1-$2'));

export const phoneToIntlBR = (phone: string): string => `55${onlyNumbers(phone)}`;
