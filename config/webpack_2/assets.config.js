const CopyWebpackPlugin = require('copy-webpack-plugin');

// Images smaller than this will be inlined into the code
const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

const getAssetConfig = (options) => {
  const outDir = `${options.assets.outputDirectory}`;
  const assetRules = [
    // Inline Small images intead of loading them over the network
    {
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve('url-loader'),
      options: {
        limit: options.assets.inlineImagesSmallerThan || imageInlineSizeLimit,
        name: `${outDir}/images/[name].[hash:8].[ext]`,
      },
    },
    // File Loader handles all other static assets
    {
      // test: [/public\/.*\.*/],
      loader: require.resolve('file-loader'),
      // Exclude `js` files to keep "css" loader working as it injects
      // its runtime that would otherwise be processed through "file" loader.
      // Also exclude `html` and `json` extensions so they get processed
      // by webpacks internal loaders.
      exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
      options: {
        name: `[name].[hash:8].[ext]`,
        outputPath: (url, resourcePath, context) => {

          if (resourcePath.match(/\.(woff2?|ttf|otf|eot)$/)) {
            return `${outDir}/fonts/${url}`;
          } else if (resourcePath.match(/\.(cvs|xml|json|yml)$/)) {
            return `${outDir}/data/${url}`;
          } else if (resourcePath.match(/\.(bmp|gif|jpe?g|png)$/)) {
            return `${outDir}/images/${url}`;
          } else {
            return `${outDir}/media/${url}`;
          }
        }
      },
    }
  ];

  const assetPlugins = [
    new CopyWebpackPlugin({
      patterns: [
        ...options.assets.copy
      ]
    })
  ];

  return {
    rules: assetRules,
    plugins: assetPlugins
  }
}

module.exports = getAssetConfig;
