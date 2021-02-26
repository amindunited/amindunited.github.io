const webpack = require('webpack');

const buildWebpackConfig = require('../webpack.config.builder');

const wishlistConfig = () => {
  return [{
    "envVariables": {
      NODE_ENV: 'production',
      CLIENT_ENV: 'development',
      PUBLIC_URL: 'http://localhost',
      PORT: '8080',
      BASE_HREF: './',
      TITLE: 'My App',
      DESCRIPTION: 'This is my App',
      DEST_DIR: 'dist'
    },
    "jsConfig": {
      "preact": true
    },
    "js": [{
      name: 'app',
      src: './src/index.tsx',
    }],
    "html": {
      src: ''
    },
    css: {
      'outputDirectory': 'assets/styles/',
    },
    "output": {
      path: '',
    },
    "server": {
      "contentBase": 'dist',
      "socket": 'socket',
      "socketHost": 'myhost.test',
      "socketPath": '/socket'
    },
    "manifest": {

    }, // Config or false
    "serviceWorker": {
      // needs the navigate fallback (the html container, not the offline html)
      // Will likely be the [URL] + [HTML file]
      navigateFallback: ''
    }, // Config or false
    "assets": {
      'inlineImagesSmallerThan': 0, // size in kb
      'outputDirectory': 'assets', // Do Not Put a '/' at the end
      'copy': [{
        'from': './public',
        'to': './'
      }]
    }
  }];
};

const testConfig = {
  "envVariables": {
    // NODE_ENV: 'production', // Used for webpack mode
    // CLIENT_ENV: 'development', // Used to Load Client Config
    ENV_FILES: [],
    PUBLIC_URL: 'http://localhost', // Host Url
    PORT: '8080', // Port
    BASE_HREF: './', // Injected Into HTML
    TITLE: 'My App', // Page Title
    DESCRIPTION: 'This is my App', // Description
    DEST_DIR: 'dist'
  },
  "js": [{
    name: 'app',
    sources: ['./src/index.tsx'],
    config: {
      "preact": true
    },
  }],
  "html": [{
    src: '', // Where to find the html file (template)
    // Don't need it
    // dest: '', // If empty relative src path and filename will be used
  }],
  "output": {
    path: '',
    publicPath: ''
  },
  "server": {
    "port": '8080',
    // "content": '' // Use DEST_DIR: 'dist'
  },
  "manifest": {}, // Config or false
  "serviceWorker": {
    // needs the navigate fallback (the html container, not the offline html)
    // Will likely be the [URL] + [HTML file]
    navigateFallback: ''
  }, // Config or false
  "assets": {
    'inlineImagesSmallerThan': 0, // size in kb
    'copy': [{
      'from': './public',
      'to': './'
    }]
  },
  additionalRules: [],
  additionalPlugins: []
};


console.log('..........', process.argv);
console.log(process.argv.slice(2, process.argv.length));
process.argv.slice(2, process.argv.length).reduce((obj, arg) => {

  const spl = arg.replace('--', '').split('=');
  const key = spl[0];
  const value = spl[1];

  return {
    ...obj,

  }
}, {

});
// webpack(env => buildWebpackConfig(testConfig, env).then((config) => config));

// webpack((env) => {
//   console.log('config.....', env);
//   return {
//     mode: 'production',
//     entry: './foo.js',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'foo.bundle.js'
//     }
//   };
// });

// buildWebpackConfig(testConfig).then((config) => {
//   console.log(process.env.NODE_ENV);
//   // console.log(config);
//   // webpack(config).run();
// }).catch((e) => console.error(e));

// const compiler = webpack(config); // Setup Webpack
// then...
// async compiler.run(callback);




