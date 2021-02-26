const path = require('path');

const getBabelConfig = async (options) => {

  try {

    const babelConfigFile = require(path.resolve(process.cwd(), options.babelConfig));
    const babelConfig = await babelConfigFile(options);
    return babelConfig;

  } catch (err) {
    console.error('No Babel config found', err);
    return {};
  }
};

module.exports = getBabelConfig;
