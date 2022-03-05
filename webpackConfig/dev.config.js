const { merge } = require('webpack-merge')
const CommonConfig = require('./common.config')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(CommonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
})
