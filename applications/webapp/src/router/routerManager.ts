import { RouteConfig } from 'vue-router';
import requiredRoutes from '@quasar-enterprise-monorepo/vue-router-utils/src/requiredRoutes';
import ErrorRoutes from './routes/errors';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/base/ApplicationWrapper.vue'),
    children: [
      {
        name: 'Index',
        path: '',
        meta: {
          publicRoute: true,
        },
        component: () => import('pages/Index.vue'),
      },
    ],
  },
  ...requiredRoutes(require.context('./routes', true, /^(?!.*index)(?!.*errors)(?!.*test).*\.(js|ts)$/is, 'sync')),
];

export default [...routes, ...ErrorRoutes];
