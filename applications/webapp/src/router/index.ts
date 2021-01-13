import VueRouter from 'vue-router';
import { route } from 'quasar/wrappers';
import routes from './routerManager';

export default route(({ Vue }) => {
  Vue.use(VueRouter);

  return new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });
});
