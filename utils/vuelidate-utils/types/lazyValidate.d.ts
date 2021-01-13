import { ValidationRule } from 'vuelidate/lib/validators';
declare type ValidatorBase = ((value: string) => boolean) | ValidationRule | (() => ValidationRule);
export declare function lazyValidate(validator: ValidatorBase, delay: number): (value: any) => boolean;
export default lazyValidate;
