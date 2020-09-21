/**
 * Configure plugins and rules for html files
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('./interpolate-html-plugin');

const getHtmlConfig = (webpackEnv) => {
  const htmlPlugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      appMountId: 'app',
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      ...webpackEnv,
      // Add additional replacement key: vals here
    }),
  ];

  return {
    plugins: htmlPlugins,
    rules: null
  }

};


module.exports = getHtmlConfig;
