const dotEnv = require('dotenv').config()
const DotenvWebpack = require('dotenv-webpack');

// .env files:
//-------------------------------------------------------------------------------------------------------------------
// .env: Default.
// .env.local: Local overrides. This file is loaded for all environments except test.
// .env.development, .env.test, .env.production: Environment-specific settings.
// .env.development.local, .env.test.local, .env.production.local: Local overrides of environment-specific settings.

const getEnvConfig = async (options) => {

  console.log('getEnvConfig', options);

  // Provide the Env vars throughout the build scripts
  require(`dotenv-defaults`).config({
    path: options.env.path,
    encoding: 'utf8',
    defaults: options.env.defaults
  });

  // Provide the EnvVars to the Bundles
  return {
    plugins: [
      new DotenvWebpack({
        path: options.env.path,
        defaults: options.env.defaults
      })
    ],
    rules: []
  }
};

module.exports = getEnvConfig;
