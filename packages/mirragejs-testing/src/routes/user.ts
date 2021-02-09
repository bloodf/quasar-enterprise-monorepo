import { Server } from 'miragejs';
import { SchemaModelsDefinition } from 'src/interfaces/schema';
// eslint-disable-next-line import/extensions,import/no-unresolved
import Schema from 'miragejs/orm/schema';

export enum UserApiRoutes {
  BaseUrl = '/users',
  ListUsers = '/users',
  CreateUser = '/users',
  UpdateUser = '/users/:id',
  DeleteUser = '/users/:id',
}

export const createUserRoute = (server: Server) => {
  server.get(UserApiRoutes.ListUsers, (schema: Schema<SchemaModelsDefinition>) => schema.users.all());
};
