const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT = resolve(__dirname);
const SRC = resolve(ROOT, 'src');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      resolve(SRC, 'client', 'index.js'),
    ]
  },
  output: {
    path: resolve(ROOT, 'dist', 'client'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: resolve(__dirname, 'node_modules', 'react-toolbox'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.pcss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: resolve(__dirname, 'node_modules', 'react-toolbox'),
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|svg|png|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: resolve(SRC, 'client', 'index.html'),
    })
  ]
};
