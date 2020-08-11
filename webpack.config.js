const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('./src/index.js'),
      //   use: 'imports-loader?this=>window'
      // },
      // {
      //   test: require.resolve('./src/globals.js'),
      //   use: 'exports-loader?file,parse=helpers.parse'
      // }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash',
      // 获取单个方法用数组路径
      join: ['lodash', 'join']
    })
  ]
};

