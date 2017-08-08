const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

const config = {
  devtool: 'source-map',

  entry: APP_DIR + '/app',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true,
  },

  resolve: {
    modules: [
      APP_DIR,
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.tmpl.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
