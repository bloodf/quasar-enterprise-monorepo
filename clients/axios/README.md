# Service Bootstrap

## Test Tools

- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [wallaby.js](https://wallabyjs.com/)

## Commands

### Local Development
```bash
$ npm run start
```

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### Build the Project
```bash
$ npm run build
```

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### Test the Project
- Unit Test
```bash
$ npm run test:unit
```

- Unit Test Watch
```bash
$ npm run test:unit:watch
```

- Unit Test Watch All Files
```bash
$ npm run test:unit:watchAll
```

- Test Coverage
```bash
$ npm run test:unit:coverage
```

- Unit Test UI
```bash
$ npm run test:unit:ui
```
Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### Lint your Project
- Lint the src folder
```bash
$ npm run lint:src
```
- Lint the test folder
```bash
$ npm run lint:test
```
