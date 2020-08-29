const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const getServiceWorkerConfig = () => {

  const serviceWorkerRules = [];
  const serviceWorkerPlugins = [
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/, /\.DS_Store$/],
      // importWorkboxFrom: 'cdn',
      navigateFallback: ( process.env.PUBLIC_URL || '/' ) + 'index.html',
      navigateFallbackDenylist: [
        // Exclude URLs starting with /_, as they're likely an API call
        new RegExp('^/_'),
        // Exclude any URLs whose last part seems to be a file extension
        // as they're likely a resource and not a SPA route.
        // URLs containing a "?" character won't be blacklisted as they're likely
        // a route with query params (e.g. auth callbacks).
        new RegExp('/[^/?]+\\.[^/]+$'),
      ],
    }),
  ];

  return {
    plugins: serviceWorkerPlugins,
    rules: serviceWorkerRules
  }
}

module.exports = getServiceWorkerConfig;
