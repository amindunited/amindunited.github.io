const path = require('path');
const { readFile } = require('fs').promises;
const getPackageJson = require('./get-package-json');

const envPath = './src/env/';

const getEnvironment = async (webpackEnv) => {

  const env = webpackEnv;
  const packageJson = await getPackageJson();

  const defaults = {
    PUBLIC_URL: packageJson.homepage,
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version
  }

  const relPath = path.resolve(process.cwd(), `src/env/${env.NODE_ENV}.json`);
  const envFile = await readFile(relPath)
    .then(raw => JSON.parse(raw))
    .catch(() => {
      console.log(`error loading ${env.NODE_ENV} environment file from ${relPath}`);
      return {};
    });

  return Object.assign(defaults, { env: env.NODE_ENV }, envFile);
};

module.exports = getEnvironment;
