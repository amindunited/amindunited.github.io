const path = require('path');
const { readFile } = require('fs').promises;

const getPackageJson = async () => {
  const fullPath = path.resolve(process.cwd(), 'package.json');
  const package = await readFile(fullPath).then(p => JSON.parse(p));
  return package;
};

const getEnvironmentConfig = async (options) => {
  const packageJson = await getPackageJson();
  const opts = {
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version,
    NODE_ENV: process.env.NODE_ENV,
    ...options
  };

  for ( key in opts) {
    process.env['key'] = opts[key];
  }
  return opts;
};

module.exports = getEnvironmentConfig;
