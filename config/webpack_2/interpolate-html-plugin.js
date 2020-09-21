'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const escapeStringRegexp = require('escape-string-regexp')

class InterpolateHtmlPlugin {
  constructor(htmlWebpackPlugin, replacements) {
    this.htmlWebpackPlugin = htmlWebpackPlugin;
    this.replacements = replacements;
  }

  apply(compiler) {

    compiler.hooks.compilation.tap('InterpolateHtmlPlugin', compilation => {

      this.htmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'InterpolateHtmlPlugin',
        (params, callback) => {
          // Run HTML through a series of user-specified string replacements.
          Object.keys(this.replacements).forEach(key => {
            const value = this.replacements[key];
            console.log('should replace ', '%' + escapeStringRegexp(key) + '%', 'with', value);
            params.html = params.html.replace(
              new RegExp('%' + escapeStringRegexp(key) + '%', 'g'),
              value
            )
          });
          callback(null, params);
        }
      )
    })
  }
}

module.exports = InterpolateHtmlPlugin
