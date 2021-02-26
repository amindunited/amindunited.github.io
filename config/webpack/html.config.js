/**
 * Configure plugins and rules for html files
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getHtmlConfig = (options) => {

  const htmlPlugins = options.html.map(( htmlConfig ) => {
    return new HtmlWebpackPlugin({
      template: `${htmlConfig.src}`,
      templateParameters: options.envVariables,
      inject: true
    });
  });

  return {
    plugins: htmlPlugins,
    rules: []
  }

};


module.exports = getHtmlConfig;
