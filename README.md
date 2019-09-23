# webpack 学习笔记
### 如果是开发环境要使用webpack-dev-server 它是在内存中打包的，不会产生实体

### 本地开启一个服务可以用webpack-dev-server：
`

  1. 开启服务的时候报错了，找不到build/webpack.base.js,可能是安装包的时候出现了问题，这时候删除node_modules目录重新安装所有的包，启动正常了

  2. webpack-dev-server 默认是把打包后的文件加载到内存中的

`
##  loader 执行顺序是从下到上， 从右到左
### 解析Css
`

    css-loader 会解析css 语法  style-loader 会解析css 变成style放到页面中
    css预处理器：
    .scss  node-sass sass-loader
    .less  less less-loader
    .stylus  stylus stylus-loader

`

### 解析图片
`
 
 file-loader
 url-loader 

`

### 解析js
`
  es6->es5 
  babel 转化功能 vue-cli  基于babel6实现
  现在是babel7
  默认会调用@babel/core会转化代码  
  @babel/core @babel/preset-env  babel-loader

`