# webpack
* webpack 是一个静态模块打包器，当webpack处理应用程序时，会将所有这些模块打包成一个或多个文件

## loader， babel在webpack中使用，引用babel-loader实现
* npm install --save-dev babel-loader@8.1.0 @babel/core@7.11.0 @babel/preset-env@7.11.0

* 新建 babel.config.json 文件
```
{
  "presets": ["@babel/preset-env"]
}
```

## plugin，引入HtmlWebpackPlugin插件
* https://v4.webpack.docschina.org/plugins/html-webpack-plugin/#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95