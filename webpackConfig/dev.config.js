const { merge } = require('webpack-merge')
const CommonConfig = require('./common.config')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(CommonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
})
