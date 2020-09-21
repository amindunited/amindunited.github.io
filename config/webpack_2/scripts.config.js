/**
 * Configure plugins and rules for scripts (js/ts...)
 */
const path = require('path');

const getScriptsConfig = (options) => {

  const scriptRules = [{
    test: /\.(ts|tsx)?$/,
    loader: 'ts-loader',
    include: path.resolve(process.cwd()),
    exclude: [ /node_modules/, /utils/ ]
  },
  {
    test: /\.(ts|js)x?$/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        cacheCompression: false,
        compact: true,
      }
    },
    include: path.resolve(process.cwd()),
    exclude: [ /node_modules/, /utils/ ],
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: {
      test: /\.(ts|js)x$/
    },
    use: ['babel-loader', '@svgr/webpack', 'url-loader']
  }];

  return {
    rules: scriptRules,
    plugins: []
  }
};

module.exports = getScriptsConfig;
