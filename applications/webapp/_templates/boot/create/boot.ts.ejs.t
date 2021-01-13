---
to: src/boot/<%= folder %>/<%= h.changeCase.camel(name) %>.ts
---
import { boot } from 'quasar/wrappers';
import { StoreInterface } from 'src/store';

export default boot<StoreInterface>((bootFileParams): void => {});
