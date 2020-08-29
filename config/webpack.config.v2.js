const cloneDeep = require('clone-deep');
const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const devConfig = require('./webpack/webpack.dev.config');

const getEnvironment = require('./webpack/get-environment');
const getOptimisations = require('./webpack/optimisation.config');

const { styleRules, stylePlugins } = require('./webpack/styles.config');
const getAssetsConfig = require('./webpack/assets.config');
const getScriptsConfig = require('./webpack/scripts.config');
const getHtmlConfig = require('./webpack/html.config');
const getMainfestConfig = require('./webpack/manifest.config');
const getServiceWorkerConfig = require('./webpack/service-worker.config');
const getEnvironmentConfig = require('./webpack/environment.config');


// Get the app's env file, and merge it with the process.env


// CRA Load order
/*
  Styles:
  [
    {
    IsDev:
      style-loader
    IsProd:
      MiniExtractCssPlugin.loader
    }
    css-loader
    postcss-loader
  ].filter(Boolean)

  resolve-url-loader,

CRA Rules: [
  Linter:
    test: /\.(js|mjs|jsx|ts|tsx)$/,

  OneOf: [
    Url-loader
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    babel-loader
      test: /\.(js|mjs|jsx|ts|tsx)$/,
    // babel-loader (non-app js)???
    style-loaders
      test: cssRegex
    style-loaders
      test: cssModuleRegex
    style-loader:
      test: sassRegex
    style-loader:
      tests: sassModuleRegex
    file-loader
  ]
]

CRA Plugins: [
  // HTML
  htmlWebPack (inject scripts)
  InlineChunkHtmlPlugin,
  InterpolateHtmlPlugin

  // ??
  ModuleNotFoundPlugin

  // ENV
  new webpack.DefinePlugin(env.stringified),

  // webpack
  isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
  isEnvDevelopment && new CaseSensitivePathsPlugin(),
  isEnvDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules)

  // Styles
  isEnvProduction && new MiniCssExtractPlugin

  // Manifest
  new ManifestPlugin()

  // Ignore Files
  new webpack.IgnorePlugin

  // Service Worker
  isEnvProduction && new WorkboxWebpackPlugin.GenerateSW()

  // TS
  useTypeScript && new ForkTsCheckerWebpackPlugin()
].filter(Boolean)

*/


// Linter

// STYLES  ✅
  // useSourceMap = prod ? prod : dev
  // Preprocessor [resolve-url-loader]
  // Postprocessor (postcss-loader) ✅

// Assets

// Optimization ✅
  //
  // TerserPlugin   ✅
  // OptimizeCSSAssetsPlugin   ✅

// Chunking


// JS / TS   ✅
  // Allow importing SVG with svgr  ✅

  // - babel-loader  ✅
    // cacheDirectory: true,   ✅
    // cacheCompression: false,  ✅
    // compact: isEnvProduction,   ✅


// Plugins
// InterpolateHtmlPlugin * noted above   ✅
// Provide env to app   ✅
// HotModuleReplacement?


// CaseSensitivePathsPlugin - to support case sensitive file paths ✅
    //
// const ManifestPlugin = require('webpack-manifest-plugin'); ✅
// WorkboxWebpackPlugin

/**
 *
 *
let webpackConfig = {
  mode: 'production',
  entry: {
    'app': './src/index.tsx',
  },
  module: {
    // Only Apply the first mathing rule
    oneOf: {
      rules: [
        ...scriptRules,
        ...styleRules,
        ...assetRules
    ]},
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    "alias": {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
     // Must be below test-utils
    },
  },
  plugins: [],
  stats: {},
  output: {},
}
 * EOF OLD
 */

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



  console.log('envvars', envVars);

  const { assetRules, assetPlugins } = getAssetConfig(envVars);
  const { htmlPlugins } = getHtmlConfig(envVars);

  // const isEnvDevelopment = webpackEnv === 'development';
  const isProd = envVars === 'production';

  let webpackConfig = {
    mode: envVars.env,
    bail: isProd,
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    entry: {
      'app': './src/index.tsx',
    },
    module: {
      // Only Apply the first mathing rule
      rules: [{
        oneOf: [
          ...scriptRules,
          ...styleRules,
          ...assetRules
        ]
      }],
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new CleanWebpackPlugin(),

      ...htmlPlugins,

      // ENV
      new webpack.DefinePlugin({'process.env': JSON.stringify(env.NODE_ENV)}),
      new webpack.DefinePlugin(JSON.stringify(envVars)),

      // Styles
      ...stylePlugins,

      ...getMainfestConfig().manifestPlugins,
      ...getServiceWorkerConfig().serviceWorkerPlugins,

      ...assetPlugins,

      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: `reports/${envVars.env}/bundle-report.html`,
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: `reports/${envVars.env}/bundle-stats.json`,
        logLevel: "info"
      })
    ],
    optimization: getOptimisations(envVars.env),
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
      // Coloured output
      colors: true
    },
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/'
    },

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
