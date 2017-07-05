const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client?reload=true',
      './client/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './client',
    hot: true
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
        use: ExtractTextPlugin.extract({
          use: ['css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        include: /client/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.scss$/,
        exclude: /client/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|svg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({ filename: 'styles.[contenthash:8].css' }),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
