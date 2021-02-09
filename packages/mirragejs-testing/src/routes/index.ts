import { createUserRoute } from 'src/routes/user';

export function routes() {
  this.namespace = 'api';
  createUserRoute(this);
}
