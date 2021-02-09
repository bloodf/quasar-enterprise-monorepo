import { createServer } from 'miragejs';
import { models } from 'src/db/models';
import { factories } from 'src/factories';
import { seeds } from 'src/seeds';
import { routes } from 'src/routes';

export function makeServer({ environment = 'development' } = {}) {
  const serverBase = createServer({
    environment,

    models,

    factories,

    seeds,

    routes,
  });

  return serverBase;
}
