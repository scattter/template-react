const { merge } = require('webpack-merge')
const CommonConfig = require('./common.config')
const  { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = merge(CommonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'publish',
          globOptions: {
            // 忽略里面的index.html, 否则复制同文件可能报错
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ],
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin()
    ]
  }
})
