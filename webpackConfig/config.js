const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react template',
      template: path.resolve(__dirname, '../publish/index.html')
    }),
    new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}
