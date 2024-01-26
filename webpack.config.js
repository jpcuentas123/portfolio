const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  // other webpack config options
  plugins: [
    // other plugins
    new BundleAnalyzerPlugin(),
  ],
}
