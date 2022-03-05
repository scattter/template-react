const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:6].js'
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
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
