const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './client/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
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
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        })
      },
      {
        test: /\.scss$/,
        include: /client/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader', 'sass-loader']
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'manifest' }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: true }
    }),
    new HtmlWebpackPlugin({
      template: 'dist/index.html'
    }),
    new ExtractTextPlugin({ filename: 'styles.[contenthash:8].css' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
