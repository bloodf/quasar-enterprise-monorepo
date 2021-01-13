export default [
  {
    path: '*',
    meta: {
      publicRoute: true,
    },
    component: () => import('pages/errors/404.vue'),
  }];
