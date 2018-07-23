const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

const ROOT = resolve(__dirname);
const SRC = resolve(ROOT, 'src');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    bundle: resolve(SRC, 'client', 'index.js'),
  },
  output: {
    path: resolve(ROOT, 'dist', 'client'),
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          safe: true,
          discardComments: {
            removeAll: true
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
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
        test: /\.css$/,
        exclude: resolve(__dirname, 'node_modules', 'react-toolbox'),
        use: [MiniCssExtractPlugin.loader, 'css-loader']
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
    new HtmlWebpackPlugin({
      template: resolve(SRC, 'client', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
};
