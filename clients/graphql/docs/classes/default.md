[@quasar-enterprise-monorepo/graphql](../README.md) / [Exports](../modules.md) / default

# Class: default

## Hierarchy

* **default**

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [apolloCache](default.md#apollocache)
- [client](default.md#client)
- [context](default.md#context)
- [debug](default.md#debug)
- [httpLink](default.md#httplink)
- [middleware](default.md#middleware)

### Methods

- [addCache](default.md#addcache)
- [addContext](default.md#addcontext)
- [build](default.md#build)
- [createLink](default.md#createlink)
- [gql](default.md#gql)
- [onErrorMiddleware](default.md#onerrormiddleware)

## Constructors

### constructor

\+ **new default**(`options`: [*GraphQlDriverOptions*](../interfaces/graphqldriveroptions.md)): [*default*](default.md)

#### Parameters:

Name | Type |
------ | ------ |
`options` | [*GraphQlDriverOptions*](../interfaces/graphqldriveroptions.md) |

**Returns:** [*default*](default.md)

Defined in: clients/graphql/src/index.ts:58

## Properties

### apolloCache

• `Optional` **apolloCache**: *undefined* \| *ApolloCache*<NormalizedCacheObject\>

Defined in: clients/graphql/src/index.ts:50

___

### client

• **client**: *default*<NormalizedCacheObject\>

Defined in: clients/graphql/src/index.ts:54

___

### context

• `Private` `Optional` **context**: *undefined* \| ContextSetter

Defined in: clients/graphql/src/index.ts:58

___

### debug

• `Private` `Readonly` **debug**: *boolean*= false

Defined in: clients/graphql/src/index.ts:48

___

### httpLink

• **httpLink**: *ApolloLink*

Defined in: clients/graphql/src/index.ts:52

___

### middleware

• **middleware**: [*contextArgument*](../modules.md#contextargument)[]

Defined in: clients/graphql/src/index.ts:56

## Methods

### addCache

▸ **addCache**(`cacheModule`: *ApolloCache*<NormalizedCacheObject\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`cacheModule` | *ApolloCache*<NormalizedCacheObject\> |

**Returns:** *void*

Defined in: clients/graphql/src/index.ts:88

___

### addContext

▸ **addContext**(`callBack`: [*contextArgument*](../modules.md#contextargument)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`callBack` | [*contextArgument*](../modules.md#contextargument) |

**Returns:** *void*

Defined in: clients/graphql/src/index.ts:98

___

### build

▸ **build**(`clientOptions`: [*ApolloOptions*](../interfaces/apollooptions.md)<NormalizedCacheObject\>): *default*<NormalizedCacheObject\>

#### Parameters:

Name | Type |
------ | ------ |
`clientOptions` | [*ApolloOptions*](../interfaces/apollooptions.md)<NormalizedCacheObject\> |

**Returns:** *default*<NormalizedCacheObject\>

Defined in: clients/graphql/src/index.ts:102

___

### createLink

▸ **createLink**(`linkOptions`: Options): *void*

#### Parameters:

Name | Type |
------ | ------ |
`linkOptions` | Options |

**Returns:** *void*

Defined in: clients/graphql/src/index.ts:92

___

### gql

▸ `Static`**gql**(`query`: *string*): DocumentNode

#### Parameters:

Name | Type |
------ | ------ |
`query` | *string* |

**Returns:** DocumentNode

Defined in: clients/graphql/src/index.ts:84

___

### onErrorMiddleware

▸ `Static`**onErrorMiddleware**(): *function*

**Returns:** *function*

Defined in: clients/graphql/src/index.ts:80
