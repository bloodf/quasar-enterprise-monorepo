[@quasar-enterprise-monorepo/graphql](../README.md) / [Exports](../modules.md) / ApolloOptions

# Interface: ApolloOptions<TCacheShape\>

## Type parameters

Name |
------ |
`TCacheShape` |

## Hierarchy

* **ApolloOptions**

## Table of contents

### Properties

- [assumeImmutableResults](apollooptions.md#assumeimmutableresults)
- [cache](apollooptions.md#cache)
- [connectToDevTools](apollooptions.md#connecttodevtools)
- [defaultOptions](apollooptions.md#defaultoptions)
- [fragmentMatcher](apollooptions.md#fragmentmatcher)
- [link](apollooptions.md#link)
- [name](apollooptions.md#name)
- [queryDeduplication](apollooptions.md#querydeduplication)
- [resolvers](apollooptions.md#resolvers)
- [ssrForceFetchDelay](apollooptions.md#ssrforcefetchdelay)
- [ssrMode](apollooptions.md#ssrmode)
- [typeDefs](apollooptions.md#typedefs)
- [version](apollooptions.md#version)

## Properties

### assumeImmutableResults

• `Optional` **assumeImmutableResults**: *undefined* \| *boolean*

Defined in: clients/graphql/src/index.ts:29

___

### cache

• `Optional` **cache**: *undefined* \| *ApolloCache*<TCacheShape\>

Defined in: clients/graphql/src/index.ts:23

___

### connectToDevTools

• `Optional` **connectToDevTools**: *undefined* \| *boolean*

Defined in: clients/graphql/src/index.ts:26

___

### defaultOptions

• `Optional` **defaultOptions**: *undefined* \| DefaultOptions

Defined in: clients/graphql/src/index.ts:28

___

### fragmentMatcher

• `Optional` **fragmentMatcher**: *undefined* \| FragmentMatcher

Defined in: clients/graphql/src/index.ts:32

___

### link

• `Optional` **link**: *undefined* \| *ApolloLink*

Defined in: clients/graphql/src/index.ts:22

___

### name

• `Optional` **name**: *undefined* \| *string*

Defined in: clients/graphql/src/index.ts:33

___

### queryDeduplication

• `Optional` **queryDeduplication**: *undefined* \| *boolean*

Defined in: clients/graphql/src/index.ts:27

___

### resolvers

• `Optional` **resolvers**: *undefined* \| Resolvers \| Resolvers[]

Defined in: clients/graphql/src/index.ts:30

___

### ssrForceFetchDelay

• `Optional` **ssrForceFetchDelay**: *undefined* \| *number*

Defined in: clients/graphql/src/index.ts:24

___

### ssrMode

• `Optional` **ssrMode**: *undefined* \| *boolean*

Defined in: clients/graphql/src/index.ts:25

___

### typeDefs

• `Optional` **typeDefs**: *undefined* \| *string* \| *string*[] \| DocumentNode \| DocumentNode[]

Defined in: clients/graphql/src/index.ts:31

___

### version

• `Optional` **version**: *undefined* \| *string*

Defined in: clients/graphql/src/index.ts:34
