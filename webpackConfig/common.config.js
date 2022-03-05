const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name].[chunkhash:4][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react template',
      template: path.resolve(__dirname, '../publish/index.html')
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css'
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
