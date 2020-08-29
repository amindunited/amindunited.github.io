const cloneDeep = require('clone-deep');
const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const devConfig = require('./webpack/webpack.dev.config');

const getEnvironment = require('./webpack/get-environment');
// @todo the environment config file / functions are not set up
// @see ./webpack/get-envirionment.js for some of the code
const getEnvironmentConfig = require('./webpack/environment.config');
const getStylesConfig = require('./webpack/styles.config');
const getAssetsConfig = require('./webpack/assets.config');
const getScriptsConfig = require('./webpack/scripts.config');
const getHtmlConfig = require('./webpack/html.config');
const getMainfestConfig = require('./webpack/manifest.config');
const getServiceWorkerConfig = require('./webpack/service-worker.config');
const getBundleAnalyzerConfig = require('./webpack/bundle-analyser.config');
const getOptimisationsConfig = require('./webpack/optimisation.config');

// @todo The webpack options are not used yet
// Options
const webpackOptions = () => ({
  styles: {
    loaders: {
      css: true, // (always)
      cssModules: true, // Regex or Bool ?
      cssStrings: false,
      scss: true,
      scssModules: true,
      scssStrings: false
    },
    plugins: {
      treat: true
    }
  },
  scripts: {

  }
});


// Images smaller than this will be inlined into the code
const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

/**
 * Development Server
 */
const devServer = {
  contentBase: path.resolve(process.cwd(), 'dist'),
  compress: true,
  port: 8080,
  historyApiFallback: true
};

module.exports = (env) => new Promise(async (resolve, reject) => {

  await new Promise((resolve, reject) => {
    console.log('Checking....');
    console.log('getting env', env);
    console.log('package.name', process.env.npm_package_name);
    console.log('package.description', process.env.npm_package_description);
    console.log('package.version', process.env.npm_package_version);
    Object.assign(env, {
      PACKAGE: {
        NAME: process.env.npm_package_name,
        DESCRIPTION: process.env.npm_package_description,
        VERSION: process.env.npm_package_version
      }
    })
    resolve(env);
  });


  // Load's Env File, and Some Package.json info
  const envVars = await getEnvironment(env);

  // @todo setup Configs:
  const envConfig = getEnvironmentConfig(env);
  const htmlConfig = getHtmlConfig(env);
  const stylesConfig = getStylesConfig(env);
  const assetsConfig = getAssetsConfig(env);
  const optimisationConfig = getOptimisationsConfig(env);
  const scriptsConfig = getScriptsConfig(env);
  const manifestConfig = getMainfestConfig(env);
  const serviceWorkerConfig = getServiceWorkerConfig(env);
  const bundleAnalyserConfig = getBundleAnalyzerConfig(env);

  // const isEnvDevelopment = webpackEnv === 'development';
  const isProd = envVars === 'production';

  let webpackConfig = {
    mode: envVars.env,
    bail: isProd,
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    // @todo Entry needs to be easier to acccess, and should handle multiples
    entry: {
      'app': './src/index.tsx',
    },
    module: {
      // Only Apply the first mathing rule
      rules: [{
        oneOf: [
          ...scriptsConfig.rules,
          ...stylesConfig.rules,
          ...assetsConfig.rules
        ]
      }],
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new CleanWebpackPlugin(),

      // ENV
      new webpack.DefinePlugin({'process.env': JSON.stringify(env.NODE_ENV)}),
      new webpack.DefinePlugin(JSON.stringify(envVars)),

      ...htmlConfig.plugins,
      ...stylesConfig.plugins,
      ...manifestConfig.plugins,
      ...serviceWorkerConfig.plugins,
      ...assetsConfig.plugins,
      ...bundleAnalyserConfig.plugins
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
        "react": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      // Must be below test-utils
      },
    },
    stats: {
      colors: true
    },
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/'
    }
  };

  // Add dev mode config
  if (env.NODE_ENV === 'development') {
    webpackConfig = {
      ...webpackConfig,
      ...devConfig
    }
  }

  // console.log('env: ', ev);
  // // Exposes the NODE_ENV to the app
  // webpackConfig.plugins.push(new webpack.DefinePlugin({'process.env': JSON.stringify(env.NODE_ENV)}))

  // await any async operations here
  resolve(webpackConfig);
  // resolve();
});
