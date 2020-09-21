const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getBundleAnalyserConfig = (options) => {
  const reportName = `${options.envVariables.DEST_DIR}/reports/${options.envVariables.NODE_ENV}/${options.envVariables.CLIENT_ENV}`;
  const plugins = [
      new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: `${reportName}-report.html`,
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: `${reportName}-stats.json`,
      logLevel: "info"
    })
  ];

  return {
    plugins
  }
};

module.exports = getBundleAnalyserConfig;
