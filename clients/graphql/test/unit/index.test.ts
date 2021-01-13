import { ApolloLink } from 'apollo-link';
import ApolloClient from 'apollo-client';
import GraphQlDriver from '../../src';

describe('Test GraphQLDriver', () => {
  it('check if the class mounts', () => {
    const graphql = new GraphQlDriver({
      debug: false,
    });
    expect(graphql).toBeInstanceOf(GraphQlDriver);
  });

  it('check if the createLink works', () => {
    const graphql = new GraphQlDriver({
      debug: false,
    });

    graphql.createLink({
      uri: '/',
    });

    expect(graphql.httpLink).toBeInstanceOf(ApolloLink);
  });

  it('check if the build works', () => {
    const graphql = new GraphQlDriver({
      debug: false,
    });

    graphql.createLink({
      uri: '/',
    });

    const client = graphql.build({
      name: 'Teste',
      version: '1.0',
    });

    expect(client).toBeInstanceOf(ApolloClient);
  });
});
