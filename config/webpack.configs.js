const createConfig = require('./webpack/create-config');

module.exports = (webpackEnv) => new Promise(async (resolve, reject) => {
  console.log('webpackEnv', webpackEnv);

  // Add webpackEnv Variables to process.env
  for (const key in webpackEnv) {
    process.env[key] = webpackEnv[key];
  }

  const configs = [
    /* {
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

    //
    // contentBase: The directory to serve from
    // compress: Boolean Compression on/off
    // port: 8080 // The Port the the content will be served from
    devServer: {},

    // Additional Assets to Import.
    // - all assets 'import'ed or 'require'd in JS will be handled
    // - This is for Additional assets.
    assets: []
  }
  */
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
    babelConfig: './config/babel/preact.config.js',

    // the path to the typescript config json
    tsconfig: '',

    // Alias
    // string or object.
    // if string: path to aliasConfig.js - @todo Disabled
    // if object: alias config
    alias: {
      // These are the required alias' for preact
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },

    // The output target
    // @todo confirm the need for this,
    // Babel-env will use browser list...soo....
    // this will also be used by babel
    // target: "webworker", // WebWorker
    // target: "node", // Node.js via require
    // target: "async-node", // Node.js via fs and vm
    // target: "node-webkit", // nw.js
    // target: "electron-main", // electron, main process
    // target: "electron-renderer", // electron, renderer process
    // target: '',

    // Although webpack supports other formats
    // here, entry must be an object, as the key will be used for naming
    // entry: {
    //   a: "./app/entry-a",
    //   b: ["./app/entry-b1", "./app/entry-b2"]
    // },
    entry: {
      'preact-ed': './src/index.tsx'
    },

    // Config for the html
    // https://github.com/jantimon/html-webpack-plugin#options
    // only uses
    // filename: the output file
    // template: the source file
    // title: the document title
    // templateParameters: ADDITIONAL key/vars for the tempate
    // ENV vars will also be made available to the template
    html: [{
      filename: 'index.html',
      template: './src/index.html',
      title: 'This is the index page'
    }, {
      filename: 'page-1.html',
      template: './src/page-1.html',
      title: 'This is the first page'
    }, {
      filename: 'page-2.html',
      template: './src/page-2.html',
      title: 'This is the second page'
    }],

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
  }];


  const output = createConfig(configs[0]);

});
