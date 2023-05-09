const path = require('path');

// mode 
// development 开发模型，代码未经过压缩
// production  生产模型，代码经过压缩
// node 默认为生产模式

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};