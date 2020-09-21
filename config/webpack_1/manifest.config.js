const ManifestPlugin = require('webpack-manifest-plugin');

const getMainfestConfig = () => {
  const manifestRules = [];
  const manifestPlugins = [
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: process.env.PUBLIC_URL || '/',
      generate: (seed, files, entrypoints) => {

        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);

        console.log('entrypoints', entrypoints);

        const entrypointFiles = {};

          Object.keys(entrypoints)
            .forEach(key => {
              entrypointFiles[key] = entrypoints[key].filter(
                fileName => !fileName.endsWith('.map')
              );
            });

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
  ];
  return {
    plugins: manifestPlugins,
    rules: manifestRules
  }
}

module.exports = getMainfestConfig;
