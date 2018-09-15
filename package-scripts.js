const { crossEnv, concurrent, series } = require('nps-utils');

const concurrently = concurrent;

const startClient = 'react-scripts start';
const startAPI =
  'json-server --watch api/db.json --port 3333 --routes api/routes.json';

const scripts = {
  // Starts the app dev server
  default: series(
    'node ./tools/start_local.js',
    concurrently({
      client: { script: startClient },
      // api: { script: startAPI },
    })
  ),

  commit: {
    default: 'git-cz',
    retry: 'git-cz --retry',
  },

  e2e: {
    default: `${crossEnv('BABEL_ENV=e2e')} wdio`,
    local: `${crossEnv('E2E_LOCAL=true')} npm start e2e`,
    ui: {
      local: {
        chrome: `${crossEnv(
          'BROWSER_NAME=chrome'
        )} npm start "e2e ./wdio/wdio.local.conf.js"`,
        firefox: `${crossEnv(
          'BROWSER_NAME=firefox'
        )} npm start "e2e ./wdio/wdio.local.conf.js"`,
        ie: `${crossEnv(
          'BROWSER_NAME="internet explorer"'
        )} npm start "e2e ./wdio/wdio.local.conf.js"`,
      },
      vm: {
        chrome: `${crossEnv(
          'BROWSER_NAME=chrome'
        )} npm start "e2e ./wdio/wdio.vm.conf.js"`,
        firefox: `${crossEnv(
          'BROWSER_NAME=firefox'
        )} npm start "e2e ./wdio/wdio.vm.conf.js"`,
        ie: `${crossEnv(
          'BROWSER_NAME="internet explorer"'
        )} npm start "e2e ./wdio/wdio.vm.conf.js"`,
      },
    },
    remote: {
      default: 'npm start "e2e wdio.browserstack.conf.js"',
      upload: `${crossEnv('E2E_UPLOAD=true')} npm start e2e.remote`,
    },
    approve: {
      default: 'node utils/build/e2e-approve-server.js',
    },
  },

  client: startClient,

  // API server
  api: {
    default: startAPI,
    live: 'json-server api/index.js --port 3333 --routes api/routes.json',
  },
  // Compiles the app to static, production ready output
  build: 'react-scripts build',

  // Run the Jest test suite
  test: {
    default: `${crossEnv('CI=true')} react-scripts test --env=jsdom`,
    coverage: 'react-scripts test --env=jsdom --coverage',
    local: {
      default: 'react-scripts test --env=jsdom',
    },
    ci: `${crossEnv('CI=true')} react-scripts test --env=jsdom --coverage`,
    watch: `react-scripts test --env=jsdom --watch --coverage`,
  },

  // Removes the dependency to react-scripts/create-react-app.
  // Executing this is a one way road, you cannot undo this.
  eject: 'react-scripts eject',

  // Interface for the commitizen commit manager
  // commit: "./node_modules/.bin/git-cz",

  // Generate the changelog
  changelog:
    './node_modules/.bin/conventional-changelog -p angular -i CHANGELOG.md -s -r 0',
};

module.exports = { scripts };
