# Quasar App (quasar)

A Quasar Framework app

## Quasar Extensions

- [@quasar/typescript](https://github.com/quasarframework/app-extension-typescript)
- [@quasar/testing](https://github.com/quasarframework/quasar-testing)
- [@quasar/dotenv](https://github.com/quasarframework/app-extension-dotenv)

## Vue Plugins
- [Vue-i18n](https://kazupon.github.io/vue-i18n/)
- [vue-class-component](https://github.com/vuejs/vue-class-component)
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
- [@vue/composition-api](https://github.com/vuejs/composition-api)
- [vuex-class](https://github.com/ktsn/vuex-class)

## Test Tools

- [Jest](https://jestjs.io/)
- [@vue/test-utils](https://vue-test-utils.vuejs.org/)
- [majestic](https://github.com/Raathigesh/majestic)
- [wallaby.js](https://wallabyjs.com/)

## Documentation

- [Vue Styleguidist](https://vue-styleguidist.github.io/)

## Commands

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
$ npm run serve
```

### Lint the files and fix
```bash
$ npm run lint --fix
```

### Build the app for production
```bash
$ npm run build
```

### Unit test the application
```bash
$ npm run test:unit
```

### Hygen - Generators

#### Vuex Store
```bash
$ hygen store create --name <name>
```

#### Component
- Class Based
```bash
$ hygen component class --name <name>
```

- Object Based
```bash
$ hygen component object --name <name>
```

#### Page
- Class Based
```bash
$ hygen page class --name <name>
```

- Object Based
```bash
$ hygen page object --name <name>
```

#### layout
- Class Based
```bash
$ hygen layout class --name <name>
```

- Object Based
```bash
$ hygen layout object --name <name>
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
