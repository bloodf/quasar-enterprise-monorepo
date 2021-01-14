import { Model, Factory, Server } from 'miragejs';

export enum UserApiRoutes {
  ListUsers = '/users',
  CreateUser = '/users',
  UpdateUser = '/users',
  DeleteUser = '/users',
}

export const userModel = Model.extend({});

export const userFactory = Factory.extend({
  title(i) {
    return `Movie ${i}`;
  },

  releaseDate() {
    return faker.date.past().toLocaleDateString();
  },

  genre(i) {
    const genres = ['Sci-Fi', 'Drama', 'Comedy'];

    return genres[i % genres.length];
  },
});

export const createUserRoute = (server: Server) => {
  server.get(UserApiRoutes.ListUsers, (handler) => {});
};
