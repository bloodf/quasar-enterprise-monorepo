import { Server } from 'miragejs';
import { createSchema } from 'src/db/schema';

export const seeds = (server: Server) => {
  createSchema(server);
};
