var webpack = require('webpack');
var path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  plugins: [new CompressionPlugin()],
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};