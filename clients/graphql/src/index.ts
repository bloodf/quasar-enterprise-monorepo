import ApolloClient, { ApolloClientOptions } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ContextSetter, setContext } from 'apollo-link-context';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import {
  ApolloLink,
  GraphQLRequest,
} from 'apollo-link';
import { FetchOptions } from 'apollo-link-http/lib/httpLink';
import { ApolloCache } from 'apollo-cache';
import { onError } from 'apollo-link-error';
import { Resolvers } from 'apollo-client/core/types';
import { DocumentNode } from 'graphql';
import { FragmentMatcher } from 'apollo-client/core/LocalState';
import { DefaultOptions } from 'apollo-client/ApolloClient';
import gql from 'graphql-tag';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type contextArgument = (operation: GraphQLRequest, prevContext: any) => Promise<any> | any

export interface ApolloOptions<TCacheShape> {
  link?: ApolloLink;
  cache?: ApolloCache<TCacheShape>;
  ssrForceFetchDelay?: number;
  ssrMode?: boolean;
  connectToDevTools?: boolean;
  queryDeduplication?: boolean;
  defaultOptions?: DefaultOptions;
  assumeImmutableResults?: boolean;
  resolvers?: Resolvers | Resolvers[];
  typeDefs?: string | string[] | DocumentNode | DocumentNode[];
  fragmentMatcher?: FragmentMatcher;
  name?: string;
  version?: string;
}

export interface GraphQlDriverOptions {
  debug?: boolean;
  linkOptions?: FetchOptions;
  addContext?: contextArgument;
  // eslint-disable-next-line no-use-before-define
  clientOptions?: ApolloOptions<NormalizedCacheObject>;
  buildOnConstruct?: boolean;
  middleware?: contextArgument[];
}

class GraphQlDriver {
  private readonly debug: boolean = false;

  public apolloCache?: ApolloCache<NormalizedCacheObject>;

  public httpLink!: ApolloLink;

  public client!: ApolloClient<NormalizedCacheObject>;

  public middleware: contextArgument[] = [];

  private context?: ContextSetter;

  constructor(options: GraphQlDriverOptions) {
    this.debug = options?.debug || false;

    if (options.linkOptions && Object.keys(options.linkOptions).length > 0) {
      this.createLink(options.linkOptions);
    }

    if (options.addContext && typeof options.addContext === 'function') {
      this.addContext(options.addContext);
    }

    if (options.buildOnConstruct && options.clientOptions) {
      this.build(options.clientOptions);
    }

    if (options.middleware) {
      this.middleware = options.middleware;
    }
  }

  public static onErrorMiddleware() {
    return onError;
  }

  public static gql(query: string): DocumentNode {
    return gql`${query}`;
  }

  public addCache(cacheModule: ApolloCache<NormalizedCacheObject>): void {
    this.apolloCache = cacheModule;
  }

  public createLink(linkOptions: FetchOptions): void {
    this.httpLink = createHttpLink({
      ...linkOptions,
    });
  }

  public addContext(callBack: contextArgument): void {
    this.context = callBack;
  }

  public build(clientOptions: ApolloOptions<NormalizedCacheObject>):
  ApolloClient<NormalizedCacheObject> {
    const apolloOptions: ApolloClientOptions<NormalizedCacheObject> = {
      ...clientOptions,
      connectToDevTools: this.debug,
      cache: new InMemoryCache(),
    };

    let link: ApolloLink = this.httpLink;

    if (this.apolloCache) {
      apolloOptions.cache = this.apolloCache;
    }

    if (this.context) {
      link = setContext(this.context).concat(this.httpLink);
    }

    if (this.middleware.length > 0) {
      if (!this.context) {
        link = setContext(this.middleware[0]).concat(this.httpLink);
        this.middleware.shift();
      }

      this.middleware.forEach((mid) => {
        link = setContext(mid).concat(link);
      });
    }

    this.client = new ApolloClient({
      ...apolloOptions,
      link,
    });

    return this.client;
  }
}

export default GraphQlDriver;
