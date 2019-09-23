//webpack 默认的是基于nodejs commonjs规范的
// const path = require('path')
// module.exports = {
//   entry: path.resolve(__dirname, './src/index.js'), //写路径都写绝对路径
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// }
// webpack 不仅可以导出对象还可以导出函数

// module.exports = (env) => {
//   console.log(env)
//   //函数要求返回一个配置
// }
