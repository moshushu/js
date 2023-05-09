const path = require('path');



module.exports = {
  // mode 
  // development 开发模型，代码未经过压缩
  // production  生产模型，代码经过压缩
  // node 默认为生产模式
  mode: 'development',
  
  // 单个文件输入
  // entry: './src/index.js',
  // 多个文件
  entry: {
    main: './src/index.js',
    search: './src/search.js',
  },

  // 单个文件输出
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js',
  // },
  // 多个文件输出
  output: {
    // __dirname 获取当前绝对路径
    path: path.resolve(__dirname, 'dist'),
    // [name] 会自动填充main和search当作文件名
    filename: '[name].js',
  }
};