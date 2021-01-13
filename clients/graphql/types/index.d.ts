import ApolloClient from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloLink, GraphQLRequest } from 'apollo-link';
import { FetchOptions } from 'apollo-link-http/lib/httpLink';
import { ApolloCache } from 'apollo-cache';
import { onError } from 'apollo-link-error';
import { Resolvers } from 'apollo-client/core/types';
import { DocumentNode } from 'graphql';
import { FragmentMatcher } from 'apollo-client/core/LocalState';
import { DefaultOptions } from 'apollo-client/ApolloClient';
export declare type contextArgument = (operation: GraphQLRequest, prevContext: any) => Promise<any> | any;
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
    clientOptions?: ApolloOptions<NormalizedCacheObject>;
    buildOnConstruct?: boolean;
    middleware?: contextArgument[];
}
declare class GraphQlDriver {
    private readonly debug;
    apolloCache?: ApolloCache<NormalizedCacheObject>;
    httpLink: ApolloLink;
    client: ApolloClient<NormalizedCacheObject>;
    middleware: contextArgument[];
    private context?;
    constructor(options: GraphQlDriverOptions);
    static onErrorMiddleware(): typeof onError;
    static gql(query: string): DocumentNode;
    addCache(cacheModule: ApolloCache<NormalizedCacheObject>): void;
    createLink(linkOptions: FetchOptions): void;
    addContext(callBack: contextArgument): void;
    build(clientOptions: ApolloOptions<NormalizedCacheObject>): ApolloClient<NormalizedCacheObject>;
}
export default GraphQlDriver;
