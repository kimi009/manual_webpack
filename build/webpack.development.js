const path = require('path')
module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    compress: true, // gzip 提升页面返回的速度
    contentBase: path.resolve(__dirname, '../dist/') //打开的目录
  }
}
