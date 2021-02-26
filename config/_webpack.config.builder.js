const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const path = require('path');

const getEnvironmentConfig = require('./webpack/environment.config');
const getStylesConfig = require('./webpack/styles.config');
const getAssetsConfig = require('./webpack/assets.config');
const getScriptsConfig = require('./webpack/scripts.config');
const getHtmlConfig = require('./webpack/html.config');
const getMainfestConfig = require('./webpack/manifest.config');
const getServiceWorkerConfig = require('./webpack/service-worker.config');
const getBundleAnalyzerConfig = require('./webpack/bundle-analyser.config');
const getOptimisationsConfig = require('./webpack/optimisation.config');

const configBuilder = async (opts, env) => {

  console.log('config builder running ');

  const _env = await getEnvironmentConfig({ ...opts.envVariables,  ...env});
  const options = {
    ...opts,
    'envVariables': _env
  };

  console.log('options? ', options);

  const isProd = (options.envVariables.NODE_ENV === 'production');

  const { rules: assetRules, plugins: assetPlugins } = getAssetsConfig(options);
  const { rules: htmlRules, plugins: htmlPlugins } = getHtmlConfig(options);
  const { rules: styleRules, plugins: stylePlugins } = getStylesConfig(options);
  const { rules: scriptRules, plugins: scriptPlugins } = getScriptsConfig(options);

  const optimisationConfig = getOptimisationsConfig(options);
  const { /* threre are no rules!! */ plugins: bundleAnalyserPlugins } = getBundleAnalyzerConfig(options);
  const { /* threre are no rules!! */ plugins: manifestPlugins } = getMainfestConfig(options);
  const { /* threre are no rules!! */ plugins: serviceWorkerPlugins } = getServiceWorkerConfig(options);



  const webpackConfig = {
    // Use NODE_ENV to set webpack mode
    mode: options.envVariables.NODE_ENV,
    // Fail on anything, if this is a production build
    bail: isProd,
    // Inline sourcemaps for dev, separate for prod
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    // Build Entry Config from options ['js']
    entry: options.js.reduce((entriesObject, entry) => {
      return {
        ...entriesObject,
        [entry.name]: entry.sources
      }
    }, {}),
    module: {
      // Only Apply the first mathing rule
      rules: [{
        oneOf: [
          ...scriptRules,
          ...styleRules,
          ...assetRules,
          ...htmlRules // There likely aren't any
        ],
        ...( options.additionalRules ? options.additionalRules : [] ),
      }],
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(options.envVariables.NODE_ENV)
      }),
      new webpack.DefinePlugin(
        JSON.stringify(options.envVariables )),
      ...htmlPlugins,
      ...stylePlugins,
      ...manifestPlugins,
      ...serviceWorkerPlugins,
      ...assetPlugins,
      ...( options.additionalPlugins ? options.additionalPlugins : [] ),
      ...bundleAnalyserPlugins
    ],
    optimization: optimisationConfig,
    resolve: {
      extensions: [
        '.tsx',
        '.ts',
        '.js',
        '.jsx'
      ],
      "alias": {
        ...( options.js.config &&  options.js.config === 'preact' ?
        {
          "react": "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
        } : {} )
      },
    },
    stats: {
      colors: true
    },
    devServer: options.server ?
    {
      contentBase: path.resolve(process.cwd(), 'dist'),
      compress: true,
      port: options.envVariables.PORT,
      historyApiFallback: true
    } : false,
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/'
    }
  }

  return webpackConfig;

};

module.exports = configBuilder;
