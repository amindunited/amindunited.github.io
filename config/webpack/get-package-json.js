const path = require('path');
const { readFile } = require('fs').promises;

const getPackageJson = async () => {
  const fullPath = path.resolve(process.cwd(), 'package.json');
  const package = await readFile(fullPath).then(p => JSON.parse(p));
  return package;

}

module.exports = getPackageJson;
