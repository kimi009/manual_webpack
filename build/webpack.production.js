const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      //放置压缩方案
      new OptimizeCSSAssetsPlugin({}),
      new TerserWebpackPlugin({
        parallel: true, //多进程编译
        extractComments: true
      })
    ]
  },
  plugins: [new CleanWebpackPlugin()]
}
