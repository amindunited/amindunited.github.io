const CopyWebpackPlugin = require('copy-webpack-plugin');

// Images smaller than this will be inlined into the code
const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

const getAssetConfig = (webpackEnv) => {

  const assetRules = [
    // {
    // oneOf: [
      // Inline Small images intead of loading them over the network
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: imageInlineSizeLimit,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // Fonts
      // {
      //   test: /\.(woff2?|ttf|otf|eot|svg)$/,
      //   exclude: [/node_modules/, /.*\.DS_Store/],
      //   loader: 'file-loader',
      //   options: {
      //       name: '[name].[ext]',
      //       publicPath: '/',
      //       useRelativePath: true
      //   }
      // },
      // File Loader handles all static assets
      {
        // test: [/public\/.*\.*/],
        loader: require.resolve('file-loader'),
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
            publicPath: '/',
        },
      }
    // ]}
  ];

  const assetPlugins = [
    new CopyWebpackPlugin({
      patterns: [
        // { 'from': './src/assets', 'to': 'assets' },
        { 'from': './public', 'to': './' }
      ]
    })
  ];

  return {
    rules: assetRules,
    plugins: assetPlugins
  }
}

module.exports = getAssetConfig;
