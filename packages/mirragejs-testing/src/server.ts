import { createServer, Model } from 'miragejs';
import { createUserRoute } from 'src/routes/user';

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create('user', { name: 'Bob' });
      server.create('user', { name: 'Alice' });
    },

    routes() {
      this.namespace = 'api';
      createUserRoute(this);
    },
  });

  return server;
}
