const path = require('path')
const webpackMerge = require('webpack-merge')
const dev = require('./webpack.development')
const prod = require('./webpack.production')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
  console.log(8, env)
  //通过传入的参数来确定是什么环境
  const isDev = env.development
  const base = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist/')
    },
    module: {
      //转化什么文件用什么loader
      // loader 三种写法 [] {} ''
      //打包css  还需要处理样式的前缀
      rules: [
        {
          //babel-loader  会调用babel-core
          test: /\.(js|tsx?)$/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                //给loade传递参数
                importLoaders: 2 //使用后面的几个loader ,现在是2个
              }
            },
            'postcss-loader',
            'less-loader'
          ]
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        //图标转换
        {
          test: /\.(woff|ttf|eot|svg)$/,
          use: 'file-loader'
        },
        //图片转换
        {
          test: /\.(jpe?g|png|gif)$/,
          // loader: 'file-loader' //默认是拷贝的作用
          use: {
            loader: 'url-loader',
            options: {
              name: 'image/[contentHash].[ext]',
              limit: 30 * 1024
            }
          }
        }
      ]
    },
    plugins: [
      !isDev &&
        new MiniCssExtractPlugin({
          filename: 'css/main.css'
        }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: 'index.html',
        minify: !isDev && {
          removeAttributeQuotes: true, //去掉双引号
          collapseWhitespace: true //折叠一行
        }
      })
    ].filter(Boolean) //过滤掉false 也就是第一个是false的情况
  }
  if (isDev) {
    return webpackMerge(base, dev)
  } else {
    return webpackMerge(base, prod)
  }
}
