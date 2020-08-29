/**
 * Webpack config rules, and plugins for building styles (scss)
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');

const TreatPlugin = require('treat/webpack-plugin');

const sassModuleRegex = /\.module\.(scss|sass)$/;
const sassStringRegex = /\.raw\.(scss|sass)$/i;
const sassRegex = /\.(scss|sass)$/;
const cssModuleRegex = /\.module\.css$/;
const cssStringRegex = /\.raw\.(css)$/i;
const cssRegex = /\.css$/;


/**
 * Use functions to create some reusable configs
 */
const sassConfig = () => {
  return {
    loader: 'sass-loader',
    options: {
      implementation: require("sass")
    }
  }
}

const postCssConfig = () => {
  return {
    loader: 'postcss-loader',
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebook/create-react-app/issues/2677
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
        // Adds PostCSS Normalize as the reset css with default options,
        // so that it honors browserslist config in package.json
        // which in turn let's users customize the target behavior as per their needs.
        postcssNormalize(),
      ],
      sourceMap: true,
    }
  }
}

const styleRules = [{
  oneOf: [
    {
      test: sassModuleRegex,
      exclude: [sassRegex, sassStringRegex],
      use: [
        // { loader: 'style-loader' },
        { loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true
          }
        },
        sassConfig(),
        postCssConfig()
      ]
    },
    {
      test: sassStringRegex,
      exclude: [sassModuleRegex, sassRegex],
      use: [
        'raw-loader',
        'sass-loader'
      ]
    },
    {
      test: sassRegex,
      exclude: [sassModuleRegex, sassStringRegex],
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader' },
        sassConfig(),
        postCssConfig()
      ]
    },
    {
      test: cssModuleRegex,
      exclude: [cssStringRegex, sassStringRegex],
      use: [
        // { loader: 'style-loader' },
        { loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true
          }
        },
        postCssConfig()
      ]
    },
    {
      test: sassStringRegex,
      exclude: [cssModuleRegex],
      use: [
        'raw-loader',
        'sass-loader'
      ]
    },
    {
      test: cssRegex,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        postCssConfig()
      ]
    }
  ]}
];


const stylePlugins = [
  new TreatPlugin({
    outputLoaders: [MiniCssExtractPlugin.loader]
  }),
  new MiniCssExtractPlugin({
    filename: `[name].[contenthash].css`
  }),
]

const getStylesConfig = (webpackEnv) => {
  return {
    plugins: stylePlugins,
    rules: styleRules
  }
};

module.exports = getStylesConfig;
