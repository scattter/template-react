const { merge } = require('webpack-merge')
const CommonConfig = require('./common.config')
const  { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
  ]
})
