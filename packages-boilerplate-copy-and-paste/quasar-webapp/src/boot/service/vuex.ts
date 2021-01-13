import { boot } from 'quasar/wrappers';
import { StoreInterface } from 'src/store';
// eslint-disable-next-line import/no-mutable-exports
let $store: StoreInterface;

export default boot<StoreInterface>(({ app }): void => {
  if (app.store) {
    $store = app.store;
  }
});

export { $store };
