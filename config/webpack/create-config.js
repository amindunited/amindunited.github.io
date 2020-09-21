const path = require('path');

const getEnvConfig = require('./env.config');
const getBabelConfig = require('./babel.config');
const getScriptsConfig = require('./scripts.config');
const getStylesConfig = require('./styles.config');
const getHtmlConfig = require('./html.config');

const createConfig = async (options) => {

  console.log('create config called with', options);

  /*

  // Load Env Config
  getEnvConfig(options);

  console.log(process.env);

  // Load Babel Config
  getBabelConfig(options);

  // ts config will be passed to ts-loader
    // Scripts Config
  getScriptsConfig(options);

  getStylesConfig(options);

  // Load Alias Config


  // Set target Config - @todo maybe not

  // Load Entry Config
  const entry = options.entry;

  // Load HTML Config
  getHtmlConfig(options);

  // Load Output Config
  const output = {
    path: path.resolve(process.cwd(), options.output),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  };

  // Load Dev Server  Config

  // Load Assets Config
*/

};

module.exports = createConfig;

/*
{
  // The .env file path config
  // path: the path to the env file for this build
  // defaults: the path to the default env file
  env: {
    path: './.env',
    default: './.env.default'
  },

  // babel
  // the path to the babel config js
  // the output will be injected into the babel-loader,
  // It will not be loaded by babel directly.
  babelConfig: '',

  // the path to the typescript config json
  tsconfig: '',

  // Alias
  // string or object.
  // if string: path to aliasConfig.js
  // if object: alias config
  alias: {},

  // The output target
  // this will also be used by babel
  // target: "webworker", // WebWorker
  // target: "node", // Node.js via require
  // target: "async-node", // Node.js via fs and vm
  // target: "node-webkit", // nw.js
  // target: "electron-main", // electron, main process
  // target: "electron-renderer", // electron, renderer process
  target: '',

  // Although webpack supports other formats
  // here, entry must be an object, as the key will be used for naming
  // entry: {
  //   a: "./app/entry-a",
  //   b: ["./app/entry-b1", "./app/entry-b2"]
  // },
  entry: {},

  // Config for the html
  // https://github.com/jantimon/html-webpack-plugin#options
  // only uses
  // filename: the output file
  // template: the source file
  // title: the document title
  // templateParameters: ADDITIONAL key/vars for the tempate
  // ENV vars will also be made available to the template
  html: [],

  // Output
  // path: the output directory
  // publicPath: The Url to load resources from
  output: {},

  // Dev Server
  // contentBase: The directory to serve from
  // compress: Boolean Compression on/off
  // port: 8080 // The Port the the content will be served from
  devServer: {},

  // Additional Assets to Import.
  // - all assets 'import'ed or 'require'd in JS will be handled
  // - This is for Additional assets.
  assets: []
  */
