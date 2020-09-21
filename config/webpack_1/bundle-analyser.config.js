const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getBundleAnalyserConfig = (webpackEnv) => {
  const plugins = [
      new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: `reports/${webpackEnv.NODE_ENV}/bundle-report.html`,
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: `reports/${webpackEnv.NODE_ENV}/bundle-stats.json`,
      logLevel: "info"
    })
  ];

  return {
    plugins
  }
};

module.exports = getBundleAnalyserConfig;
