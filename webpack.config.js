const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    // another: './src/another-module.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 替代commonchunkplugin
  // optimization: {  
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         name: "commons",
  //         chunks: "initial",
  //         minChunks: 2
  //       }
  //     }
  //   }
  // }
};

