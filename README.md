# Quasar Enterprise Monorepo Boilerplate

[![vuejs](https://badgen.net/badge/made%20with/vue/green?icon=vue)](https://vuejs.org/)
[![Quasar](https://img.shields.io/npm/v/quasar.svg?label=quasar)](https://github.com/quasarframework/quasar)
[![@quasar/app](https://img.shields.io/npm/v/%40quasar/app.svg?label=@quasar/app)](https://github.com/quasarframework/quasar/tree/dev/app)
[![@quasar/cli](https://img.shields.io/npm/v/%40quasar/cli.svg?label=@quasar/cli)](https://github.com/quasarframework/quasar/tree/dev/cli)
[![@quasar/extras](https://img.shields.io/npm/v/%40quasar/extras.svg?label=@quasar/extras)](https://github.com/quasarframework/quasar/tree/dev/extras)
[![badgen](https://badgen.net/badge/built%20with/love/red)](https://badgen.net)
[![badgen](https://badgen.net/badge/built%20with/javascript/yellow)](https://badgen.net)
[![badgen](https://badgen.net/badge/built%20with/typescript/blue)](https://badgen.net)
[![badgen](https://badgen.net/badge/uses/badges/cyan)](https://badgen.net)

------

## Monorepo Structure
------

Base Monorepo Structure
```
├── applications/                               # Full Web Applications
│   └── webapp                                  # Quasar Web Application
├── clients/                                    # Web Communication Clients
│   └── axios                                   # Axios HTTP Client Wrapper
│   └── graphql                                 # GraphQL Client Wrapper
├── packages-boilerplate-copy-and-paste/        # Boilerplate for the monorepo packages, Applications, services, adapters, components
│   └── quasar-app-extension-ui-component       # New Quasar UI Extension or App Extension
│   └── quasar-webapp                           # New Web Application With TS
│   └── service-plugin                          # New Service/Adapter/Plugin Example
│   └── vue-ts-component-plugin                 # New Vue Web Component With TS
│   └── vue-ts-component-quasar                 # New Vue Web Component With TS and Quasar
├── packages/                                   # Common Packages used on the monorepo
│   └── eslint                                  # Base eslint rules
│   └── eslint-import                           # Import-plugin eslint rules
│   └── eslint-typescript                       # Typescript eslint rules
│   └── eslint-vue                              # Vue eslint rules
│   └── eslint-vue-i18n                         # Vue-i18n eslint rulesents
│   └── quasar-testing                          # Quasar Testing Mocks and Factories
├── utils/                                      # Utils and tools for packages and applications
│   └── text-utils                              # Text Utils for Applications
│   └── vue-router-utils                        # Vue-Router-Utils for Vue-Router Vue Plugin
│   └── vuelidate-utils                         # Vuelidate Utils for Vuelidate Vue plugin
│   └── vuex-utils                              # Vuex Utils for Vuex Vue plugin
├── vuex-common-stores/                         # Common Vuex Stores used on applications and components
│   └── base-store                              # TS Decorators for Vue
```

## Required

Global lerna installation
```bash
$ npm install -g lerna
```

Global yarn installation
```bash
$ npm install -g yarn
```

## Usage

### Root Commands

Use this commands on the root of the repository

```bash
# Install dependencies
$ yarn
```

```bash
# Link local packages together and install remaining package dependencies.
$ yarn bootstrap
```

```bash
# Runs commands in a scope
# $ yarn exec:in [scope] [command]
# Example
$ yarn exec:in @quasar-enterprise-monorepo/webapp serve
```

```bash
# Runs [majestic](https://github.com/Raathigesh/majestic) GUI
$ yarn test:unit:ui
```

```bash
# Runs Lint in every package.
$ yarn lint
```

```bash
# Runs Lint in every package and applies possibles fixes.
$ yarn lint:fix
```

```bash
# Check for updates on your packages.
$ yarn update:check
```

```bash
# WARNING THIS WILL UPDATE TO LATEST! EVEN MAJOR RELEASE!
# Check for updates on your packages and install the latest.
$ yarn update:update
```

```bash
# Commit your changes using [commitizen](https://github.com/commitizen/cz-cli).
$ git-cz
```


### Releasing

```bash
# Bump version of packages changed since the last release and generate changelog.
$ yarn new-version
```

### Lerna

```bash
# Clean the node_modules on the packages.
$ lerna clean
```

```bash
# Show which packages have changed.
$ lerna changed
```

```bash
# Show specifically what files have cause the packages to change.
$ lerna diff
```

```bash
# A CLI tool to help with lerna tasks
$ lerna-wizard
```

### Local Commands

Use this commands on the folder of the packaged you are developing

```bash
# Start development
$ yarn serve
```

```bash
# Build the package
$ yarn build
```

```bash
# Run the unit tests
$ yarn test:unit
```

```bash
# Run the e2e tests
$ yarn test:e2e
```

```bash
# Open the Cypress
$ yarn test:e2e:CI
```

```bash
# Runs [majestic](https://github.com/Raathigesh/majestic) GUI
$ yarn test:unit:ui
```

```bash
# Runs Lint in every package.
$ yarn lint
```

```bash
# Runs Lint in every package and applies possibles fixes.
$ yarn lint:fix
```

## Commit message format
```
feat(elements-table): add hat wobble
^--^ ^------------^   ^------------^
|    |                |
|    |                +-> Summary in present tense.
|    +------------------> Scope: folder name of package in kebab-case (e.g. elements-table)
|
+-----------------------> Type: chore, docs, feat, fix, refactor, style, or test.
```

### Commit without validation
Use this command only when there are an error on Husky or Pre-Commits.

```bash
$ git commit -m "..." --no-verify
```

### Linking

When linking inside of the Monorepo, everything works as expected. If you are trying to consume packages from this Monorepo _in a different application_ locally, using `npm link` or `yarn link` [does not work as expected](https://github.com/yarnpkg/yarn/issues/5538). However, we have a workaround for the time being.

1. Run `yarn build`
2. Change the `package.json` of the consumer from `$YOUR_PACKAGE_NAME` (which lives inside the monorepo) to `file:./../monorepo/packages/$YOUR_PACKAGE_NAME`
3. Run `rm -rf node_modules && yarn` in the consumer
4. 🎉
